import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const deadline = 100;

const [judgeAcc, firstAcc, secondAcc, thirdAcc] =
  await stdlib.newTestAccounts(4, startingBalance);


console.log('Welcome to Algorand Hack 2022');

const firstFinalist = {
  'name' : "Team: WomenHub",
  'addr' : firstAcc.getAddress()
} ;

const secondFinalist = {
  'name' : "Team: Explorers",
  'addr' : secondAcc.getAddress()
} ;

const thirdFinalist = {
  'name' : "Team: Super Hackers",
  'addr' : thirdAcc.getAddress()
} ;


console.log('Judge is deploying contract ...');
const ctcJudge = judgeAcc.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const winner = await stdlib.launchToken(judgeAcc, 'missindia', "MSINDIA")
      const runner1 = await stdlib.launchToken(judgeAcc, 'runner1', "RUNNER1")
      const runner2 = await stdlib.launchToken(judgeAcc, 'runner2', "RUNNER2")
      await winner.mint(judgeAcc, startingBalance.mul(6));
      await runner1.mint(judgeAcc, startingBalance.mul(6));
      await runner2.mint(judgeAcc, startingBalance.mul(6));

      // First finalist Opt-in the token
      await firstAcc.tokenAccept(winner.id);
      await firstAcc.tokenAccept(runner1.id);
      await firstAcc.tokenAccept(runner2.id);
      
      // Second finalist Opt-in the tokens
      await secondAcc.tokenAccept(winner.id);
      await secondAcc.tokenAccept(runner1.id);
      await secondAcc.tokenAccept(runner2.id);

      // Third finalist Opt-in the tokens
      await thirdAcc.tokenAccept(winner.id);
      await thirdAcc.tokenAccept(runner1.id);
      await thirdAcc.tokenAccept(runner2.id);

      // Prize Amount
      const amtFirst = stdlib.parseCurrency(3);
      const amtSecond = stdlib.parseCurrency(2);
      const amtThird = stdlib.parseCurrency(1)

console.log('Starting backends...');



  const [voter1, voter2, voter3, voter4, voter5] =  await stdlib.newTestAccounts(5, startingBalance);
  

  const voter = async (who, index, vote1, vote2, vote3) => {
    const ctcVote = who.contract(backend, ctcJudge.getInfo());
    console.log(`Voter ${index} Checked profile of ${firstFinalist.name}`)
    console.log(`Voter ${index} Checked profile of ${secondFinalist.name}`)
    console.log(`Voter ${index} Checked profile of ${thirdFinalist.name}`)
    console.log('------------------');
    ctcVote.apis.Voters.votehackathon(who,vote1, vote2, vote3);
  };


  backend.Judge(ctcJudge, {
    ready : () => {
      console.log("Voting opened");
    },

     getFinalists : () => {
        return [Object(firstFinalist), Object(secondFinalist), Object(thirdFinalist)];
    },

    prizes : async () => {

      return [winner.id, 3, runner1.id, 2, runner2.id, 1 ];
    },
    
    deadline : deadline,

    checkVotes : async (firstVotes, secondVotes, thirdVotes) => {
      
        var votes = [JSON.parse(firstVotes), JSON.parse(secondVotes), JSON.parse(thirdVotes)];
        
        const winner =  Math.max(...votes);
        const winnerkey =  votes.indexOf(Math.max(...votes));
        votes[winnerkey] = -1;

        let runner1 = Math.max(...votes);
        let runner1key = votes.indexOf(runner1);
        votes[runner1key] = -2;

        let runner2 = Math.max(...votes);
        let runner2key = votes.indexOf(runner2);
        votes[runner2key] = -3;

        const getFinalistAddress = (key) => {
          let address = null;
           switch (key) {
             case 0:
               address  = firstFinalist.addr
               break;
       
             case 1:
               address  = secondFinalist.addr
               break;  
           
             case 2:
               address  = thirdFinalist.addr
               break;
           }
           return address;
       }

       
        return [getFinalistAddress(winnerkey), getFinalistAddress(runner1key), getFinalistAddress(runner2key)]
    }
  });

  
  console.log(`Before voting ${firstFinalist.name} has token balance  ${await firstAcc.balancesOf([winner.id, runner1.id, runner2.id])}`);
  console.log(`Before voting ${secondFinalist.name} has token balance ${await secondAcc.balancesOf([winner.id, runner1.id, runner2.id])}`);
  console.log(`Before voting ${thirdFinalist.name} has token balance ${await thirdAcc.balancesOf([winner.id, runner1.id, runner2.id])}`);
  console.log('------------------');
  await voter(voter1,1, 1,0,0);
  await voter(voter2,2, 1,0,0);
  await voter(voter3,3, 1,0,0);
  await voter(voter4,4, 0,1,0);
  await voter(voter5,5, 0,0,1);
  console.log('Voting is closed now');
  console.log('------------------');

  console.log('Counting the Votes');

  console.log('------------------');


  console.log(`After voting ${firstFinalist.name} has token balance  ${await firstAcc.balancesOf([winner.id, runner1.id, runner2.id])}`);
  console.log(`After voting ${secondFinalist.name} has token balance ${await secondAcc.balancesOf([winner.id, runner1.id, runner2.id])}`);
  console.log(`After voting ${thirdFinalist.name} has token balance ${await thirdAcc.balancesOf([winner.id, runner1.id, runner2.id])}`);
