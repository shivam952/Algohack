'reach 0.1';

const Finalist = Object({
  "name" : Bytes(100),
  "addr" : Address
});

export const main = Reach.App(() => {

  // Judge Participant who will decide the finalist and winners

  const Judge = Participant('Judge', {
    ready : Fun([], Null),
    getFinalists : Fun([],Tuple(Finalist, Finalist, Finalist)), // Will get finalists
    deadline : UInt,
    prizes : Fun([],Tuple(Token, UInt, Token, UInt, Token, UInt)), // Prizes tokens
    checkVotes : Fun([UInt, UInt, UInt],Tuple(Address, Address, Address)), // Check votes for each finalist
  });

  // Votes will vote to Finalists
  const Voters = API('Voters', {
    votehackathon : Fun([Address,UInt,UInt,UInt], Bool), // Vote
    timeUp : Fun([], Bool) // Timeup
  });

  //View to get finalists
  /* const hackathons = View('hackathons', {  
    first : Finalist, second : Finalist, third : Finalist,
  }); */
  init();
  Judge.interact.ready();

  // Judge's local step
  Judge.only(() => {
    // Get finalists
    const [firstFinalist, secondFinalist, thirdFinalist] = declassify(interact.getFinalists()); 
    
    const deadline = declassify(interact.deadline);

    // Prizes for winner places
    const [firstPrize, amtFirst, secondPrize, amtSecond, thirdPrize, amtThird] = declassify(interact.prizes());
    
    assume(firstPrize != secondPrize);
    assume(secondPrize != thirdPrize);
    assume(firstPrize != thirdPrize);
    
    check(amtFirst != 0);
    check(amtSecond != 0);
    check(amtThird != 0);
    // check(amttotal > amtFirst);
    // check(amttotal > amtSecond);
    // check(amttotal > amtThird)
  });

  // Judge publishes
  Judge.publish(firstFinalist, secondFinalist, 
    thirdFinalist, deadline, firstPrize, amtFirst, secondPrize
    , amtSecond, thirdPrize, amtThird);

  // Set finalists
  // hackathons.first.set(firstFinalist);
  // hackathons.second.set(secondFinalist);
  // hackathons.third.set(thirdFinalist);
  commit();

  // Judges pay prizes to contract
  Judge.pay([[amtFirst, firstPrize], [amtSecond, secondPrize], [amtThird, thirdPrize]]);

  

  const end = lastConsensusTime() + deadline;
  const totalVotes = 5;
  const voterSet = new Set();
  
  // Count votes for finalists
  const [votes, total, first, second, third] = parallelReduce([ 0, totalVotes, 0, 0,0 ])
    .invariant(voterSet.Map.size() == votes)
    .while(votes < total)
    .api_(Voters.votehackathon, (who, vote1, vote2, vote3) => {
      check( !voterSet.member(who), "You have already voted");

      return [[],(k) => {
        k(true);
        voterSet.insert(who);
      
        return [votes+1, total, first+vote1, second+vote2, third+vote3];
      }];

    })
     .timeout(absoluteTime(end), () => {
        const [[], k] = call(Voters.timeUp);
        k(true);
        return [votes, total, first, second, third];
     });
  
  commit();

  // Check votes of finalists
  Judge.only(() => {
    const [firstAddr, secondAddress, thirdAddress] = declassify(interact.checkVotes(first, second, third));
    
    assume(firstAddr != secondAddress);
    assume(secondAddress != thirdAddress);
    assume(firstAddr != thirdAddress);
  });

  Judge.publish(firstAddr, secondAddress, thirdAddress);

  // The second one to publish always attaches

  // Transfer prizes to the winners
  transfer(balance(firstPrize), firstPrize).to(firstAddr);
  transfer(balance(secondPrize), secondPrize).to(secondAddress);
  transfer(balance(thirdPrize), thirdPrize).to(thirdAddress);

  transfer(balance(firstPrize), firstPrize).to(Judge);
  transfer(balance(secondPrize), secondPrize).to(Judge);
  transfer(balance(thirdPrize), thirdPrize).to(Judge);
  transfer(balance()).to(Judge);

  
  commit();
  exit();
});
