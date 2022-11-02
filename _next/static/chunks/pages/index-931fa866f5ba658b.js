(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return r(3785)
        }
        ])
    },
    3785: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return m
            }
        });
        var n = r(5893)
          , s = r(1664)
          , a = r.n(s);
        function i() {
            return (0,
            n.jsx)("section", {
                className: "mb-40",
                children: (0,
                n.jsx)("div", {
                    className: "px-6 py-13 md:px-12 text-gray-800 text-center lg:text-left",
                    children: (0,
                    n.jsx)("div", {
                        className: "container mx-auto xl:px-32",
                        children: (0,
                        n.jsxs)("div", {
                            className: "grid lg:grid-cols-2 gap-12 items-center",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "mt-12 lg:mt-0",
                                children: [(0,
                                n.jsxs)("h1", {
                                    className: "text-4xl md:text-6xl xl:text-5xl font-bold tracking-tight mb-5",
                                    children: ["ALGOHACK ", (0,
                                    n.jsx)("br", {}), (0,
                                    n.jsx)("span", {
                                        className: "text-green-700",
                                        children: "DApp"
                                    })]
                                }), (0,
                                n.jsx)("p", {
                                    className: "mb-5",
                                    children: "This is a decentralized application that helps users to vote for hackathon projects."
                                }), (0,
                                n.jsx)("p", {
                                    className: "mb-10",
                                    children: "A user can vote maximum of 3 times and after the voting time closes the winners for the Hack will be declared."
                                }), (0,
                                n.jsx)("button", {
                                    className: "inline-block px-7 py-3 mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out mb-2",
                                    "data-mdb-ripple": "true",
                                    "data-mdb-ripple-color": "light",
                                    role: "button",
                                    children: (0,
                                    n.jsx)(a(), {
                                        href: "https://perawallet.app/",
                                        children: (0,
                                        n.jsx)("a", {
                                            target: "_blank",
                                            children: "Create wallet"
                                        })
                                    })
                                }), (0,
                                n.jsx)("button", {
                                    className: "inline-block px-7 py-3 bg-transparent text-green-600 font-medium text-sm leading-snug uppercase rounded hover:text-green-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out border border-green-600",
                                    "data-mdb-ripple": "true",
                                    "data-mdb-ripple-color": "light",
                                    role: "button",
                                    children: (0,
                                    n.jsx)(a(), {
                                        href: "/about",
                                        children: "Learn More"
                                    })
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "mb-12 lg:mb-0",
                                children: (0,
                                n.jsx)("img", {
                                    src: "/assets/podium.svg",
                                    className: "w-full rounded-lg",
                                    alt: ""
                                })
                            })]
                        })
                    })
                })
            })
        }
        var o = r(2787)
          , l = r(978)
          , c = r(1163)
          , u = r(8148)
          , d = r(7294)
          , g = u.pR.farmer
          , h = u.pR.distributor;
        function m() {
            var e = (0,
            c.useRouter)()
              , t = (0,
            l.$)()
              , r = t.role
              , s = t.walletAddress;
            return (0,
            d.useEffect)(function() {
                r === g && e.replace("/farmer"),
                r === h && e.replace("/distributor"),
                s && !r && e.replace("/onboarding")
            }, [r, e, s]),
            (0,
            n.jsx)(o.Z, {
                children: (0,
                n.jsx)(i, {})
            })
        }
    }
}, function(e) {
    e.O(0, [296, 635, 714, 956, 395, 774, 888, 179], function() {
        return e(e.s = 5557)
    }),
    _N_E = e.O()
}
]);