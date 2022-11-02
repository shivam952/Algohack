(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[395], {
    2787: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return j
            }
        });
        var a = n(5893)
          , i = n(5675)
          , r = n.n(i)
          , s = n(1664)
          , l = n.n(s)
          , d = n(2339)
          , c = n(7294)
          , o = n(1163)
          , m = n(978)
          , h = new d.DQ;
        function u() {
            var e = function() {
                h.connect().then(function(e) {
                    h.connector.on("disconnect", t),
                    r(e[0]),
                    d.walletAddress = e[0],
                    localStorage.setItem("user", JSON.stringify(d)),
                    l.push("/onboarding")
                }).catch(function(e) {
                    var t;
                    (null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.type) !== "CONNECT_MODAL_CLOSED" && console.log(e)
                })
            }
              , t = function() {
                h.disconnect(),
                r(null),
                localStorage.clear(),
                l.push("/")
            }
              , n = (0,
            c.useState)(null)
              , i = n[0]
              , r = n[1]
              , s = !!i
              , l = (0,
            o.useRouter)()
              , d = (0,
            m.$)();
            return (0,
            c.useEffect)(function() {
                h.reconnectSession().then(function(e) {
                    h.connector.on("disconnect", t),
                    e.length && r(e[0])
                }).catch(function(e) {
                    return console.log(e)
                })
            }, [t]),
            (0,
            a.jsx)("button", {
                className: "rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow",
                onClick: s ? t : e,
                children: s ? "Disconnect" : "Connect to Wallet"
            })
        }
        var f = n(8148);
        function g() {
            var e = (0,
            c.useState)(null)
              , t = e[0]
              , n = e[1]
              , i = (0,
            c.useState)(!1)
              , s = i[0]
              , d = i[1]
              , o = f.pR.farmer
              , h = f.pR.distributor;
            return (0,
            c.useEffect)(function() {
                n((0,
                m.$)())
            }, []),
            (0,
            a.jsx)("header", {
                children: (0,
                a.jsx)("div", {
                    className: "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex h-16 items-center justify-between",
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex-1 md:flex md:items-center md:gap-12",
                            children: (0,
                            a.jsx)(l(), {
                                className: "block text-green-600",
                                href: "/",
                                children: (0,
                                a.jsx)("a", {
                                    children: (0,
                                    a.jsx)(r(), {
                                        src: "favicon3.ico",
                                        alt: "Icon",
                                        width: "80%",
                                        height: "80%"
                                    })
                                })
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "md:flex md:items-center md:gap-12",
                            children: [(0,
                            a.jsx)("nav", {
                                className: "hidden md:block",
                                "aria-labelledby": "header-navigation",
                                children: (0,
                                a.jsxs)("ul", {
                                    className: "flex items-center gap-6 text-sm text-gray-600",
                                    children: [(0,
                                    a.jsx)("li", {
                                        children: (0,
                                        a.jsx)(l(), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }), (null == t ? void 0 : t.role) === o && (0,
                                    a.jsxs)(a.Fragment, {
                                        children: [(0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)(l(), {
                                                href: "/farmer/register/farm",
                                                children: "Register Farm"
                                            })
                                        }), (null == t ? void 0 : t.farms) && (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)(l(), {
                                                href: "/farmer/register/crops",
                                                children: "Log Crops"
                                            })
                                        })]
                                    }), (null == t ? void 0 : t.role) === h && (0,
                                    a.jsx)("li", {
                                        className: "font-sans block lg:ml-6 align-middle text-gray-700",
                                        children: (0,
                                        a.jsx)("a", {
                                            role: "button",
                                            className: "relative flex mt-2 cursor-not-allowed",
                                            children: (0,
                                            a.jsx)("svg", {
                                                className: "flex-1 w-8 h-8 fill-current",
                                                viewBox: "0 0 24 24",
                                                children: (0,
                                                a.jsx)("path", {
                                                    d: "M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [!s && (0,
                                a.jsx)("div", {
                                    className: "sm:flex sm:gap-4",
                                    children: (0,
                                    a.jsx)(u, {})
                                }), (0,
                                a.jsx)("nav", {
                                    className: s ? " flex" : " hidden",
                                    children: (0,
                                    a.jsxs)("ul", {
                                        className: "flex items-center gap-6 text-sm text-gray-600",
                                        children: [(0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)(l(), {
                                                href: "/",
                                                children: "Home"
                                            })
                                        }), (null == t ? void 0 : t.role) === o && (0,
                                        a.jsxs)(a.Fragment, {
                                            children: [(0,
                                            a.jsx)("li", {
                                                children: (0,
                                                a.jsx)(l(), {
                                                    href: "/farmer/register/farm",
                                                    children: "Register Farm"
                                                })
                                            }), (null == t ? void 0 : t.farms) && (0,
                                            a.jsx)("li", {
                                                children: (0,
                                                a.jsx)(l(), {
                                                    href: "/farmer/register/crops",
                                                    children: "Log Crops"
                                                })
                                            })]
                                        }), (null == t ? void 0 : t.role) === h && (0,
                                        a.jsx)("li", {
                                            className: "font-sans block sm:w-50% lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-600",
                                            children: (0,
                                            a.jsx)("a", {
                                                role: "button",
                                                className: "relative flex mt-2 cursor-not-allowed",
                                                children: (0,
                                                a.jsx)("svg", {
                                                    className: "flex-1 w-8 h-8 fill-current",
                                                    viewBox: "0 0 24 24",
                                                    children: (0,
                                                    a.jsx)("path", {
                                                        d: "M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "block md:hidden",
                                    children: (0,
                                    a.jsx)("button", {
                                        className: "rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75",
                                        onClick: function() {
                                            return d(!s)
                                        },
                                        children: (0,
                                        a.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0,
                                            a.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            })
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            })
        }
        var x = n(9008)
          , p = n.n(x);
        function v() {
            return (0,
            a.jsxs)(p(), {
                children: [(0,
                a.jsx)("title", {
                    children: "AlgoHack"
                }), (0,
                a.jsx)("meta", {
                    name: "description",
                    content: "A NFT directory of vertical farms and the crops they grow"
                }), (0,
                a.jsx)("link", {
                    rel: "icon",
                    href: "/favicon3.ico"
                })]
            })
        }
        function j(e) {
            var t = e.children;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(g, {}), (0,
                a.jsx)(v, {}), t]
            })
        }
    },
    8148: function(e, t, n) {
        "use strict";
        n.d(t, {
            EW: function() {
                return r
            },
            Jf: function() {
                return l
            },
            LX: function() {
                return s
            },
            fV: function() {
                return i
            },
            pR: function() {
                return a
            },
            qf: function() {
                return d
            },
            wk: function() {
                return c
            }
        });
        var a = {
            farmer: "farmer",
            distributor: "distributor"
        }
          , i = [{
            id: 1,
            name: "Lettuce"
        }, {
            id: 2,
            name: "Kale"
        }, {
            id: 3,
            name: "Rainbow Chard"
        }, {
            id: 4,
            name: "Mustard"
        }, {
            id: 5,
            name: "Spinach"
        }, {
            id: 6,
            name: "Tomato"
        }, {
            id: 7,
            name: "Cucumber"
        }, {
            id: 8,
            name: "Pepper"
        }, {
            id: 9,
            name: "Strawberries"
        }, {
            id: 10,
            name: "Melons"
        }, {
            id: 11,
            name: "Radish"
        }, {
            id: 12,
            name: "Potatoes"
        }, {
            id: 13,
            name: "Onions"
        }, {
            id: 14,
            name: "Garlic"
        }, {
            id: 15,
            name: "Basil"
        }, {
            id: 16,
            name: "Thyme"
        }, {
            id: 17,
            name: "Cilantro"
        }, {
            id: 18,
            name: "Peppermint"
        }, {
            id: 19,
            name: "Oregano"
        }, {
            id: 20,
            name: "Sage"
        }, ]
          , r = [{
            id: 1,
            name: "Rainforest Alliance (RA)"
        }, {
            id: 2,
            name: "Food Alliance (FA)"
        }, {
            id: 3,
            name: "Whole Foods Responsibly Grown (WFRG)"
        }, {
            id: 4,
            name: "United States Department of Agriculture Organic (USDA-O)"
        }, {
            id: 5,
            name: "United States Department of Agriculture Good Agricultural Practices (USDA GAP)"
        }, {
            id: 6,
            name: "Fair Trade USA (FTU)"
        }, {
            id: 7,
            name: "Certified Greenhouse Farmers (CGF)"
        }, {
            id: 8,
            name: "Nursery and Greenhouse Standard (FA-GN)"
        }, {
            id: 9,
            name: "LEED"
        }, {
            id: 10,
            name: "Energy Star"
        }, {
            id: 11,
            name: "BREEAM"
        }, {
            id: 12,
            name: "Living Building Challenge"
        }, ]
          , s = [{
            id: 1,
            name: "Aquaponic"
        }, {
            id: 2,
            name: "Hydroponic"
        }, {
            id: 3,
            name: "Traditional"
        }, ]
          , l = [{
            id: 1,
            name: "Organic"
        }, {
            id: 2,
            name: "Chemical-Based"
        }, {
            id: 3,
            name: "None"
        }, ]
          , d = [{
            farm: "Bella Vista Ranch",
            type: "Lettuce",
            dateHarvested: "10/01/22",
            datePlanted: "09/01/22",
            weight: "50",
            cost: "53",
            pesticides: "Organic",
            specialTreatments: "I played Mozart to them."
        }, {
            farm: "Best Choice Farms",
            type: "Kale",
            dateHarvested: "10/02/22",
            datePlanted: "09/02/22",
            weight: "15",
            cost: "34",
            pesticides: "Chemical-Based",
            specialTreatments: ""
        }, {
            farm: "Best Choice Farms",
            type: "Radish",
            dateHarvested: "10/04/22",
            datePlanted: "09/09/22",
            weight: "23",
            cost: "49",
            pesticides: "None",
            specialTreatments: "I kept them in darkness."
        }, {
            farm: "Blueberry Hills",
            type: "Potatoes",
            dateHarvested: "10/06/22",
            datePlanted: "09/17/22",
            weight: "18",
            cost: "70",
            pesticides: "Chemical-Based",
            specialTreatments: ""
        }, {
            farm: "Allison Acres",
            type: "Mustard",
            dateHarvested: "10/08/22",
            datePlanted: "09/18/22",
            weight: "58",
            cost: "80",
            pesticides: "Chemical-Based",
            specialTreatments: ""
        }, ]
          , c = [{
            farm: "Fruits & Veggies",
            type: "Basil",
            dateHarvested: "10/18/22",
            datePlanted: "09/14/22",
            weight: "62",
            cost: "93",
            pesticides: "Organic",
            specialTreatments: ""
        }, {
            farm: "Green Orchids",
            type: "Onions",
            dateHarvested: "10/20/22",
            datePlanted: "09/16/22",
            weight: "35",
            cost: "87",
            pesticides: "Organic",
            specialTreatments: "I kept the temperature at freezing."
        }, {
            farm: "Magnolia Ranch",
            type: "Garlic",
            dateHarvested: "10/22/22",
            datePlanted: "09/02/22",
            weight: "19",
            cost: "78",
            pesticides: "None",
            specialTreatments: ""
        }, {
            farm: "Magnolia Ranch",
            type: "Potatoes",
            dateHarvested: "10/23/22",
            datePlanted: "09/18/22",
            weight: "45",
            cost: "96",
            pesticides: "None",
            specialTreatments: ""
        }, {
            farm: "Fruits & Veggies",
            type: "Peppermint",
            dateHarvested: "10/24/22",
            datePlanted: "09/06/22",
            weight: "29",
            cost: "67",
            pesticides: "Organic",
            specialTreatments: "I shone purple light on them."
        }, ]
    },
    978: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return a
            }
        });
        var a = function() {
            var e;
            return (e = localStorage.getItem("user")) ? JSON.parse(e) : {}
        }
    },
    6601: function() {}
}]);
