!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var i in n)
            ("object" == typeof exports ? exports : e)[i] = n[i]
    }
}("undefined" != typeof self ? self : this, (function() {
    return function(e) {
        function t(i) {
            if (n[i])
                return n[i].exports;
            var s = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(s.exports, s, s.exports, t),
            s.l = !0,
            s.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 7)
    }([function(e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
        ;
        t.lory = function(e, t) {
            function n(e, t) {
                var n = R.classNameActiveSlide;
                e.forEach((function(e, t) {
                    e.classList.contains(n) && e.classList.remove(n)
                }
                )),
                e[t].classList.add(n)
            }
            function i(e) {
                var t = R.infinite
                  , n = e.slice(0, t)
                  , i = e.slice(e.length - t, e.length);
                return n.forEach((function(e) {
                    var t = e.cloneNode(!0);
                    M.appendChild(t)
                }
                )),
                i.reverse().forEach((function(e) {
                    var t = e.cloneNode(!0);
                    M.insertBefore(t, M.firstChild)
                }
                )),
                M.addEventListener(B.transitionEnd, y),
                u.call(M.children)
            }
            function d(t, n, i) {
                (0,
                a.default)(e, t + ".lory." + n, i)
            }
            function c(e, t, n) {
                var i = M && M.style;
                i && (i[B.transition + "TimingFunction"] = n,
                i[B.transition + "Duration"] = t + "ms",
                i[B.transform] = "translateX(" + e + "px)")
            }
            function m(e) {
                return e.getBoundingClientRect().width || e.offsetWidth
            }
            function p(e, t) {
                var i = R
                  , s = i.slideSpeed
                  , o = i.slidesToScroll
                  , r = i.infinite
                  , a = i.rewind
                  , l = i.rewindPrev
                  , m = i.rewindSpeed
                  , p = i.ease
                  , h = i.classNameActiveSlide
                  , g = i.classNameDisabledNextCtrl
                  , f = void 0 === g ? "disabled" : g
                  , v = i.classNameDisabledPrevCtrl
                  , y = void 0 === v ? "disabled" : v
                  , w = s
                  , S = t ? O + 1 : O - 1
                  , b = Math.round(T - k);
                d("before", "slide", {
                    index: O,
                    nextSlide: S
                }),
                C && C.classList.remove(y),
                x && x.classList.remove(f),
                "number" != typeof e && (e = t ? r && O + 2 * r !== L.length ? O + (r - O % r) : O + o : r && O % r != 0 ? O - O % r : O - o),
                e = Math.min(Math.max(e, 0), L.length - 1),
                r && void 0 === t && (e += r),
                l && 0 === Math.abs(E.x) && !1 === t && (e = L.length - 1,
                w = m);
                var P = Math.min(Math.max(-1 * L[e].offsetLeft, -1 * b), 0);
                a && Math.abs(E.x) === b && t && (P = 0,
                e = 0,
                w = m),
                c(P, w, p),
                E.x = P,
                L[e].offsetLeft <= b && (O = e),
                !r || e !== L.length - r && e !== L.length - L.length % r && 0 !== e || (t && (O = r),
                t || (O = L.length - 2 * r),
                E.x = -1 * L[O].offsetLeft,
                N = function() {
                    c(-1 * L[O].offsetLeft, 0, void 0)
                }
                ),
                h && n(u.call(L), O),
                !C || r || l || 0 !== e || C.classList.add(y),
                !x || r || a || e + 1 !== L.length || x.classList.add(f),
                d("after", "slide", {
                    currentSlide: O
                })
            }
            function h() {
                d("before", "init"),
                B = (0,
                o.default)();
                var r = R = s({}, l.default, t)
                  , a = r.classNameFrame
                  , c = r.classNameSlideContainer
                  , m = r.classNamePrevCtrl
                  , p = r.classNameNextCtrl
                  , h = r.classNameDisabledNextCtrl
                  , y = void 0 === h ? "disabled" : h
                  , S = r.classNameDisabledPrevCtrl
                  , b = void 0 === S ? "disabled" : S
                  , T = r.enableMouseEvents
                  , k = r.classNameActiveSlide
                  , N = r.initialIndex;
                O = N,
                _ = e.getElementsByClassName(a)[0],
                M = _.getElementsByClassName(c)[0],
                C = e.getElementsByClassName(m)[0],
                x = e.getElementsByClassName(p)[0],
                E = {
                    x: M.offsetLeft,
                    y: M.offsetTop
                },
                R.infinite ? L = i(u.call(M.children)) : (L = u.call(M.children),
                C && !R.rewindPrev && C.classList.add(b),
                x && 1 === L.length && !R.rewind && x.classList.add(y)),
                g(),
                k && n(L, O),
                C && x && (C.addEventListener("click", f),
                x.addEventListener("click", v)),
                _.addEventListener("touchstart", w, z),
                T && (_.addEventListener("mousedown", w),
                _.addEventListener("click", P)),
                R.window.addEventListener("resize", I),
                d("after", "init")
            }
            function g() {
                var e = R
                  , t = e.infinite
                  , i = e.ease
                  , s = e.rewindSpeed
                  , o = e.rewindOnResize
                  , r = e.classNameActiveSlide
                  , a = e.initialIndex;
                T = m(M),
                (k = m(_)) === T && (T = L.reduce((function(e, t) {
                    return e + m(t)
                }
                ), 0)),
                o ? O = a : (i = null,
                s = 0),
                t ? (c(-1 * L[O + t].offsetLeft, 0, null),
                O += t,
                E.x = -1 * L[O].offsetLeft) : (c(-1 * L[O].offsetLeft, s, i),
                E.x = -1 * L[O].offsetLeft),
                r && n(u.call(L), O)
            }
            function f() {
                p(!1, !1)
            }
            function v() {
                p(!1, !0)
            }
            function y() {
                N && (N(),
                N = void 0)
            }
            function w(e) {
                var t = R.enableMouseEvents
                  , n = e.touches ? e.touches[0] : e;
                t && (_.addEventListener("mousemove", S),
                _.addEventListener("mouseup", b),
                _.addEventListener("mouseleave", b)),
                _.addEventListener("touchmove", S, z),
                _.addEventListener("touchend", b);
                var i = n.pageX
                  , s = n.pageY;
                D = {
                    x: i,
                    y: s,
                    time: Date.now()
                },
                W = void 0,
                j = {},
                d("on", "touchstart", {
                    event: e
                })
            }
            function S(e) {
                var t = e.touches ? e.touches[0] : e
                  , n = t.pageX
                  , i = t.pageY;
                j = {
                    x: n - D.x,
                    y: i - D.y
                },
                void 0 === W && (W = !!(W || Math.abs(j.x) < Math.abs(j.y))),
                !W && D && c(E.x + j.x, 0, null),
                d("on", "touchmove", {
                    event: e
                })
            }
            function b(e) {
                var t = D ? Date.now() - D.time : void 0
                  , n = Number(t) < 300 && Math.abs(j.x) > 25 || Math.abs(j.x) > k / 3
                  , i = !O && j.x > 0 || O === L.length - 1 && j.x < 0
                  , s = j.x < 0;
                W || (n && !i ? p(!1, s) : c(E.x, R.snapBackSpeed)),
                D = void 0,
                _.removeEventListener("touchmove", S),
                _.removeEventListener("touchend", b),
                _.removeEventListener("mousemove", S),
                _.removeEventListener("mouseup", b),
                _.removeEventListener("mouseleave", b),
                d("on", "touchend", {
                    event: e
                })
            }
            function P(e) {
                j.x && e.preventDefault()
            }
            function I(e) {
                k !== m(_) && (g(),
                d("on", "resize", {
                    event: e
                }))
            }
            var E = void 0
              , T = void 0
              , k = void 0
              , L = void 0
              , _ = void 0
              , M = void 0
              , C = void 0
              , x = void 0
              , B = void 0
              , N = void 0
              , O = 0
              , R = {}
              , z = !!(0,
            r.default)() && {
                passive: !0
            };
            "undefined" != typeof jQuery && e instanceof jQuery && (e = e[0]);
            var D = void 0
              , j = void 0
              , W = void 0;
            return h(),
            {
                setup: h,
                reset: g,
                slideTo: function(e) {
                    p(e)
                },
                returnIndex: function() {
                    return O - R.infinite || 0
                },
                prev: f,
                next: v,
                destroy: function() {
                    d("before", "destroy"),
                    _.removeEventListener(B.transitionEnd, y),
                    _.removeEventListener("touchstart", w, z),
                    _.removeEventListener("touchmove", S, z),
                    _.removeEventListener("touchend", b),
                    _.removeEventListener("mousemove", S),
                    _.removeEventListener("mousedown", w),
                    _.removeEventListener("mouseup", b),
                    _.removeEventListener("mouseleave", b),
                    _.removeEventListener("click", P),
                    R.window.removeEventListener("resize", I),
                    C && C.removeEventListener("click", f),
                    x && x.removeEventListener("click", v),
                    R.infinite && Array.apply(null, Array(R.infinite)).forEach((function() {
                        M.removeChild(M.firstChild),
                        M.removeChild(M.lastChild)
                    }
                    )),
                    d("after", "destroy")
                }
            }
        }
        ;
        var o = i(n(1))
          , r = i(n(2))
          , a = i(n(3))
          , l = i(n(6))
          , u = Array.prototype.slice
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = void 0
              , t = void 0
              , n = void 0;
            return function() {
                var i = document.createElement("_")
                  , s = i.style
                  , o = void 0;
                "" === s[o = "webkitTransition"] && (n = "webkitTransitionEnd",
                t = o),
                "" === s[o = "transition"] && (n = "transitionend",
                t = o),
                "" === s[o = "webkitTransform"] && (e = o),
                "" === s[o = "msTransform"] && (e = o),
                "" === s[o = "transform"] && (e = o),
                document.body.insertBefore(i, null),
                s[e] = "translateX(0)",
                document.body.removeChild(i)
            }(),
            {
                transform: e,
                transition: t,
                transitionEnd: n
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t),
                window.removeEventListener("testPassive", null, t)
            } catch (e) {}
            return e
        }
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e, t, n) {
            var s = new i.default(t,{
                bubbles: !0,
                cancelable: !0,
                detail: n
            });
            e.dispatchEvent(s)
        }
        ;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(4))
    }
    , function(e, t, n) {
        (function(t) {
            var n = t.CustomEvent;
            e.exports = function() {
                try {
                    var e = new n("cat",{
                        detail: {
                            foo: "bar"
                        }
                    });
                    return "cat" === e.type && "bar" === e.detail.foo
                } catch (e) {}
                return !1
            }() ? n : "undefined" != typeof document && "function" == typeof document.createEvent ? function(e, t) {
                var n = document.createEvent("CustomEvent");
                return t ? n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : n.initCustomEvent(e, !1, !1, void 0),
                n
            }
            : function(e, t) {
                var n = document.createEventObject();
                return n.type = e,
                t ? (n.bubbles = Boolean(t.bubbles),
                n.cancelable = Boolean(t.cancelable),
                n.detail = t.detail) : (n.bubbles = !1,
                n.cancelable = !1,
                n.detail = void 0),
                n
            }
        }
        ).call(t, n(5))
    }
    , function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            slidesToScroll: 1,
            slideSpeed: 300,
            rewindSpeed: 600,
            snapBackSpeed: 200,
            ease: "ease",
            rewind: !1,
            infinite: !1,
            initialIndex: 0,
            classNameFrame: "js_frame",
            classNameSlideContainer: "js_slides",
            classNamePrevCtrl: "js_prev",
            classNameNextCtrl: "js_next",
            classNameActiveSlide: "active",
            enableMouseEvents: !1,
            window: "undefined" != typeof window ? window : null,
            rewindOnResize: !0
        }
    }
    , function(e, t, n) {
        e.exports = n(0)
    }
    ])
}
)),
function() {
    var e = {};
    this.tmpl = function t(n, i) {
        var s = /\W/.test(n) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);
        return i ? s(i) : s
    }
}(),
function(e, t, n) {
    function i(e) {
        return "[object Function]" == f.call(e)
    }
    function s(e) {
        return "string" == typeof e
    }
    function o() {}
    function r(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function a() {
        var e = v.shift();
        y = 1,
        e ? e.t ? h((function() {
            ("c" == e.t ? m.injectCss : m.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }
        ), 0) : (e(),
        a()) : y = 0
    }
    function l(e, n, i, s, o, l, u) {
        function d(t) {
            if (!p && r(c.readyState) && (w.r = p = 1,
            !y && a(),
            c.onload = c.onreadystatechange = null,
            t))
                for (var i in "img" != e && h((function() {
                    b.removeChild(c)
                }
                ), 50),
                k[n])
                    k[n].hasOwnProperty(i) && k[n][i].onload()
        }
        u = u || m.errorTimeout;
        var c = t.createElement(e)
          , p = 0
          , f = 0
          , w = {
            t: i,
            s: n,
            e: o,
            a: l,
            x: u
        };
        1 === k[n] && (f = 1,
        k[n] = []),
        "object" == e ? c.data = n : (c.src = n,
        c.type = e),
        c.width = c.height = "0",
        c.onerror = c.onload = c.onreadystatechange = function() {
            d.call(this, f)
        }
        ,
        v.splice(s, 0, w),
        "img" != e && (f || 2 === k[n] ? (b.insertBefore(c, S ? null : g),
        h(d, u)) : k[n].push(c))
    }
    function u(e, t, n, i, o) {
        return y = 0,
        t = t || "j",
        s(e) ? l("c" == t ? I : P, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e),
        1 == v.length && a()),
        this
    }
    function d() {
        var e = m;
        return e.loader = {
            load: u,
            i: 0
        },
        e
    }
    var c, m, p = t.documentElement, h = e.setTimeout, g = t.getElementsByTagName("script")[0], f = {}.toString, v = [], y = 0, w = "MozAppearance"in p.style, S = w && !!t.createRange().compareNode, b = S ? p : g.parentNode, P = (p = e.opera && "[object Opera]" == f.call(e.opera),
    p = !!t.attachEvent && !p,
    w ? "object" : p ? "script" : "img"), I = p ? "script" : P, E = Array.isArray || function(e) {
        return "[object Array]" == f.call(e)
    }
    , T = [], k = {}, L = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    };
    (m = function(e) {
        function t(e, t, n, s, o) {
            var r = function(e) {
                e = e.split("!");
                var t, n, i, s = T.length, o = e.pop(), r = e.length;
                for (o = {
                    url: o,
                    origUrl: o,
                    prefixes: e
                },
                n = 0; n < r; n++)
                    i = e[n].split("="),
                    (t = L[i.shift()]) && (o = t(o, i));
                for (n = 0; n < s; n++)
                    o = T[n](o);
                return o
            }(e)
              , a = r.autoCallback;
            r.url.split(".").pop().split("?").shift(),
            r.bypass || (t && (t = i(t) ? t : t[e] || t[s] || t[e.split("/").pop().split("?")[0]]),
            r.instead ? r.instead(e, t, n, s, o) : (k[r.url] ? r.noexec = !0 : k[r.url] = 1,
            n.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout),
            (i(t) || i(a)) && n.load((function() {
                d(),
                t && t(r.origUrl, o, s),
                a && a(r.origUrl, o, s),
                k[r.url] = 2
            }
            ))))
        }
        function n(e, n) {
            function r(e, o) {
                if (e) {
                    if (s(e))
                        o || (c = function() {
                            var e = [].slice.call(arguments);
                            m.apply(this, e),
                            p()
                        }
                        ),
                        t(e, c, n, 0, u);
                    else if (Object(e) === e)
                        for (l in a = function() {
                            var t, n = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && n++;
                            return n
                        }(),
                        e)
                            e.hasOwnProperty(l) && (!o && !--a && (i(c) ? c = function() {
                                var e = [].slice.call(arguments);
                                m.apply(this, e),
                                p()
                            }
                            : c[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t),
                                    p()
                                }
                            }(m[l])),
                            t(e[l], c, n, l, u))
                } else
                    !o && p()
            }
            var a, l, u = !!e.test, d = e.load || e.both, c = e.callback || o, m = c, p = e.complete || o;
            r(u ? e.yep : e.nope, !!d),
            d && r(d)
        }
        var r, a, l = this.yepnope.loader;
        if (s(e))
            t(e, 0, l, 0);
        else if (E(e))
            for (r = 0; r < e.length; r++)
                s(a = e[r]) ? t(a, 0, l, 0) : E(a) ? m(a) : Object(a) === a && n(a, l);
        else
            Object(e) === e && n(e, l)
    }
    ).addPrefix = function(e, t) {
        L[e] = t
    }
    ,
    m.addFilter = function(e) {
        T.push(e)
    }
    ,
    m.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading",
    t.addEventListener("DOMContentLoaded", c = function() {
        t.removeEventListener("DOMContentLoaded", c, 0),
        t.readyState = "complete"
    }
    , 0)),
    e.yepnope = d(),
    e.yepnope.executeStack = a,
    e.yepnope.injectJs = function(e, n, i, s, l, u) {
        var d, c, p = t.createElement("script");
        s = s || m.errorTimeout;
        for (c in p.src = e,
        i)
            p.setAttribute(c, i[c]);
        n = u ? a : n || o,
        p.onreadystatechange = p.onload = function() {
            !d && r(p.readyState) && (d = 1,
            n(),
            p.onload = p.onreadystatechange = null)
        }
        ,
        h((function() {
            d || (d = 1,
            n(1))
        }
        ), s),
        l ? p.onload() : g.parentNode.insertBefore(p, g)
    }
    ,
    e.yepnope.injectCss = function(e, n, i, s, r, l) {
        var u;
        s = t.createElement("link"),
        n = l ? a : n || o;
        for (u in s.href = e,
        s.rel = "stylesheet",
        s.type = "text/css",
        i)
            s.setAttribute(u, i[u]);
        r || (g.parentNode.insertBefore(s, g),
        h(n, 0))
    }
}(this, document);
var showUI = function() {
    var e = document.getElementsByClassName("speed_loader")
      , t = document.getElementsByClassName("speed_checker");
    e.length > 0 && t.length > 0 && (e[0].style.display = "none",
    t[0].style.display = "block")
}
  , runTest = function() {
    showUI();
    var e = speedChecker;
    "ws" != IP2.measureMethod && "wss" != IP2.measureMethod || (e = webSocketsSpeedChecker,
    window.IP2.ui.duration.ul = 14e3,
    window.IP2.ui.duration.dl = 14e3),
    window.IP2.engine = e,
    window.IP2.engine.initialize(speedmeterUI).start(),
    setTimeout((function() {
        var e = document.getElementById("speed_value").innerHTML
          , t = document.getElementById("speed_value_addition").innerHTML;
        if ("0" == e && "0" == t) {
            var n = "/speed/?start=✓&id=" + IP2.randomPlatform
              , i = 'Данная площадка недоступна, но вы можете <a href="' + n + '">попробовать другую</a>.';
            iziToast.show(Object.assign({
                title: i
            }, {
                timeout: 5e3,
                maxWidth: 400,
                position: "topCenter"
            })),
            setTimeout((function() {
                window.location.href = n
            }
            ), 5e3)
        }
    }
    ), 5e3)
}
  , jVectorMap = {
    load: ["timeout=3600!/js/speed-map" + (window.IP2.isInternationalUI ? "-en" : "") + ".min.js?v=1"],
    complete: function() {
        window.jvm ? jVectorMapLoad() : document.getElementById("world-map") && (document.getElementById("world-map").style.display = "none")
    }
}
  , computeDistance = function(e, t, n, i, s) {
    var o = Math.PI * e / 180
      , r = Math.PI * n / 180
      , a = t - i
      , l = Math.PI * a / 180
      , u = Math.sin(o) * Math.sin(r) + Math.cos(o) * Math.cos(r) * Math.cos(l);
    return u = 60 * (u = 180 * (u = Math.acos(u)) / Math.PI) * 1.1515,
    "K" == s && (u *= 1.609344),
    "N" == s && (u *= .8684),
    u
}
  , showDistance = function(e) {
    var t, n = document.getElementById("platform_distance"), i = document.getElementById("platform_distance_value");
    window.IP2.latitude == e.latLng[0] && window.IP2.longitude == e.latLng[1] ? n.style.display = "none" : window.IP2.latitude && window.IP2.longitude && (t = computeDistance(e.latLng[0], e.latLng[1], window.IP2.latitude, window.IP2.longitude, "K"),
    (t = parseInt(t)) > 0 && (n.style.display = "table-row",
    i.innerHTML = t + " " + localization.distance))
}
  , jVectorMapLoad = function() {
    showUI();
    var e = new jvm.Map({
        container: $("#world-map"),
        map: "world_mill" + (window.IP2.isInternationalUI ? "_en" : ""),
        markersSelectable: !0,
        zoomMax: 100,
        scaleColors: ["#c8eeff", "#0071a4"],
        normalizeFunction: "polynomial",
        hoverOpacity: .7,
        hoverColor: !1,
        markerStyle: {
            initial: {
                fill: "orange",
                stroke: "#383f47"
            },
            selected: {
                fill: "#c4333d"
            }
        },
        backgroundColor: "#01679b",
        markers: window.IP2.markers,
        focusOn: {
            x: .7,
            y: .3,
            scale: 3
        },
        series: {
            markers: [{
                attribute: "r",
                scale: [5, 7],
                values: window.IP2.markers.reduce((function(e, t, n) {
                    var i = null;
                    return i = "1" == t.capital ? 7 : 5,
                    e[n] = i,
                    e
                }
                ), {})
            }, window.IP2.location]
        },
        onMarkerClick: function(t, n) {
            var i = document.getElementById("platform_list")
              , s = document.getElementById("platform_show_all")
              , o = e.markers
              , r = o[n].config
              , a = r.cityId
              , l = [];
            for (var u in o)
                o[u].config.cityId == a && "id"in o[u].config && l.push({
                    marker: o[u].config
                });
            if (l.length > 1) {
                l[n = Math.floor(Math.random() * l.length)].checked = "checked",
                r = l[n].marker,
                i.innerHTML = tmpl("platforms_tmpl", {
                    platforms: l
                }),
                s.style.display = "inline"
            } else {
                if (1 != l.length)
                    return;
                i.innerHTML = null,
                s.style.display = "none"
            }
            speedChecker.changePlatform(r),
            e.clearSelectedMarkers(),
            updateTestButtonLink(r)
        }
    });
    window.IP2.latitude && window.IP2.longitude && e.setFocus({
        lat: window.IP2.latitude,
        lng: window.IP2.longitude,
        scale: 8
    });
    var t, n = window.IP2.markers, i = n.length;
    for (t = 0; t < i; t++)
        if (n[t].id == window.IP2.platform) {
            showDistance(n[t]),
            updateTestButtonLink(n[t]),
            e.setSelectedMarkers([t]);
            break
        }
}
  , progressType = {
    ping: 1,
    download: 2,
    upload: 3,
    finished: 4
}
  , webSocketsSpeedChecker = {
    poolWS: {
        dl: [],
        ul: [],
        ping: null
    },
    state: progressType,
    packetCache: [],
    currentState: 0,
    timeStart: {
        download: 0,
        upload: 0
    },
    size: {
        dl: 0,
        ul: 0
    },
    time: {
        dl: 0,
        ul: 0
    },
    countPing: 0,
    latency: 0,
    result: {
        ping: 0,
        incoming: 0,
        outcoming: 0
    },
    connectionReady: 0,
    connectionError: 0,
    initThreads: 4,
    maxThreads: 32,
    safariMaxThreads: 16,
    timeout: {
        download: null,
        upload: null
    },
    initialize: function(e) {
        return this.ui = e,
        this.ui.initialize(),
        this
    },
    start: function() {
        var e = this;
        this.callback = saveMeasurement,
        this.webSocketUrl = window.IP2.platformUrl.replace(/\/$/, ""),
        this.ui.start(),
        this.ping((function(t) {
            e.result.ping = t,
            e.ui.setLatencyResult(t),
            e.changeState(e.state.download);
            for (var n = 0; n < e.initThreads; n++)
                e.poolWS.dl.push(e.measureIncomingWS())
        }
        ))
    },
    terminate: function() {
        null != this.poolWS.ping && this.poolWS.ping.close(),
        this.poolWS.dl.forEach((function(e) {
            e.close()
        }
        )),
        this.poolWS.ul.forEach((function(e) {
            e.close()
        }
        )),
        this.poolWS.dl = [],
        this.poolWS.ul = [],
        this.poolWS.ping = null,
        null != this.timeout.download && clearTimeout(this.timeout.download),
        null != this.timeout.upload && clearTimeout(this.timeout.upload),
        this.currentState = 0,
        this.timeStart.download = 0,
        this.timeStart.upload = 0,
        this.size.dl = 0,
        this.size.ul = 0,
        this.time.dl = 0,
        this.time.ul = 0,
        this.countPing = 0,
        this.latency = 0,
        this.result.ping = 0,
        this.result.incoming = 0,
        this.result.outcoming = 0,
        this.connectionReady = 0,
        this.connectionError = 0,
        this.ui.resetProgress()
    },
    ping: function(e) {
        var t, n, i = this;
        (t = new WebSocket(i.webSocketUrl)).onopen = function() {
            i.ui.ping(),
            n = Date.now(),
            t.send("PING " + n)
        }
        ,
        t.onmessage = function() {
            var s = Date.now() - n;
            if ((s < i.latency || 0 == i.latency) && (i.latency = s,
            i.ui.setLatency(s)),
            i.countPing < 12)
                return i.countPing++,
                n = Date.now(),
                void t.send("PING " + n);
            e(i.latency)
        }
        ,
        i.poolWS.ping = t
    },
    downloadTimeout: function() {
        var e = this;
        e.timeout.download = setTimeout((function() {
            e.changeState(e.state.upload),
            e.clearPool("dl"),
            e.result.incoming = e.convertToKbitPerSecond(e.size.dl, e.time.dl),
            e.ui.setIncomingResult(e.result.incoming);
            for (var t = 0; t < e.initThreads; t++)
                e.poolWS.ul.push(e.measureOutcomingWS())
        }
        ), 14e3)
    },
    uploadTimeout: function() {
        var e = this;
        e.timeout.upload = setTimeout((function() {
            e.changeState(e.state.finished),
            e.clearPool("ul");
            var t = e.convertToKbitPerSecond(e.size.ul, e.time.ul);
            e.ui.setOutcomingResult(t),
            e.callback(e.result.ping, e.result.incoming, t, e.ui),
            e.cleanOnFinish()
        }
        ), 14e3)
    },
    generatePacket: function(e) {
        var t;
        if (e in this.packetCache)
            return this.packetCache[e];
        t = new Uint8Array(e);
        for (var n = 0; n < e; n++)
            t[n] = Math.floor(10 * Math.random() + 20);
        return t[0] = 85,
        t[1] = 80,
        t[2] = 76,
        t[3] = 79,
        t[4] = 65,
        t[5] = 68,
        t[6] = 32,
        this.packetCache[e] = t.buffer,
        t.buffer
    },
    measureIncomingWS: function() {
        var e, t = this;
        return "DOWNLOAD",
        (e = new WebSocket(t.webSocketUrl)).onopen = function() {
            t.currentState == t.state.download && t.connectionsEstablishment(e, "dl", (function() {
                t.timeStart.download = (new Date).getTime(),
                t.ui.download(),
                t.downloadTimeout()
            }
            ))
        }
        ,
        e.onmessage = function() {
            t.currentState == t.state.download && (t.size.dl += e.sampleSize,
            t.time.dl = .001 * ((new Date).getTime() - t.timeStart.download),
            t.ui.setIncoming(parseInt(8 * t.size.dl / 1e3 / t.time.dl)),
            e.readyState == e.OPEN && e.send("DOWNLOAD " + e.getSampleSize()))
        }
        ,
        e.constructSample = function() {
            return e.sampleSize = 5e3,
            e.maxSize = 2e6,
            e.prevTime = (new Date).getTime(),
            "DOWNLOAD " + e.sampleSize
        }
        ,
        e.getSampleSize = function() {
            var t = (new Date).getTime();
            return t - e.prevTime < 300 && (e.sampleSize = 2 * e.sampleSize),
            e.prevTime = t,
            e.sampleSize
        }
        ,
        e.onerror = function() {
            t.connectionError++
        }
        ,
        e
    },
    measureOutcomingWS: function() {
        var e, t = this;
        return (e = new WebSocket(t.webSocketUrl)).binaryType = "arraybuffer",
        e.onopen = function() {
            t.currentState == t.state.upload && t.connectionsEstablishment(e, "ul", (function() {
                t.timeStart.upload = (new Date).getTime(),
                t.ui.upload(),
                t.uploadTimeout()
            }
            ))
        }
        ,
        e.onmessage = function() {
            t.currentState == t.state.upload && (t.size.ul += e.sampleSize,
            t.time.ul = .001 * ((new Date).getTime() - t.timeStart.upload),
            t.ui.setOutcoming(parseInt(8 * t.size.ul / 1e3 / t.time.ul)),
            e.readyState == e.OPEN && e.send(e.getSampleSize()))
        }
        ,
        e.onerror = function() {
            t.connectionError++
        }
        ,
        e.constructSample = function() {
            return e.sampleSize = 5e3,
            e.maxSize = 5e5,
            e.prevTime = (new Date).getTime(),
            t.generatePacket(e.sampleSize, !1)
        }
        ,
        e.getSampleSize = function() {
            var n = (new Date).getTime();
            return n - e.prevTime < 300 && e.sampleSize <= e.maxSize && (e.sampleSize = parseInt(2 * e.sampleSize)),
            e.prevTime = n,
            t.generatePacket(e.sampleSize, !1)
        }
        ,
        e
    },
    connectionsEstablishment: function(e, t, n) {
        var i;
        if (0 == this.connectionReady && n(),
        this.connectionReady++,
        (i = this.connectionReady + this.connectionError) == this.initThreads && this.initThreads < 20) {
            var s = 4;
            this.computeSpeed(t) > 300 && (s = window.jQuery && $.browser.safari ? this.safariMaxThreads - this.initThreads : 28);
            for (var o = 0; o < s; o++)
                "dl" == t ? this.poolWS.dl.push(this.measureIncomingWS()) : this.poolWS.ul.push(this.measureOutcomingWS())
        }
        i >= this.maxThreads || e.send(e.constructSample())
    },
    computeSpeed: function(e) {
        return parseInt(8 * this.size[e] / 1e3 / this.time[e])
    },
    convertToKbitPerSecond: function(e, t) {
        return 8 * e / t / 1e3
    },
    changeState: function(e) {
        this.currentState = e
    },
    clearPool: function(e) {
        for (var t = 0; t < this.poolWS[e].length; t++)
            this.poolWS[e][t].readyState == this.poolWS[e][t].OPEN && this.poolWS[e][t].close();
        this.poolWS[e] = [],
        this.connectionReady = 0,
        this.connectionError = 0
    },
    cleanOnFinish: function() {
        this.currentState = 0,
        this.timeStart = {
            download: 0,
            upload: 0
        },
        this.size = {
            dl: 0,
            ul: 0
        },
        this.time = {
            dl: 0,
            ul: 0
        },
        this.countPing = 0,
        this.latency = 0,
        this.result = {
            ping: 0,
            incoming: 0,
            outcoming: 0
        }
    }
}
  , speedmeterUI = {
    currentGauge: 0,
    gaugeInProgress: !1,
    i: 0,
    intervals: [],
    start: function() {
        var e = document.getElementsByClassName("speed_checker__links")
          , t = document.getElementsByClassName("speed_info")
          , n = document.getElementById("content");
        this.progressView.style.display = "flex",
        this.speedmeter.style.display = "block",
        this.form && (this.form.style.display = "none"),
        e.length > 0 && (e[0].style.display = "block"),
        t.length > 0 && (t[0].style.display = "none"),
        n && document.getElementById("content").scrollIntoView(),
        this.result && (this.result.style.display = "none"),
        window.IP2.isWidget && this.speedmeter.classList.remove("st-gauge__hide"),
        this.resetProgress()
    },
    shutdown: function() {
        var e = document.getElementsByClassName("speed_checker__links");
        e.length > 0 && (e[0].style.display = "none"),
        window.IP2.isWidget ? this.speedmeter.classList.add("st-gauge__hide") : this.progressView.style.display = "none",
        this.result && (this.result.style.display = "block"),
        window.IP2.isWidget || (this.speedmeter.style.display = "none")
    },
    initialize: function() {
        this.form = document.getElementById("testForm"),
        this.progressView = document.getElementById("progressView"),
        this.speedmeter = document.getElementById("speedmeter"),
        this.result = document.getElementById("speed_checker__response"),
        this.inGauge = document.getElementById("inGauge"),
        this.outGauge = document.getElementById("outGauge"),
        this.pingProgressFinished = document.getElementById("pingProgressFinished"),
        this.inProgressFinished = document.getElementById("inProgressFinished"),
        this.outProgressFinished = document.getElementById("outProgressFinished"),
        this.pingProgress = document.getElementById("pingProgress"),
        this.inProgress = document.getElementById("inProgress"),
        this.outProgress = document.getElementById("outProgress"),
        this.progressList = [this.pingProgress, this.inProgress, this.outProgress],
        this.pingResult = document.getElementById("pingResult"),
        this.inResult = document.getElementById("inResult"),
        this.outResult = document.getElementById("outResult"),
        window.IP2.isWidget && (this.speedmeter.style.display = "block",
        this.initControls())
    },
    initControls: function() {
        document.addEventListener("DOMContentLoaded", (function() {
            var e = this
              , t = document.querySelector(".js_simple");
            this.lory = lory(t, {
                infinite: 1
            }),
            t.addEventListener("after.lory.slide", (function() {
                var t = window.IP2.platforms[e.lory.returnIndex()];
                void 0 !== t && (window.IP2.platformUrl = t.url,
                window.IP2.platform = t.id)
            }
            )),
            this.lory.slideTo(window.IP2.platformKey)
        }
        ))
    },
    ping: function() {
        var e = document.getElementsByClassName("st-stat-icon--orange")[0];
        this.animateProgress(e, progressType.ping)
    },
    download: function() {
        var e = document.getElementsByClassName("st-stat-icon--green")[0]
          , t = document.styleSheets[0];
        this.addCSSRule(t, ".st-gauge__progress-fade::before", "margin-top: -15px;", 0),
        this.addCSSRule(t, ".st-gauge__inner-progress-fade::before", "margin-top: -15px;", 0),
        document.getElementsByClassName("st-gauge__progress-fade")[0].style.display = "block",
        document.getElementsByClassName("st-gauge__inner-progress-fade")[0].style.display = "block",
        this.animateProgress(e, progressType.download)
    },
    upload: function() {
        var e = document.getElementsByClassName("st-stat-icon--gray")[0];
        this.speedmeter.classList.add("st-gauge_outcoming"),
        this.animateProgress(e, progressType.upload)
    },
    resetProgress: function() {
        var e = this;
        e.setSpeed(0, progressType.download),
        e.pingProgressFinished.style.display = "none",
        e.inProgressFinished.style.display = "none",
        e.outProgressFinished.style.display = "none",
        e.pingResult.innerHTML = "–",
        e.inResult.innerHTML = "–",
        e.outResult.innerHTML = "–",
        e.pingProgressFinished.classList.remove("st-stat-icon--orange-shadow"),
        e.inProgressFinished.classList.remove("st-stat-icon--green-shadow"),
        e.outProgressFinished.classList.remove("st-stat-icon--gray-shadow"),
        e.progressList.forEach((function(t, n) {
            t.style.display = "inline-block",
            t.style.backgroundImage = e.getBackground(0, n + 1)
        }
        )),
        e.inGauge.style.display = "block",
        e.outGauge.style.display = "none",
        e.speedmeter.classList.remove("st-gauge_outcoming"),
        this.intervals.forEach((function(e) {
            clearInterval(e)
        }
        ))
    },
    setLatency: function(e) {
        document.getElementsByClassName("st-stats__value")[0].innerHTML = e
    },
    setIncoming: function(e) {
        this.setSpeed(e, progressType.download)
    },
    setOutcoming: function(e) {
        this.setSpeed(e, progressType.upload)
    },
    setLatencyResult: function(e) {
        this.pingProgressFinished.style.display = "inline-block",
        this.pingProgressFinished.classList.add("st-stat-icon--orange-shadow"),
        this.pingResult.innerHTML = e,
        this.pingProgress.style.display = "none"
    },
    setIncomingResult: function(e) {
        this.inProgressFinished.style.display = "inline-block",
        this.inProgressFinished.classList.add("st-stat-icon--green-shadow"),
        this.inResult.innerHTML = Math.round(e / 1e3),
        this.inProgress.style.display = "none",
        this.inGauge.style.display = "none",
        this.outGauge.style.display = "block"
    },
    setOutcomingResult: function(e) {
        this.outProgressFinished.style.display = "inline-block",
        this.outProgressFinished.classList.add("st-stat-icon--gray-shadow"),
        this.outResult.innerHTML = Math.round(e / 1e3),
        this.outProgress.style.display = "none"
    },
    setSpeed: function(e, t) {
        this.i++;
        var n = this
          , i = Math.round(e / 1e3)
          , s = Math.floor(i / 100);
        if (!n.gaugeInProgress) {
            s != this.currentGauge && (n.gaugeInProgress = !0,
            setTimeout((function() {
                n.gaugeInProgress = !1
            }
            ), 800),
            this.updateGauge(s, t));
            var o = 2.4 * i - 210 + 120 * s
              , r = 2.4 * (i - 100 * s)
              , a = r - 33
              , l = n.getBackground(r, t);
            document.getElementById("speed_value").innerHTML = i,
            document.getElementById("speed_value_addition").innerHTML = (e / 1e3).toFixed(2).slice(-2),
            this.i % 2 == 0 && (document.getElementsByClassName("st-gauge__progress-fade")[0].style.transform = "rotate(" + a + "deg)",
            document.getElementsByClassName("st-gauge__inner-progress-fade")[0].style.transform = "rotate(" + a + "deg)",
            document.getElementsByClassName("st-gauge__inner-progress")[0].style.backgroundImage = l,
            document.getElementsByClassName("st-gauge__progress")[0].style.backgroundImage = l,
            document.getElementsByClassName("st-gauge__arrow")[0].style.transform = "rotate(" + o + "deg)")
        }
    },
    updateGauge: function(e, t) {
        var n = this
          , i = t == progressType.upload ? "st-gauge__label_outcoming" : ""
          , s = 100 * e
          , o = document.getElementsByClassName("st-gauge__labels--new");
        if (o.length > 0)
            for (var r = o.length - 1; 0 <= r; r--)
                o[r].parentElement.removeChild(o[0]);
        var a = document.createElement("div");
        a.className = "st-gauge__labels st-gauge__labels--new",
        a.id = "speedometer",
        a.innerHTML = tmpl("gauge_tmpl", {
            start: s,
            className: i
        });
        var l = document.getElementById("gauge_labels");
        l.parentNode.insertBefore(a, l.nextSibling),
        setTimeout((function() {
            l.style.opacity = 0,
            n.currentGauge = e,
            setTimeout((function() {
                for (var e = l.getElementsByClassName("st-gauge__label"), t = 0; t < 11; t++)
                    e[t].innerHTML = s + 10 * t;
                l.style.opacity = 1
            }
            ), 400)
        }
        ))
    },
    getBackground: function(e, t) {
        var n, i;
        switch (t) {
        case progressType.ping:
            n = "#ffe9d0",
            i = "#ffa137";
            break;
        case progressType.download:
            n = "#f3fdf7",
            i = "#7ed7ad";
            break;
        case progressType.upload:
            n = "#f3f7fd",
            i = "#7aa2ca"
        }
        return e < 180 ? "linear-gradient(90deg, " + n + " 50%, transparent 50%, transparent), linear-gradient(" + Math.round(90 + e) + "deg, " + i + " 50%, " + n + " 50%, " + n + ")" : "linear-gradient(" + Math.round(-90 + e - 180) + "deg, " + i + " 50%, transparent 50%, transparent), linear-gradient(270deg, " + i + " 50%, " + n + " 50%, " + n + ")"
    },
    animateProgress: function(e, t) {
        var n = this
          , i = (new Date).getTime()
          , s = setInterval((function() {
            var o = ((new Date).getTime() - i) / 100 * 2.6;
            o < 360 ? e.style.backgroundImage = n.getBackground(o, t) : (e.style.backgroundImage = n.getBackground(360, t),
            clearInterval(s))
        }
        ), 100);
        this.intervals.push(s)
    },
    addCSSRule: function(e, t, n, i) {
        "addRule"in e ? e.addRule(t, n) : "insertRule"in e && e.insertRule(t + "{" + n + "}", i)
    }
}
  , speedChecker = {
    host: window.location.protocol + "//" + window.location.host,
    spareHost: "http://sp.2ip.ru/",
    download: null,
    upload: null,
    requestNum: 1,
    downloadList: [],
    uploadList: [],
    pingResult: 0,
    frameList: [],
    isReady: !0,
    pingTry: 0,
    postSize: 5e4,
    startTime: (new Date).getTime(),
    useReservedPlatform: !1,
    files: {
        s150: "58999",
        s300: "271619",
        s600: "1224044",
        s1200: "5268336",
        s1600: "9641831",
        s2400: "22448118",
        s5000: "75137854"
    },
    pool: {
        _xhrs: [],
        get: function() {
            var e = new XMLHttpRequest;
            return this._xhrs.push(e),
            e
        },
        kill: function(e) {
            e.abort()
        },
        killAll: function() {
            for (var e = 0; e < this._xhrs.length; e++)
                this.kill(this._xhrs[e])
        }
    },
    setDownload: function(e) {
        var t = this.filter(e);
        this.download = t
    },
    setUpload: function(e) {
        this.upload = this.filter(e)
    },
    filter: function(e) {
        return e.replace(/\/$/, "") + "/"
    },
    initialize: function(e) {
        return this.ui = e,
        this.ui.initialize(),
        this.postData = this.getRandomString(this.postSize),
        this.download && this.upload || (this.setDownload(window.IP2.platformUrl),
        this.setUpload(window.IP2.platformUrl)),
        this
    },
    start: function() {
        this.ui.start(),
        this.isReady && (this.ui.ping(),
        this.pingOverWeb())
    },
    getMarkerByPlatform: function(e) {
        var t, n = window.IP2.markers, i = n.length;
        for (t = 0; t < i; t++)
            if (n[t].id == e)
                return n[t]
    },
    switchToReservePlatform: function() {
        this.setDownload(this.spareHost),
        this.setUpload(this.spareHost)
    },
    changePlatform: function(e) {
        var t = document.getElementById("platform_address")
          , n = document.getElementById("platform_isp")
          , i = e.city
          , s = e.isp
          , o = e.maxmind;
        o.length > 0 ? n.innerHTML = '<a target="_blank" href="/isp/' + o + '/">' + s + "</a>" : n.innerHTML = s,
        t.innerHTML = i,
        showDistance(e),
        IP2.platform = e.id,
        IP2.measureMethod = e.isSecureWebSockets ? "wss" : e.scheme,
        IP2.platformUrl = e.platformUrl,
        speedChecker.setDownload(e.platformUrl),
        speedChecker.setUpload(e.platformUrl)
    },
    pingOverWeb: function() {
        var e, t, n = (new Date).getTime(), i = new Image, s = this;
        this.currentType = "ping",
        this.isReady = !1,
        this.pingTry++,
        this.pingTry < 4 ? (i.onload = function() {
            (e = (new Date).getTime() - n - 3) < 1 && (e = 1),
            (e < s.pingResult || 0 == s.pingResult) && (s.pingResult = e),
            s.pingOverWeb()
        }
        ,
        i.onerror = function() {
            s.useReservedPlatform = !0,
            s.pingOverWeb()
        }
        ,
        t = this.useReservedPlatform ? this.spareHost : this.download,
        i.src = t + "spacer.gif?t=" + n) : (this.ui.setLatencyResult(this.pingResult),
        this.ui.download(),
        this.timeoutIncoming(),
        this.measureIncoming())
    },
    timeoutIncoming: function() {
        var e = this;
        setTimeout((function() {
            "incoming" == e.currentType && (e.timeOutIncoming = !0,
            e.pool.killAll(),
            e.requestNum = 5,
            e.ui.setIncomingResult(e.getMaxSpeed(e.downloadList)),
            e.ui.upload(),
            e.timeoutOutcoming(),
            e.measureOutcoming())
        }
        ), 11e3)
    },
    timeoutOutcoming: function() {
        var e = this;
        setTimeout((function() {
            "outcoming" == e.currentType && (e.timeOutOutcoming = !0,
            e.pool.killAll(),
            e.end())
        }
        ), 11e3)
    },
    measureIncoming: function() {
        var e, t, n, i = this.getRandomString(16), s = this.requestNum, o = this.downloadList, r = o.length;
        if (this.currentType = "incoming",
        s > 4)
            return this.ui.setIncomingResult(this.getMaxSpeed(this.downloadList)),
            this.ui.upload(),
            this.timeoutOutcoming(),
            void this.measureOutcoming();
        switch (s) {
        case 1:
            e = "300";
            break;
        case 2:
            e = "600";
            break;
        case 3:
            e = "1200";
            break;
        case 4:
            e = o[r - 1].mbps > 6e4 ? "2400" : "1600"
        }
        t = this.getSizeByFileName(e),
        n = this.download + e + "px.png?u=" + i,
        this.request("GET", n, this.callback, this.failCallback, t, e)
    },
    measureOutcoming: function() {
        var e = this.requestNum
          , t = this.postSize;
        if (this.currentType = "outcoming",
        e > 8)
            return this.ui.setOutcomingResult(this.getMaxSpeed(this.uploadList)),
            void this.end();
        switch (e) {
        case 5:
            t = this.incrementPostData(2);
            break;
        case 6:
        case 7:
            t = this.incrementPostData(3);
            break;
        case 8:
            t = this.incrementPostData(1)
        }
        this.request("POST", this.upload, this.callback, this.failCallback, t, this.postData)
    },
    incrementPostData: function(e) {
        for (var t = 1; t <= e; t++)
            this.postData += this.postData,
            this.postSize += this.postSize;
        return this.postSize
    },
    getSizeByFileName: function(e) {
        return this.files["s" + e]
    },
    getRandomString: function(e) {
        e = e || 9;
        var t, n = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = i.length;
        for (t = 0; t < e; t++)
            n += i.charAt(Math.floor(Math.random() * s));
        return n
    },
    request: function(e, t, n, i, s, o) {
        var r, a = this.pool.get(), l = this;
        if (l.startTime = (new Date).getTime(),
        "withCredentials"in a) {
            if (a.onreadystatechange = function() {
                4 == a.readyState && (200 == a.status || 304 == a.status ? n(l, e, s) : setTimeout(i(l, e, s, o), 0))
            }
            ,
            a.onprogress = this.incomingProgress,
            a.upload.onprogress = this.outcomingProgress,
            a.open(e, t, !0),
            "POST" == e) {
                var u = "2IP" + this.getRandomString(12);
                r = "--" + u + '\nContent-Disposition: form-data; name="data"; filename="data.png"\r\nContent-type: image/png\r\n\r\n' + o + "\r\n--" + u + "--",
                a.setRequestHeader("Content-type", "multipart/form-data; boundary=" + u)
            }
            a.send(r)
        } else {
            var d, c = new XDomainRequest;
            c.onerror = function() {
                setTimeout(i(l, e, s, o), 0)
            }
            ,
            c.ontimeout = function() {
                setTimeout(i(l, e, s, o), 0)
            }
            ,
            c.onload = function() {
                n(l, e, s)
            }
            ,
            c.onprogress = function() {}
            ,
            c.open(e, t),
            "POST" == e && (d = this.getRandomString(s)),
            setTimeout((function() {
                c.send(d)
            }
            ), 0)
        }
    },
    incomingProgress: function(e) {
        var t, n = e.loaded / 1e3, i = .001 * ((new Date).getTime() - speedChecker.startTime), s = parseInt(n / i * 8 * 1.08);
        if ("outcoming" == speedChecker.currentType)
            return t = parseInt(speedChecker.getMaxSpeed(speedChecker.downloadList)),
            void speedChecker.ui.setOutcoming(t);
        s > 0 && speedChecker.ui.setIncoming(s)
    },
    outcomingProgress: function(e) {
        var t = e.loaded / 1e3
          , n = .001 * ((new Date).getTime() - speedChecker.startTime)
          , i = parseInt(t / n * 8 * 1.04);
        i > 0 && speedChecker.ui.setOutcoming(i)
    },
    callback: function(e, t, n) {
        var i, s;
        i = ((new Date).getTime() - e.startTime) / 1e3,
        "GET" != t ? (s = n / i * 8 * 1.04 / 1024,
        e.uploadList.push({
            time: i,
            mbps: s
        }),
        e.requestNum++,
        e.measureOutcoming()) : "outcoming" != e.currentType && (s = n / i * 8 * 1.08 / 1024,
        e.downloadList.push({
            time: i,
            mbps: s
        }),
        e.requestNum++,
        e.measureIncoming())
    },
    failCallback: function(e, t, n, i) {
        if (1 != e.timeOutIncoming) {
            if (1 != e.timeOutOutcoming)
                if (e.useReservedPlatform = !0,
                e.switchToReservePlatform(),
                "GET" != t)
                    e.request("POST", e.spareHost, e.callback, e.failCallback, n, i);
                else if ("outcoming" != e.currentType) {
                    var s = e.getRandomString(16)
                      , o = e.spareHost + i + "px.png?u=" + s;
                    e.request("GET", o, e.callback, e.failCallback, n, i)
                }
        } else
            e.timeOutIncoming = !1
    },
    end: function() {
        var e = this.getMaxSpeed(this.uploadList)
          , t = this.getMaxSpeed(this.downloadList).toFixed()
          , n = e.toFixed();
        this.currentType = "finished",
        this.useReservedPlatform && (window.IP2.platform = 6),
        saveMeasurement(this.pingResult, t, n, this.ui)
    },
    getMaxSpeed: function(e) {
        return e[e.length - 1].mbps
    }
}
  , saveMeasurement = function(e, t, n, i) {
    var s = window.IP2.platform
      , o = window.IP2.city
      , r = window.IP2.isWidget
      , a = window.IP2.shouldShowFullPage
      , l = window.IP2.viewVersion
      , u = window.location.protocol + "//" + window.IP2.resultsUrl + "speed-result/?speedOut=" + parseInt(n) + "&speedIn=" + parseInt(t) + "&ping=" + e + "&platform=" + s + "&city=" + o + "&site=" + location.host + "&widget=" + r + "&viewVersion=" + l;
    if (a)
        window.location.href = u + "&view=1";
    else {
        var d = new XMLHttpRequest;
        d.open("GET", u, !0),
        d.withCredentials = !0,
        d.onreadystatechange = function() {
            if (4 == d.readyState && 200 == d.status && document.getElementById("speed_checker__response"))
                if (document.getElementById("speed_checker__response").innerHTML = d.responseText,
                "undefined" != typeof likely && likely.initiate(),
                i.shutdown(),
                r)
                    setTimeout((function() {
                        document.getElementById("widgetResult").classList.add("st-widget_result_animation")
                    }
                    ), 100);
                else {
                    var e = [t, n].join("|");
                    docCookies.setItem("speedResult", e, 1 / 0, "/")
                }
        }
        ,
        d.send()
    }
}
  , platformSelector = function(e) {
    var t = speedChecker.getMarkerByPlatform(e);
    updateTestButtonLink(t),
    speedChecker.changePlatform(t)
}
  , updateTestButtonLink = function(e) {
    var t = "http://" + window.location.host + "/speed/?start=✓&id=" + e.id;
    e.isSecureWebSockets && (t = "javascript:runTest();"),
    document.getElementById("checkSpeedButton").href = t
};
function showIncorrectForm() {
    document.getElementById("incorrectIspBlock").style.display = "block"
}
function hideIncorrectForm() {
    document.getElementById("incorrectIspBlock").style.display = "none"
}
function sendIspProposition(e) {
    if (ispName = document.getElementById("ispSuposedName").value,
    "" != ispName) {
        e += "&ispSuposedName=" + ispName;
        var t = new XMLHttpRequest;
        t.open("POST", e, !1),
        t.onreadystatechange = function() {
            4 == t.readyState && 200 == t.status && (document.getElementById("resultContainer").innerHTML = t.responseText)
        }
        ,
        t.send()
    }
}
IP2.start ? runTest() : window.jQuery && yepnope(jVectorMap);