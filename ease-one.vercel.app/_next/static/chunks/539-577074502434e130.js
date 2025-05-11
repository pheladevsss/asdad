"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[539], {
    2985: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return l
            }
        });
        var r = n(5754);
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let i = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , o = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return e.filter( (t, e, n) => !!t && n.indexOf(t) === e).join(" ")
        };
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        var s = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let a = (0,
        r.forwardRef)( (t, e) => {
            let {color: n="currentColor", size: i=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: u="", children: d, iconNode: c, ...h} = t;
            return (0,
            r.createElement)("svg", {
                ref: e,
                ...s,
                width: i,
                height: i,
                stroke: n,
                strokeWidth: l ? 24 * Number(a) / Number(i) : a,
                className: o("lucide", u),
                ...h
            }, [...c.map(t => {
                let[e,n] = t;
                return (0,
                r.createElement)(e, n)
            }
            ), ...Array.isArray(d) ? d : [d]])
        }
        )
          , l = (t, e) => {
            let n = (0,
            r.forwardRef)( (n, s) => {
                let {className: l, ...u} = n;
                return (0,
                r.createElement)(a, {
                    ref: s,
                    iconNode: e,
                    className: o("lucide-".concat(i(t)), l),
                    ...u
                })
            }
            );
            return n.displayName = "".concat(t),
            n
        }
    },
    4582: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2985).Z)("ChevronLeft", [["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]])
    },
    203: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2985).Z)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
    },
    8349: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2985).Z)("Minus", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }]])
    },
    1145: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        /**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
        let r = (0,
        n(2985).Z)("Plus", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }], ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]])
    },
    9364: function(t, e, n) {
        n.d(e, {
            default: function() {
                return i.a
            }
        });
        var r = n(8153)
          , i = n.n(r)
    },
    8153: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            default: function() {
                return l
            },
            getImageProps: function() {
                return a
            }
        });
        let r = n(485)
          , i = n(3624)
          , o = n(2404)
          , s = r._(n(7224));
        function a(t) {
            let {props: e} = (0,
            i.getImgProps)(t, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[t,n] of Object.entries(e))
                void 0 === n && delete e[t];
            return {
                props: e
            }
        }
        let l = o.Image
    },
    9785: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(485)._(n(5754)).default.createContext(null)
    },
    7254: function(t, e, n) {
        n.d(e, {
            _W: function() {
                return em
            }
        });
        var r, i, o, s = n(6232), a = n(5754);
        let l = {
            lessThanXSeconds: {
                one: "less than a second",
                other: "less than {{count}} seconds"
            },
            xSeconds: {
                one: "1 second",
                other: "{{count}} seconds"
            },
            halfAMinute: "half a minute",
            lessThanXMinutes: {
                one: "less than a minute",
                other: "less than {{count}} minutes"
            },
            xMinutes: {
                one: "1 minute",
                other: "{{count}} minutes"
            },
            aboutXHours: {
                one: "about 1 hour",
                other: "about {{count}} hours"
            },
            xHours: {
                one: "1 hour",
                other: "{{count}} hours"
            },
            xDays: {
                one: "1 day",
                other: "{{count}} days"
            },
            aboutXWeeks: {
                one: "about 1 week",
                other: "about {{count}} weeks"
            },
            xWeeks: {
                one: "1 week",
                other: "{{count}} weeks"
            },
            aboutXMonths: {
                one: "about 1 month",
                other: "about {{count}} months"
            },
            xMonths: {
                one: "1 month",
                other: "{{count}} months"
            },
            aboutXYears: {
                one: "about 1 year",
                other: "about {{count}} years"
            },
            xYears: {
                one: "1 year",
                other: "{{count}} years"
            },
            overXYears: {
                one: "over 1 year",
                other: "over {{count}} years"
            },
            almostXYears: {
                one: "almost 1 year",
                other: "almost {{count}} years"
            }
        };
        function u(t) {
            return function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = e.width ? String(e.width) : t.defaultWidth;
                return t.formats[n] || t.formats[t.defaultWidth]
            }
        }
        let d = {
            date: u({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: u({
                formats: {
                    full: "h:mm:ss a zzzz",
                    long: "h:mm:ss a z",
                    medium: "h:mm:ss a",
                    short: "h:mm a"
                },
                defaultWidth: "full"
            }),
            dateTime: u({
                formats: {
                    full: "{{date}} 'at' {{time}}",
                    long: "{{date}} 'at' {{time}}",
                    medium: "{{date}}, {{time}}",
                    short: "{{date}}, {{time}}"
                },
                defaultWidth: "full"
            })
        }
          , c = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };
        function h(t) {
            return (e, n) => {
                let r;
                if ("formatting" === ((null == n ? void 0 : n.context) ? String(n.context) : "standalone") && t.formattingValues) {
                    let e = t.defaultFormattingWidth || t.defaultWidth
                      , i = (null == n ? void 0 : n.width) ? String(n.width) : e;
                    r = t.formattingValues[i] || t.formattingValues[e]
                } else {
                    let e = t.defaultWidth
                      , i = (null == n ? void 0 : n.width) ? String(n.width) : t.defaultWidth;
                    r = t.values[i] || t.values[e]
                }
                return r[t.argumentCallback ? t.argumentCallback(e) : e]
            }
        }
        function f(t) {
            return function(e) {
                let n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = r.width, o = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], s = e.match(o);
                if (!s)
                    return null;
                let a = s[0]
                  , l = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth]
                  , u = Array.isArray(l) ? function(t, e) {
                    for (let n = 0; n < t.length; n++)
                        if (e(t[n]))
                            return n
                }(l, t => t.test(a)) : function(t, e) {
                    for (let n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n]))
                            return n
                }(l, t => t.test(a));
                return n = t.valueCallback ? t.valueCallback(u) : u,
                {
                    value: n = r.valueCallback ? r.valueCallback(n) : n,
                    rest: e.slice(a.length)
                }
            }
        }
        let p = {
            code: "en-US",
            formatDistance: (t, e, n) => {
                let r;
                let i = l[t];
                return (r = "string" == typeof i ? i : 1 === e ? i.one : i.other.replace("{{count}}", e.toString()),
                null == n ? void 0 : n.addSuffix) ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r
            }
            ,
            formatLong: d,
            formatRelative: (t, e, n, r) => c[t],
            localize: {
                ordinalNumber: (t, e) => {
                    let n = Number(t)
                      , r = n % 100;
                    if (r > 20 || r < 10)
                        switch (r % 10) {
                        case 1:
                            return n + "st";
                        case 2:
                            return n + "nd";
                        case 3:
                            return n + "rd"
                        }
                    return n + "th"
                }
                ,
                era: h({
                    values: {
                        narrow: ["B", "A"],
                        abbreviated: ["BC", "AD"],
                        wide: ["Before Christ", "Anno Domini"]
                    },
                    defaultWidth: "wide"
                }),
                quarter: h({
                    values: {
                        narrow: ["1", "2", "3", "4"],
                        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                    },
                    defaultWidth: "wide",
                    argumentCallback: t => t - 1
                }),
                month: h({
                    values: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    defaultWidth: "wide"
                }),
                day: h({
                    values: {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    defaultWidth: "wide"
                }),
                dayPeriod: h({
                    values: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "morning",
                            afternoon: "afternoon",
                            evening: "evening",
                            night: "night"
                        }
                    },
                    defaultWidth: "wide",
                    formattingValues: {
                        narrow: {
                            am: "a",
                            pm: "p",
                            midnight: "mi",
                            noon: "n",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        abbreviated: {
                            am: "AM",
                            pm: "PM",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        },
                        wide: {
                            am: "a.m.",
                            pm: "p.m.",
                            midnight: "midnight",
                            noon: "noon",
                            morning: "in the morning",
                            afternoon: "in the afternoon",
                            evening: "in the evening",
                            night: "at night"
                        }
                    },
                    defaultFormattingWidth: "wide"
                })
            },
            match: {
                ordinalNumber: (r = {
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: t => parseInt(t, 10)
                },
                function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = t.match(r.matchPattern);
                    if (!n)
                        return null;
                    let i = n[0]
                      , o = t.match(r.parsePattern);
                    if (!o)
                        return null;
                    let s = r.valueCallback ? r.valueCallback(o[0]) : o[0];
                    return {
                        value: s = e.valueCallback ? e.valueCallback(s) : s,
                        rest: t.slice(i.length)
                    }
                }
                ),
                era: f({
                    matchPatterns: {
                        narrow: /^(b|a)/i,
                        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                        wide: /^(before christ|before common era|anno domini|common era)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        any: [/^b/i, /^(a|c)/i]
                    },
                    defaultParseWidth: "any"
                }),
                quarter: f({
                    matchPatterns: {
                        narrow: /^[1234]/i,
                        abbreviated: /^q[1234]/i,
                        wide: /^[1234](th|st|nd|rd)? quarter/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        any: [/1/i, /2/i, /3/i, /4/i]
                    },
                    defaultParseWidth: "any",
                    valueCallback: t => t + 1
                }),
                month: f({
                    matchPatterns: {
                        narrow: /^[jfmasond]/i,
                        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                    },
                    defaultParseWidth: "any"
                }),
                day: f({
                    matchPatterns: {
                        narrow: /^[smtwf]/i,
                        short: /^(su|mo|tu|we|th|fr|sa)/i,
                        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                    },
                    defaultMatchWidth: "wide",
                    parsePatterns: {
                        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                    },
                    defaultParseWidth: "any"
                }),
                dayPeriod: f({
                    matchPatterns: {
                        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                    },
                    defaultMatchWidth: "any",
                    parsePatterns: {
                        any: {
                            am: /^a/i,
                            pm: /^p/i,
                            midnight: /^mi/i,
                            noon: /^no/i,
                            morning: /morning/i,
                            afternoon: /afternoon/i,
                            evening: /evening/i,
                            night: /night/i
                        }
                    },
                    defaultParseWidth: "any"
                })
            },
            options: {
                weekStartsOn: 0,
                firstWeekContainsDate: 1
            }
        }
          , m = {};
        function v(t) {
            let e = Object.prototype.toString.call(t);
            return t instanceof Date || "object" == typeof t && "[object Date]" === e ? new t.constructor(+t) : new Date("number" == typeof t || "[object Number]" === e || "string" == typeof t || "[object String]" === e ? t : NaN)
        }
        function g(t) {
            let e = v(t);
            return e.setHours(0, 0, 0, 0),
            e
        }
        function y(t) {
            let e = v(t)
              , n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
            return n.setUTCFullYear(e.getFullYear()),
            +t - +n
        }
        function b(t, e) {
            let n = g(t)
              , r = g(e);
            return Math.round((+n - y(n) - (+r - y(r))) / 864e5)
        }
        function x(t, e) {
            return t instanceof Date ? new t.constructor(e) : new Date(e)
        }
        function w(t) {
            let e = v(t)
              , n = x(t, 0);
            return n.setFullYear(e.getFullYear(), 0, 1),
            n.setHours(0, 0, 0, 0),
            n
        }
        function P(t, e) {
            var n, r, i, o, s, a, l, u;
            let d = null !== (u = null !== (l = null !== (a = null !== (s = null == e ? void 0 : e.weekStartsOn) && void 0 !== s ? s : null == e ? void 0 : null === (r = e.locale) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.weekStartsOn) && void 0 !== a ? a : m.weekStartsOn) && void 0 !== l ? l : null === (o = m.locale) || void 0 === o ? void 0 : null === (i = o.options) || void 0 === i ? void 0 : i.weekStartsOn) && void 0 !== u ? u : 0
              , c = v(t)
              , h = c.getDay();
            return c.setDate(c.getDate() - ((h < d ? 7 : 0) + h - d)),
            c.setHours(0, 0, 0, 0),
            c
        }
        function M(t) {
            return P(t, {
                weekStartsOn: 1
            })
        }
        function k(t) {
            let e = v(t)
              , n = e.getFullYear()
              , r = x(t, 0);
            r.setFullYear(n + 1, 0, 4),
            r.setHours(0, 0, 0, 0);
            let i = M(r)
              , o = x(t, 0);
            o.setFullYear(n, 0, 4),
            o.setHours(0, 0, 0, 0);
            let s = M(o);
            return e.getTime() >= i.getTime() ? n + 1 : e.getTime() >= s.getTime() ? n : n - 1
        }
        function S(t) {
            let e = v(t);
            return Math.round((+M(e) - +function(t) {
                let e = k(t)
                  , n = x(t, 0);
                return n.setFullYear(e, 0, 4),
                n.setHours(0, 0, 0, 0),
                M(n)
            }(e)) / 6048e5) + 1
        }
        function T(t, e) {
            var n, r, i, o, s, a, l, u;
            let d = v(t)
              , c = d.getFullYear()
              , h = null !== (u = null !== (l = null !== (a = null !== (s = null == e ? void 0 : e.firstWeekContainsDate) && void 0 !== s ? s : null == e ? void 0 : null === (r = e.locale) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.firstWeekContainsDate) && void 0 !== a ? a : m.firstWeekContainsDate) && void 0 !== l ? l : null === (o = m.locale) || void 0 === o ? void 0 : null === (i = o.options) || void 0 === i ? void 0 : i.firstWeekContainsDate) && void 0 !== u ? u : 1
              , f = x(t, 0);
            f.setFullYear(c + 1, 0, h),
            f.setHours(0, 0, 0, 0);
            let p = P(f, e)
              , g = x(t, 0);
            g.setFullYear(c, 0, h),
            g.setHours(0, 0, 0, 0);
            let y = P(g, e);
            return d.getTime() >= p.getTime() ? c + 1 : d.getTime() >= y.getTime() ? c : c - 1
        }
        function C(t, e) {
            let n = v(t);
            return Math.round((+P(n, e) - +function(t, e) {
                var n, r, i, o, s, a, l, u;
                let d = null !== (u = null !== (l = null !== (a = null !== (s = null == e ? void 0 : e.firstWeekContainsDate) && void 0 !== s ? s : null == e ? void 0 : null === (r = e.locale) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.firstWeekContainsDate) && void 0 !== a ? a : m.firstWeekContainsDate) && void 0 !== l ? l : null === (o = m.locale) || void 0 === o ? void 0 : null === (i = o.options) || void 0 === i ? void 0 : i.firstWeekContainsDate) && void 0 !== u ? u : 1
                  , c = T(t, e)
                  , h = x(t, 0);
                return h.setFullYear(c, 0, d),
                h.setHours(0, 0, 0, 0),
                P(h, e)
            }(n, e)) / 6048e5) + 1
        }
        function D(t, e) {
            let n = Math.abs(t).toString().padStart(e, "0");
            return (t < 0 ? "-" : "") + n
        }
        let j = {
            y(t, e) {
                let n = t.getFullYear()
                  , r = n > 0 ? n : 1 - n;
                return D("yy" === e ? r % 100 : r, e.length)
            },
            M(t, e) {
                let n = t.getMonth();
                return "M" === e ? String(n + 1) : D(n + 1, 2)
            },
            d: (t, e) => D(t.getDate(), e.length),
            a(t, e) {
                let n = t.getHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                    return n.toUpperCase();
                case "aaa":
                    return n;
                case "aaaaa":
                    return n[0];
                default:
                    return "am" === n ? "a.m." : "p.m."
                }
            },
            h: (t, e) => D(t.getHours() % 12 || 12, e.length),
            H: (t, e) => D(t.getHours(), e.length),
            m: (t, e) => D(t.getMinutes(), e.length),
            s: (t, e) => D(t.getSeconds(), e.length),
            S(t, e) {
                let n = e.length;
                return D(Math.trunc(t.getMilliseconds() * Math.pow(10, n - 3)), e.length)
            }
        }
          , A = {
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
          , E = {
            G: function(t, e, n) {
                let r = t.getFullYear() > 0 ? 1 : 0;
                switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return n.era(r, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return n.era(r, {
                        width: "narrow"
                    });
                default:
                    return n.era(r, {
                        width: "wide"
                    })
                }
            },
            y: function(t, e, n) {
                if ("yo" === e) {
                    let e = t.getFullYear();
                    return n.ordinalNumber(e > 0 ? e : 1 - e, {
                        unit: "year"
                    })
                }
                return j.y(t, e)
            },
            Y: function(t, e, n, r) {
                let i = T(t, r)
                  , o = i > 0 ? i : 1 - i;
                return "YY" === e ? D(o % 100, 2) : "Yo" === e ? n.ordinalNumber(o, {
                    unit: "year"
                }) : D(o, e.length)
            },
            R: function(t, e) {
                return D(k(t), e.length)
            },
            u: function(t, e) {
                return D(t.getFullYear(), e.length)
            },
            Q: function(t, e, n) {
                let r = Math.ceil((t.getMonth() + 1) / 3);
                switch (e) {
                case "Q":
                    return String(r);
                case "QQ":
                    return D(r, 2);
                case "Qo":
                    return n.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return n.quarter(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return n.quarter(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return n.quarter(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            q: function(t, e, n) {
                let r = Math.ceil((t.getMonth() + 1) / 3);
                switch (e) {
                case "q":
                    return String(r);
                case "qq":
                    return D(r, 2);
                case "qo":
                    return n.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "qqq":
                    return n.quarter(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return n.quarter(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return n.quarter(r, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            M: function(t, e, n) {
                let r = t.getMonth();
                switch (e) {
                case "M":
                case "MM":
                    return j.M(t, e);
                case "Mo":
                    return n.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return n.month(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return n.month(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return n.month(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            L: function(t, e, n) {
                let r = t.getMonth();
                switch (e) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return D(r + 1, 2);
                case "Lo":
                    return n.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return n.month(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return n.month(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return n.month(r, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            w: function(t, e, n, r) {
                let i = C(t, r);
                return "wo" === e ? n.ordinalNumber(i, {
                    unit: "week"
                }) : D(i, e.length)
            },
            I: function(t, e, n) {
                let r = S(t);
                return "Io" === e ? n.ordinalNumber(r, {
                    unit: "week"
                }) : D(r, e.length)
            },
            d: function(t, e, n) {
                return "do" === e ? n.ordinalNumber(t.getDate(), {
                    unit: "date"
                }) : j.d(t, e)
            },
            D: function(t, e, n) {
                let r = function(t) {
                    let e = v(t);
                    return b(e, w(e)) + 1
                }(t);
                return "Do" === e ? n.ordinalNumber(r, {
                    unit: "dayOfYear"
                }) : D(r, e.length)
            },
            E: function(t, e, n) {
                let r = t.getDay();
                switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return n.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return n.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return n.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return n.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            e: function(t, e, n, r) {
                let i = t.getDay()
                  , o = (i - r.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "e":
                    return String(o);
                case "ee":
                    return D(o, 2);
                case "eo":
                    return n.ordinalNumber(o, {
                        unit: "day"
                    });
                case "eee":
                    return n.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return n.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return n.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return n.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            c: function(t, e, n, r) {
                let i = t.getDay()
                  , o = (i - r.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "c":
                    return String(o);
                case "cc":
                    return D(o, e.length);
                case "co":
                    return n.ordinalNumber(o, {
                        unit: "day"
                    });
                case "ccc":
                    return n.day(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return n.day(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return n.day(i, {
                        width: "short",
                        context: "standalone"
                    });
                default:
                    return n.day(i, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            i: function(t, e, n) {
                let r = t.getDay()
                  , i = 0 === r ? 7 : r;
                switch (e) {
                case "i":
                    return String(i);
                case "ii":
                    return D(i, e.length);
                case "io":
                    return n.ordinalNumber(i, {
                        unit: "day"
                    });
                case "iii":
                    return n.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return n.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return n.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return n.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            a: function(t, e, n) {
                let r = t.getHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return n.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return n.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            b: function(t, e, n) {
                let r;
                let i = t.getHours();
                switch (r = 12 === i ? A.noon : 0 === i ? A.midnight : i / 12 >= 1 ? "pm" : "am",
                e) {
                case "b":
                case "bb":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return n.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return n.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            B: function(t, e, n) {
                let r;
                let i = t.getHours();
                switch (r = i >= 17 ? A.evening : i >= 12 ? A.afternoon : i >= 4 ? A.morning : A.night,
                e) {
                case "B":
                case "BB":
                case "BBB":
                    return n.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return n.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return n.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            h: function(t, e, n) {
                if ("ho" === e) {
                    let e = t.getHours() % 12;
                    return 0 === e && (e = 12),
                    n.ordinalNumber(e, {
                        unit: "hour"
                    })
                }
                return j.h(t, e)
            },
            H: function(t, e, n) {
                return "Ho" === e ? n.ordinalNumber(t.getHours(), {
                    unit: "hour"
                }) : j.H(t, e)
            },
            K: function(t, e, n) {
                let r = t.getHours() % 12;
                return "Ko" === e ? n.ordinalNumber(r, {
                    unit: "hour"
                }) : D(r, e.length)
            },
            k: function(t, e, n) {
                let r = t.getHours();
                return (0 === r && (r = 24),
                "ko" === e) ? n.ordinalNumber(r, {
                    unit: "hour"
                }) : D(r, e.length)
            },
            m: function(t, e, n) {
                return "mo" === e ? n.ordinalNumber(t.getMinutes(), {
                    unit: "minute"
                }) : j.m(t, e)
            },
            s: function(t, e, n) {
                return "so" === e ? n.ordinalNumber(t.getSeconds(), {
                    unit: "second"
                }) : j.s(t, e)
            },
            S: function(t, e) {
                return j.S(t, e)
            },
            X: function(t, e, n) {
                let r = t.getTimezoneOffset();
                if (0 === r)
                    return "Z";
                switch (e) {
                case "X":
                    return V(r);
                case "XXXX":
                case "XX":
                    return L(r);
                default:
                    return L(r, ":")
                }
            },
            x: function(t, e, n) {
                let r = t.getTimezoneOffset();
                switch (e) {
                case "x":
                    return V(r);
                case "xxxx":
                case "xx":
                    return L(r);
                default:
                    return L(r, ":")
                }
            },
            O: function(t, e, n) {
                let r = t.getTimezoneOffset();
                switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + N(r, ":");
                default:
                    return "GMT" + L(r, ":")
                }
            },
            z: function(t, e, n) {
                let r = t.getTimezoneOffset();
                switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + N(r, ":");
                default:
                    return "GMT" + L(r, ":")
                }
            },
            t: function(t, e, n) {
                return D(Math.trunc(t.getTime() / 1e3), e.length)
            },
            T: function(t, e, n) {
                return D(t.getTime(), e.length)
            }
        };
        function N(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = t > 0 ? "-" : "+"
              , r = Math.abs(t)
              , i = Math.trunc(r / 60)
              , o = r % 60;
            return 0 === o ? n + String(i) : n + String(i) + e + D(o, 2)
        }
        function V(t, e) {
            return t % 60 == 0 ? (t > 0 ? "-" : "+") + D(Math.abs(t) / 60, 2) : L(t, e)
        }
        function L(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = Math.abs(t);
            return (t > 0 ? "-" : "+") + D(Math.trunc(n / 60), 2) + e + D(n % 60, 2)
        }
        let R = (t, e) => {
            switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            default:
                return e.date({
                    width: "full"
                })
            }
        }
          , O = (t, e) => {
            switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            default:
                return e.time({
                    width: "full"
                })
            }
        }
          , F = {
            p: O,
            P: (t, e) => {
                let n;
                let r = t.match(/(P+)(p+)?/) || []
                  , i = r[1]
                  , o = r[2];
                if (!o)
                    return R(t, e);
                switch (i) {
                case "P":
                    n = e.dateTime({
                        width: "short"
                    });
                    break;
                case "PP":
                    n = e.dateTime({
                        width: "medium"
                    });
                    break;
                case "PPP":
                    n = e.dateTime({
                        width: "long"
                    });
                    break;
                default:
                    n = e.dateTime({
                        width: "full"
                    })
                }
                return n.replace("{{date}}", R(i, e)).replace("{{time}}", O(o, e))
            }
        }
          , W = /^D+$/
          , _ = /^Y+$/
          , B = ["D", "DD", "YY", "YYYY"];
        function I(t) {
            return t instanceof Date || "object" == typeof t && "[object Date]" === Object.prototype.toString.call(t)
        }
        let z = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , Y = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
          , U = /^'([^]*?)'?$/
          , $ = /''/g
          , H = /[a-zA-Z]/;
        function X(t, e, n) {
            var r, i, o, s, a, l, u, d, c, h, f, g, y, b, x, w, P, M;
            let k = null !== (h = null !== (c = null == n ? void 0 : n.locale) && void 0 !== c ? c : m.locale) && void 0 !== h ? h : p
              , S = null !== (b = null !== (y = null !== (g = null !== (f = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== f ? f : null == n ? void 0 : null === (i = n.locale) || void 0 === i ? void 0 : null === (r = i.options) || void 0 === r ? void 0 : r.firstWeekContainsDate) && void 0 !== g ? g : m.firstWeekContainsDate) && void 0 !== y ? y : null === (s = m.locale) || void 0 === s ? void 0 : null === (o = s.options) || void 0 === o ? void 0 : o.firstWeekContainsDate) && void 0 !== b ? b : 1
              , T = null !== (M = null !== (P = null !== (w = null !== (x = null == n ? void 0 : n.weekStartsOn) && void 0 !== x ? x : null == n ? void 0 : null === (l = n.locale) || void 0 === l ? void 0 : null === (a = l.options) || void 0 === a ? void 0 : a.weekStartsOn) && void 0 !== w ? w : m.weekStartsOn) && void 0 !== P ? P : null === (d = m.locale) || void 0 === d ? void 0 : null === (u = d.options) || void 0 === u ? void 0 : u.weekStartsOn) && void 0 !== M ? M : 0
              , C = v(t);
            if (!((I(C) || "number" == typeof C) && !isNaN(Number(v(C)))))
                throw RangeError("Invalid time value");
            let D = e.match(Y).map(t => {
                let e = t[0];
                return "p" === e || "P" === e ? (0,
                F[e])(t, k.formatLong) : t
            }
            ).join("").match(z).map(t => {
                if ("''" === t)
                    return {
                        isToken: !1,
                        value: "'"
                    };
                let e = t[0];
                if ("'" === e)
                    return {
                        isToken: !1,
                        value: function(t) {
                            let e = t.match(U);
                            return e ? e[1].replace($, "'") : t
                        }(t)
                    };
                if (E[e])
                    return {
                        isToken: !0,
                        value: t
                    };
                if (e.match(H))
                    throw RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
                return {
                    isToken: !1,
                    value: t
                }
            }
            );
            k.localize.preprocessor && (D = k.localize.preprocessor(C, D));
            let j = {
                firstWeekContainsDate: S,
                weekStartsOn: T,
                locale: k
            };
            return D.map(r => {
                if (!r.isToken)
                    return r.value;
                let i = r.value;
                return (!(null == n ? void 0 : n.useAdditionalWeekYearTokens) && _.test(i) || !(null == n ? void 0 : n.useAdditionalDayOfYearTokens) && W.test(i)) && function(t, e, n) {
                    let r = function(t, e, n) {
                        let r = "Y" === t[0] ? "years" : "days of the month";
                        return "Use `".concat(t.toLowerCase(), "` instead of `").concat(t, "` (in `").concat(e, "`) for formatting ").concat(r, " to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md")
                    }(t, e, n);
                    if (console.warn(r),
                    B.includes(t))
                        throw RangeError(r)
                }(i, e, String(t)),
                (0,
                E[i[0]])(C, i, k.localize, j)
            }
            ).join("")
        }
        function q(t) {
            let e = v(t);
            return e.setDate(1),
            e.setHours(0, 0, 0, 0),
            e
        }
        function G(t) {
            let e = v(t)
              , n = e.getMonth();
            return e.setFullYear(e.getFullYear(), n + 1, 0),
            e.setHours(23, 59, 59, 999),
            e
        }
        function Z(t, e) {
            let n = v(t)
              , r = n.getFullYear()
              , i = n.getDate()
              , o = x(t, 0);
            o.setFullYear(r, e, 15),
            o.setHours(0, 0, 0, 0);
            let s = function(t) {
                let e = v(t)
                  , n = e.getFullYear()
                  , r = e.getMonth()
                  , i = x(t, 0);
                return i.setFullYear(n, r + 1, 0),
                i.setHours(0, 0, 0, 0),
                i.getDate()
            }(o);
            return n.setMonth(e, Math.min(i, s)),
            n
        }
        function K(t, e) {
            let n = v(t);
            return isNaN(+n) ? x(t, NaN) : (n.setFullYear(e),
            n)
        }
        function Q(t, e) {
            let n = v(t)
              , r = v(e);
            return 12 * (n.getFullYear() - r.getFullYear()) + (n.getMonth() - r.getMonth())
        }
        function J(t, e) {
            let n = v(t);
            if (isNaN(e))
                return x(t, NaN);
            if (!e)
                return n;
            let r = n.getDate()
              , i = x(t, n.getTime());
            return (i.setMonth(n.getMonth() + e + 1, 0),
            r >= i.getDate()) ? i : (n.setFullYear(i.getFullYear(), i.getMonth(), r),
            n)
        }
        function tt(t, e) {
            let n = v(t)
              , r = v(e);
            return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        }
        function te(t, e) {
            let n = v(t);
            return isNaN(e) ? x(t, NaN) : (e && n.setDate(n.getDate() + e),
            n)
        }
        function tn(t, e) {
            return +g(t) == +g(e)
        }
        function tr(t, e) {
            let n = v(t)
              , r = v(e);
            return n.getTime() > r.getTime()
        }
        function ti(t, e) {
            return te(t, 7 * e)
        }
        function to(t, e) {
            return J(t, 12 * e)
        }
        function ts(t, e) {
            var n, r, i, o, s, a, l, u;
            let d = null !== (u = null !== (l = null !== (a = null !== (s = null == e ? void 0 : e.weekStartsOn) && void 0 !== s ? s : null == e ? void 0 : null === (r = e.locale) || void 0 === r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.weekStartsOn) && void 0 !== a ? a : m.weekStartsOn) && void 0 !== l ? l : null === (o = m.locale) || void 0 === o ? void 0 : null === (i = o.options) || void 0 === i ? void 0 : i.weekStartsOn) && void 0 !== u ? u : 0
              , c = v(t)
              , h = c.getDay();
            return c.setDate(c.getDate() + ((h < d ? -7 : 0) + 6 - (h - d))),
            c.setHours(23, 59, 59, 999),
            c
        }
        function ta(t) {
            return ts(t, {
                weekStartsOn: 1
            })
        }
        var tl = function() {
            return (tl = Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }
            ).apply(this, arguments)
        };
        function tu(t, e, n) {
            if (n || 2 == arguments.length)
                for (var r, i = 0, o = e.length; i < o; i++)
                    !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)),
                    r[i] = e[i]);
            return t.concat(r || Array.prototype.slice.call(e))
        }
        function td(t) {
            return "multiple" === t.mode
        }
        function tc(t) {
            return "range" === t.mode
        }
        function th(t) {
            return "single" === t.mode
        }
        "function" == typeof SuppressedError && SuppressedError;
        var tf = {
            root: "rdp",
            multiple_months: "rdp-multiple_months",
            with_weeknumber: "rdp-with_weeknumber",
            vhidden: "rdp-vhidden",
            button_reset: "rdp-button_reset",
            button: "rdp-button",
            caption: "rdp-caption",
            caption_start: "rdp-caption_start",
            caption_end: "rdp-caption_end",
            caption_between: "rdp-caption_between",
            caption_label: "rdp-caption_label",
            caption_dropdowns: "rdp-caption_dropdowns",
            dropdown: "rdp-dropdown",
            dropdown_month: "rdp-dropdown_month",
            dropdown_year: "rdp-dropdown_year",
            dropdown_icon: "rdp-dropdown_icon",
            months: "rdp-months",
            month: "rdp-month",
            table: "rdp-table",
            tbody: "rdp-tbody",
            tfoot: "rdp-tfoot",
            head: "rdp-head",
            head_row: "rdp-head_row",
            head_cell: "rdp-head_cell",
            nav: "rdp-nav",
            nav_button: "rdp-nav_button",
            nav_button_previous: "rdp-nav_button_previous",
            nav_button_next: "rdp-nav_button_next",
            nav_icon: "rdp-nav_icon",
            row: "rdp-row",
            weeknumber: "rdp-weeknumber",
            cell: "rdp-cell",
            day: "rdp-day",
            day_today: "rdp-day_today",
            day_outside: "rdp-day_outside",
            day_selected: "rdp-day_selected",
            day_disabled: "rdp-day_disabled",
            day_hidden: "rdp-day_hidden",
            day_range_start: "rdp-day_range_start",
            day_range_end: "rdp-day_range_end",
            day_range_middle: "rdp-day_range_middle"
        }
          , tp = Object.freeze({
            __proto__: null,
            formatCaption: function(t, e) {
                return X(t, "LLLL y", e)
            },
            formatDay: function(t, e) {
                return X(t, "d", e)
            },
            formatMonthCaption: function(t, e) {
                return X(t, "LLLL", e)
            },
            formatWeekNumber: function(t) {
                return "".concat(t)
            },
            formatWeekdayName: function(t, e) {
                return X(t, "cccccc", e)
            },
            formatYearCaption: function(t, e) {
                return X(t, "yyyy", e)
            }
        })
          , tm = Object.freeze({
            __proto__: null,
            labelDay: function(t, e, n) {
                return X(t, "do MMMM (EEEE)", n)
            },
            labelMonthDropdown: function() {
                return "Month: "
            },
            labelNext: function() {
                return "Go to next month"
            },
            labelPrevious: function() {
                return "Go to previous month"
            },
            labelWeekNumber: function(t) {
                return "Week n. ".concat(t)
            },
            labelWeekday: function(t, e) {
                return X(t, "cccc", e)
            },
            labelYearDropdown: function() {
                return "Year: "
            }
        })
          , tv = (0,
        a.createContext)(void 0);
        function tg(t) {
            var e, n, r, i, o, a, l, u, d = t.initialProps, c = {
                captionLayout: "buttons",
                classNames: tf,
                formatters: tp,
                labels: tm,
                locale: p,
                modifiersClassNames: {},
                modifiers: {},
                numberOfMonths: 1,
                styles: {},
                today: new Date,
                mode: "default"
            }, h = (e = d.fromYear,
            n = d.toYear,
            r = d.fromMonth,
            i = d.toMonth,
            o = d.fromDate,
            a = d.toDate,
            r ? o = q(r) : e && (o = new Date(e,0,1)),
            i ? a = G(i) : n && (a = new Date(n,11,31)),
            {
                fromDate: o ? g(o) : void 0,
                toDate: a ? g(a) : void 0
            }), f = h.fromDate, m = h.toDate, v = null !== (l = d.captionLayout) && void 0 !== l ? l : c.captionLayout;
            "buttons" === v || f && m || (v = "buttons"),
            (th(d) || td(d) || tc(d)) && (u = d.onSelect);
            var y = tl(tl(tl({}, c), d), {
                captionLayout: v,
                classNames: tl(tl({}, c.classNames), d.classNames),
                components: tl({}, d.components),
                formatters: tl(tl({}, c.formatters), d.formatters),
                fromDate: f,
                labels: tl(tl({}, c.labels), d.labels),
                mode: d.mode || c.mode,
                modifiers: tl(tl({}, c.modifiers), d.modifiers),
                modifiersClassNames: tl(tl({}, c.modifiersClassNames), d.modifiersClassNames),
                onSelect: u,
                styles: tl(tl({}, c.styles), d.styles),
                toDate: m
            });
            return (0,
            s.jsx)(tv.Provider, {
                value: y,
                children: t.children
            })
        }
        function ty() {
            var t = (0,
            a.useContext)(tv);
            if (!t)
                throw Error("useDayPicker must be used within a DayPickerProvider.");
            return t
        }
        function tb(t) {
            var e = ty()
              , n = e.locale
              , r = e.classNames
              , i = e.styles
              , o = e.formatters.formatCaption;
            return (0,
            s.jsx)("div", {
                className: r.caption_label,
                style: i.caption_label,
                "aria-live": "polite",
                role: "presentation",
                id: t.id,
                children: o(t.displayMonth, {
                    locale: n
                })
            })
        }
        function tx(t) {
            return (0,
            s.jsx)("svg", tl({
                width: "8px",
                height: "8px",
                viewBox: "0 0 120 120",
                "data-testid": "iconDropdown"
            }, t, {
                children: (0,
                s.jsx)("path", {
                    d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })
            }))
        }
        function tw(t) {
            var e, n, r = t.onChange, i = t.value, o = t.children, a = t.caption, l = t.className, u = t.style, d = ty(), c = null !== (n = null === (e = d.components) || void 0 === e ? void 0 : e.IconDropdown) && void 0 !== n ? n : tx;
            return (0,
            s.jsxs)("div", {
                className: l,
                style: u,
                children: [(0,
                s.jsx)("span", {
                    className: d.classNames.vhidden,
                    children: t["aria-label"]
                }), (0,
                s.jsx)("select", {
                    name: t.name,
                    "aria-label": t["aria-label"],
                    className: d.classNames.dropdown,
                    style: d.styles.dropdown,
                    value: i,
                    onChange: r,
                    children: o
                }), (0,
                s.jsxs)("div", {
                    className: d.classNames.caption_label,
                    style: d.styles.caption_label,
                    "aria-hidden": "true",
                    children: [a, (0,
                    s.jsx)(c, {
                        className: d.classNames.dropdown_icon,
                        style: d.styles.dropdown_icon
                    })]
                })]
            })
        }
        function tP(t) {
            var e, n = ty(), r = n.fromDate, i = n.toDate, o = n.styles, a = n.locale, l = n.formatters.formatMonthCaption, u = n.classNames, d = n.components, c = n.labels.labelMonthDropdown;
            if (!r || !i)
                return (0,
                s.jsx)(s.Fragment, {});
            var h = [];
            if (function(t, e) {
                let n = v(t)
                  , r = v(e);
                return n.getFullYear() === r.getFullYear()
            }(r, i))
                for (var f = q(r), p = r.getMonth(); p <= i.getMonth(); p++)
                    h.push(Z(f, p));
            else
                for (var f = q(new Date), p = 0; p <= 11; p++)
                    h.push(Z(f, p));
            var m = null !== (e = null == d ? void 0 : d.Dropdown) && void 0 !== e ? e : tw;
            return (0,
            s.jsx)(m, {
                name: "months",
                "aria-label": c(),
                className: u.dropdown_month,
                style: o.dropdown_month,
                onChange: function(e) {
                    var n = Number(e.target.value)
                      , r = Z(q(t.displayMonth), n);
                    t.onChange(r)
                },
                value: t.displayMonth.getMonth(),
                caption: l(t.displayMonth, {
                    locale: a
                }),
                children: h.map(function(t) {
                    return (0,
                    s.jsx)("option", {
                        value: t.getMonth(),
                        children: l(t, {
                            locale: a
                        })
                    }, t.getMonth())
                })
            })
        }
        function tM(t) {
            var e, n = t.displayMonth, r = ty(), i = r.fromDate, o = r.toDate, a = r.locale, l = r.styles, u = r.classNames, d = r.components, c = r.formatters.formatYearCaption, h = r.labels.labelYearDropdown, f = [];
            if (!i || !o)
                return (0,
                s.jsx)(s.Fragment, {});
            for (var p = i.getFullYear(), m = o.getFullYear(), v = p; v <= m; v++)
                f.push(K(w(new Date), v));
            var g = null !== (e = null == d ? void 0 : d.Dropdown) && void 0 !== e ? e : tw;
            return (0,
            s.jsx)(g, {
                name: "years",
                "aria-label": h(),
                className: u.dropdown_year,
                style: l.dropdown_year,
                onChange: function(e) {
                    var r = K(q(n), Number(e.target.value));
                    t.onChange(r)
                },
                value: n.getFullYear(),
                caption: c(n, {
                    locale: a
                }),
                children: f.map(function(t) {
                    return (0,
                    s.jsx)("option", {
                        value: t.getFullYear(),
                        children: c(t, {
                            locale: a
                        })
                    }, t.getFullYear())
                })
            })
        }
        var tk = (0,
        a.createContext)(void 0);
        function tS(t) {
            var e, n, r, i, o, l, u, d, c, h, f, p, m, g, y, b, x = ty(), w = (y = (r = (n = e = ty()).month,
            i = n.defaultMonth,
            o = n.today,
            l = r || i || o || new Date,
            u = n.toDate,
            d = n.fromDate,
            c = n.numberOfMonths,
            u && 0 > Q(u, l) && (l = J(u, -1 * ((void 0 === c ? 1 : c) - 1))),
            d && 0 > Q(l, d) && (l = d),
            h = q(l),
            f = e.month,
            m = (p = (0,
            a.useState)(h))[0],
            g = [void 0 === f ? m : f, p[1]])[0],
            b = g[1],
            [y, function(t) {
                if (!e.disableNavigation) {
                    var n, r = q(t);
                    b(r),
                    null === (n = e.onMonthChange) || void 0 === n || n.call(e, r)
                }
            }
            ]), P = w[0], M = w[1], k = function(t, e) {
                for (var n = e.reverseMonths, r = e.numberOfMonths, i = q(t), o = Q(q(J(i, r)), i), s = [], a = 0; a < o; a++) {
                    var l = J(i, a);
                    s.push(l)
                }
                return n && (s = s.reverse()),
                s
            }(P, x), S = function(t, e) {
                if (!e.disableNavigation) {
                    var n = e.toDate
                      , r = e.pagedNavigation
                      , i = e.numberOfMonths
                      , o = void 0 === i ? 1 : i
                      , s = q(t);
                    if (!n || !(Q(n, t) < o))
                        return J(s, r ? o : 1)
                }
            }(P, x), T = function(t, e) {
                if (!e.disableNavigation) {
                    var n = e.fromDate
                      , r = e.pagedNavigation
                      , i = e.numberOfMonths
                      , o = q(t);
                    if (!n || !(0 >= Q(o, n)))
                        return J(o, -(r ? void 0 === i ? 1 : i : 1))
                }
            }(P, x), C = function(t) {
                return k.some(function(e) {
                    return tt(t, e)
                })
            };
            return (0,
            s.jsx)(tk.Provider, {
                value: {
                    currentMonth: P,
                    displayMonths: k,
                    goToMonth: M,
                    goToDate: function(t, e) {
                        if (!C(t))
                            e && +v(t) < +v(e) ? M(J(t, 1 + -1 * x.numberOfMonths)) : M(t)
                    },
                    previousMonth: T,
                    nextMonth: S,
                    isDateDisplayed: C
                },
                children: t.children
            })
        }
        function tT() {
            var t = (0,
            a.useContext)(tk);
            if (!t)
                throw Error("useNavigation must be used within a NavigationProvider");
            return t
        }
        function tC(t) {
            var e, n = ty(), r = n.classNames, i = n.styles, o = n.components, a = tT().goToMonth, l = function(e) {
                a(J(e, t.displayIndex ? -t.displayIndex : 0))
            }, u = null !== (e = null == o ? void 0 : o.CaptionLabel) && void 0 !== e ? e : tb, d = (0,
            s.jsx)(u, {
                id: t.id,
                displayMonth: t.displayMonth
            });
            return (0,
            s.jsxs)("div", {
                className: r.caption_dropdowns,
                style: i.caption_dropdowns,
                children: [(0,
                s.jsx)("div", {
                    className: r.vhidden,
                    children: d
                }), (0,
                s.jsx)(tP, {
                    onChange: l,
                    displayMonth: t.displayMonth
                }), (0,
                s.jsx)(tM, {
                    onChange: l,
                    displayMonth: t.displayMonth
                })]
            })
        }
        function tD(t) {
            return (0,
            s.jsx)("svg", tl({
                width: "16px",
                height: "16px",
                viewBox: "0 0 120 120"
            }, t, {
                children: (0,
                s.jsx)("path", {
                    d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
                    fill: "currentColor",
                    fillRule: "nonzero"
                })
            }))
        }
        function tj(t) {
            return (0,
            s.jsx)("svg", tl({
                width: "16px",
                height: "16px",
                viewBox: "0 0 120 120"
            }, t, {
                children: (0,
                s.jsx)("path", {
                    d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
                    fill: "currentColor"
                })
            }))
        }
        var tA = (0,
        a.forwardRef)(function(t, e) {
            var n = ty()
              , r = n.classNames
              , i = n.styles
              , o = [r.button_reset, r.button];
            t.className && o.push(t.className);
            var a = o.join(" ")
              , l = tl(tl({}, i.button_reset), i.button);
            return t.style && Object.assign(l, t.style),
            (0,
            s.jsx)("button", tl({}, t, {
                ref: e,
                type: "button",
                className: a,
                style: l
            }))
        });
        function tE(t) {
            var e, n, r = ty(), i = r.dir, o = r.locale, a = r.classNames, l = r.styles, u = r.labels, d = u.labelPrevious, c = u.labelNext, h = r.components;
            if (!t.nextMonth && !t.previousMonth)
                return (0,
                s.jsx)(s.Fragment, {});
            var f = d(t.previousMonth, {
                locale: o
            })
              , p = [a.nav_button, a.nav_button_previous].join(" ")
              , m = c(t.nextMonth, {
                locale: o
            })
              , v = [a.nav_button, a.nav_button_next].join(" ")
              , g = null !== (e = null == h ? void 0 : h.IconRight) && void 0 !== e ? e : tj
              , y = null !== (n = null == h ? void 0 : h.IconLeft) && void 0 !== n ? n : tD;
            return (0,
            s.jsxs)("div", {
                className: a.nav,
                style: l.nav,
                children: [!t.hidePrevious && (0,
                s.jsx)(tA, {
                    name: "previous-month",
                    "aria-label": f,
                    className: p,
                    style: l.nav_button_previous,
                    disabled: !t.previousMonth,
                    onClick: t.onPreviousClick,
                    children: "rtl" === i ? (0,
                    s.jsx)(g, {
                        className: a.nav_icon,
                        style: l.nav_icon
                    }) : (0,
                    s.jsx)(y, {
                        className: a.nav_icon,
                        style: l.nav_icon
                    })
                }), !t.hideNext && (0,
                s.jsx)(tA, {
                    name: "next-month",
                    "aria-label": m,
                    className: v,
                    style: l.nav_button_next,
                    disabled: !t.nextMonth,
                    onClick: t.onNextClick,
                    children: "rtl" === i ? (0,
                    s.jsx)(y, {
                        className: a.nav_icon,
                        style: l.nav_icon
                    }) : (0,
                    s.jsx)(g, {
                        className: a.nav_icon,
                        style: l.nav_icon
                    })
                })]
            })
        }
        function tN(t) {
            var e = ty().numberOfMonths
              , n = tT()
              , r = n.previousMonth
              , i = n.nextMonth
              , o = n.goToMonth
              , a = n.displayMonths
              , l = a.findIndex(function(e) {
                return tt(t.displayMonth, e)
            })
              , u = 0 === l
              , d = l === a.length - 1;
            return (0,
            s.jsx)(tE, {
                displayMonth: t.displayMonth,
                hideNext: e > 1 && (u || !d),
                hidePrevious: e > 1 && (d || !u),
                nextMonth: i,
                previousMonth: r,
                onPreviousClick: function() {
                    r && o(r)
                },
                onNextClick: function() {
                    i && o(i)
                }
            })
        }
        function tV(t) {
            var e, n, r = ty(), i = r.classNames, o = r.disableNavigation, a = r.styles, l = r.captionLayout, u = r.components, d = null !== (e = null == u ? void 0 : u.CaptionLabel) && void 0 !== e ? e : tb;
            return n = o ? (0,
            s.jsx)(d, {
                id: t.id,
                displayMonth: t.displayMonth
            }) : "dropdown" === l ? (0,
            s.jsx)(tC, {
                displayMonth: t.displayMonth,
                id: t.id
            }) : "dropdown-buttons" === l ? (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(tC, {
                    displayMonth: t.displayMonth,
                    displayIndex: t.displayIndex,
                    id: t.id
                }), (0,
                s.jsx)(tN, {
                    displayMonth: t.displayMonth,
                    displayIndex: t.displayIndex,
                    id: t.id
                })]
            }) : (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(d, {
                    id: t.id,
                    displayMonth: t.displayMonth,
                    displayIndex: t.displayIndex
                }), (0,
                s.jsx)(tN, {
                    displayMonth: t.displayMonth,
                    id: t.id
                })]
            }),
            (0,
            s.jsx)("div", {
                className: i.caption,
                style: a.caption,
                children: n
            })
        }
        function tL(t) {
            var e = ty()
              , n = e.footer
              , r = e.styles
              , i = e.classNames.tfoot;
            return n ? (0,
            s.jsx)("tfoot", {
                className: i,
                style: r.tfoot,
                children: (0,
                s.jsx)("tr", {
                    children: (0,
                    s.jsx)("td", {
                        colSpan: 8,
                        children: n
                    })
                })
            }) : (0,
            s.jsx)(s.Fragment, {})
        }
        function tR() {
            var t = ty()
              , e = t.classNames
              , n = t.styles
              , r = t.showWeekNumber
              , i = t.locale
              , o = t.weekStartsOn
              , a = t.ISOWeek
              , l = t.formatters.formatWeekdayName
              , u = t.labels.labelWeekday
              , d = function(t, e, n) {
                for (var r = n ? M(new Date) : P(new Date, {
                    locale: t,
                    weekStartsOn: e
                }), i = [], o = 0; o < 7; o++) {
                    var s = te(r, o);
                    i.push(s)
                }
                return i
            }(i, o, a);
            return (0,
            s.jsxs)("tr", {
                style: n.head_row,
                className: e.head_row,
                children: [r && (0,
                s.jsx)("td", {
                    style: n.head_cell,
                    className: e.head_cell
                }), d.map(function(t, r) {
                    return (0,
                    s.jsx)("th", {
                        scope: "col",
                        className: e.head_cell,
                        style: n.head_cell,
                        "aria-label": u(t, {
                            locale: i
                        }),
                        children: l(t, {
                            locale: i
                        })
                    }, r)
                })]
            })
        }
        function tO() {
            var t, e = ty(), n = e.classNames, r = e.styles, i = e.components, o = null !== (t = null == i ? void 0 : i.HeadRow) && void 0 !== t ? t : tR;
            return (0,
            s.jsx)("thead", {
                style: r.head,
                className: n.head,
                children: (0,
                s.jsx)(o, {})
            })
        }
        function tF(t) {
            var e = ty()
              , n = e.locale
              , r = e.formatters.formatDay;
            return (0,
            s.jsx)(s.Fragment, {
                children: r(t.date, {
                    locale: n
                })
            })
        }
        var tW = (0,
        a.createContext)(void 0);
        function t_(t) {
            return td(t.initialProps) ? (0,
            s.jsx)(tB, {
                initialProps: t.initialProps,
                children: t.children
            }) : (0,
            s.jsx)(tW.Provider, {
                value: {
                    selected: void 0,
                    modifiers: {
                        disabled: []
                    }
                },
                children: t.children
            })
        }
        function tB(t) {
            var e = t.initialProps
              , n = t.children
              , r = e.selected
              , i = e.min
              , o = e.max
              , a = {
                disabled: []
            };
            return r && a.disabled.push(function(t) {
                var e = o && r.length > o - 1
                  , n = r.some(function(e) {
                    return tn(e, t)
                });
                return !!(e && !n)
            }),
            (0,
            s.jsx)(tW.Provider, {
                value: {
                    selected: r,
                    onDayClick: function(t, n, s) {
                        if (null === (a = e.onDayClick) || void 0 === a || a.call(e, t, n, s),
                        (!n.selected || !i || (null == r ? void 0 : r.length) !== i) && (n.selected || !o || (null == r ? void 0 : r.length) !== o)) {
                            var a, l, u = r ? tu([], r, !0) : [];
                            if (n.selected) {
                                var d = u.findIndex(function(e) {
                                    return tn(t, e)
                                });
                                u.splice(d, 1)
                            } else
                                u.push(t);
                            null === (l = e.onSelect) || void 0 === l || l.call(e, u, t, n, s)
                        }
                    },
                    modifiers: a
                },
                children: n
            })
        }
        function tI() {
            var t = (0,
            a.useContext)(tW);
            if (!t)
                throw Error("useSelectMultiple must be used within a SelectMultipleProvider");
            return t
        }
        var tz = (0,
        a.createContext)(void 0);
        function tY(t) {
            return tc(t.initialProps) ? (0,
            s.jsx)(tU, {
                initialProps: t.initialProps,
                children: t.children
            }) : (0,
            s.jsx)(tz.Provider, {
                value: {
                    selected: void 0,
                    modifiers: {
                        range_start: [],
                        range_end: [],
                        range_middle: [],
                        disabled: []
                    }
                },
                children: t.children
            })
        }
        function tU(t) {
            var e = t.initialProps
              , n = t.children
              , r = e.selected
              , i = r || {}
              , o = i.from
              , a = i.to
              , l = e.min
              , u = e.max
              , d = {
                range_start: [],
                range_end: [],
                range_middle: [],
                disabled: []
            };
            if (o ? (d.range_start = [o],
            a ? (d.range_end = [a],
            tn(o, a) || (d.range_middle = [{
                after: o,
                before: a
            }])) : d.range_end = [o]) : a && (d.range_start = [a],
            d.range_end = [a]),
            l && (o && !a && d.disabled.push({
                after: te(o, -(l - 1)),
                before: te(o, l - 1)
            }),
            o && a && d.disabled.push({
                after: o,
                before: te(o, l - 1)
            }),
            !o && a && d.disabled.push({
                after: te(a, -(l - 1)),
                before: te(a, l - 1)
            })),
            u) {
                if (o && !a && (d.disabled.push({
                    before: te(o, -u + 1)
                }),
                d.disabled.push({
                    after: te(o, u - 1)
                })),
                o && a) {
                    var c = u - (b(a, o) + 1);
                    d.disabled.push({
                        before: te(o, -c)
                    }),
                    d.disabled.push({
                        after: te(a, c)
                    })
                }
                !o && a && (d.disabled.push({
                    before: te(a, -u + 1)
                }),
                d.disabled.push({
                    after: te(a, u - 1)
                }))
            }
            return (0,
            s.jsx)(tz.Provider, {
                value: {
                    selected: r,
                    onDayClick: function(t, n, i) {
                        null === (o = e.onDayClick) || void 0 === o || o.call(e, t, n, i);
                        var o, s, a = function(t, e) {
                            var n = e || {}
                              , r = n.from
                              , i = n.to;
                            return r && i ? tn(i, t) && tn(r, t) ? void 0 : tn(i, t) ? {
                                from: i,
                                to: void 0
                            } : tn(r, t) ? void 0 : tr(r, t) ? {
                                from: t,
                                to: i
                            } : {
                                from: r,
                                to: t
                            } : i ? tr(t, i) ? {
                                from: i,
                                to: t
                            } : {
                                from: t,
                                to: i
                            } : r ? +v(t) < +v(r) ? {
                                from: t,
                                to: r
                            } : {
                                from: r,
                                to: t
                            } : {
                                from: t,
                                to: void 0
                            }
                        }(t, r);
                        null === (s = e.onSelect) || void 0 === s || s.call(e, a, t, n, i)
                    },
                    modifiers: d
                },
                children: n
            })
        }
        function t$() {
            var t = (0,
            a.useContext)(tz);
            if (!t)
                throw Error("useSelectRange must be used within a SelectRangeProvider");
            return t
        }
        function tH(t) {
            return Array.isArray(t) ? tu([], t, !0) : void 0 !== t ? [t] : []
        }
        (i = o || (o = {})).Outside = "outside",
        i.Disabled = "disabled",
        i.Selected = "selected",
        i.Hidden = "hidden",
        i.Today = "today",
        i.RangeStart = "range_start",
        i.RangeEnd = "range_end",
        i.RangeMiddle = "range_middle";
        var tX = o.Selected
          , tq = o.Disabled
          , tG = o.Hidden
          , tZ = o.Today
          , tK = o.RangeEnd
          , tQ = o.RangeMiddle
          , tJ = o.RangeStart
          , t0 = o.Outside
          , t1 = (0,
        a.createContext)(void 0);
        function t2(t) {
            var e, n, r, i = ty(), o = tI(), a = t$(), l = ((e = {})[tX] = tH(i.selected),
            e[tq] = tH(i.disabled),
            e[tG] = tH(i.hidden),
            e[tZ] = [i.today],
            e[tK] = [],
            e[tQ] = [],
            e[tJ] = [],
            e[t0] = [],
            i.fromDate && e[tq].push({
                before: i.fromDate
            }),
            i.toDate && e[tq].push({
                after: i.toDate
            }),
            td(i) ? e[tq] = e[tq].concat(o.modifiers[tq]) : tc(i) && (e[tq] = e[tq].concat(a.modifiers[tq]),
            e[tJ] = a.modifiers[tJ],
            e[tQ] = a.modifiers[tQ],
            e[tK] = a.modifiers[tK]),
            e), u = (n = i.modifiers,
            r = {},
            Object.entries(n).forEach(function(t) {
                var e = t[0]
                  , n = t[1];
                r[e] = tH(n)
            }),
            r), d = tl(tl({}, l), u);
            return (0,
            s.jsx)(t1.Provider, {
                value: d,
                children: t.children
            })
        }
        function t5() {
            var t = (0,
            a.useContext)(t1);
            if (!t)
                throw Error("useModifiers must be used within a ModifiersProvider");
            return t
        }
        function t4(t, e, n) {
            var r = Object.keys(e).reduce(function(n, r) {
                return e[r].some(function(e) {
                    if ("boolean" == typeof e)
                        return e;
                    if (I(e))
                        return tn(t, e);
                    if (Array.isArray(e) && e.every(I))
                        return e.includes(t);
                    if (e && "object" == typeof e && "from"in e)
                        return r = e.from,
                        i = e.to,
                        r && i ? (0 > b(i, r) && (r = (n = [i, r])[0],
                        i = n[1]),
                        b(t, r) >= 0 && b(i, t) >= 0) : i ? tn(i, t) : !!r && tn(r, t);
                    if (e && "object" == typeof e && "dayOfWeek"in e)
                        return e.dayOfWeek.includes(t.getDay());
                    if (e && "object" == typeof e && "before"in e && "after"in e) {
                        var n, r, i, o = b(e.before, t), s = b(e.after, t), a = o > 0, l = s < 0;
                        return tr(e.before, e.after) ? l && a : a || l
                    }
                    return e && "object" == typeof e && "after"in e ? b(t, e.after) > 0 : e && "object" == typeof e && "before"in e ? b(e.before, t) > 0 : "function" == typeof e && e(t)
                }) && n.push(r),
                n
            }, [])
              , i = {};
            return r.forEach(function(t) {
                return i[t] = !0
            }),
            n && !tt(t, n) && (i.outside = !0),
            i
        }
        var t3 = (0,
        a.createContext)(void 0);
        function t6(t) {
            var e = tT()
              , n = t5()
              , r = (0,
            a.useState)()
              , i = r[0]
              , o = r[1]
              , l = (0,
            a.useState)()
              , u = l[0]
              , d = l[1]
              , c = function(t, e) {
                for (var n, r, i = q(t[0]), o = G(t[t.length - 1]), s = i; s <= o; ) {
                    var a = t4(s, e);
                    if (!(!a.disabled && !a.hidden)) {
                        s = te(s, 1);
                        continue
                    }
                    if (a.selected)
                        return s;
                    a.today && !r && (r = s),
                    n || (n = s),
                    s = te(s, 1)
                }
                return r || n
            }(e.displayMonths, n)
              , h = (null != i ? i : u && e.isDateDisplayed(u)) ? u : c
              , f = function(t) {
                o(t)
            }
              , p = ty()
              , m = function(t, r) {
                if (i) {
                    var o = function t(e, n) {
                        var r = n.moveBy
                          , i = n.direction
                          , o = n.context
                          , s = n.modifiers
                          , a = n.retry
                          , l = void 0 === a ? {
                            count: 0,
                            lastFocused: e
                        } : a
                          , u = o.weekStartsOn
                          , d = o.fromDate
                          , c = o.toDate
                          , h = o.locale
                          , f = ({
                            day: te,
                            week: ti,
                            month: J,
                            year: to,
                            startOfWeek: function(t) {
                                return o.ISOWeek ? M(t) : P(t, {
                                    locale: h,
                                    weekStartsOn: u
                                })
                            },
                            endOfWeek: function(t) {
                                return o.ISOWeek ? ta(t) : ts(t, {
                                    locale: h,
                                    weekStartsOn: u
                                })
                            }
                        })[r](e, "after" === i ? 1 : -1);
                        if ("before" === i && d) {
                            let t;
                            [d, f].forEach(function(e) {
                                let n = v(e);
                                (void 0 === t || t < n || isNaN(Number(n))) && (t = n)
                            }),
                            f = t || new Date(NaN)
                        } else if ("after" === i && c) {
                            let t;
                            [c, f].forEach(e => {
                                let n = v(e);
                                (!t || t > n || isNaN(+n)) && (t = n)
                            }
                            ),
                            f = t || new Date(NaN)
                        }
                        var p = !0;
                        if (s) {
                            var m = t4(f, s);
                            p = !m.disabled && !m.hidden
                        }
                        return p ? f : l.count > 365 ? l.lastFocused : t(f, {
                            moveBy: r,
                            direction: i,
                            context: o,
                            modifiers: s,
                            retry: tl(tl({}, l), {
                                count: l.count + 1
                            })
                        })
                    }(i, {
                        moveBy: t,
                        direction: r,
                        context: p,
                        modifiers: n
                    });
                    tn(i, o) || (e.goToDate(o, i),
                    f(o))
                }
            };
            return (0,
            s.jsx)(t3.Provider, {
                value: {
                    focusedDay: i,
                    focusTarget: h,
                    blur: function() {
                        d(i),
                        o(void 0)
                    },
                    focus: f,
                    focusDayAfter: function() {
                        return m("day", "after")
                    },
                    focusDayBefore: function() {
                        return m("day", "before")
                    },
                    focusWeekAfter: function() {
                        return m("week", "after")
                    },
                    focusWeekBefore: function() {
                        return m("week", "before")
                    },
                    focusMonthBefore: function() {
                        return m("month", "before")
                    },
                    focusMonthAfter: function() {
                        return m("month", "after")
                    },
                    focusYearBefore: function() {
                        return m("year", "before")
                    },
                    focusYearAfter: function() {
                        return m("year", "after")
                    },
                    focusStartOfWeek: function() {
                        return m("startOfWeek", "before")
                    },
                    focusEndOfWeek: function() {
                        return m("endOfWeek", "after")
                    }
                },
                children: t.children
            })
        }
        function t8() {
            var t = (0,
            a.useContext)(t3);
            if (!t)
                throw Error("useFocusContext must be used within a FocusProvider");
            return t
        }
        var t9 = (0,
        a.createContext)(void 0);
        function t7(t) {
            return th(t.initialProps) ? (0,
            s.jsx)(et, {
                initialProps: t.initialProps,
                children: t.children
            }) : (0,
            s.jsx)(t9.Provider, {
                value: {
                    selected: void 0
                },
                children: t.children
            })
        }
        function et(t) {
            var e = t.initialProps
              , n = t.children
              , r = {
                selected: e.selected,
                onDayClick: function(t, n, r) {
                    var i, o, s;
                    if (null === (i = e.onDayClick) || void 0 === i || i.call(e, t, n, r),
                    n.selected && !e.required) {
                        null === (o = e.onSelect) || void 0 === o || o.call(e, void 0, t, n, r);
                        return
                    }
                    null === (s = e.onSelect) || void 0 === s || s.call(e, t, t, n, r)
                }
            };
            return (0,
            s.jsx)(t9.Provider, {
                value: r,
                children: n
            })
        }
        function ee() {
            var t = (0,
            a.useContext)(t9);
            if (!t)
                throw Error("useSelectSingle must be used within a SelectSingleProvider");
            return t
        }
        function en(t) {
            var e, n, r, i, l, u, d, c, h, f, p, m, v, g, y, b, x, w, P, M, k, S, T, C, D, j, A, E, N, V, L, R, O, F, W, _, B, I, z, Y, U, $, H = (0,
            a.useRef)(null), X = (e = t.date,
            n = t.displayMonth,
            u = ty(),
            d = t8(),
            c = t4(e, t5(), n),
            h = ty(),
            f = ee(),
            p = tI(),
            m = t$(),
            g = (v = t8()).focusDayAfter,
            y = v.focusDayBefore,
            b = v.focusWeekAfter,
            x = v.focusWeekBefore,
            w = v.blur,
            P = v.focus,
            M = v.focusMonthBefore,
            k = v.focusMonthAfter,
            S = v.focusYearBefore,
            T = v.focusYearAfter,
            C = v.focusStartOfWeek,
            D = v.focusEndOfWeek,
            j = {
                onClick: function(t) {
                    var n, r, i, o;
                    th(h) ? null === (n = f.onDayClick) || void 0 === n || n.call(f, e, c, t) : td(h) ? null === (r = p.onDayClick) || void 0 === r || r.call(p, e, c, t) : tc(h) ? null === (i = m.onDayClick) || void 0 === i || i.call(m, e, c, t) : null === (o = h.onDayClick) || void 0 === o || o.call(h, e, c, t)
                },
                onFocus: function(t) {
                    var n;
                    P(e),
                    null === (n = h.onDayFocus) || void 0 === n || n.call(h, e, c, t)
                },
                onBlur: function(t) {
                    var n;
                    w(),
                    null === (n = h.onDayBlur) || void 0 === n || n.call(h, e, c, t)
                },
                onKeyDown: function(t) {
                    var n;
                    switch (t.key) {
                    case "ArrowLeft":
                        t.preventDefault(),
                        t.stopPropagation(),
                        "rtl" === h.dir ? g() : y();
                        break;
                    case "ArrowRight":
                        t.preventDefault(),
                        t.stopPropagation(),
                        "rtl" === h.dir ? y() : g();
                        break;
                    case "ArrowDown":
                        t.preventDefault(),
                        t.stopPropagation(),
                        b();
                        break;
                    case "ArrowUp":
                        t.preventDefault(),
                        t.stopPropagation(),
                        x();
                        break;
                    case "PageUp":
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.shiftKey ? S() : M();
                        break;
                    case "PageDown":
                        t.preventDefault(),
                        t.stopPropagation(),
                        t.shiftKey ? T() : k();
                        break;
                    case "Home":
                        t.preventDefault(),
                        t.stopPropagation(),
                        C();
                        break;
                    case "End":
                        t.preventDefault(),
                        t.stopPropagation(),
                        D()
                    }
                    null === (n = h.onDayKeyDown) || void 0 === n || n.call(h, e, c, t)
                },
                onKeyUp: function(t) {
                    var n;
                    null === (n = h.onDayKeyUp) || void 0 === n || n.call(h, e, c, t)
                },
                onMouseEnter: function(t) {
                    var n;
                    null === (n = h.onDayMouseEnter) || void 0 === n || n.call(h, e, c, t)
                },
                onMouseLeave: function(t) {
                    var n;
                    null === (n = h.onDayMouseLeave) || void 0 === n || n.call(h, e, c, t)
                },
                onPointerEnter: function(t) {
                    var n;
                    null === (n = h.onDayPointerEnter) || void 0 === n || n.call(h, e, c, t)
                },
                onPointerLeave: function(t) {
                    var n;
                    null === (n = h.onDayPointerLeave) || void 0 === n || n.call(h, e, c, t)
                },
                onTouchCancel: function(t) {
                    var n;
                    null === (n = h.onDayTouchCancel) || void 0 === n || n.call(h, e, c, t)
                },
                onTouchEnd: function(t) {
                    var n;
                    null === (n = h.onDayTouchEnd) || void 0 === n || n.call(h, e, c, t)
                },
                onTouchMove: function(t) {
                    var n;
                    null === (n = h.onDayTouchMove) || void 0 === n || n.call(h, e, c, t)
                },
                onTouchStart: function(t) {
                    var n;
                    null === (n = h.onDayTouchStart) || void 0 === n || n.call(h, e, c, t)
                }
            },
            A = ty(),
            E = ee(),
            N = tI(),
            V = t$(),
            L = th(A) ? E.selected : td(A) ? N.selected : tc(A) ? V.selected : void 0,
            R = !!(u.onDayClick || "default" !== u.mode),
            (0,
            a.useEffect)(function() {
                var t;
                !c.outside && d.focusedDay && R && tn(d.focusedDay, e) && (null === (t = H.current) || void 0 === t || t.focus())
            }, [d.focusedDay, e, H, R, c.outside]),
            F = (O = [u.classNames.day],
            Object.keys(c).forEach(function(t) {
                var e = u.modifiersClassNames[t];
                if (e)
                    O.push(e);
                else if (Object.values(o).includes(t)) {
                    var n = u.classNames["day_".concat(t)];
                    n && O.push(n)
                }
            }),
            O).join(" "),
            W = tl({}, u.styles.day),
            Object.keys(c).forEach(function(t) {
                var e;
                W = tl(tl({}, W), null === (e = u.modifiersStyles) || void 0 === e ? void 0 : e[t])
            }),
            _ = W,
            B = !!(c.outside && !u.showOutsideDays || c.hidden),
            I = null !== (l = null === (i = u.components) || void 0 === i ? void 0 : i.DayContent) && void 0 !== l ? l : tF,
            z = {
                style: _,
                className: F,
                children: (0,
                s.jsx)(I, {
                    date: e,
                    displayMonth: n,
                    activeModifiers: c
                }),
                role: "gridcell"
            },
            Y = d.focusTarget && tn(d.focusTarget, e) && !c.outside,
            U = d.focusedDay && tn(d.focusedDay, e),
            $ = tl(tl(tl({}, z), ((r = {
                disabled: c.disabled,
                role: "gridcell"
            })["aria-selected"] = c.selected,
            r.tabIndex = U || Y ? 0 : -1,
            r)), j),
            {
                isButton: R,
                isHidden: B,
                activeModifiers: c,
                selectedDays: L,
                buttonProps: $,
                divProps: z
            });
            return X.isHidden ? (0,
            s.jsx)("div", {
                role: "gridcell"
            }) : X.isButton ? (0,
            s.jsx)(tA, tl({
                name: "day",
                ref: H
            }, X.buttonProps)) : (0,
            s.jsx)("div", tl({}, X.divProps))
        }
        function er(t) {
            var e = t.number
              , n = t.dates
              , r = ty()
              , i = r.onWeekNumberClick
              , o = r.styles
              , a = r.classNames
              , l = r.locale
              , u = r.labels.labelWeekNumber
              , d = (0,
            r.formatters.formatWeekNumber)(Number(e), {
                locale: l
            });
            if (!i)
                return (0,
                s.jsx)("span", {
                    className: a.weeknumber,
                    style: o.weeknumber,
                    children: d
                });
            var c = u(Number(e), {
                locale: l
            });
            return (0,
            s.jsx)(tA, {
                name: "week-number",
                "aria-label": c,
                className: a.weeknumber,
                style: o.weeknumber,
                onClick: function(t) {
                    i(e, n, t)
                },
                children: d
            })
        }
        function ei(t) {
            var e, n, r, i = ty(), o = i.styles, a = i.classNames, l = i.showWeekNumber, u = i.components, d = null !== (e = null == u ? void 0 : u.Day) && void 0 !== e ? e : en, c = null !== (n = null == u ? void 0 : u.WeekNumber) && void 0 !== n ? n : er;
            return l && (r = (0,
            s.jsx)("td", {
                className: a.cell,
                style: o.cell,
                children: (0,
                s.jsx)(c, {
                    number: t.weekNumber,
                    dates: t.dates
                })
            })),
            (0,
            s.jsxs)("tr", {
                className: a.row,
                style: o.row,
                children: [r, t.dates.map(function(e) {
                    return (0,
                    s.jsx)("td", {
                        className: a.cell,
                        style: o.cell,
                        role: "presentation",
                        children: (0,
                        s.jsx)(d, {
                            displayMonth: t.displayMonth,
                            date: e
                        })
                    }, Math.trunc(+v(e) / 1e3))
                })]
            })
        }
        function eo(t, e, n) {
            for (var r = (null == n ? void 0 : n.ISOWeek) ? ta(e) : ts(e, n), i = (null == n ? void 0 : n.ISOWeek) ? M(t) : P(t, n), o = b(r, i), s = [], a = 0; a <= o; a++)
                s.push(te(i, a));
            return s.reduce(function(t, e) {
                var r = (null == n ? void 0 : n.ISOWeek) ? S(e) : C(e, n)
                  , i = t.find(function(t) {
                    return t.weekNumber === r
                });
                return i ? i.dates.push(e) : t.push({
                    weekNumber: r,
                    dates: [e]
                }),
                t
            }, [])
        }
        function es(t) {
            var e, n, r, i = ty(), o = i.locale, a = i.classNames, l = i.styles, u = i.hideHead, d = i.fixedWeeks, c = i.components, h = i.weekStartsOn, f = i.firstWeekContainsDate, p = i.ISOWeek, m = function(t, e) {
                var n = eo(q(t), G(t), e);
                if (null == e ? void 0 : e.useFixedWeeks) {
                    var r = function(t, e, n) {
                        let r = P(t, n)
                          , i = P(e, n);
                        return Math.round((+r - y(r) - (+i - y(i))) / 6048e5)
                    }(function(t) {
                        let e = v(t)
                          , n = e.getMonth();
                        return e.setFullYear(e.getFullYear(), n + 1, 0),
                        e.setHours(0, 0, 0, 0),
                        e
                    }(t), q(t), e) + 1;
                    if (r < 6) {
                        var i = n[n.length - 1]
                          , o = i.dates[i.dates.length - 1]
                          , s = ti(o, 6 - r)
                          , a = eo(ti(o, 1), s, e);
                        n.push.apply(n, a)
                    }
                }
                return n
            }(t.displayMonth, {
                useFixedWeeks: !!d,
                ISOWeek: p,
                locale: o,
                weekStartsOn: h,
                firstWeekContainsDate: f
            }), g = null !== (e = null == c ? void 0 : c.Head) && void 0 !== e ? e : tO, b = null !== (n = null == c ? void 0 : c.Row) && void 0 !== n ? n : ei, x = null !== (r = null == c ? void 0 : c.Footer) && void 0 !== r ? r : tL;
            return (0,
            s.jsxs)("table", {
                id: t.id,
                className: a.table,
                style: l.table,
                role: "grid",
                "aria-labelledby": t["aria-labelledby"],
                children: [!u && (0,
                s.jsx)(g, {}), (0,
                s.jsx)("tbody", {
                    className: a.tbody,
                    style: l.tbody,
                    children: m.map(function(e) {
                        return (0,
                        s.jsx)(b, {
                            displayMonth: t.displayMonth,
                            dates: e.dates,
                            weekNumber: e.weekNumber
                        }, e.weekNumber)
                    })
                }), (0,
                s.jsx)(x, {
                    displayMonth: t.displayMonth
                })]
            })
        }
        var ea = "undefined" != typeof window && window.document && window.document.createElement ? a.useLayoutEffect : a.useEffect
          , el = !1
          , eu = 0;
        function ed() {
            return "react-day-picker-".concat(++eu)
        }
        function ec(t) {
            var e, n, r, i, o, l, u, d, c = ty(), h = c.dir, f = c.classNames, p = c.styles, m = c.components, v = tT().displayMonths, g = (r = null != (e = c.id ? "".concat(c.id, "-").concat(t.displayIndex) : void 0) ? e : el ? ed() : null,
            o = (i = (0,
            a.useState)(r))[0],
            l = i[1],
            ea(function() {
                null === o && l(ed())
            }, []),
            (0,
            a.useEffect)(function() {
                !1 === el && (el = !0)
            }, []),
            null !== (n = null != e ? e : o) && void 0 !== n ? n : void 0), y = c.id ? "".concat(c.id, "-grid-").concat(t.displayIndex) : void 0, b = [f.month], x = p.month, w = 0 === t.displayIndex, P = t.displayIndex === v.length - 1, M = !w && !P;
            "rtl" === h && (P = (u = [w, P])[0],
            w = u[1]),
            w && (b.push(f.caption_start),
            x = tl(tl({}, x), p.caption_start)),
            P && (b.push(f.caption_end),
            x = tl(tl({}, x), p.caption_end)),
            M && (b.push(f.caption_between),
            x = tl(tl({}, x), p.caption_between));
            var k = null !== (d = null == m ? void 0 : m.Caption) && void 0 !== d ? d : tV;
            return (0,
            s.jsxs)("div", {
                className: b.join(" "),
                style: x,
                children: [(0,
                s.jsx)(k, {
                    id: g,
                    displayMonth: t.displayMonth,
                    displayIndex: t.displayIndex
                }), (0,
                s.jsx)(es, {
                    id: y,
                    "aria-labelledby": g,
                    displayMonth: t.displayMonth
                })]
            }, t.displayIndex)
        }
        function eh(t) {
            var e = ty()
              , n = e.classNames
              , r = e.styles;
            return (0,
            s.jsx)("div", {
                className: n.months,
                style: r.months,
                children: t.children
            })
        }
        function ef(t) {
            var e, n, r = t.initialProps, i = ty(), o = t8(), l = tT(), u = (0,
            a.useState)(!1), d = u[0], c = u[1];
            (0,
            a.useEffect)(function() {
                i.initialFocus && o.focusTarget && (d || (o.focus(o.focusTarget),
                c(!0)))
            }, [i.initialFocus, d, o.focus, o.focusTarget, o]);
            var h = [i.classNames.root, i.className];
            i.numberOfMonths > 1 && h.push(i.classNames.multiple_months),
            i.showWeekNumber && h.push(i.classNames.with_weeknumber);
            var f = tl(tl({}, i.styles.root), i.style)
              , p = Object.keys(r).filter(function(t) {
                return t.startsWith("data-")
            }).reduce(function(t, e) {
                var n;
                return tl(tl({}, t), ((n = {})[e] = r[e],
                n))
            }, {})
              , m = null !== (n = null === (e = r.components) || void 0 === e ? void 0 : e.Months) && void 0 !== n ? n : eh;
            return (0,
            s.jsx)("div", tl({
                className: h.join(" "),
                style: f,
                dir: i.dir,
                id: i.id,
                nonce: r.nonce,
                title: r.title,
                lang: r.lang
            }, p, {
                children: (0,
                s.jsx)(m, {
                    children: l.displayMonths.map(function(t, e) {
                        return (0,
                        s.jsx)(ec, {
                            displayIndex: e,
                            displayMonth: t
                        }, e)
                    })
                })
            }))
        }
        function ep(t) {
            var e = t.children
              , n = function(t, e) {
                var n = {};
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
                        0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                return n
            }(t, ["children"]);
            return (0,
            s.jsx)(tg, {
                initialProps: n,
                children: (0,
                s.jsx)(tS, {
                    children: (0,
                    s.jsx)(t7, {
                        initialProps: n,
                        children: (0,
                        s.jsx)(t_, {
                            initialProps: n,
                            children: (0,
                            s.jsx)(tY, {
                                initialProps: n,
                                children: (0,
                                s.jsx)(t2, {
                                    children: (0,
                                    s.jsx)(t6, {
                                        children: e
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }
        function em(t) {
            return (0,
            s.jsx)(ep, tl({}, t, {
                children: (0,
                s.jsx)(ef, {
                    initialProps: t
                })
            }))
        }
    },
    8514: function(t, e, n) {
        n.d(e, {
            g7: function() {
                return o
            }
        });
        var r = n(5754)
          , i = n(6232)
          , o = r.forwardRef( (t, e) => {
            let {children: n, ...o} = t
              , a = r.Children.toArray(n)
              , u = a.find(l);
            if (u) {
                let t = u.props.children
                  , n = a.map(e => e !== u ? e : r.Children.count(t) > 1 ? r.Children.only(null) : r.isValidElement(t) ? t.props.children : null);
                return (0,
                i.jsx)(s, {
                    ...o,
                    ref: e,
                    children: r.isValidElement(t) ? r.cloneElement(t, void 0, n) : null
                })
            }
            return (0,
            i.jsx)(s, {
                ...o,
                ref: e,
                children: n
            })
        }
        );
        o.displayName = "Slot";
        var s = r.forwardRef( (t, e) => {
            let {children: n, ...i} = t;
            if (r.isValidElement(n)) {
                let t, o;
                let s = (t = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) && "isReactWarning"in t && t.isReactWarning ? n.ref : (t = Object.getOwnPropertyDescriptor(n, "ref")?.get) && "isReactWarning"in t && t.isReactWarning ? n.props.ref : n.props.ref || n.ref;
                return r.cloneElement(n, {
                    ...function(t, e) {
                        let n = {
                            ...e
                        };
                        for (let r in e) {
                            let i = t[r]
                              , o = e[r];
                            /^on[A-Z]/.test(r) ? i && o ? n[r] = (...t) => {
                                o(...t),
                                i(...t)
                            }
                            : i && (n[r] = i) : "style" === r ? n[r] = {
                                ...i,
                                ...o
                            } : "className" === r && (n[r] = [i, o].filter(Boolean).join(" "))
                        }
                        return {
                            ...t,
                            ...n
                        }
                    }(i, n.props),
                    ref: e ? function(...t) {
                        return e => t.forEach(t => {
                            "function" == typeof t ? t(e) : null != t && (t.current = e)
                        }
                        )
                    }(e, s) : s
                })
            }
            return r.Children.count(n) > 1 ? r.Children.only(null) : null
        }
        );
        s.displayName = "SlotClone";
        var a = ({children: t}) => (0,
        i.jsx)(i.Fragment, {
            children: t
        });
        function l(t) {
            return r.isValidElement(t) && t.type === a
        }
    },
    4773: function(t, e, n) {
        n.d(e, {
            _: function() {
                return r
            }
        });
        function r(t, e) {
            return e || (e = t.slice(0)),
            Object.freeze(Object.defineProperties(t, {
                raw: {
                    value: Object.freeze(e)
                }
            }))
        }
    },
    2672: function(t, e, n) {
        n.d(e, {
            j: function() {
                return o
            }
        });
        let r = t => "boolean" == typeof t ? "".concat(t) : 0 === t ? "0" : t
          , i = function() {
            for (var t, e, n = 0, r = ""; n < arguments.length; )
                (t = arguments[n++]) && (e = function t(e) {
                    var n, r, i = "";
                    if ("string" == typeof e || "number" == typeof e)
                        i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e))
                            for (n = 0; n < e.length; n++)
                                e[n] && (r = t(e[n])) && (i && (i += " "),
                                i += r);
                        else
                            for (n in e)
                                e[n] && (i && (i += " "),
                                i += n)
                    }
                    return i
                }(t)) && (r && (r += " "),
                r += e);
            return r
        }
          , o = (t, e) => n => {
            var o;
            if ((null == e ? void 0 : e.variants) == null)
                return i(t, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
            let {variants: s, defaultVariants: a} = e
              , l = Object.keys(s).map(t => {
                let e = null == n ? void 0 : n[t]
                  , i = null == a ? void 0 : a[t];
                if (null === e)
                    return null;
                let o = r(e) || r(i);
                return s[t][o]
            }
            )
              , u = n && Object.entries(n).reduce( (t, e) => {
                let[n,r] = e;
                return void 0 === r || (t[n] = r),
                t
            }
            , {});
            return i(t, l, null == e ? void 0 : null === (o = e.compoundVariants) || void 0 === o ? void 0 : o.reduce( (t, e) => {
                let {class: n, className: r, ...i} = e;
                return Object.entries(i).every(t => {
                    let[e,n] = t;
                    return Array.isArray(n) ? n.includes({
                        ...a,
                        ...u
                    }[e]) : ({
                        ...a,
                        ...u
                    })[e] === n
                }
                ) ? [...t, n, r] : t
            }
            , []), null == n ? void 0 : n.class, null == n ? void 0 : n.className)
        }
    },
    3341: function(t, e, n) {
        n.d(e, {
            W: function() {
                return r
            }
        });
        function r() {
            for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++)
                (t = arguments[n]) && (e = function t(e) {
                    var n, r, i = "";
                    if ("string" == typeof e || "number" == typeof e)
                        i += e;
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            var o = e.length;
                            for (n = 0; n < o; n++)
                                e[n] && (r = t(e[n])) && (i && (i += " "),
                                i += r)
                        } else
                            for (r in e)
                                e[r] && (i && (i += " "),
                                i += r)
                    }
                    return i
                }(t)) && (r && (r += " "),
                r += e);
            return r
        }
    },
    1008: function(t, e, n) {
        n.d(e, {
            M: function() {
                return y
            }
        });
        var r = n(6232)
          , i = n(5754)
          , o = n(5423);
        function s() {
            let t = (0,
            i.useRef)(!1);
            return (0,
            o.L)( () => (t.current = !0,
            () => {
                t.current = !1
            }
            ), []),
            t
        }
        var a = n(3068)
          , l = n(6013)
          , u = n(5291)
          , d = n(4233);
        class c extends i.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = this.props.sizeRef.current;
                    t.height = e.offsetHeight || 0,
                    t.width = e.offsetWidth || 0,
                    t.top = e.offsetTop,
                    t.left = e.offsetLeft
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function h({children: t, isPresent: e}) {
            let n = (0,
            i.useId)()
              , o = (0,
            i.useRef)(null)
              , s = (0,
            i.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            })
              , {nonce: a} = (0,
            i.useContext)(d._);
            return (0,
            i.useInsertionEffect)( () => {
                let {width: t, height: r, top: i, left: l} = s.current;
                if (e || !o.current || !t || !r)
                    return;
                o.current.dataset.motionPopId = n;
                let u = document.createElement("style");
                return a && (u.nonce = a),
                document.head.appendChild(u),
                u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),
                () => {
                    document.head.removeChild(u)
                }
            }
            , [e]),
            (0,
            r.jsx)(c, {
                isPresent: e,
                childRef: o,
                sizeRef: s,
                children: i.cloneElement(t, {
                    ref: o
                })
            })
        }
        let f = ({children: t, initial: e, isPresent: n, onExitComplete: o, custom: s, presenceAffectsLayout: a, mode: d}) => {
            let c = (0,
            u.h)(p)
              , f = (0,
            i.useId)()
              , m = (0,
            i.useMemo)( () => ({
                id: f,
                initial: e,
                isPresent: n,
                custom: s,
                onExitComplete: t => {
                    for (let e of (c.set(t, !0),
                    c.values()))
                        if (!e)
                            return;
                    o && o()
                }
                ,
                register: t => (c.set(t, !1),
                () => c.delete(t))
            }), a ? [Math.random()] : [n]);
            return (0,
            i.useMemo)( () => {
                c.forEach( (t, e) => c.set(e, !1))
            }
            , [n]),
            i.useEffect( () => {
                n || c.size || !o || o()
            }
            , [n]),
            "popLayout" === d && (t = (0,
            r.jsx)(h, {
                isPresent: n,
                children: t
            })),
            (0,
            r.jsx)(l.O.Provider, {
                value: m,
                children: t
            })
        }
        ;
        function p() {
            return new Map
        }
        var m = n(8224)
          , v = n(9186);
        let g = t => t.key || ""
          , y = ({children: t, custom: e, initial: n=!0, onExitComplete: l, exitBeforeEnter: u, presenceAffectsLayout: d=!0, mode: c="sync"}) => {
            var h;
            (0,
            v.k)(!u, "Replace exitBeforeEnter with mode='wait'");
            let p = (0,
            i.useContext)(m.p).forceRender || function() {
                let t = s()
                  , [e,n] = (0,
                i.useState)(0)
                  , r = (0,
                i.useCallback)( () => {
                    t.current && n(e + 1)
                }
                , [e]);
                return [(0,
                i.useCallback)( () => a.Wi.postRender(r), [r]), e]
            }()[0]
              , y = s()
              , b = function(t) {
                let e = [];
                return i.Children.forEach(t, t => {
                    (0,
                    i.isValidElement)(t) && e.push(t)
                }
                ),
                e
            }(t)
              , x = b
              , w = (0,
            i.useRef)(new Map).current
              , P = (0,
            i.useRef)(x)
              , M = (0,
            i.useRef)(new Map).current
              , k = (0,
            i.useRef)(!0);
            if ((0,
            o.L)( () => {
                k.current = !1,
                function(t, e) {
                    t.forEach(t => {
                        let n = g(t);
                        e.set(n, t)
                    }
                    )
                }(b, M),
                P.current = x
            }
            ),
            h = () => {
                k.current = !0,
                M.clear(),
                w.clear()
            }
            ,
            (0,
            i.useEffect)( () => () => h(), []),
            k.current)
                return (0,
                r.jsx)(r.Fragment, {
                    children: x.map(t => (0,
                    r.jsx)(f, {
                        isPresent: !0,
                        initial: !!n && void 0,
                        presenceAffectsLayout: d,
                        mode: c,
                        children: t
                    }, g(t)))
                });
            x = [...x];
            let S = P.current.map(g)
              , T = b.map(g)
              , C = S.length;
            for (let t = 0; t < C; t++) {
                let e = S[t];
                -1 !== T.indexOf(e) || w.has(e) || w.set(e, void 0)
            }
            return "wait" === c && w.size && (x = []),
            w.forEach( (t, n) => {
                if (-1 !== T.indexOf(n))
                    return;
                let i = M.get(n);
                if (!i)
                    return;
                let o = S.indexOf(n)
                  , s = t;
                s || (s = (0,
                r.jsx)(f, {
                    isPresent: !1,
                    onExitComplete: () => {
                        w.delete(n);
                        let t = Array.from(M.keys()).filter(t => !T.includes(t));
                        if (t.forEach(t => M.delete(t)),
                        P.current = b.filter(e => {
                            let r = g(e);
                            return r === n || t.includes(r)
                        }
                        ),
                        !w.size) {
                            if (!1 === y.current)
                                return;
                            p(),
                            l && l()
                        }
                    }
                    ,
                    custom: e,
                    presenceAffectsLayout: d,
                    mode: c,
                    children: i
                }, g(i)),
                w.set(n, s)),
                x.splice(o, 0, s)
            }
            ),
            x = x.map(t => {
                let e = t.key;
                return w.has(e) ? t : (0,
                r.jsx)(f, {
                    isPresent: !0,
                    presenceAffectsLayout: d,
                    mode: c,
                    children: t
                }, g(t))
            }
            ),
            (0,
            r.jsx)(r.Fragment, {
                children: w.size ? x : x.map(t => (0,
                i.cloneElement)(t))
            })
        }
    },
    8224: function(t, e, n) {
        n.d(e, {
            p: function() {
                return r
            }
        });
        let r = (0,
        n(5754).createContext)({})
    },
    4233: function(t, e, n) {
        n.d(e, {
            _: function() {
                return r
            }
        });
        let r = (0,
        n(5754).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    6013: function(t, e, n) {
        n.d(e, {
            O: function() {
                return r
            }
        });
        let r = (0,
        n(5754).createContext)(null)
    },
    632: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return s
            }
        });
        var r = n(4425);
        class i {
            constructor() {
                this.order = [],
                this.scheduled = new Set
            }
            add(t) {
                if (!this.scheduled.has(t))
                    return this.scheduled.add(t),
                    this.order.push(t),
                    !0
            }
            remove(t) {
                let e = this.order.indexOf(t);
                -1 !== e && (this.order.splice(e, 1),
                this.scheduled.delete(t))
            }
            clear() {
                this.order.length = 0,
                this.scheduled.clear()
            }
        }
        let o = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        function s(t, e) {
            let n = !1
              , s = !0
              , a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = () => n = !0
              , u = o.reduce( (t, e) => (t[e] = function(t) {
                let e = new i
                  , n = new i
                  , r = 0
                  , o = !1
                  , s = !1
                  , a = new WeakSet
                  , l = {
                    schedule: (t, i=!1, s=!1) => {
                        let l = s && o
                          , u = l ? e : n;
                        return i && a.add(t),
                        u.add(t) && l && o && (r = e.order.length),
                        t
                    }
                    ,
                    cancel: t => {
                        n.remove(t),
                        a.delete(t)
                    }
                    ,
                    process: i => {
                        if (o) {
                            s = !0;
                            return
                        }
                        if (o = !0,
                        [e,n] = [n, e],
                        n.clear(),
                        r = e.order.length)
                            for (let n = 0; n < r; n++) {
                                let r = e.order[n];
                                a.has(r) && (l.schedule(r),
                                t()),
                                r(i)
                            }
                        o = !1,
                        s && (s = !1,
                        l.process(i))
                    }
                };
                return l
            }(l),
            t), {})
              , {read: d, resolveKeyframes: c, update: h, preRender: f, render: p, postRender: m} = u
              , v = () => {
                let i = r.c.useManualTiming ? a.timestamp : performance.now();
                n = !1,
                a.delta = s ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, 40), 1),
                a.timestamp = i,
                a.isProcessing = !0,
                d.process(a),
                c.process(a),
                h.process(a),
                f.process(a),
                p.process(a),
                m.process(a),
                a.isProcessing = !1,
                n && e && (s = !1,
                t(v))
            }
              , g = () => {
                n = !0,
                s = !0,
                a.isProcessing || t(v)
            }
            ;
            return {
                schedule: o.reduce( (t, e) => {
                    let r = u[e];
                    return t[e] = (t, e=!1, i=!1) => (n || g(),
                    r.schedule(t, e, i)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < o.length; e++)
                        u[o[e]].cancel(t)
                }
                ,
                state: a,
                steps: u
            }
        }
    },
    3068: function(t, e, n) {
        n.d(e, {
            Pn: function() {
                return o
            },
            S6: function() {
                return a
            },
            Wi: function() {
                return i
            },
            frameData: function() {
                return s
            }
        });
        var r = n(5249);
        let {schedule: i, cancel: o, state: s, steps: a} = (0,
        n(632).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : r.Z, !0)
    },
    7779: function(t, e, n) {
        let r;
        n.d(e, {
            X: function() {
                return a
            }
        });
        var i = n(4425)
          , o = n(3068);
        function s() {
            r = void 0
        }
        let a = {
            now: () => (void 0 === r && a.set(o.frameData.isProcessing || i.c.useManualTiming ? o.frameData.timestamp : performance.now()),
            r),
            set: t => {
                r = t,
                queueMicrotask(s)
            }
        }
    },
    4606: function(t, e, n) {
        n.d(e, {
            E: function() {
                return i6
            }
        });
        var r, i = n(6232), o = n(5754), s = n(4233);
        let a = (0,
        o.createContext)({});
        var l = n(6013)
          , u = n(5423);
        let d = (0,
        o.createContext)({
            strict: !1
        })
          , c = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , h = "data-" + c("framerAppearId")
          , {schedule: f, cancel: p} = (0,
        n(632).Z)(queueMicrotask, !1);
        function m(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        let v = (0,
        o.createContext)({})
          , g = !1;
        function y() {
            window.HandoffComplete = !0
        }
        function b(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function x(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        let w = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , P = ["initial", ...w];
        function M(t) {
            return x(t.animate) || P.some(e => b(t[e]))
        }
        function k(t) {
            return !!(M(t) || t.variants)
        }
        function S(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let T = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , C = {};
        for (let t in T)
            C[t] = {
                isEnabled: e => T[t].some(t => !!e[t])
            };
        var D = n(8551)
          , j = n(8224);
        let A = Symbol.for("motionComponentSymbol")
          , E = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function N(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (E.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        let V = {}
          , L = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , R = new Set(L);
        function O(t, {layout: e, layoutId: n}) {
            return R.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!V[t] || "opacity" === t)
        }
        var F = n(6674);
        let W = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , _ = L.length
          , B = t => e => "string" == typeof e && e.startsWith(t)
          , I = B("--")
          , z = B("var(--")
          , Y = t => !!z(t) && U.test(t.split("/*")[0].trim())
          , U = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
          , $ = (t, e) => e && "number" == typeof t ? e.transform(t) : t
          , H = (t, e, n) => n > e ? e : n < t ? t : n
          , X = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , q = {
            ...X,
            transform: t => H(0, 1, t)
        }
          , G = {
            ...X,
            default: 1
        }
          , Z = t => Math.round(1e5 * t) / 1e5
          , K = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , Q = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , J = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
        function tt(t) {
            return "string" == typeof t
        }
        let te = t => ({
            test: e => tt(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , tn = te("deg")
          , tr = te("%")
          , ti = te("px")
          , to = te("vh")
          , ts = te("vw")
          , ta = {
            ...tr,
            parse: t => tr.parse(t) / 100,
            transform: t => tr.transform(100 * t)
        }
          , tl = {
            ...X,
            transform: Math.round
        }
          , tu = {
            borderWidth: ti,
            borderTopWidth: ti,
            borderRightWidth: ti,
            borderBottomWidth: ti,
            borderLeftWidth: ti,
            borderRadius: ti,
            radius: ti,
            borderTopLeftRadius: ti,
            borderTopRightRadius: ti,
            borderBottomRightRadius: ti,
            borderBottomLeftRadius: ti,
            width: ti,
            maxWidth: ti,
            height: ti,
            maxHeight: ti,
            size: ti,
            top: ti,
            right: ti,
            bottom: ti,
            left: ti,
            padding: ti,
            paddingTop: ti,
            paddingRight: ti,
            paddingBottom: ti,
            paddingLeft: ti,
            margin: ti,
            marginTop: ti,
            marginRight: ti,
            marginBottom: ti,
            marginLeft: ti,
            rotate: tn,
            rotateX: tn,
            rotateY: tn,
            rotateZ: tn,
            scale: G,
            scaleX: G,
            scaleY: G,
            scaleZ: G,
            skew: tn,
            skewX: tn,
            skewY: tn,
            distance: ti,
            translateX: ti,
            translateY: ti,
            translateZ: ti,
            x: ti,
            y: ti,
            z: ti,
            perspective: ti,
            transformPerspective: ti,
            opacity: q,
            originX: ta,
            originY: ta,
            originZ: ti,
            zIndex: tl,
            backgroundPositionX: ti,
            backgroundPositionY: ti,
            fillOpacity: q,
            strokeOpacity: q,
            numOctaves: tl
        };
        function td(t, e, n, r) {
            let {style: i, vars: o, transform: s, transformOrigin: a} = t
              , l = !1
              , u = !1
              , d = !0;
            for (let t in e) {
                let n = e[t];
                if (I(t)) {
                    o[t] = n;
                    continue
                }
                let r = tu[t]
                  , c = $(n, r);
                if (R.has(t)) {
                    if (l = !0,
                    s[t] = c,
                    !d)
                        continue;
                    n !== (r.default || 0) && (d = !1)
                } else
                    t.startsWith("origin") ? (u = !0,
                    a[t] = c) : i[t] = c
            }
            if (!e.transform && (l || r ? i.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, r, i) {
                let o = "";
                for (let e = 0; e < _; e++) {
                    let n = L[e];
                    if (void 0 !== t[n]) {
                        let e = W[n] || n;
                        o += `${e}(${t[n]}) `
                    }
                }
                return e && !t.z && (o += "translateZ(0)"),
                o = o.trim(),
                i ? o = i(t, r ? "" : o) : n && r && (o = "none"),
                o
            }(t.transform, n, d, r) : i.transform && (i.transform = "none")),
            u) {
                let {originX: t="50%", originY: e="50%", originZ: n=0} = a;
                i.transformOrigin = `${t} ${e} ${n}`
            }
        }
        let tc = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function th(t, e, n) {
            for (let r in e)
                (0,
                F.i)(e[r]) || O(r, n) || (t[r] = e[r])
        }
        let tf = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function tp(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || tf.has(t)
        }
        let tm = t => !tp(t);
        try {
            (r = require("@emotion/is-prop-valid").default) && (tm = t => t.startsWith("on") ? !tp(t) : r(t))
        } catch (t) {}
        function tv(t, e, n) {
            return "string" == typeof t ? t : ti.transform(e + n * t)
        }
        let tg = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , ty = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function tb(t, {attrX: e, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, d, c, h) {
            if (td(t, u, d, h),
            c) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: f, style: p, dimensions: m} = t;
            f.transform && (m && (p.transform = f.transform),
            delete f.transform),
            m && (void 0 !== i || void 0 !== o || p.transform) && (p.transformOrigin = function(t, e, n) {
                let r = tv(e, t.x, t.width)
                  , i = tv(n, t.y, t.height);
                return `${r} ${i}`
            }(m, void 0 !== i ? i : .5, void 0 !== o ? o : .5)),
            void 0 !== e && (f.x = e),
            void 0 !== n && (f.y = n),
            void 0 !== r && (f.scale = r),
            void 0 !== s && function(t, e, n=1, r=0, i=!0) {
                t.pathLength = 1;
                let o = i ? tg : ty;
                t[o.offset] = ti.transform(-r);
                let s = ti.transform(e)
                  , a = ti.transform(n);
                t[o.array] = `${s} ${a}`
            }(f, s, a, l, !1)
        }
        let tx = () => ({
            ...tc(),
            attrs: {}
        })
          , tw = t => "string" == typeof t && "svg" === t.toLowerCase();
        function tP(t, {style: e, vars: n}, r, i) {
            for (let o in Object.assign(t.style, e, i && i.getProjectionStyles(r)),
            n)
                t.style.setProperty(o, n[o])
        }
        let tM = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function tk(t, e, n, r) {
            for (let n in tP(t, e, void 0, r),
            e.attrs)
                t.setAttribute(tM.has(n) ? n : c(n), e.attrs[n])
        }
        function tS(t, e, n) {
            var r;
            let {style: i} = t
              , o = {};
            for (let s in i)
                ((0,
                F.i)(i[s]) || e.style && (0,
                F.i)(e.style[s]) || O(s, t) || (null === (r = null == n ? void 0 : n.getValue(s)) || void 0 === r ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
            return o
        }
        function tT(t, e, n) {
            let r = tS(t, e, n);
            for (let n in t)
                ((0,
                F.i)(t[n]) || (0,
                F.i)(e[n])) && (r[-1 !== L.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
            return r
        }
        function tC(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach( (t, n) => {
                e[0][n] = t.get(),
                e[1][n] = t.getVelocity()
            }
            ),
            e
        }
        function tD(t, e, n, r) {
            if ("function" == typeof e) {
                let[i,o] = tC(r);
                e = e(void 0 !== n ? n : t.custom, i, o)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e) {
                let[i,o] = tC(r);
                e = e(void 0 !== n ? n : t.custom, i, o)
            }
            return e
        }
        var tj = n(5291);
        let tA = t => Array.isArray(t)
          , tE = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , tN = t => tA(t) ? t[t.length - 1] || 0 : t;
        function tV(t) {
            let e = (0,
            F.i)(t) ? t.get() : t;
            return tE(e) ? e.toValue() : e
        }
        let tL = t => (e, n) => {
            let r = (0,
            o.useContext)(a)
              , i = (0,
            o.useContext)(l.O)
              , s = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, r, i, o) {
                let s = {
                    latestValues: function(t, e, n, r) {
                        let i = {}
                          , o = r(t, {});
                        for (let t in o)
                            i[t] = tV(o[t]);
                        let {initial: s, animate: a} = t
                          , l = M(t)
                          , u = k(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial),
                        void 0 === a && (a = e.animate));
                        let d = !!n && !1 === n.initial
                          , c = (d = d || !1 === s) ? a : s;
                        return c && "boolean" != typeof c && !x(c) && (Array.isArray(c) ? c : [c]).forEach(e => {
                            let n = tD(t, e);
                            if (!n)
                                return;
                            let {transitionEnd: r, transition: o, ...s} = n;
                            for (let t in s) {
                                let e = s[t];
                                if (Array.isArray(e)) {
                                    let t = d ? e.length - 1 : 0;
                                    e = e[t]
                                }
                                null !== e && (i[t] = e)
                            }
                            for (let t in r)
                                i[t] = r[t]
                        }
                        ),
                        i
                    }(r, i, o, t),
                    renderState: e()
                };
                return n && (s.mount = t => n(r, t, s)),
                s
            }
            )(t, e, r, i);
            return n ? s() : (0,
            tj.h)(s)
        }
        ;
        var tR = n(3068);
        let tO = {
            useVisualState: tL({
                scrapeMotionValuesFromProps: tT,
                createRenderState: tx,
                onMount: (t, e, {renderState: n, latestValues: r}) => {
                    tR.Wi.read( () => {
                        try {
                            n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                        } catch (t) {
                            n.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    ),
                    tR.Wi.render( () => {
                        tb(n, r, {
                            enableHardwareAcceleration: !1
                        }, tw(e.tagName), t.transformTemplate),
                        tk(e, n)
                    }
                    )
                }
            })
        }
          , tF = {
            useVisualState: tL({
                scrapeMotionValuesFromProps: tS,
                createRenderState: tc
            })
        };
        function tW(t, e, n, r={
            passive: !0
        }) {
            return t.addEventListener(e, n, r),
            () => t.removeEventListener(e, n)
        }
        let t_ = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
        function tB(t, e="page") {
            return {
                point: {
                    x: t[`${e}X`],
                    y: t[`${e}Y`]
                }
            }
        }
        let tI = t => e => t_(e) && t(e, tB(e));
        function tz(t, e, n, r) {
            return tW(t, e, tI(n), r)
        }
        let tY = (t, e) => n => e(t(n))
          , tU = (...t) => t.reduce(tY);
        function t$(t) {
            let e = null;
            return () => null === e && (e = t,
            () => {
                e = null
            }
            )
        }
        let tH = t$("dragHorizontal")
          , tX = t$("dragVertical");
        function tq(t) {
            let e = !1;
            if ("y" === t)
                e = tX();
            else if ("x" === t)
                e = tH();
            else {
                let t = tH()
                  , n = tX();
                t && n ? e = () => {
                    t(),
                    n()
                }
                : (t && t(),
                n && n())
            }
            return e
        }
        function tG() {
            let t = tq(!0);
            return !t || (t(),
            !1)
        }
        class tZ {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        function tK(t, e) {
            let n = e ? "onHoverStart" : "onHoverEnd";
            return tz(t.current, e ? "pointerenter" : "pointerleave", (r, i) => {
                if ("touch" === r.pointerType || tG())
                    return;
                let o = t.getProps();
                t.animationState && o.whileHover && t.animationState.setActive("whileHover", e);
                let s = o[n];
                s && tR.Wi.postRender( () => s(r, i))
            }
            , {
                passive: !t.getProps()[n]
            })
        }
        class tQ extends tZ {
            mount() {
                this.unmount = tU(tK(this.node, !0), tK(this.node, !1))
            }
            unmount() {}
        }
        class tJ extends tZ {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = tU(tW(this.node.current, "focus", () => this.onFocus()), tW(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        let t0 = (t, e) => !!e && (t === e || t0(t, e.parentElement));
        var t1 = n(5249);
        function t2(t, e) {
            if (!e)
                return;
            let n = new PointerEvent("pointer" + t);
            e(n, tB(n))
        }
        class t5 extends tZ {
            constructor() {
                super(...arguments),
                this.removeStartListeners = t1.Z,
                this.removeEndListeners = t1.Z,
                this.removeAccessibleListeners = t1.Z,
                this.startPointerPress = (t, e) => {
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    let n = this.node.getProps()
                      , r = tz(window, "pointerup", (t, e) => {
                        if (!this.checkPressEnd())
                            return;
                        let {onTap: n, onTapCancel: r, globalTapTarget: i} = this.node.getProps()
                          , o = i || t0(this.node.current, t.target) ? n : r;
                        o && tR.Wi.update( () => o(t, e))
                    }
                    , {
                        passive: !(n.onTap || n.onPointerUp)
                    })
                      , i = tz(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                        passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                    this.removeEndListeners = tU(r, i),
                    this.startPress(t, e)
                }
                ,
                this.startAccessiblePress = () => {
                    let t = tW(this.node.current, "keydown", t => {
                        "Enter" !== t.key || this.isPressing || (this.removeEndListeners(),
                        this.removeEndListeners = tW(this.node.current, "keyup", t => {
                            "Enter" === t.key && this.checkPressEnd() && t2("up", (t, e) => {
                                let {onTap: n} = this.node.getProps();
                                n && tR.Wi.postRender( () => n(t, e))
                            }
                            )
                        }
                        ),
                        t2("down", (t, e) => {
                            this.startPress(t, e)
                        }
                        ))
                    }
                    )
                      , e = tW(this.node.current, "blur", () => {
                        this.isPressing && t2("cancel", (t, e) => this.cancelPress(t, e))
                    }
                    );
                    this.removeAccessibleListeners = tU(t, e)
                }
            }
            startPress(t, e) {
                this.isPressing = !0;
                let {onTapStart: n, whileTap: r} = this.node.getProps();
                r && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                n && tR.Wi.postRender( () => n(t, e))
            }
            checkPressEnd() {
                return this.removeEndListeners(),
                this.isPressing = !1,
                this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !tG()
            }
            cancelPress(t, e) {
                if (!this.checkPressEnd())
                    return;
                let {onTapCancel: n} = this.node.getProps();
                n && tR.Wi.postRender( () => n(t, e))
            }
            mount() {
                let t = this.node.getProps()
                  , e = tz(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                })
                  , n = tW(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tU(e, n)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
        let t4 = new WeakMap
          , t3 = new WeakMap
          , t6 = t => {
            let e = t4.get(t.target);
            e && e(t)
        }
          , t8 = t => {
            t.forEach(t6)
        }
          , t9 = {
            some: 0,
            all: 1
        };
        class t7 extends tZ {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: n, amount: r="some", once: i} = t
                  , o = {
                    root: e ? e.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof r ? r : t9[r]
                };
                return function(t, e, n) {
                    let r = function({root: t, ...e}) {
                        let n = t || document;
                        t3.has(n) || t3.set(n, {});
                        let r = t3.get(n)
                          , i = JSON.stringify(e);
                        return r[i] || (r[i] = new IntersectionObserver(t8,{
                            root: t,
                            ...e
                        })),
                        r[i]
                    }(e);
                    return t4.set(t, n),
                    r.observe(t),
                    () => {
                        t4.delete(t),
                        r.unobserve(t)
                    }
                }(this.node.current, o, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    i && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: n, onViewportLeave: r} = this.node.getProps()
                      , o = e ? n : r;
                    o && o(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return n => t[n] !== e[n]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        function et(t, e) {
            if (!Array.isArray(e))
                return !1;
            let n = e.length;
            if (n !== t.length)
                return !1;
            for (let r = 0; r < n; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        function ee(t, e, n) {
            let r = t.getProps();
            return tD(r, e, void 0 !== n ? n : r.custom, t)
        }
        let en = t => 1e3 * t
          , er = t => t / 1e3
          , ei = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , eo = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , es = {
            type: "keyframes",
            duration: .8
        }
          , ea = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , el = (t, {keyframes: e}) => e.length > 2 ? es : R.has(t) ? t.startsWith("scale") ? eo(e[1]) : ei : ea;
        function eu(t, e) {
            return t[e] || t.default || t
        }
        var ed = n(4425);
        let ec = {
            current: !1
        }
          , eh = t => null !== t;
        function ef(t, {repeat: e, repeatType: n="loop"}, r) {
            let i = t.filter(eh)
              , o = e && "loop" !== n && e % 2 == 1 ? 0 : i.length - 1;
            return o && void 0 !== r ? r : i[o]
        }
        var ep = n(7779);
        let em = t => /^0[^.\s]+$/u.test(t);
        var ev = n(9186);
        let eg = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
          , ey = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , eb = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
          , ex = t => t === X || t === ti
          , ew = (t, e) => parseFloat(t.split(", ")[e])
          , eP = (t, e) => (n, {transform: r}) => {
            if ("none" === r || !r)
                return 0;
            let i = r.match(/^matrix3d\((.+)\)$/u);
            if (i)
                return ew(i[1], e);
            {
                let e = r.match(/^matrix\((.+)\)$/u);
                return e ? ew(e[1], t) : 0
            }
        }
          , eM = new Set(["x", "y", "z"])
          , ek = L.filter(t => !eM.has(t))
          , eS = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: eP(4, 13),
            y: eP(5, 14)
        };
        eS.translateX = eS.x,
        eS.translateY = eS.y;
        let eT = t => e => e.test(t)
          , eC = [X, ti, tr, tn, ts, to, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , eD = t => eC.find(eT(t))
          , ej = new Set
          , eA = !1
          , eE = !1;
        function eN() {
            if (eE) {
                let t = Array.from(ej).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , n = new Map;
                e.forEach(t => {
                    let e = function(t) {
                        let e = [];
                        return ek.forEach(n => {
                            let r = t.getValue(n);
                            void 0 !== r && (e.push([n, r.get()]),
                            r.set(n.startsWith("scale") ? 1 : 0))
                        }
                        ),
                        e
                    }(t);
                    e.length && (n.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = n.get(t);
                    e && e.forEach( ([e,n]) => {
                        var r;
                        null === (r = t.getValue(e)) || void 0 === r || r.set(n)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            eE = !1,
            eA = !1,
            ej.forEach(t => t.complete()),
            ej.clear()
        }
        function eV() {
            ej.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (eE = !0)
            }
            )
        }
        class eL {
            constructor(t, e, n, r, i, o=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = n,
                this.motionValue = r,
                this.element = i,
                this.isAsync = o
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (ej.add(this),
                eA || (eA = !0,
                tR.Wi.read(eV),
                tR.Wi.resolveKeyframes(eN))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: n, motionValue: r} = this;
                for (let i = 0; i < t.length; i++)
                    if (null === t[i]) {
                        if (0 === i) {
                            let i = null == r ? void 0 : r.get()
                              , o = t[t.length - 1];
                            if (void 0 !== i)
                                t[0] = i;
                            else if (n && e) {
                                let r = n.readValue(e, o);
                                null != r && (t[0] = r)
                            }
                            void 0 === t[0] && (t[0] = o),
                            r && void 0 === i && r.set(t[0])
                        } else
                            t[i] = t[i - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                ej.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                ej.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
        let eR = (t, e) => n => !!(tt(n) && J.test(n) && n.startsWith(t) || e && null != n && Object.prototype.hasOwnProperty.call(n, e))
          , eO = (t, e, n) => r => {
            if (!tt(r))
                return r;
            let[i,o,s,a] = r.match(K);
            return {
                [t]: parseFloat(i),
                [e]: parseFloat(o),
                [n]: parseFloat(s),
                alpha: void 0 !== a ? parseFloat(a) : 1
            }
        }
          , eF = t => H(0, 255, t)
          , eW = {
            ...X,
            transform: t => Math.round(eF(t))
        }
          , e_ = {
            test: eR("rgb", "red"),
            parse: eO("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: r=1}) => "rgba(" + eW.transform(t) + ", " + eW.transform(e) + ", " + eW.transform(n) + ", " + Z(q.transform(r)) + ")"
        }
          , eB = {
            test: eR("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , r = ""
                  , i = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                n = t.substring(3, 5),
                r = t.substring(5, 7),
                i = t.substring(7, 9)) : (e = t.substring(1, 2),
                n = t.substring(2, 3),
                r = t.substring(3, 4),
                i = t.substring(4, 5),
                e += e,
                n += n,
                r += r,
                i += i),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: e_.transform
        }
          , eI = {
            test: eR("hsl", "hue"),
            parse: eO("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: r=1}) => "hsla(" + Math.round(t) + ", " + tr.transform(Z(e)) + ", " + tr.transform(Z(n)) + ", " + Z(q.transform(r)) + ")"
        }
          , ez = {
            test: t => e_.test(t) || eB.test(t) || eI.test(t),
            parse: t => e_.test(t) ? e_.parse(t) : eI.test(t) ? eI.parse(t) : eB.parse(t),
            transform: t => tt(t) ? t : t.hasOwnProperty("red") ? e_.transform(t) : eI.transform(t)
        }
          , eY = "number"
          , eU = "color"
          , e$ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function eH(t) {
            let e = t.toString()
              , n = []
              , r = {
                color: [],
                number: [],
                var: []
            }
              , i = []
              , o = 0
              , s = e.replace(e$, t => (ez.test(t) ? (r.color.push(o),
            i.push(eU),
            n.push(ez.parse(t))) : t.startsWith("var(") ? (r.var.push(o),
            i.push("var"),
            n.push(t)) : (r.number.push(o),
            i.push(eY),
            n.push(parseFloat(t))),
            ++o,
            "${}")).split("${}");
            return {
                values: n,
                split: s,
                indexes: r,
                types: i
            }
        }
        function eX(t) {
            return eH(t).values
        }
        function eq(t) {
            let {split: e, types: n} = eH(t)
              , r = e.length;
            return t => {
                let i = "";
                for (let o = 0; o < r; o++)
                    if (i += e[o],
                    void 0 !== t[o]) {
                        let e = n[o];
                        e === eY ? i += Z(t[o]) : e === eU ? i += ez.transform(t[o]) : i += t[o]
                    }
                return i
            }
        }
        let eG = t => "number" == typeof t ? 0 : t
          , eZ = {
            test: function(t) {
                var e, n;
                return isNaN(t) && tt(t) && ((null === (e = t.match(K)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(Q)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: eX,
            createTransformer: eq,
            getAnimatableNone: function(t) {
                let e = eX(t);
                return eq(t)(e.map(eG))
            }
        }
          , eK = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function eQ(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[r] = n.match(K) || [];
            if (!r)
                return t;
            let i = n.replace(r, "")
              , o = eK.has(e) ? 1 : 0;
            return r !== n && (o *= 100),
            e + "(" + o + i + ")"
        }
        let eJ = /\b([a-z-]*)\(.*?\)/gu
          , e0 = {
            ...eZ,
            getAnimatableNone: t => {
                let e = t.match(eJ);
                return e ? e.map(eQ).join(" ") : t
            }
        }
          , e1 = {
            ...tu,
            color: ez,
            backgroundColor: ez,
            outlineColor: ez,
            fill: ez,
            stroke: ez,
            borderColor: ez,
            borderTopColor: ez,
            borderRightColor: ez,
            borderBottomColor: ez,
            borderLeftColor: ez,
            filter: e0,
            WebkitFilter: e0
        }
          , e2 = t => e1[t];
        function e5(t, e) {
            let n = e2(t);
            return n !== e0 && (n = eZ),
            n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        }
        let e4 = new Set(["auto", "none", "0"]);
        class e3 extends eL {
            constructor(t, e, n, r) {
                super(t, e, n, r, null == r ? void 0 : r.owner, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: n} = this;
                if (!e.current)
                    return;
                super.readKeyframes();
                for (let n = 0; n < t.length; n++) {
                    let r = t[n];
                    if ("string" == typeof r && Y(r = r.trim())) {
                        let i = function t(e, n, r=1) {
                            (0,
                            ev.k)(r <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[i,o] = function(t) {
                                let e = ey.exec(t);
                                if (!e)
                                    return [, ];
                                let[,n,r,i] = e;
                                return [`--${null != n ? n : r}`, i]
                            }(e);
                            if (!i)
                                return;
                            let s = window.getComputedStyle(n).getPropertyValue(i);
                            if (s) {
                                let t = s.trim();
                                return eg(t) ? parseFloat(t) : t
                            }
                            return Y(o) ? t(o, n, r + 1) : o
                        }(r, e.current);
                        void 0 !== i && (t[n] = i),
                        n === t.length - 1 && (this.finalKeyframe = r)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !eb.has(n) || 2 !== t.length)
                    return;
                let[r,i] = t
                  , o = eD(r)
                  , s = eD(i);
                if (o !== s) {
                    if (ex(o) && ex(s))
                        for (let e = 0; e < t.length; e++) {
                            let n = t[e];
                            "string" == typeof n && (t[e] = parseFloat(n))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , n = [];
                for (let e = 0; e < t.length; e++) {
                    var r;
                    ("number" == typeof (r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || em(r)) && n.push(e)
                }
                n.length && function(t, e, n) {
                    let r, i = 0;
                    for (; i < t.length && !r; ) {
                        let e = t[i];
                        "string" == typeof e && !e4.has(e) && eH(e).values.length && (r = t[i]),
                        i++
                    }
                    if (r && n)
                        for (let i of e)
                            t[i] = e5(n, r)
                }(t, n, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: n} = this;
                if (!t.current)
                    return;
                "height" === n && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = eS[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let r = e[e.length - 1];
                void 0 !== r && t.getValue(n, r).jump(r, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: n, unresolvedKeyframes: r} = this;
                if (!e.current)
                    return;
                let i = e.getValue(n);
                i && i.jump(this.measuredOrigin, !1);
                let o = r.length - 1
                  , s = r[o];
                r[o] = eS[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,n]) => {
                    e.getValue(t).set(n)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        function e6(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        let e8 = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (eZ.test(t) || "0" === t) && !t.startsWith("url("));
        class e9 {
            constructor({autoplay: t=!0, delay: e=0, type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o="loop", ...s}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: n,
                    repeat: r,
                    repeatDelay: i,
                    repeatType: o,
                    ...s
                },
                this.updateFinishedPromise()
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (eV(),
                eN()),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.hasAttemptedResolve = !0;
                let {name: n, type: r, velocity: i, delay: o, onComplete: s, onUpdate: a, isGenerator: l} = this.options;
                if (!l && !function(t, e, n, r) {
                    let i = t[0];
                    if (null === i)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let o = t[t.length - 1]
                      , s = e8(i, e)
                      , a = e8(o, e);
                    return (0,
                    ev.K)(s === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`),
                    !!s && !!a && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let n = 0; n < t.length; n++)
                            if (t[n] !== e)
                                return !0
                    }(t) || "spring" === n && r)
                }(t, n, r, i)) {
                    if (ec.current || !o) {
                        null == a || a(ef(t, this.options, e)),
                        null == s || s(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let u = this.initPlayback(t, e);
                !1 !== u && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...u
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        var e7 = n(3631);
        function nt(t, e, n) {
            let r = Math.max(e - 5, 0);
            return (0,
            e7.R)(n - t(r), e - r)
        }
        function ne(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let nn = ["duration", "bounce"]
          , nr = ["stiffness", "damping", "mass"];
        function ni(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function no({keyframes: t, restDelta: e, restSpeed: n, ...r}) {
            let i;
            let o = t[0]
              , s = t[t.length - 1]
              , a = {
                done: !1,
                value: o
            }
              , {stiffness: l, damping: u, mass: d, duration: c, velocity: h, isResolvedFromDuration: f} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!ni(t, nr) && ni(t, nn)) {
                    let n = function({duration: t=800, bounce: e=.25, velocity: n=0, mass: r=1}) {
                        let i, o;
                        (0,
                        ev.K)(t <= en(10), "Spring duration must be 10 seconds or less");
                        let s = 1 - e;
                        s = H(.05, 1, s),
                        t = H(.01, 10, er(t)),
                        s < 1 ? (i = e => {
                            let r = e * s
                              , i = r * t;
                            return .001 - (r - n) / ne(e, s) * Math.exp(-i)
                        }
                        ,
                        o = e => {
                            let r = e * s * t
                              , o = Math.pow(s, 2) * Math.pow(e, 2) * t
                              , a = ne(Math.pow(e, 2), s);
                            return (r * n + n - o) * Math.exp(-r) * (-i(e) + .001 > 0 ? -1 : 1) / a
                        }
                        ) : (i = e => -.001 + Math.exp(-e * t) * ((e - n) * t + 1),
                        o = e => t * t * (n - e) * Math.exp(-e * t));
                        let a = function(t, e, n) {
                            let r = n;
                            for (let n = 1; n < 12; n++)
                                r -= t(r) / e(r);
                            return r
                        }(i, o, 5 / t);
                        if (t = en(t),
                        isNaN(a))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(a, 2) * r;
                            return {
                                stiffness: e,
                                damping: 2 * s * Math.sqrt(r * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...n,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }({
                ...r,
                velocity: -er(r.velocity || 0)
            })
              , p = h || 0
              , m = u / (2 * Math.sqrt(l * d))
              , v = s - o
              , g = er(Math.sqrt(l / d))
              , y = 5 > Math.abs(v);
            if (n || (n = y ? .01 : 2),
            e || (e = y ? .005 : .5),
            m < 1) {
                let t = ne(g, m);
                i = e => s - Math.exp(-m * g * e) * ((p + m * g * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
            } else if (1 === m)
                i = t => s - Math.exp(-g * t) * (v + (p + g * v) * t);
            else {
                let t = g * Math.sqrt(m * m - 1);
                i = e => {
                    let n = Math.exp(-m * g * e)
                      , r = Math.min(t * e, 300);
                    return s - n * ((p + m * g * v) * Math.sinh(r) + t * v * Math.cosh(r)) / t
                }
            }
            return {
                calculatedDuration: f && c || null,
                next: t => {
                    let r = i(t);
                    if (f)
                        a.done = t >= c;
                    else {
                        let o = p;
                        0 !== t && (o = m < 1 ? nt(i, t, r) : 0);
                        let l = Math.abs(o) <= n
                          , u = Math.abs(s - r) <= e;
                        a.done = l && u
                    }
                    return a.value = a.done ? s : r,
                    a
                }
            }
        }
        function ns({keyframes: t, velocity: e=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: d}) {
            let c, h;
            let f = t[0]
              , p = {
                done: !1,
                value: f
            }
              , m = t => void 0 !== a && t < a || void 0 !== l && t > l
              , v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = n * e
              , y = f + g
              , b = void 0 === s ? y : s(y);
            b !== y && (g = b - f);
            let x = t => -g * Math.exp(-t / r)
              , w = t => b + x(t)
              , P = t => {
                let e = x(t)
                  , n = w(t);
                p.done = Math.abs(e) <= u,
                p.value = p.done ? b : n
            }
              , M = t => {
                m(p.value) && (c = t,
                h = no({
                    keyframes: [p.value, v(p.value)],
                    velocity: nt(w, t, p.value),
                    damping: i,
                    stiffness: o,
                    restDelta: u,
                    restSpeed: d
                }))
            }
            ;
            return M(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (h || void 0 !== c || (e = !0,
                    P(t),
                    M(t)),
                    void 0 !== c && t >= c) ? h.next(t - c) : (e || P(t),
                    p)
                }
            }
        }
        let na = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        function nl(t, e, n, r) {
            if (t === e && n === r)
                return t1.Z;
            let i = e => (function(t, e, n, r, i) {
                let o, s;
                let a = 0;
                do
                    (o = na(s = e + (n - e) / 2, r, i) - t) > 0 ? n = s : e = s;
                while (Math.abs(o) > 1e-7 && ++a < 12);
                return s
            }
            )(e, 0, 1, t, n);
            return t => 0 === t || 1 === t ? t : na(i(t), e, r)
        }
        let nu = nl(.42, 0, 1, 1)
          , nd = nl(0, 0, .58, 1)
          , nc = nl(.42, 0, .58, 1)
          , nh = t => Array.isArray(t) && "number" != typeof t[0]
          , nf = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
          , np = t => e => 1 - t(1 - e)
          , nm = t => 1 - Math.sin(Math.acos(t))
          , nv = np(nm)
          , ng = nf(nm)
          , ny = nl(.33, 1.53, .69, .99)
          , nb = np(ny)
          , nx = nf(nb)
          , nw = {
            linear: t1.Z,
            easeIn: nu,
            easeInOut: nc,
            easeOut: nd,
            circIn: nm,
            circInOut: ng,
            circOut: nv,
            backIn: nb,
            backInOut: nx,
            backOut: ny,
            anticipate: t => (t *= 2) < 1 ? .5 * nb(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , nP = t => {
            if (Array.isArray(t)) {
                (0,
                ev.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,n,r,i] = t;
                return nl(e, n, r, i)
            }
            return "string" == typeof t ? ((0,
            ev.k)(void 0 !== nw[t], `Invalid easing type '${t}'`),
            nw[t]) : t
        }
          , nM = (t, e, n) => {
            let r = e - t;
            return 0 === r ? 1 : (n - t) / r
        }
          , nk = (t, e, n) => t + (e - t) * n;
        function nS(t, e, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        function nT(t, e) {
            return n => n > 0 ? e : t
        }
        let nC = (t, e, n) => {
            let r = t * t
              , i = n * (e * e - r) + r;
            return i < 0 ? 0 : Math.sqrt(i)
        }
          , nD = [eB, e_, eI]
          , nj = t => nD.find(e => e.test(t));
        function nA(t) {
            let e = nj(t);
            if ((0,
            ev.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let n = e.parse(t);
            return e === eI && (n = function({hue: t, saturation: e, lightness: n, alpha: r}) {
                t /= 360,
                n /= 100;
                let i = 0
                  , o = 0
                  , s = 0;
                if (e /= 100) {
                    let r = n < .5 ? n * (1 + e) : n + e - n * e
                      , a = 2 * n - r;
                    i = nS(a, r, t + 1 / 3),
                    o = nS(a, r, t),
                    s = nS(a, r, t - 1 / 3)
                } else
                    i = o = s = n;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * s),
                    alpha: r
                }
            }(n)),
            n
        }
        let nE = (t, e) => {
            let n = nA(t)
              , r = nA(e);
            if (!n || !r)
                return nT(t, e);
            let i = {
                ...n
            };
            return t => (i.red = nC(n.red, r.red, t),
            i.green = nC(n.green, r.green, t),
            i.blue = nC(n.blue, r.blue, t),
            i.alpha = nk(n.alpha, r.alpha, t),
            e_.transform(i))
        }
          , nN = new Set(["none", "hidden"]);
        function nV(t, e) {
            return n => nk(t, e, n)
        }
        function nL(t) {
            return "number" == typeof t ? nV : "string" == typeof t ? Y(t) ? nT : ez.test(t) ? nE : nF : Array.isArray(t) ? nR : "object" == typeof t ? ez.test(t) ? nE : nO : nT
        }
        function nR(t, e) {
            let n = [...t]
              , r = n.length
              , i = t.map( (t, n) => nL(t)(t, e[n]));
            return t => {
                for (let e = 0; e < r; e++)
                    n[e] = i[e](t);
                return n
            }
        }
        function nO(t, e) {
            let n = {
                ...t,
                ...e
            }
              , r = {};
            for (let i in n)
                void 0 !== t[i] && void 0 !== e[i] && (r[i] = nL(t[i])(t[i], e[i]));
            return t => {
                for (let e in r)
                    n[e] = r[e](t);
                return n
            }
        }
        let nF = (t, e) => {
            let n = eZ.createTransformer(e)
              , r = eH(t)
              , i = eH(e);
            return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? nN.has(t) && !i.values.length || nN.has(e) && !r.values.length ? nN.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t : tU(nR(function(t, e) {
                var n;
                let r = []
                  , i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let o = 0; o < e.values.length; o++) {
                    let s = e.types[o]
                      , a = t.indexes[s][i[s]]
                      , l = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                    r[o] = l,
                    i[s]++
                }
                return r
            }(r, i), i.values), n) : ((0,
            ev.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            nT(t, e))
        }
        ;
        function nW(t, e, n) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof n ? nk(t, e, n) : nL(t)(t, e)
        }
        function n_({duration: t=300, keyframes: e, times: n, ease: r="easeInOut"}) {
            let i = nh(r) ? r.map(nP) : nP(r)
              , o = {
                done: !1,
                value: e[0]
            }
              , s = function(t, e, {clamp: n=!0, ease: r, mixer: i}={}) {
                let o = t.length;
                if ((0,
                ev.k)(o === e.length, "Both input and output ranges must be the same length"),
                1 === o)
                    return () => e[0];
                if (2 === o && t[0] === t[1])
                    return () => e[1];
                t[0] > t[o - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let s = function(t, e, n) {
                    let r = []
                      , i = n || nW
                      , o = t.length - 1;
                    for (let n = 0; n < o; n++) {
                        let o = i(t[n], t[n + 1]);
                        e && (o = tU(Array.isArray(e) ? e[n] || t1.Z : e, o)),
                        r.push(o)
                    }
                    return r
                }(e, r, i)
                  , a = s.length
                  , l = e => {
                    let n = 0;
                    if (a > 1)
                        for (; n < t.length - 2 && !(e < t[n + 1]); n++)
                            ;
                    let r = nM(t[n], t[n + 1], e);
                    return s[n](r)
                }
                ;
                return n ? e => l(H(t[0], t[o - 1], e)) : l
            }((n && n.length === e.length ? n : function(t) {
                let e = [0];
                return function(t, e) {
                    let n = t[t.length - 1];
                    for (let r = 1; r <= e; r++) {
                        let i = nM(0, e, r);
                        t.push(nk(n, 1, i))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(i) ? i : e.map( () => i || nc).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (o.value = s(e),
                o.done = e >= t,
                o)
            }
        }
        let nB = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => tR.Wi.update(e, !0),
                stop: () => (0,
                tR.Pn)(e),
                now: () => tR.frameData.isProcessing ? tR.frameData.timestamp : ep.X.now()
            }
        }
          , nI = {
            decay: ns,
            inertia: ns,
            tween: n_,
            keyframes: n_,
            spring: no
        }
          , nz = t => t / 100;
        class nY extends e9 {
            constructor({KeyframeResolver: t=eL, ...e}) {
                super(e),
                this.holdTime = null,
                this.startTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: n, motionValue: r, keyframes: i} = this.options
                  , o = (t, e) => this.onKeyframesResolved(t, e);
                n && r && r.owner ? this.resolver = r.owner.resolveKeyframes(i, o, n, r) : this.resolver = new t(i,o,n,r),
                this.resolver.scheduleResolve()
            }
            initPlayback(t) {
                let e, n;
                let {type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s, velocity: a=0} = this.options
                  , l = nI[r] || n_;
                l !== n_ && "number" != typeof t[0] && (e = tU(nz, nW(t[0], t[1])),
                t = [0, 100]);
                let u = l({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === s && (n = l({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -a
                })),
                null === u.calculatedDuration && (u.calculatedDuration = function(t) {
                    let e = 0
                      , n = t.next(e);
                    for (; !n.done && e < 2e4; )
                        e += 50,
                        n = t.next(e);
                    return e >= 2e4 ? 1 / 0 : e
                }(u));
                let {calculatedDuration: d} = u
                  , c = d + o;
                return {
                    generator: u,
                    mirroredGenerator: n,
                    mapPercentToKeyframes: e,
                    calculatedDuration: d,
                    resolvedDuration: c,
                    totalDuration: c * (i + 1) - o
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: n} = this;
                if (!n) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: r, generator: i, mirroredGenerator: o, mapPercentToKeyframes: s, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: d} = n;
                if (null === this.startTime)
                    return i.next(0);
                let {delay: c, repeat: h, repeatType: f, repeatDelay: p, onUpdate: m} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , b = i;
                if (h) {
                    let t = Math.min(this.currentTime, u) / d
                      , e = Math.floor(t)
                      , n = t % 1;
                    !n && t >= 1 && (n = 1),
                    1 === n && e--,
                    (e = Math.min(e, h + 1)) % 2 && ("reverse" === f ? (n = 1 - n,
                    p && (n -= p / d)) : "mirror" === f && (b = o)),
                    y = H(0, 1, n) * d
                }
                let x = g ? {
                    done: !1,
                    value: a[0]
                } : b.next(y);
                s && (x.value = s(x.value));
                let {done: w} = x;
                g || null === l || (w = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let P = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
                return P && void 0 !== r && (x.value = ef(a, this.options, r)),
                m && m(x.value),
                P && this.finish(),
                x
            }
            get duration() {
                let {resolved: t} = this;
                return t ? er(t.calculatedDuration) : 0
            }
            get time() {
                return er(this.currentTime)
            }
            set time(t) {
                t = en(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = er(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=nB, onPlay: e} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime && "finished" !== this.state || (this.startTime = n),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel()
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let nU = t => Array.isArray(t) && "number" == typeof t[0]
          , n$ = ([t,e,n,r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`
          , nH = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: n$([0, .65, .55, 1]),
            circOut: n$([.55, 0, 1, .45]),
            backIn: n$([.31, .01, .66, -.59]),
            backOut: n$([.33, 1.53, .69, .99])
        };
        function nX(t) {
            return nq(t) || nH.easeOut
        }
        function nq(t) {
            if (t)
                return nU(t) ? n$(t) : Array.isArray(t) ? t.map(nX) : nH[t]
        }
        let nG = e6( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , nZ = new Set(["opacity", "clipPath", "filter", "transform"]);
        class nK extends e9 {
            constructor(t) {
                super(t);
                let {name: e, motionValue: n, keyframes: r} = this.options;
                this.resolver = new e3(r, (t, e) => this.onKeyframesResolved(t, e),e,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var n, r;
                let {duration: i=300, times: o, ease: s, type: a, motionValue: l, name: u} = this.options;
                if (!(null === (n = l.owner) || void 0 === n ? void 0 : n.current))
                    return !1;
                if ("spring" === (r = this.options).type || "backgroundColor" === r.name || !function t(e) {
                    return !!(!e || "string" == typeof e && e in nH || nU(e) || Array.isArray(e) && e.every(t))
                }(r.ease)) {
                    let {onComplete: e, onUpdate: n, motionValue: r, ...l} = this.options
                      , u = function(t, e) {
                        let n = new nY({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , r = {
                            done: !1,
                            value: t[0]
                        }
                          , i = []
                          , o = 0;
                        for (; !r.done && o < 2e4; )
                            i.push((r = n.sample(o)).value),
                            o += 10;
                        return {
                            times: void 0,
                            keyframes: i,
                            duration: o - 10,
                            ease: "linear"
                        }
                    }(t, l);
                    1 === (t = u.keyframes).length && (t[1] = t[0]),
                    i = u.duration,
                    o = u.times,
                    s = u.ease,
                    a = "keyframes"
                }
                let d = function(t, e, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: a, times: l}={}) {
                    let u = {
                        [e]: n
                    };
                    l && (u.offset = l);
                    let d = nq(a);
                    return Array.isArray(d) && (u.easing = d),
                    t.animate(u, {
                        delay: r,
                        duration: i,
                        easing: Array.isArray(d) ? "linear" : d,
                        fill: "both",
                        iterations: o + 1,
                        direction: "reverse" === s ? "alternate" : "normal"
                    })
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: i,
                    times: o,
                    ease: s
                });
                return d.startTime = ep.X.now(),
                this.pendingTimeline ? (d.timeline = this.pendingTimeline,
                this.pendingTimeline = void 0) : d.onfinish = () => {
                    let {onComplete: n} = this.options;
                    l.set(ef(t, this.options, e)),
                    n && n(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: d,
                    duration: i,
                    times: o,
                    type: a,
                    ease: s,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return er(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return er(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: n} = e;
                n.currentTime = en(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: n} = e;
                n.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return t1.Z;
                    let {animation: n} = e;
                    n.timeline = t,
                    n.onfinish = null
                } else
                    this.pendingTimeline = t;
                return t1.Z
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: n, duration: r, type: i, ease: o, times: s} = t;
                if ("idle" !== e.playState && "finished" !== e.playState) {
                    if (this.time) {
                        let {motionValue: t, onUpdate: e, onComplete: a, ...l} = this.options
                          , u = new nY({
                            ...l,
                            keyframes: n,
                            duration: r,
                            type: i,
                            ease: o,
                            times: s,
                            isGenerator: !0
                        })
                          , d = en(this.time);
                        t.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10)
                    }
                    this.cancel()
                }
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: n, repeatDelay: r, repeatType: i, damping: o, type: s} = t;
                return nG() && n && nZ.has(n) && e && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate && !r && "mirror" !== i && 0 !== o && "inertia" !== s
            }
        }
        let nQ = e6( () => void 0 !== window.ScrollTimeline);
        class nJ {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let n = 0; n < this.animations.length; n++)
                    this.animations[n][t] = e
            }
            attachTimeline(t) {
                let e = this.animations.map(e => {
                    if (!nQ() || !e.attachTimeline)
                        return e.pause(),
                        function(t, e) {
                            let n;
                            let r = () => {
                                let {currentTime: r} = e
                                  , i = (null === r ? 0 : r.value) / 100;
                                n !== i && t(i),
                                n = i
                            }
                            ;
                            return tR.Wi.update(r, !0),
                            () => (0,
                            tR.Pn)(r)
                        }(t => {
                            e.time = e.duration * t
                        }
                        , t);
                    e.attachTimeline(t)
                }
                );
                return () => {
                    e.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        let n0 = (t, e, n, r={}, i, o) => s => {
            let a = eu(r, t) || {}
              , l = a.delay || r.delay || 0
              , {elapsed: u=0} = r;
            u -= en(l);
            let d = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: t => {
                    e.set(t),
                    a.onUpdate && a.onUpdate(t)
                }
                ,
                onComplete: () => {
                    s(),
                    a.onComplete && a.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: o ? void 0 : i
            };
            !function({when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...d}) {
                return !!Object.keys(d).length
            }(a) && (d = {
                ...d,
                ...el(t, d)
            }),
            d.duration && (d.duration = en(d.duration)),
            d.repeatDelay && (d.repeatDelay = en(d.repeatDelay)),
            void 0 !== d.from && (d.keyframes[0] = d.from);
            let c = !1;
            if (!1 !== d.type && (0 !== d.duration || d.repeatDelay) || (d.duration = 0,
            0 !== d.delay || (c = !0)),
            (ec.current || ed.c.skipAnimations) && (c = !0,
            d.duration = 0,
            d.delay = 0),
            c && !o && void 0 !== e.get()) {
                let t = ef(d.keyframes, a);
                if (void 0 !== t)
                    return tR.Wi.update( () => {
                        d.onUpdate(t),
                        d.onComplete()
                    }
                    ),
                    new nJ([])
            }
            return !o && nK.supports(d) ? new nK(d) : new nY(d)
        }
        ;
        function n1(t) {
            return !!((0,
            F.i)(t) && t.add)
        }
        var n2 = n(557);
        function n5(t) {
            return t.getProps()[h]
        }
        function n4(t, e, {delay: n=0, transitionOverride: r, type: i}={}) {
            var o;
            let {transition: s=t.getDefaultTransition(), transitionEnd: a, ...l} = e
              , u = t.getValue("willChange");
            r && (s = r);
            let d = []
              , c = i && t.animationState && t.animationState.getState()[i];
            for (let e in l) {
                let r = t.getValue(e, null !== (o = t.latestValues[e]) && void 0 !== o ? o : null)
                  , i = l[e];
                if (void 0 === i || c && function({protectedKeys: t, needsAnimating: e}, n) {
                    let r = t.hasOwnProperty(n) && !0 !== e[n];
                    return e[n] = !1,
                    r
                }(c, e))
                    continue;
                let a = {
                    delay: n,
                    elapsed: 0,
                    ...eu(s || {}, e)
                }
                  , h = !1;
                if (window.HandoffAppearAnimations) {
                    let n = n5(t);
                    if (n) {
                        let t = window.HandoffAppearAnimations(n, e, r, tR.Wi);
                        null !== t && (a.elapsed = t,
                        h = !0)
                    }
                }
                r.start(n0(e, r, i, t.shouldReduceMotion && R.has(e) ? {
                    type: !1
                } : a, t, h));
                let f = r.animation;
                f && (n1(u) && (u.add(e),
                f.then( () => u.remove(e))),
                d.push(f))
            }
            return a && Promise.all(d).then( () => {
                tR.Wi.update( () => {
                    a && function(t, e) {
                        let {transitionEnd: n={}, transition: r={}, ...i} = ee(t, e) || {};
                        for (let e in i = {
                            ...i,
                            ...n
                        }) {
                            let n = tN(i[e]);
                            t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0,
                            n2.BX)(n))
                        }
                    }(t, a)
                }
                )
            }
            ),
            d
        }
        function n3(t, e, n={}) {
            var r;
            let i = ee(t, e, "exit" === n.type ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0)
              , {transition: o=t.getDefaultTransition() || {}} = i || {};
            n.transitionOverride && (o = n.transitionOverride);
            let s = i ? () => Promise.all(n4(t, i, n)) : () => Promise.resolve()
              , a = t.variantChildren && t.variantChildren.size ? (r=0) => {
                let {delayChildren: i=0, staggerChildren: s, staggerDirection: a} = o;
                return function(t, e, n=0, r=0, i=1, o) {
                    let s = []
                      , a = (t.variantChildren.size - 1) * r
                      , l = 1 === i ? (t=0) => t * r : (t=0) => a - t * r;
                    return Array.from(t.variantChildren).sort(n6).forEach( (t, r) => {
                        t.notify("AnimationStart", e),
                        s.push(n3(t, e, {
                            ...o,
                            delay: n + l(r)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(s)
                }(t, e, i + r, s, a, n)
            }
            : () => Promise.resolve()
              , {when: l} = o;
            if (!l)
                return Promise.all([s(), a(n.delay)]);
            {
                let[t,e] = "beforeChildren" === l ? [s, a] : [a, s];
                return t().then( () => e())
            }
        }
        function n6(t, e) {
            return t.sortNodePosition(e)
        }
        let n8 = [...w].reverse()
          , n9 = w.length;
        function n7(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function rt() {
            return {
                animate: n7(!0),
                whileInView: n7(),
                whileHover: n7(),
                whileTap: n7(),
                whileDrag: n7(),
                whileFocus: n7(),
                exit: n7()
            }
        }
        class re extends tZ {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: n}) => (function(t, e, n={}) {
                        let r;
                        if (t.notify("AnimationStart", e),
                        Array.isArray(e))
                            r = Promise.all(e.map(e => n3(t, e, n)));
                        else if ("string" == typeof e)
                            r = n3(t, e, n);
                        else {
                            let i = "function" == typeof e ? ee(t, e, n.custom) : e;
                            r = Promise.all(n4(t, i, n))
                        }
                        return r.then( () => {
                            tR.Wi.postRender( () => {
                                t.notify("AnimationComplete", e)
                            }
                            )
                        }
                        )
                    }
                    )(t, e, n)))
                      , n = rt()
                      , r = !0
                      , i = e => (n, r) => {
                        var i;
                        let o = ee(t, r, "exit" === e ? null === (i = t.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                        if (o) {
                            let {transition: t, transitionEnd: e, ...r} = o;
                            n = {
                                ...n,
                                ...r,
                                ...e
                            }
                        }
                        return n
                    }
                    ;
                    function o(o) {
                        let s = t.getProps()
                          , a = t.getVariantContext(!0) || {}
                          , l = []
                          , u = new Set
                          , d = {}
                          , c = 1 / 0;
                        for (let e = 0; e < n9; e++) {
                            var h;
                            let f = n8[e]
                              , p = n[f]
                              , m = void 0 !== s[f] ? s[f] : a[f]
                              , v = b(m)
                              , g = f === o ? p.isActive : null;
                            !1 === g && (c = e);
                            let y = m === a[f] && m !== s[f] && v;
                            if (y && r && t.manuallyAnimateOnMount && (y = !1),
                            p.protectedKeys = {
                                ...d
                            },
                            !p.isActive && null === g || !m && !p.prevProp || x(m) || "boolean" == typeof m)
                                continue;
                            let w = (h = p.prevProp,
                            ("string" == typeof m ? m !== h : !!Array.isArray(m) && !et(m, h)) || f === o && p.isActive && !y && v || e > c && v)
                              , P = !1
                              , M = Array.isArray(m) ? m : [m]
                              , k = M.reduce(i(f), {});
                            !1 === g && (k = {});
                            let {prevResolvedValues: S={}} = p
                              , T = {
                                ...S,
                                ...k
                            }
                              , C = e => {
                                w = !0,
                                u.has(e) && (P = !0,
                                u.delete(e)),
                                p.needsAnimating[e] = !0;
                                let n = t.getValue(e);
                                n && (n.liveStyle = !1)
                            }
                            ;
                            for (let t in T) {
                                let e = k[t]
                                  , n = S[t];
                                if (!d.hasOwnProperty(t))
                                    (tA(e) && tA(n) ? et(e, n) : e === n) ? void 0 !== e && u.has(t) ? C(t) : p.protectedKeys[t] = !0 : null != e ? C(t) : u.add(t)
                            }
                            p.prevProp = m,
                            p.prevResolvedValues = k,
                            p.isActive && (d = {
                                ...d,
                                ...k
                            }),
                            r && t.blockInitialAnimation && (w = !1),
                            w && (!y || P) && l.push(...M.map(t => ({
                                animation: t,
                                options: {
                                    type: f
                                }
                            })))
                        }
                        if (u.size) {
                            let e = {};
                            u.forEach(n => {
                                let r = t.getBaseTarget(n)
                                  , i = t.getValue(n);
                                i && (i.liveStyle = !0),
                                e[n] = null != r ? r : null
                            }
                            ),
                            l.push({
                                animation: e
                            })
                        }
                        let f = !!l.length;
                        return r && (!1 === s.initial || s.initial === s.animate) && !t.manuallyAnimateOnMount && (f = !1),
                        r = !1,
                        f ? e(l) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(e, r) {
                            var i;
                            if (n[e].isActive === r)
                                return Promise.resolve();
                            null === (i = t.variantChildren) || void 0 === i || i.forEach(t => {
                                var n;
                                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                            }
                            ),
                            n[e].isActive = r;
                            let s = o(e);
                            for (let t in n)
                                n[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(n) {
                            e = n(t)
                        },
                        getState: () => n,
                        reset: () => {
                            n = rt(),
                            r = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                x(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let rn = 0;
        class rr extends tZ {
            constructor() {
                super(...arguments),
                this.id = rn++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: n} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n)
                    return;
                let r = this.node.animationState.setActive("exit", !t);
                e && !t && r.then( () => e(this.id))
            }
            mount() {
                let {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        let ri = (t, e) => Math.abs(t - e);
        class ro {
            constructor(t, e, {transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let n = rl(this.lastMoveEventInfo, this.history)
                      , r = null !== this.startEvent
                      , i = (t = n.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(ri(t.x, e.x) ** 2 + ri(t.y, e.y) ** 2) >= 3);
                    if (!r && !i)
                        return;
                    let {point: o} = n
                      , {timestamp: s} = tR.frameData;
                    this.history.push({
                        ...o,
                        timestamp: s
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    r || (a && a(this.lastMoveEvent, n),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, n)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = rs(e, this.transformPagePoint),
                    tR.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: n, onSessionEnd: r, resumeAnimation: i} = this.handlers;
                    if (this.dragSnapToOrigin && i && i(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let o = rl("pointercancel" === t.type ? this.lastMoveEventInfo : rs(e, this.transformPagePoint), this.history);
                    this.startEvent && n && n(t, o),
                    r && r(t, o)
                }
                ,
                !t_(t))
                    return;
                this.dragSnapToOrigin = i,
                this.handlers = e,
                this.transformPagePoint = n,
                this.contextWindow = r || window;
                let o = rs(tB(t), this.transformPagePoint)
                  , {point: s} = o
                  , {timestamp: a} = tR.frameData;
                this.history = [{
                    ...s,
                    timestamp: a
                }];
                let {onSessionStart: l} = e;
                l && l(t, rl(o, this.history)),
                this.removeListeners = tU(tz(this.contextWindow, "pointermove", this.handlePointerMove), tz(this.contextWindow, "pointerup", this.handlePointerUp), tz(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                tR.Pn)(this.updatePoint)
            }
        }
        function rs(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function ra(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function rl({point: t}, e) {
            return {
                point: t,
                delta: ra(t, ru(e)),
                offset: ra(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = t.length - 1
                      , r = null
                      , i = ru(t);
                    for (; n >= 0 && (r = t[n],
                    !(i.timestamp - r.timestamp > en(.1))); )
                        n--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = er(i.timestamp - r.timestamp);
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = {
                        x: (i.x - r.x) / o,
                        y: (i.y - r.y) / o
                    };
                    return s.x === 1 / 0 && (s.x = 0),
                    s.y === 1 / 0 && (s.y = 0),
                    s
                }(e, 0)
            }
        }
        function ru(t) {
            return t[t.length - 1]
        }
        function rd(t) {
            return t.max - t.min
        }
        function rc(t, e=0, n=.01) {
            return Math.abs(t - e) <= n
        }
        function rh(t, e, n, r=.5) {
            t.origin = r,
            t.originPoint = nk(e.min, e.max, t.origin),
            t.scale = rd(n) / rd(e),
            (rc(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = nk(n.min, n.max, t.origin) - t.originPoint,
            (rc(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function rf(t, e, n, r) {
            rh(t.x, e.x, n.x, r ? r.originX : void 0),
            rh(t.y, e.y, n.y, r ? r.originY : void 0)
        }
        function rp(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + rd(e)
        }
        function rm(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + rd(e)
        }
        function rv(t, e, n) {
            rm(t.x, e.x, n.x),
            rm(t.y, e.y, n.y)
        }
        function rg(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function ry(t, e) {
            let n = e.min - t.min
              , r = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([n,r] = [r, n]),
            {
                min: n,
                max: r
            }
        }
        function rb(t, e, n) {
            return {
                min: rx(t, e),
                max: rx(t, n)
            }
        }
        function rx(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let rw = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , rP = () => ({
            x: rw(),
            y: rw()
        })
          , rM = () => ({
            min: 0,
            max: 0
        })
          , rk = () => ({
            x: rM(),
            y: rM()
        });
        function rS(t) {
            return [t("x"), t("y")]
        }
        function rT({top: t, left: e, right: n, bottom: r}) {
            return {
                x: {
                    min: e,
                    max: n
                },
                y: {
                    min: t,
                    max: r
                }
            }
        }
        function rC(t) {
            return void 0 === t || 1 === t
        }
        function rD({scale: t, scaleX: e, scaleY: n}) {
            return !rC(t) || !rC(e) || !rC(n)
        }
        function rj(t) {
            return rD(t) || rA(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function rA(t) {
            var e, n;
            return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
        }
        function rE(t, e, n, r, i) {
            return void 0 !== i && (t = r + i * (t - r)),
            r + n * (t - r) + e
        }
        function rN(t, e=0, n=1, r, i) {
            t.min = rE(t.min, e, n, r, i),
            t.max = rE(t.max, e, n, r, i)
        }
        function rV(t, {x: e, y: n}) {
            rN(t.x, e.translate, e.scale, e.originPoint),
            rN(t.y, n.translate, n.scale, n.originPoint)
        }
        function rL(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function rR(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function rO(t, e, [n,r,i]) {
            let o = void 0 !== e[i] ? e[i] : .5
              , s = nk(t.min, t.max, o);
            rN(t, e[n], e[r], s, e.scale)
        }
        let rF = ["x", "scaleX", "originX"]
          , rW = ["y", "scaleY", "originY"];
        function r_(t, e) {
            rO(t.x, e, rF),
            rO(t.y, e, rW)
        }
        function rB(t, e) {
            return rT(function(t, e) {
                if (!e)
                    return t;
                let n = e({
                    x: t.left,
                    y: t.top
                })
                  , r = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), e))
        }
        let rI = ({current: t}) => t ? t.ownerDocument.defaultView : null
          , rz = new WeakMap;
        class rY {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = rk(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: n} = this.visualElement;
                if (n && !1 === n.isPresent)
                    return;
                let {dragSnapToOrigin: r} = this.getProps();
                this.panSession = new ro(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: n} = this.getProps();
                        n ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(tB(t, "page").point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: n, dragPropagation: r, onDragStart: i} = this.getProps();
                        if (n && !r && (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = tq(n),
                        !this.openGlobalLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        rS(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (tr.test(e)) {
                                let {projection: n} = this.visualElement;
                                if (n && n.layout) {
                                    let r = n.layout.layoutBox[t];
                                    if (r) {
                                        let t = rd(r);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        i && tR.Wi.postRender( () => i(t, e));
                        let {animationState: o} = this.visualElement;
                        o && o.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: o} = this.getProps();
                        if (!n && !this.openGlobalLock)
                            return;
                        let {offset: s} = e;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let n = null;
                                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
                                n
                            }(s),
                            null !== this.currentDirection && i && i(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, s),
                        this.updateAxis("y", e.point, s),
                        this.visualElement.render(),
                        o && o(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => rS(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: r,
                    contextWindow: rI(this.visualElement)
                })
            }
            stop(t, e) {
                let n = this.isDragging;
                if (this.cancel(),
                !n)
                    return;
                let {velocity: r} = e;
                this.startAnimation(r);
                let {onDragEnd: i} = this.getProps();
                i && tR.Wi.postRender( () => i(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, n) {
                let {drag: r} = this.getProps();
                if (!n || !rU(t, r, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(t)
                  , o = this.originPoint[t] + n[t];
                this.constraints && this.constraints[t] && (o = function(t, {min: e, max: n}, r) {
                    return void 0 !== e && t < e ? t = r ? nk(e, t, r.min) : Math.max(t, e) : void 0 !== n && t > n && (t = r ? nk(n, t, r.max) : Math.min(t, n)),
                    t
                }(o, this.constraints[t], this.elastic[t])),
                i.set(o)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: n} = this.getProps()
                  , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , i = this.constraints;
                e && m(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = function(t, {top: e, left: n, bottom: r, right: i}) {
                    return {
                        x: rg(t.x, n, i),
                        y: rg(t.y, e, r)
                    }
                }(r.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: rb(t, "left", "right"),
                        y: rb(t, "top", "bottom")
                    }
                }(n),
                i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && rS(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min),
                        void 0 !== e.max && (n.max = e.max - t.min),
                        n
                    }(r.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
                if (!e || !m(e))
                    return !1;
                let r = e.current;
                (0,
                ev.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let o = function(t, e, n) {
                    let r = rB(t, n)
                      , {scroll: i} = e;
                    return i && (rR(r.x, i.offset.x),
                    rR(r.y, i.offset.y)),
                    r
                }(r, i.root, this.visualElement.getTransformPagePoint())
                  , s = {
                    x: ry((t = i.layout.layoutBox).x, o.x),
                    y: ry(t.y, o.y)
                };
                if (n) {
                    let t = n(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(s));
                    this.hasMutatedConstraints = !!t,
                    t && (s = rT(t))
                }
                return s
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(rS(s => {
                    if (!rU(s, e, this.currentDirection))
                        return;
                    let l = a && a[s] || {};
                    o && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: n ? t[s] : 0,
                        bounceStiffness: r ? 200 : 1e6,
                        bounceDamping: r ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...l
                    };
                    return this.startAxisValueAnimation(s, u)
                }
                )).then(s)
            }
            startAxisValueAnimation(t, e) {
                let n = this.getAxisMotionValue(t);
                return n.start(n0(t, n, 0, e, this.visualElement))
            }
            stopAnimation() {
                rS(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                rS(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , n = this.visualElement.getProps();
                return n[e] || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                rS(e => {
                    let {drag: n} = this.getProps();
                    if (!rU(e, n, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement
                      , i = this.getAxisMotionValue(e);
                    if (r && r.layout) {
                        let {min: n, max: o} = r.layout.layoutBox[e];
                        i.set(t[e] - nk(n, o, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: n} = this.visualElement;
                if (!m(e) || !n || !this.constraints)
                    return;
                this.stopAnimation();
                let r = {
                    x: 0,
                    y: 0
                };
                rS(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let n = e.get();
                        r[t] = function(t, e) {
                            let n = .5
                              , r = rd(t)
                              , i = rd(e);
                            return i > r ? n = nM(e.min, e.max - r, t.min) : r > i && (n = nM(t.min, t.max - i, e.min)),
                            H(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: i} = this.visualElement.getProps();
                this.visualElement.current.style.transform = i ? i({}, "") : "none",
                n.root && n.root.updateScroll(),
                n.updateLayout(),
                this.resolveConstraints(),
                rS(e => {
                    if (!rU(e, t, null))
                        return;
                    let n = this.getAxisMotionValue(e)
                      , {min: i, max: o} = this.constraints[e];
                    n.set(nk(i, o, r[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                rz.set(this.visualElement, this);
                let t = tz(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: n=!0} = this.getProps();
                    e && n && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    m(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: n} = this.visualElement
                  , r = n.addEventListener("measure", e);
                n && !n.layout && (n.root && n.root.updateScroll(),
                n.updateLayout()),
                tR.Wi.read(e);
                let i = tW(window, "resize", () => this.scalePositionWithinConstraints())
                  , o = n.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (rS(e => {
                        let n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate,
                        n.set(n.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    i(),
                    t(),
                    r(),
                    o && o()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: o=.35, dragMomentum: s=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: n,
                    dragPropagation: r,
                    dragConstraints: i,
                    dragElastic: o,
                    dragMomentum: s
                }
            }
        }
        function rU(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        class r$ extends tZ {
            constructor(t) {
                super(t),
                this.removeGroupControls = t1.Z,
                this.removeListeners = t1.Z,
                this.controls = new rY(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || t1.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let rH = t => (e, n) => {
            t && tR.Wi.postRender( () => t(e, n))
        }
        ;
        class rX extends tZ {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = t1.Z
            }
            onPointerDown(t) {
                this.session = new ro(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: rI(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: n, onPanEnd: r} = this.node.getProps();
                return {
                    onSessionStart: rH(t),
                    onStart: rH(e),
                    onMove: n,
                    onEnd: (t, e) => {
                        delete this.session,
                        r && tR.Wi.postRender( () => r(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = tz(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        let rq = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function rG(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let rZ = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!ti.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let n = rG(t, e.target.x)
                  , r = rG(t, e.target.y);
                return `${n}% ${r}%`
            }
        };
        class rK extends o.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: r} = this.props
                  , {projection: i} = t;
                Object.assign(V, rJ),
                i && (e.group && e.group.add(i),
                n && n.register && r && n.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                rq.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: n, drag: r, isPresent: i} = this.props
                  , o = n.projection;
                return o && (o.isPresent = i,
                r || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(),
                t.isPresent === i || (i ? o.promote() : o.relegate() || tR.Wi.postRender( () => {
                    let t = o.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                f.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
                  , {projection: r} = t;
                r && (r.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(r),
                n && n.deregister && n.deregister(r))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function rQ(t) {
            let[e,n] = function() {
                let t = (0,
                o.useContext)(l.O);
                if (null === t)
                    return [!0, null];
                let {isPresent: e, onExitComplete: n, register: r} = t
                  , i = (0,
                o.useId)();
                return (0,
                o.useEffect)( () => r(i), []),
                !e && n ? [!1, () => n && n(i)] : [!0]
            }()
              , r = (0,
            o.useContext)(j.p);
            return (0,
            i.jsx)(rK, {
                ...t,
                layoutGroup: r,
                switchLayoutGroup: (0,
                o.useContext)(v),
                isPresent: e,
                safeToRemove: n
            })
        }
        let rJ = {
            borderRadius: {
                ...rZ,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: rZ,
            borderTopRightRadius: rZ,
            borderBottomLeftRadius: rZ,
            borderBottomRightRadius: rZ,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: n}) => {
                    let r = eZ.parse(t);
                    if (r.length > 5)
                        return t;
                    let i = eZ.createTransformer(t)
                      , o = "number" != typeof r[0] ? 1 : 0
                      , s = n.x.scale * e.x
                      , a = n.y.scale * e.y;
                    r[0 + o] /= s,
                    r[1 + o] /= a;
                    let l = nk(s, a, .5);
                    return "number" == typeof r[2 + o] && (r[2 + o] /= l),
                    "number" == typeof r[3 + o] && (r[3 + o] /= l),
                    i(r)
                }
            }
        };
        var r0 = n(3209);
        let r1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , r2 = r1.length
          , r5 = t => "string" == typeof t ? parseFloat(t) : t
          , r4 = t => "number" == typeof t || ti.test(t);
        function r3(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let r6 = r9(0, .5, nv)
          , r8 = r9(.5, .95, t1.Z);
        function r9(t, e, n) {
            return r => r < t ? 0 : r > e ? 1 : n(nM(t, e, r))
        }
        function r7(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function it(t, e) {
            r7(t.x, e.x),
            r7(t.y, e.y)
        }
        function ie(t, e, n, r, i) {
            return t -= e,
            t = r + 1 / n * (t - r),
            void 0 !== i && (t = r + 1 / i * (t - r)),
            t
        }
        function ir(t, e, [n,r,i], o, s) {
            !function(t, e=0, n=1, r=.5, i, o=t, s=t) {
                if (tr.test(e) && (e = parseFloat(e),
                e = nk(s.min, s.max, e / 100) - s.min),
                "number" != typeof e)
                    return;
                let a = nk(o.min, o.max, r);
                t === o && (a -= e),
                t.min = ie(t.min, e, n, a, i),
                t.max = ie(t.max, e, n, a, i)
            }(t, e[n], e[r], e[i], e.scale, o, s)
        }
        let ii = ["x", "scaleX", "originX"]
          , io = ["y", "scaleY", "originY"];
        function is(t, e, n, r) {
            ir(t.x, e, ii, n ? n.x : void 0, r ? r.x : void 0),
            ir(t.y, e, io, n ? n.y : void 0, r ? r.y : void 0)
        }
        function ia(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function il(t) {
            return ia(t.x) && ia(t.y)
        }
        function iu(t, e) {
            return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
        }
        function id(t) {
            return rd(t.x) / rd(t.y)
        }
        var ic = n(1801);
        class ih {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                ic.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                ic.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let n = this.members.findIndex(e => t === e);
                if (0 === n)
                    return !1;
                for (let t = n; t >= 0; t--) {
                    let n = this.members[t];
                    if (!1 !== n.isPresent) {
                        e = n;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let n = this.lead;
                if (t !== n && (this.prevLead = n,
                this.lead = t,
                t.show(),
                n)) {
                    n.instance && n.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = n,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    n.snapshot && (t.snapshot = n.snapshot,
                    t.snapshot.latestValues = n.animationValues || n.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: r} = t.options;
                    !1 === r && n.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: n} = t;
                    e.onExitComplete && e.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function ip(t, e, n) {
            let r = ""
              , i = t.x.translate / e.x
              , o = t.y.translate / e.y
              , s = (null == n ? void 0 : n.z) || 0;
            if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
            (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
            n) {
                let {transformPerspective: t, rotate: e, rotateX: i, rotateY: o, skewX: s, skewY: a} = n;
                t && (r = `perspective(${t}px) ${r}`),
                e && (r += `rotate(${e}deg) `),
                i && (r += `rotateX(${i}deg) `),
                o && (r += `rotateY(${o}deg) `),
                s && (r += `skewX(${s}deg) `),
                a && (r += `skewY(${a}deg) `)
            }
            let a = t.x.scale * e.x
              , l = t.y.scale * e.y;
            return (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
            r || "none"
        }
        let im = (t, e) => t.depth - e.depth;
        class iv {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                ic.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                ic.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(im),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        let ig = ["", "X", "Y", "Z"]
          , iy = {
            visibility: "hidden"
        }
          , ib = 0
          , ix = {
            type: "projectionFrame",
            totalNodes: 0,
            resolvedTargetDeltas: 0,
            recalculatedProjection: 0
        };
        function iw(t, e, n, r) {
            let {latestValues: i} = e;
            i[t] && (n[t] = i[t],
            e.setStaticValue(t, 0),
            r && (r[t] = 0))
        }
        function iP({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
            return class {
                constructor(t={}, n=null == e ? void 0 : e()) {
                    this.id = ib++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        ix.totalNodes = ix.resolvedTargetDeltas = ix.recalculatedProjection = 0,
                        this.nodes.forEach(iS),
                        this.nodes.forEach(iN),
                        this.nodes.forEach(iV),
                        this.nodes.forEach(iT),
                        window.MotionDebug && window.MotionDebug.record(ix)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = n ? n.root || n : this,
                    this.path = n ? [...n.path, n] : [],
                    this.parent = n,
                    this.depth = n ? n.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new iv)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new r0.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let n = this.eventHandlers.get(t);
                    n && n.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, n=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: r, layout: i, visualElement: o} = this.options;
                    if (o && !o.current && o.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    n && (i || r) && (this.isLayoutDirty = !0),
                    t) {
                        let n;
                        let r = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = function(t, e) {
                                let n = ep.X.now()
                                  , r = ({timestamp: e}) => {
                                    let i = e - n;
                                    i >= 250 && ((0,
                                    tR.Pn)(r),
                                    t(i - 250))
                                }
                                ;
                                return tR.Wi.read(r, !0),
                                () => (0,
                                tR.Pn)(r)
                            }(r, 0),
                            rq.hasAnimatedSinceResize && (rq.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(iE))
                        }
                        )
                    }
                    r && this.root.registerSharedNode(r, this),
                    !1 !== this.options.animate && o && (r || i) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: n, layout: r}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let i = this.options.transition || o.getDefaultTransition() || i_
                          , {onLayoutAnimationStart: s, onLayoutAnimationComplete: a} = o.getProps()
                          , l = !this.targetLayout || !iu(this.targetLayout, r) || n
                          , u = !e && n;
                        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...eu(i, "layout"),
                                onPlay: s,
                                onComplete: a
                            };
                            (o.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || iE(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = r
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    tR.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(iL),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.HandoffCancelAllAnimations && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return !1;
                        let {visualElement: n} = e.options;
                        return !!n && (!!n5(n) || !!e.parent && !e.parent.hasCheckedOptimisedAppear && t(e.parent))
                    }(this) && window.HandoffCancelAllAnimations(),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: n} = this.options;
                    if (void 0 === e && !n)
                        return;
                    let r = this.getTransformTemplate();
                    this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(iD);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(ij),
                    this.isUpdating = !1,
                    this.nodes.forEach(iA),
                    this.nodes.forEach(iM),
                    this.nodes.forEach(ik),
                    this.clearAllSnapshots();
                    let t = ep.X.now();
                    tR.frameData.delta = H(0, 1e3 / 60, t - tR.frameData.timestamp),
                    tR.frameData.timestamp = t,
                    tR.frameData.isProcessing = !0,
                    tR.S6.update.process(tR.frameData),
                    tR.S6.preRender.process(tR.frameData),
                    tR.S6.render.process(tR.frameData),
                    tR.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    f.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(iC),
                    this.sharedNodes.forEach(iR)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    tR.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    tR.Wi.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = rk(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: r(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform() {
                    if (!i)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !il(this.projectionDelta)
                      , n = this.getTransformTemplate()
                      , r = n ? n(this.latestValues, "") : void 0
                      , o = r !== this.prevTransformTemplateValue;
                    t && (e || rj(this.latestValues) || o) && (i(this.instance, r),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let n = this.measurePageBox()
                      , r = this.removeElementScroll(n);
                    return t && (r = this.removeTransform(r)),
                    iz((e = r).x),
                    iz(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return rk();
                    let e = t.measureViewportBox()
                      , {scroll: n} = this.root;
                    return n && (rR(e.x, n.offset.x),
                    rR(e.y, n.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = rk();
                    it(e, t);
                    for (let n = 0; n < this.path.length; n++) {
                        let r = this.path[n]
                          , {scroll: i, options: o} = r;
                        if (r !== this.root && i && o.layoutScroll) {
                            if (i.isRoot) {
                                it(e, t);
                                let {scroll: n} = this.root;
                                n && (rR(e.x, -n.offset.x),
                                rR(e.y, -n.offset.y))
                            }
                            rR(e.x, i.offset.x),
                            rR(e.y, i.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let n = rk();
                    it(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        !e && r.options.layoutScroll && r.scroll && r !== r.root && r_(n, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        rj(r.latestValues) && r_(n, r.latestValues)
                    }
                    return rj(this.latestValues) && r_(n, this.latestValues),
                    n
                }
                removeTransform(t) {
                    let e = rk();
                    it(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        if (!n.instance || !rj(n.latestValues))
                            continue;
                        rD(n.latestValues) && n.updateSnapshot();
                        let r = rk();
                        it(r, n.measurePageBox()),
                        is(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                    }
                    return rj(this.latestValues) && is(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tR.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, n, r, i;
                    let o = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
                    let s = !!this.resumingFrom || this !== o;
                    if (!(t || s && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = tR.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = rk(),
                            this.relativeTargetOrigin = rk(),
                            rv(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = rk(),
                            this.targetWithTransforms = rk()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            n = this.target,
                            r = this.relativeTarget,
                            i = this.relativeParent.target,
                            rp(n.x, r.x, i.x),
                            rp(n.y, r.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : it(this.target, this.layout.layoutBox),
                            rV(this.target, this.targetDelta)) : it(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = rk(),
                                this.relativeTargetOrigin = rk(),
                                rv(this.relativeTargetOrigin, this.target, t.target),
                                it(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            ix.resolvedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || rD(this.parent.latestValues) || rA(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , n = !!this.resumingFrom || this !== e
                      , r = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (r = !1),
                    n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1),
                    this.resolvedRelativeTargetAt === tR.frameData.timestamp && (r = !1),
                    r)
                        return;
                    let {layout: i, layoutId: o} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(i || o))
                        return;
                    it(this.layoutCorrected, this.layout.layoutBox);
                    let s = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, n, r=!1) {
                        let i, o;
                        let s = n.length;
                        if (s) {
                            e.x = e.y = 1;
                            for (let a = 0; a < s; a++) {
                                o = (i = n[a]).projectionDelta;
                                let s = i.instance;
                                (!s || !s.style || "contents" !== s.style.display) && (r && i.options.layoutScroll && i.scroll && i !== i.root && r_(t, {
                                    x: -i.scroll.offset.x,
                                    y: -i.scroll.offset.y
                                }),
                                o && (e.x *= o.x.scale,
                                e.y *= o.y.scale,
                                rV(t, o)),
                                r && rj(i.latestValues) && r_(t, i.latestValues))
                            }
                            e.x = rL(e.x),
                            e.y = rL(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, n),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = rk());
                    let {target: l} = e;
                    if (!l) {
                        this.projectionTransform && (this.projectionDelta = rP(),
                        this.projectionTransform = "none",
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta || (this.projectionDelta = rP(),
                    this.projectionDeltaWithTransform = rP());
                    let u = this.projectionTransform;
                    rf(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = ip(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== u || this.treeScale.x !== s || this.treeScale.y !== a) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    ix.recalculatedProjection++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    if (this.options.scheduleRender && this.options.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    let n;
                    let r = this.snapshot
                      , i = r ? r.latestValues : {}
                      , o = {
                        ...this.latestValues
                    }
                      , s = rP();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = rk()
                      , l = (r ? r.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , d = !u || u.members.length <= 1
                      , c = !!(l && !d && !0 === this.options.crossfade && !this.path.some(iW));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let r = e / 1e3;
                        if (iO(s.x, t.x, r),
                        iO(s.y, t.y, r),
                        this.setTargetDelta(s),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, h, f, p;
                            rv(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            f = this.relativeTarget,
                            p = this.relativeTargetOrigin,
                            iF(f.x, p.x, a.x, r),
                            iF(f.y, p.y, a.y, r),
                            n && (u = this.relativeTarget,
                            h = n,
                            u.x.min === h.x.min && u.x.max === h.x.max && u.y.min === h.y.min && u.y.max === h.y.max) && (this.isProjectionDirty = !1),
                            n || (n = rk()),
                            it(n, this.relativeTarget)
                        }
                        l && (this.animationValues = o,
                        function(t, e, n, r, i, o) {
                            i ? (t.opacity = nk(0, void 0 !== n.opacity ? n.opacity : 1, r6(r)),
                            t.opacityExit = nk(void 0 !== e.opacity ? e.opacity : 1, 0, r8(r))) : o && (t.opacity = nk(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                            for (let i = 0; i < r2; i++) {
                                let o = `border${r1[i]}Radius`
                                  , s = r3(e, o)
                                  , a = r3(n, o);
                                (void 0 !== s || void 0 !== a) && (s || (s = 0),
                                a || (a = 0),
                                0 === s || 0 === a || r4(s) === r4(a) ? (t[o] = Math.max(nk(r5(s), r5(a), r), 0),
                                (tr.test(a) || tr.test(s)) && (t[o] += "%")) : t[o] = a)
                            }
                            (e.rotate || n.rotate) && (t.rotate = nk(e.rotate || 0, n.rotate || 0, r))
                        }(o, i, this.latestValues, r, c, d)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = r
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    tR.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = tR.Wi.update( () => {
                        rq.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, n) {
                            let r = (0,
                            F.i)(0) ? 0 : (0,
                            n2.BX)(0);
                            return r.start(n0("", r, 1e3, n)),
                            r.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onComplete: () => {
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: n, layout: r, latestValues: i} = t;
                    if (e && n && r) {
                        if (this !== t && this.layout && r && iY(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            n = this.target || rk();
                            let e = rd(this.layout.layoutBox.x);
                            n.x.min = t.target.x.min,
                            n.x.max = n.x.min + e;
                            let r = rd(this.layout.layoutBox.y);
                            n.y.min = t.target.y.min,
                            n.y.max = n.y.min + r
                        }
                        it(e, n),
                        r_(e, i),
                        rf(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new ih),
                    this.sharedNodes.get(t).add(e);
                    let n = e.options.initialPromotionConfig;
                    e.promote({
                        transition: n ? n.transition : void 0,
                        preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
                    let r = this.getStack();
                    r && r.promote(this, n),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: n} = t;
                    if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (e = !0),
                    !e)
                        return;
                    let r = {};
                    n.z && iw("z", t, r, this.animationValues);
                    for (let e = 0; e < ig.length; e++)
                        iw(`rotate${ig[e]}`, t, r, this.animationValues),
                        iw(`skew${ig[e]}`, t, r, this.animationValues);
                    for (let e in t.render(),
                    r)
                        t.setStaticValue(e, r[e]),
                        this.animationValues && (this.animationValues[e] = r[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, n;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return iy;
                    let r = {
                        visibility: ""
                    }
                      , i = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        r.opacity = "",
                        r.pointerEvents = tV(null == t ? void 0 : t.pointerEvents) || "",
                        r.transform = i ? i(this.latestValues, "") : "none",
                        r;
                    let o = this.getLead();
                    if (!this.projectionDelta || !this.layout || !o.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tV(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !rj(this.latestValues) && (e.transform = i ? i({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let s = o.animationValues || o.latestValues;
                    this.applyTransformsToTarget(),
                    r.transform = ip(this.projectionDeltaWithTransform, this.treeScale, s),
                    i && (r.transform = i(s, r.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    o.animationValues ? r.opacity = o === this ? null !== (n = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : r.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0,
                    V) {
                        if (void 0 === s[t])
                            continue;
                        let {correct: e, applyTo: n} = V[t]
                          , i = "none" === r.transform ? s[t] : e(s[t], o);
                        if (n) {
                            let t = n.length;
                            for (let e = 0; e < t; e++)
                                r[n[e]] = i
                        } else
                            r[t] = i
                    }
                    return this.options.layoutId && (r.pointerEvents = o === this ? tV(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    r
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(iD),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function iM(t) {
            t.updateLayout()
        }
        function ik(t) {
            var e;
            let n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: r} = t.layout
                  , {animationType: i} = t.options
                  , o = n.source !== t.layout.source;
                "size" === i ? rS(t => {
                    let r = o ? n.measuredBox[t] : n.layoutBox[t]
                      , i = rd(r);
                    r.min = e[t].min,
                    r.max = r.min + i
                }
                ) : iY(i, n.layoutBox, e) && rS(r => {
                    let i = o ? n.measuredBox[r] : n.layoutBox[r]
                      , s = rd(e[r]);
                    i.max = i.min + s,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[r].max = t.relativeTarget[r].min + s)
                }
                );
                let s = rP();
                rf(s, e, n.layoutBox);
                let a = rP();
                o ? rf(a, t.applyTransform(r, !0), n.measuredBox) : rf(a, e, n.layoutBox);
                let l = !il(s)
                  , u = !1;
                if (!t.resumeFrom) {
                    let r = t.getClosestProjectingParent();
                    if (r && !r.resumeFrom) {
                        let {snapshot: i, layout: o} = r;
                        if (i && o) {
                            let s = rk();
                            rv(s, n.layoutBox, i.layoutBox);
                            let a = rk();
                            rv(a, e, o.layoutBox),
                            iu(s, a) || (u = !0),
                            r.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = s,
                            t.relativeParent = r)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: n,
                    delta: a,
                    layoutDelta: s,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function iS(t) {
            ix.totalNodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function iT(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function iC(t) {
            t.clearSnapshot()
        }
        function iD(t) {
            t.clearMeasurements()
        }
        function ij(t) {
            t.isLayoutDirty = !1
        }
        function iA(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function iE(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function iN(t) {
            t.resolveTargetDelta()
        }
        function iV(t) {
            t.calcProjection()
        }
        function iL(t) {
            t.resetSkewAndRotation()
        }
        function iR(t) {
            t.removeLeadSnapshot()
        }
        function iO(t, e, n) {
            t.translate = nk(e.translate, 0, n),
            t.scale = nk(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function iF(t, e, n, r) {
            t.min = nk(e.min, n.min, r),
            t.max = nk(e.max, n.max, r)
        }
        function iW(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let i_ = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , iB = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , iI = iB("applewebkit/") && !iB("chrome/") ? Math.round : t1.Z;
        function iz(t) {
            t.min = iI(t.min),
            t.max = iI(t.max)
        }
        function iY(t, e, n) {
            return "position" === t || "preserve-aspect" === t && !rc(id(e), id(n), .2)
        }
        let iU = iP({
            attachResizeListener: (t, e) => tW(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , i$ = {
            current: void 0
        }
          , iH = iP({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!i$.current) {
                    let t = new iU({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    i$.current = t
                }
                return i$.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        })
          , iX = {
            current: null
        }
          , iq = {
            current: !1
        }
          , iG = new WeakMap
          , iZ = [...eC, ez, eZ]
          , iK = t => iZ.find(eT(t))
          , iQ = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
          , iJ = P.length;
        class i0 {
            scrapeMotionValuesFromProps(t, e, n) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: o}, s={}) {
                this.resolveKeyframes = (t, e, n, r) => new this.KeyframeResolver(t,e,n,r,this),
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = eL,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = () => tR.Wi.render(this.render, !1, !0);
                let {latestValues: a, renderState: l} = o;
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = n,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = r,
                this.options = s,
                this.blockInitialAnimation = !!i,
                this.isControllingVariants = M(e),
                this.isVariantNode = k(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: u, ...d} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in d) {
                    let e = d[t];
                    void 0 !== a[t] && (0,
                    F.i)(e) && (e.set(a[t], !1),
                    n1(u) && u.add(t))
                }
            }
            mount(t) {
                this.current = t,
                iG.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                iq.current || function() {
                    if (iq.current = !0,
                    D.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => iX.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            iX.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iX.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in iG.delete(this.current),
                this.projection && this.projection.unmount(),
                (0,
                tR.Pn)(this.notifyUpdate),
                (0,
                tR.Pn)(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let n = R.has(t)
                  , r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && tR.Wi.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , i = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, () => {
                    r(),
                    i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in C) {
                    let e = C[t];
                    if (!e)
                        continue;
                    let {isEnabled: n, Feature: r} = e;
                    if (!this.features[t] && r && n(this.props) && (this.features[t] = new r(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : rk()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < iQ.length; e++) {
                    let n = iQ[e];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                    delete this.propEventSubscriptions[n]);
                    let r = t["on" + n];
                    r && (this.propEventSubscriptions[n] = this.on(n, r))
                }
                this.prevMotionValues = function(t, e, n) {
                    let {willChange: r} = e;
                    for (let i in e) {
                        let o = e[i]
                          , s = n[i];
                        if ((0,
                        F.i)(o))
                            t.addValue(i, o),
                            n1(r) && r.add(i);
                        else if ((0,
                        F.i)(s))
                            t.addValue(i, (0,
                            n2.BX)(o, {
                                owner: t
                            })),
                            n1(r) && r.remove(i);
                        else if (s !== o) {
                            if (t.hasValue(i)) {
                                let e = t.getValue(i);
                                !0 === e.liveStyle ? e.jump(o) : e.hasAnimated || e.set(o)
                            } else {
                                let e = t.getStaticValue(i);
                                t.addValue(i, (0,
                                n2.BX)(void 0 !== e ? e : o, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let r in n)
                        void 0 === e[r] && t.removeValue(r);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            getVariantContext(t=!1) {
                if (t)
                    return this.parent ? this.parent.getVariantContext() : void 0;
                if (!this.isControllingVariants) {
                    let t = this.parent && this.parent.getVariantContext() || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let e = {};
                for (let t = 0; t < iJ; t++) {
                    let n = P[t]
                      , r = this.props[n];
                    (b(r) || !1 === r) && (e[n] = r)
                }
                return e
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let n = this.values.get(t);
                e !== n && (n && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let n = this.values.get(t);
                return void 0 === n && void 0 !== e && (n = (0,
                n2.BX)(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, n)),
                n
            }
            readValue(t, e) {
                var n;
                let r = void 0 === this.latestValues[t] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, t)) && void 0 !== n ? n : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != r && ("string" == typeof r && (eg(r) || em(r)) ? r = parseFloat(r) : !iK(r) && eZ.test(e) && (r = e5(t, e)),
                this.setBaseTarget(t, (0,
                F.i)(r) ? r.get() : r)),
                (0,
                F.i)(r) ? r.get() : r
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let n;
                let {initial: r} = this.props;
                if ("string" == typeof r || "object" == typeof r) {
                    let i = tD(this.props, r, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    i && (n = i[t])
                }
                if (r && void 0 !== n)
                    return n;
                let i = this.getBaseTargetFromProps(this.props, t);
                return void 0 === i || (0,
                F.i)(i) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : i
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new r0.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        class i1 extends i0 {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = e3
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: n}) {
                delete e[t],
                delete n[t]
            }
        }
        class i2 extends i1 {
            constructor() {
                super(...arguments),
                this.type = "html"
            }
            readValueFromInstance(t, e) {
                if (R.has(e)) {
                    let t = e2(e);
                    return t && t.default || 0
                }
                {
                    let n = window.getComputedStyle(t)
                      , r = (I(e) ? n.getPropertyValue(e) : n[e]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return rB(t, e)
            }
            build(t, e, n, r) {
                td(t, e, n, r.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, n) {
                return tS(t, e, n)
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                (0,
                F.i)(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
            renderInstance(t, e, n, r) {
                tP(t, e, n, r)
            }
        }
        class i5 extends i1 {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (R.has(e)) {
                    let t = e2(e);
                    return t && t.default || 0
                }
                return e = tM.has(e) ? e : c(e),
                t.getAttribute(e)
            }
            measureInstanceViewportBox() {
                return rk()
            }
            scrapeMotionValuesFromProps(t, e, n) {
                return tT(t, e, n)
            }
            build(t, e, n, r) {
                tb(t, e, n, this.isSVGTag, r.transformTemplate)
            }
            renderInstance(t, e, n, r) {
                tk(t, e, n, r)
            }
            mount(t) {
                this.isSVGTag = tw(t.tagName),
                super.mount(t)
            }
        }
        let i4 = (t, e) => N(t) ? new i5(e,{
            enableHardwareAcceleration: !1
        }) : new i2(e,{
            allowProjection: t !== o.Fragment,
            enableHardwareAcceleration: !0
        })
          , i3 = {
            animation: {
                Feature: re
            },
            exit: {
                Feature: rr
            },
            inView: {
                Feature: t7
            },
            tap: {
                Feature: t5
            },
            focus: {
                Feature: tJ
            },
            hover: {
                Feature: tQ
            },
            pan: {
                Feature: rX
            },
            drag: {
                Feature: r$,
                ProjectionNode: iH,
                MeasureLayout: rQ
            },
            layout: {
                ProjectionNode: iH,
                MeasureLayout: rQ
            }
        }
          , i6 = function(t) {
            function e(e, n={}) {
                return function({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: r, Component: c}) {
                    t && function(t) {
                        for (let e in t)
                            C[e] = {
                                ...C[e],
                                ...t[e]
                            }
                    }(t);
                    let p = (0,
                    o.forwardRef)(function(t, p) {
                        var x;
                        let w;
                        let P = {
                            ...(0,
                            o.useContext)(s._),
                            ...t,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                o.useContext)(j.p).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(t)
                        }
                          , {isStatic: k} = P
                          , T = function(t) {
                            let {initial: e, animate: n} = function(t, e) {
                                if (M(t)) {
                                    let {initial: e, animate: n} = t;
                                    return {
                                        initial: !1 === e || b(e) ? e : void 0,
                                        animate: b(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            o.useContext)(a));
                            return (0,
                            o.useMemo)( () => ({
                                initial: e,
                                animate: n
                            }), [S(e), S(n)])
                        }(t)
                          , A = r(t, k);
                        if (!k && D.j) {
                            (0,
                            o.useContext)(d).strict;
                            let t = function(t) {
                                let {drag: e, layout: n} = C;
                                if (!e && !n)
                                    return {};
                                let r = {
                                    ...e,
                                    ...n
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == n ? void 0 : n.isEnabled(t)) ? r.MeasureLayout : void 0,
                                    ProjectionNode: r.ProjectionNode
                                }
                            }(P);
                            w = t.MeasureLayout,
                            T.visualElement = function(t, e, n, r, i) {
                                let {visualElement: c} = (0,
                                o.useContext)(a)
                                  , p = (0,
                                o.useContext)(d)
                                  , b = (0,
                                o.useContext)(l.O)
                                  , x = (0,
                                o.useContext)(s._).reducedMotion
                                  , w = (0,
                                o.useRef)();
                                r = r || p.renderer,
                                !w.current && r && (w.current = r(t, {
                                    visualState: e,
                                    parent: c,
                                    props: n,
                                    presenceContext: b,
                                    blockInitialAnimation: !!b && !1 === b.initial,
                                    reducedMotionConfig: x
                                }));
                                let P = w.current
                                  , M = (0,
                                o.useContext)(v);
                                P && !P.projection && i && ("html" === P.type || "svg" === P.type) && function(t, e, n, r) {
                                    let {layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e)
                                            return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)),
                                    t.projection.setOptions({
                                        layoutId: i,
                                        layout: o,
                                        alwaysMeasureLayout: !!s || a && m(a),
                                        visualElement: t,
                                        scheduleRender: () => t.scheduleRender(),
                                        animationType: "string" == typeof o ? o : "both",
                                        initialPromotionConfig: r,
                                        layoutScroll: l,
                                        layoutRoot: u
                                    })
                                }(w.current, n, i, M),
                                (0,
                                o.useInsertionEffect)( () => {
                                    P && P.update(n, b)
                                }
                                );
                                let k = (0,
                                o.useRef)(!!(n[h] && !window.HandoffComplete));
                                return (0,
                                u.L)( () => {
                                    P && (P.updateFeatures(),
                                    f.render(P.render),
                                    k.current && P.animationState && P.animationState.animateChanges())
                                }
                                ),
                                (0,
                                o.useEffect)( () => {
                                    P && (!k.current && P.animationState && P.animationState.animateChanges(),
                                    k.current && (k.current = !1,
                                    g || (g = !0,
                                    queueMicrotask(y))))
                                }
                                ),
                                P
                            }(c, A, P, e, t.ProjectionNode)
                        }
                        return (0,
                        i.jsxs)(a.Provider, {
                            value: T,
                            children: [w && T.visualElement ? (0,
                            i.jsx)(w, {
                                visualElement: T.visualElement,
                                ...P
                            }) : null, n(c, t, (x = T.visualElement,
                            (0,
                            o.useCallback)(t => {
                                t && A.mount && A.mount(t),
                                x && (t ? x.mount(t) : x.unmount()),
                                p && ("function" == typeof p ? p(t) : m(p) && (p.current = t))
                            }
                            , [x])), A, k, T.visualElement)]
                        })
                    });
                    return p[A] = c,
                    p
                }(t(e, n))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let n = new Map;
            return new Proxy(e,{
                get: (t, r) => (n.has(r) || n.set(r, e(r)),
                n.get(r))
            })
        }( (t, e) => (function(t, {forwardMotionProps: e=!1}, n, r) {
            return {
                ...N(t) ? tO : tF,
                preloadedFeatures: n,
                useRender: function(t=!1) {
                    return (e, n, r, {latestValues: i}, s) => {
                        let a = (N(e) ? function(t, e, n, r) {
                            let i = (0,
                            o.useMemo)( () => {
                                let n = tx();
                                return tb(n, e, {
                                    enableHardwareAcceleration: !1
                                }, tw(r), t.transformTemplate),
                                {
                                    ...n.attrs,
                                    style: {
                                        ...n.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                th(e, t.style, t),
                                i.style = {
                                    ...e,
                                    ...i.style
                                }
                            }
                            return i
                        }
                        : function(t, e, n) {
                            let r = {}
                              , i = function(t, e, n) {
                                let r = t.style || {}
                                  , i = {};
                                return th(i, r, t),
                                Object.assign(i, function({transformTemplate: t}, e, n) {
                                    return (0,
                                    o.useMemo)( () => {
                                        let r = tc();
                                        return td(r, e, {
                                            enableHardwareAcceleration: !n
                                        }, t),
                                        Object.assign({}, r.vars, r.style)
                                    }
                                    , [e])
                                }(t, e, n)),
                                i
                            }(t, e, n);
                            return t.drag && !1 !== t.dragListener && (r.draggable = !1,
                            i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
                            i.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
                            r.style = i,
                            r
                        }
                        )(n, i, s, e)
                          , l = function(t, e, n) {
                            let r = {};
                            for (let i in t)
                                ("values" !== i || "object" != typeof t.values) && (tm(i) || !0 === n && tp(i) || !e && !tp(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                            return r
                        }(n, "string" == typeof e, t)
                          , u = e !== o.Fragment ? {
                            ...l,
                            ...a,
                            ref: r
                        } : {}
                          , {children: d} = n
                          , c = (0,
                        o.useMemo)( () => (0,
                        F.i)(d) ? d.get() : d, [d]);
                        return (0,
                        o.createElement)(e, {
                            ...u,
                            children: c
                        })
                    }
                }(e),
                createVisualElement: r,
                Component: t
            }
        }
        )(t, e, i3, i4))
    },
    4425: function(t, e, n) {
        n.d(e, {
            c: function() {
                return r
            }
        });
        let r = {
            skipAnimations: !1,
            useManualTiming: !1
        }
    },
    1801: function(t, e, n) {
        function r(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function i(t, e) {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        n.d(e, {
            cl: function() {
                return i
            },
            y4: function() {
                return r
            }
        })
    },
    9186: function(t, e, n) {
        n.d(e, {
            K: function() {
                return i
            },
            k: function() {
                return o
            }
        });
        var r = n(5249);
        let i = r.Z
          , o = r.Z
    },
    8551: function(t, e, n) {
        n.d(e, {
            j: function() {
                return r
            }
        });
        let r = "undefined" != typeof document
    },
    5249: function(t, e, n) {
        n.d(e, {
            Z: function() {
                return r
            }
        });
        let r = t => t
    },
    3209: function(t, e, n) {
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(1801);
        class i {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                r.y4)(this.subscriptions, t),
                () => (0,
                r.cl)(this.subscriptions, t)
            }
            notify(t, e, n) {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](t, e, n);
                    else
                        for (let i = 0; i < r; i++) {
                            let r = this.subscriptions[i];
                            r && r(t, e, n)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    5291: function(t, e, n) {
        n.d(e, {
            h: function() {
                return i
            }
        });
        var r = n(5754);
        function i(t) {
            let e = (0,
            r.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    5423: function(t, e, n) {
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(5754);
        let i = n(8551).j ? r.useLayoutEffect : r.useEffect
    },
    3631: function(t, e, n) {
        n.d(e, {
            R: function() {
                return r
            }
        });
        function r(t, e) {
            return e ? 1e3 / e * t : 0
        }
    },
    557: function(t, e, n) {
        n.d(e, {
            BX: function() {
                return d
            }
        });
        var r = n(3209)
          , i = n(3631)
          , o = n(7779)
          , s = n(3068);
        let a = t => !isNaN(parseFloat(t))
          , l = {
            current: void 0
        };
        class u {
            constructor(t, e={}) {
                this.version = "11.2.14",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let n = o.X.now();
                    this.updatedAt !== n && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = o.X.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new r.L);
                let n = this.events[t].add(e);
                return "change" === t ? () => {
                    n(),
                    s.Wi.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : n
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, n) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - n
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return l.current && l.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let t = o.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                i.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function d(t, e) {
            return new u(t,e)
        }
    },
    5580: function(t, e, n) {
        n.d(e, {
            Y: function() {
                return a
            }
        });
        var r = n(7652)
          , i = n(5423)
          , o = n(3068)
          , s = n(6674);
        function a(t, ...e) {
            let n = t.length;
            return function(t, e) {
                let n = (0,
                r.c)(e())
                  , s = () => n.set(e());
                return s(),
                (0,
                i.L)( () => {
                    let e = () => o.Wi.preRender(s, !1, !0)
                      , n = t.map(t => t.on("change", e));
                    return () => {
                        n.forEach(t => t()),
                        (0,
                        o.Pn)(s)
                    }
                }
                ),
                n
            }(e.filter(s.i), function() {
                let r = "";
                for (let i = 0; i < n; i++) {
                    r += t[i];
                    let n = e[i];
                    n && (r += (0,
                    s.i)(n) ? n.get() : n)
                }
                return r
            })
        }
    },
    7652: function(t, e, n) {
        n.d(e, {
            c: function() {
                return a
            }
        });
        var r = n(5754)
          , i = n(557)
          , o = n(4233)
          , s = n(5291);
        function a(t) {
            let e = (0,
            s.h)( () => (0,
            i.BX)(t))
              , {isStatic: n} = (0,
            r.useContext)(o._);
            if (n) {
                let[,n] = (0,
                r.useState)(t);
                (0,
                r.useEffect)( () => e.on("change", n), [])
            }
            return e
        }
    },
    6674: function(t, e, n) {
        n.d(e, {
            i: function() {
                return r
            }
        });
        let r = t => !!(t && t.getVelocity)
    },
    8499: function(t, e, n) {
        n.d(e, {
            m6: function() {
                return O
            }
        });
        let r = /^\[(.+)\]$/;
        function i(t, e) {
            let n = t;
            return e.split("-").forEach(t => {
                n.nextPart.has(t) || n.nextPart.set(t, {
                    nextPart: new Map,
                    validators: []
                }),
                n = n.nextPart.get(t)
            }
            ),
            n
        }
        let o = /\s+/;
        function s() {
            let t, e, n = 0, r = "";
            for (; n < arguments.length; )
                (t = arguments[n++]) && (e = function t(e) {
                    let n;
                    if ("string" == typeof e)
                        return e;
                    let r = "";
                    for (let i = 0; i < e.length; i++)
                        e[i] && (n = t(e[i])) && (r && (r += " "),
                        r += n);
                    return r
                }(t)) && (r && (r += " "),
                r += e);
            return r
        }
        function a(t) {
            let e = e => e[t] || [];
            return e.isThemeGetter = !0,
            e
        }
        let l = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , u = /^\d+\/\d+$/
          , d = new Set(["px", "full", "screen"])
          , c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , h = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , f = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , p = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , m = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
        function v(t) {
            return y(t) || d.has(t) || u.test(t)
        }
        function g(t) {
            return E(t, "length", N)
        }
        function y(t) {
            return !!t && !Number.isNaN(Number(t))
        }
        function b(t) {
            return E(t, "number", y)
        }
        function x(t) {
            return !!t && Number.isInteger(Number(t))
        }
        function w(t) {
            return t.endsWith("%") && y(t.slice(0, -1))
        }
        function P(t) {
            return l.test(t)
        }
        function M(t) {
            return c.test(t)
        }
        let k = new Set(["length", "size", "percentage"]);
        function S(t) {
            return E(t, k, V)
        }
        function T(t) {
            return E(t, "position", V)
        }
        let C = new Set(["image", "url"]);
        function D(t) {
            return E(t, C, R)
        }
        function j(t) {
            return E(t, "", L)
        }
        function A() {
            return !0
        }
        function E(t, e, n) {
            let r = l.exec(t);
            return !!r && (r[1] ? "string" == typeof e ? r[1] === e : e.has(r[1]) : n(r[2]))
        }
        function N(t) {
            return h.test(t) && !f.test(t)
        }
        function V() {
            return !1
        }
        function L(t) {
            return p.test(t)
        }
        function R(t) {
            return m.test(t)
        }
        let O = function(t, ...e) {
            let n, a, l;
            let u = function(o) {
                var s;
                return a = (n = {
                    cache: function(t) {
                        if (t < 1)
                            return {
                                get: () => void 0,
                                set: () => {}
                            };
                        let e = 0
                          , n = new Map
                          , r = new Map;
                        function i(i, o) {
                            n.set(i, o),
                            ++e > t && (e = 0,
                            r = n,
                            n = new Map)
                        }
                        return {
                            get(t) {
                                let e = n.get(t);
                                return void 0 !== e ? e : void 0 !== (e = r.get(t)) ? (i(t, e),
                                e) : void 0
                            },
                            set(t, e) {
                                n.has(t) ? n.set(t, e) : i(t, e)
                            }
                        }
                    }((s = e.reduce( (t, e) => e(t), t())).cacheSize),
                    splitModifiers: function(t) {
                        let e = t.separator
                          , n = 1 === e.length
                          , r = e[0]
                          , i = e.length;
                        return function(t) {
                            let o;
                            let s = []
                              , a = 0
                              , l = 0;
                            for (let u = 0; u < t.length; u++) {
                                let d = t[u];
                                if (0 === a) {
                                    if (d === r && (n || t.slice(u, u + i) === e)) {
                                        s.push(t.slice(l, u)),
                                        l = u + i;
                                        continue
                                    }
                                    if ("/" === d) {
                                        o = u;
                                        continue
                                    }
                                }
                                "[" === d ? a++ : "]" === d && a--
                            }
                            let u = 0 === s.length ? t : t.substring(l)
                              , d = u.startsWith("!")
                              , c = d ? u.substring(1) : u;
                            return {
                                modifiers: s,
                                hasImportantModifier: d,
                                baseClassName: c,
                                maybePostfixModifierPosition: o && o > l ? o - l : void 0
                            }
                        }
                    }(s),
                    ...function(t) {
                        let e = function(t) {
                            var e;
                            let {theme: n, prefix: r} = t
                              , o = {
                                nextPart: new Map,
                                validators: []
                            };
                            return (e = Object.entries(t.classGroups),
                            r ? e.map( ([t,e]) => [t, e.map(t => "string" == typeof t ? r + t : "object" == typeof t ? Object.fromEntries(Object.entries(t).map( ([t,e]) => [r + t, e])) : t)]) : e).forEach( ([t,e]) => {
                                (function t(e, n, r, o) {
                                    e.forEach(e => {
                                        if ("string" == typeof e) {
                                            ("" === e ? n : i(n, e)).classGroupId = r;
                                            return
                                        }
                                        if ("function" == typeof e) {
                                            if (e.isThemeGetter) {
                                                t(e(o), n, r, o);
                                                return
                                            }
                                            n.validators.push({
                                                validator: e,
                                                classGroupId: r
                                            });
                                            return
                                        }
                                        Object.entries(e).forEach( ([e,s]) => {
                                            t(s, i(n, e), r, o)
                                        }
                                        )
                                    }
                                    )
                                }
                                )(e, o, t, n)
                            }
                            ),
                            o
                        }(t)
                          , {conflictingClassGroups: n, conflictingClassGroupModifiers: o} = t;
                        return {
                            getClassGroupId: function(t) {
                                let n = t.split("-");
                                return "" === n[0] && 1 !== n.length && n.shift(),
                                function t(e, n) {
                                    if (0 === e.length)
                                        return n.classGroupId;
                                    let r = e[0]
                                      , i = n.nextPart.get(r)
                                      , o = i ? t(e.slice(1), i) : void 0;
                                    if (o)
                                        return o;
                                    if (0 === n.validators.length)
                                        return;
                                    let s = e.join("-");
                                    return n.validators.find( ({validator: t}) => t(s))?.classGroupId
                                }(n, e) || function(t) {
                                    if (r.test(t)) {
                                        let e = r.exec(t)[1]
                                          , n = e?.substring(0, e.indexOf(":"));
                                        if (n)
                                            return "arbitrary.." + n
                                    }
                                }(t)
                            },
                            getConflictingClassGroupIds: function(t, e) {
                                let r = n[t] || [];
                                return e && o[t] ? [...r, ...o[t]] : r
                            }
                        }
                    }(s)
                }).cache.get,
                l = n.cache.set,
                u = d,
                d(o)
            };
            function d(t) {
                let e = a(t);
                if (e)
                    return e;
                let r = function(t, e) {
                    let {splitModifiers: n, getClassGroupId: r, getConflictingClassGroupIds: i} = e
                      , s = new Set;
                    return t.trim().split(o).map(t => {
                        let {modifiers: e, hasImportantModifier: i, baseClassName: o, maybePostfixModifierPosition: s} = n(t)
                          , a = r(s ? o.substring(0, s) : o)
                          , l = !!s;
                        if (!a) {
                            if (!s || !(a = r(o)))
                                return {
                                    isTailwindClass: !1,
                                    originalClassName: t
                                };
                            l = !1
                        }
                        let u = (function(t) {
                            if (t.length <= 1)
                                return t;
                            let e = []
                              , n = [];
                            return t.forEach(t => {
                                "[" === t[0] ? (e.push(...n.sort(), t),
                                n = []) : n.push(t)
                            }
                            ),
                            e.push(...n.sort()),
                            e
                        }
                        )(e).join(":");
                        return {
                            isTailwindClass: !0,
                            modifierId: i ? u + "!" : u,
                            classGroupId: a,
                            originalClassName: t,
                            hasPostfixModifier: l
                        }
                    }
                    ).reverse().filter(t => {
                        if (!t.isTailwindClass)
                            return !0;
                        let {modifierId: e, classGroupId: n, hasPostfixModifier: r} = t
                          , o = e + n;
                        return !s.has(o) && (s.add(o),
                        i(n, r).forEach(t => s.add(e + t)),
                        !0)
                    }
                    ).reverse().map(t => t.originalClassName).join(" ")
                }(t, n);
                return l(t, r),
                r
            }
            return function() {
                return u(s.apply(null, arguments))
            }
        }(function() {
            let t = a("colors")
              , e = a("spacing")
              , n = a("blur")
              , r = a("brightness")
              , i = a("borderColor")
              , o = a("borderRadius")
              , s = a("borderSpacing")
              , l = a("borderWidth")
              , u = a("contrast")
              , d = a("grayscale")
              , c = a("hueRotate")
              , h = a("invert")
              , f = a("gap")
              , p = a("gradientColorStops")
              , m = a("gradientColorStopPositions")
              , k = a("inset")
              , C = a("margin")
              , E = a("opacity")
              , N = a("padding")
              , V = a("saturate")
              , L = a("scale")
              , R = a("sepia")
              , O = a("skew")
              , F = a("space")
              , W = a("translate")
              , _ = () => ["auto", "contain", "none"]
              , B = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , I = () => ["auto", P, e]
              , z = () => [P, e]
              , Y = () => ["", v, g]
              , U = () => ["auto", y, P]
              , $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , H = () => ["solid", "dashed", "dotted", "double", "none"]
              , X = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , G = () => ["", "0", P]
              , Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , K = () => [y, b]
              , Q = () => [y, P];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [A],
                    spacing: [v, g],
                    blur: ["none", "", M, P],
                    brightness: K(),
                    borderColor: [t],
                    borderRadius: ["none", "", "full", M, P],
                    borderSpacing: z(),
                    borderWidth: Y(),
                    contrast: K(),
                    grayscale: G(),
                    hueRotate: Q(),
                    invert: G(),
                    gap: z(),
                    gradientColorStops: [t],
                    gradientColorStopPositions: [w, g],
                    inset: I(),
                    margin: I(),
                    opacity: K(),
                    padding: z(),
                    saturate: K(),
                    scale: K(),
                    sepia: G(),
                    skew: Q(),
                    space: z(),
                    translate: z()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", P]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [M]
                    }],
                    "break-after": [{
                        "break-after": Z()
                    }],
                    "break-before": [{
                        "break-before": Z()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...$(), P]
                    }],
                    overflow: [{
                        overflow: B()
                    }],
                    "overflow-x": [{
                        "overflow-x": B()
                    }],
                    "overflow-y": [{
                        "overflow-y": B()
                    }],
                    overscroll: [{
                        overscroll: _()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": _()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": _()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [k]
                    }],
                    "inset-x": [{
                        "inset-x": [k]
                    }],
                    "inset-y": [{
                        "inset-y": [k]
                    }],
                    start: [{
                        start: [k]
                    }],
                    end: [{
                        end: [k]
                    }],
                    top: [{
                        top: [k]
                    }],
                    right: [{
                        right: [k]
                    }],
                    bottom: [{
                        bottom: [k]
                    }],
                    left: [{
                        left: [k]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", x, P]
                    }],
                    basis: [{
                        basis: I()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", P]
                    }],
                    grow: [{
                        grow: G()
                    }],
                    shrink: [{
                        shrink: G()
                    }],
                    order: [{
                        order: ["first", "last", "none", x, P]
                    }],
                    "grid-cols": [{
                        "grid-cols": [A]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", x, P]
                        }, P]
                    }],
                    "col-start": [{
                        "col-start": U()
                    }],
                    "col-end": [{
                        "col-end": U()
                    }],
                    "grid-rows": [{
                        "grid-rows": [A]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [x, P]
                        }, P]
                    }],
                    "row-start": [{
                        "row-start": U()
                    }],
                    "row-end": [{
                        "row-end": U()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", P]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", P]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...q()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...q(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...q(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [N]
                    }],
                    px: [{
                        px: [N]
                    }],
                    py: [{
                        py: [N]
                    }],
                    ps: [{
                        ps: [N]
                    }],
                    pe: [{
                        pe: [N]
                    }],
                    pt: [{
                        pt: [N]
                    }],
                    pr: [{
                        pr: [N]
                    }],
                    pb: [{
                        pb: [N]
                    }],
                    pl: [{
                        pl: [N]
                    }],
                    m: [{
                        m: [C]
                    }],
                    mx: [{
                        mx: [C]
                    }],
                    my: [{
                        my: [C]
                    }],
                    ms: [{
                        ms: [C]
                    }],
                    me: [{
                        me: [C]
                    }],
                    mt: [{
                        mt: [C]
                    }],
                    mr: [{
                        mr: [C]
                    }],
                    mb: [{
                        mb: [C]
                    }],
                    ml: [{
                        ml: [C]
                    }],
                    "space-x": [{
                        "space-x": [F]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [F]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, e]
                    }],
                    "min-w": [{
                        "min-w": [P, e, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [P, e, "none", "full", "min", "max", "fit", "prose", {
                            screen: [M]
                        }, M]
                    }],
                    h: [{
                        h: [P, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [P, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [P, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [P, e, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", M, g]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", b]
                    }],
                    "font-family": [{
                        font: [A]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", P]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", y, b]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", v, P]
                    }],
                    "list-image": [{
                        "list-image": ["none", P]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", P]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [t]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [E]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [t]
                    }],
                    "text-opacity": [{
                        "text-opacity": [E]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...H(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", v, g]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", v, P]
                    }],
                    "text-decoration-color": [{
                        decoration: [t]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: z()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", P]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [E]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...$(), T]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", S]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, D]
                    }],
                    "bg-color": [{
                        bg: [t]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [o]
                    }],
                    "rounded-s": [{
                        "rounded-s": [o]
                    }],
                    "rounded-e": [{
                        "rounded-e": [o]
                    }],
                    "rounded-t": [{
                        "rounded-t": [o]
                    }],
                    "rounded-r": [{
                        "rounded-r": [o]
                    }],
                    "rounded-b": [{
                        "rounded-b": [o]
                    }],
                    "rounded-l": [{
                        "rounded-l": [o]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [o]
                    }],
                    "rounded-se": [{
                        "rounded-se": [o]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [o]
                    }],
                    "rounded-es": [{
                        "rounded-es": [o]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [o]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [o]
                    }],
                    "rounded-br": [{
                        "rounded-br": [o]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [o]
                    }],
                    "border-w": [{
                        border: [l]
                    }],
                    "border-w-x": [{
                        "border-x": [l]
                    }],
                    "border-w-y": [{
                        "border-y": [l]
                    }],
                    "border-w-s": [{
                        "border-s": [l]
                    }],
                    "border-w-e": [{
                        "border-e": [l]
                    }],
                    "border-w-t": [{
                        "border-t": [l]
                    }],
                    "border-w-r": [{
                        "border-r": [l]
                    }],
                    "border-w-b": [{
                        "border-b": [l]
                    }],
                    "border-w-l": [{
                        "border-l": [l]
                    }],
                    "border-opacity": [{
                        "border-opacity": [E]
                    }],
                    "border-style": [{
                        border: [...H(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [l]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [l]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [E]
                    }],
                    "divide-style": [{
                        divide: H()
                    }],
                    "border-color": [{
                        border: [i]
                    }],
                    "border-color-x": [{
                        "border-x": [i]
                    }],
                    "border-color-y": [{
                        "border-y": [i]
                    }],
                    "border-color-t": [{
                        "border-t": [i]
                    }],
                    "border-color-r": [{
                        "border-r": [i]
                    }],
                    "border-color-b": [{
                        "border-b": [i]
                    }],
                    "border-color-l": [{
                        "border-l": [i]
                    }],
                    "divide-color": [{
                        divide: [i]
                    }],
                    "outline-style": [{
                        outline: ["", ...H()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [v, P]
                    }],
                    "outline-w": [{
                        outline: [v, g]
                    }],
                    "outline-color": [{
                        outline: [t]
                    }],
                    "ring-w": [{
                        ring: Y()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [t]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [E]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [v, g]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [t]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", M, j]
                    }],
                    "shadow-color": [{
                        shadow: [A]
                    }],
                    opacity: [{
                        opacity: [E]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...X(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": X()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [n]
                    }],
                    brightness: [{
                        brightness: [r]
                    }],
                    contrast: [{
                        contrast: [u]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", M, P]
                    }],
                    grayscale: [{
                        grayscale: [d]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [c]
                    }],
                    invert: [{
                        invert: [h]
                    }],
                    saturate: [{
                        saturate: [V]
                    }],
                    sepia: [{
                        sepia: [R]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [n]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [r]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [u]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [d]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [c]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [h]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [E]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [V]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [R]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [s]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [s]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [s]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", P]
                    }],
                    duration: [{
                        duration: Q()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", P]
                    }],
                    delay: [{
                        delay: Q()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", P]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [L]
                    }],
                    "scale-x": [{
                        "scale-x": [L]
                    }],
                    "scale-y": [{
                        "scale-y": [L]
                    }],
                    rotate: [{
                        rotate: [x, P]
                    }],
                    "translate-x": [{
                        "translate-x": [W]
                    }],
                    "translate-y": [{
                        "translate-y": [W]
                    }],
                    "skew-x": [{
                        "skew-x": [O]
                    }],
                    "skew-y": [{
                        "skew-y": [O]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", P]
                    }],
                    accent: [{
                        accent: ["auto", t]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P]
                    }],
                    "caret-color": [{
                        caret: [t]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": z()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": z()
                    }],
                    "scroll-my": [{
                        "scroll-my": z()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": z()
                    }],
                    "scroll-me": [{
                        "scroll-me": z()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": z()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": z()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": z()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": z()
                    }],
                    "scroll-p": [{
                        "scroll-p": z()
                    }],
                    "scroll-px": [{
                        "scroll-px": z()
                    }],
                    "scroll-py": [{
                        "scroll-py": z()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": z()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": z()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": z()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": z()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": z()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": z()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", P]
                    }],
                    fill: [{
                        fill: [t, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [v, g, b]
                    }],
                    stroke: [{
                        stroke: [t, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        })
    }
}]);
