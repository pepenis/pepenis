var fadeEffect, clearF, docCookies, BIS = BIS || {};
BIS.DEBUG = !1,
BIS.namespace = function(e) {
    var n, t = e.split("."), s = BIS;
    t[0] === "BIS" && (t = t.slice(1));
    for (n = 0; n < t.length; ++n)
        typeof s[t[n]] == "undefined" && (s[t[n]] = {}),
        s = s[t[n]];
    return s
}
,
BIS.utils = {
    vardump: function() {
        if (BIS.DEBUG === !0)
            for (var e in arguments)
                console.log(arguments[e])
    }
},
BIS.events = function() {
    var e = {}
      , t = function(t, n) {
        typeof t == "string" && typeof n == "function" && ((typeof e[t] == "undefined" || "length"in e[t] === !1) && (e[t] = []),
        e[t].push(n))
    }
      , n = function() {
        var t, n, s, o = [];
        if (arguments.length > 0 && typeof arguments[0] == "string") {
            t = arguments[0];
            for (n in arguments)
                arguments.hasOwnProperty(n) && n > 0 && o.push(arguments[n]);
            if (typeof e[t] != "undefined" && "length"in e[t])
                for (s in e[t])
                    e[t].hasOwnProperty(s) && typeof e[t][s] == "function" && e[t][s].apply(null, o)
        }
    };
    return function() {
        return {
            trigger: n,
            register: t
        }
    }
}(),
BIS.templates = function() {
    var e = {};
    return function t(n, s) {
        var o = /\W/.test(n) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, `$1
`).replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split(`
`).join("\\'") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);
        return s ? o(s) : o
    }
}(),
fadeEffect = function() {
    return {
        init: function(e, t, n) {
            if (this.elem = document.getElementById(e),
            this.elem == null)
                return;
            clearInterval(this.elem.si),
            this.target = n ? n : t ? 100 : 0,
            this.flag = t || -1,
            this.alpha = this.elem.style.opacity ? parseFloat(this.elem.style.opacity) * 100 : 0,
            this.elem.si = setInterval(function() {
                fadeEffect.tween()
            }, 20)
        },
        tween: function() {
            if (this.elem == null)
                return;
            if (this.alpha == this.target && typeof this.elem.si != "undefined")
                clearInterval(this.elem.si);
            else {
                var e = Math.round(this.alpha + (this.target - this.alpha) * .05) + 1 * this.flag;
                this.elem.style.opacity = e / 100,
                this.elem.style.filter = "alpha(opacity=" + e + ")",
                this.alpha = e
            }
        }
    }
}();
function showBlock(e, t) {
    document.getElementById(e).style.display = "block",
    document.getElementById(t).className = "active"
}
function hideBlock(e, t) {
    document.getElementById(e).style.display = "none",
    document.getElementById(t).className = ""
}
function showEffectBlock(e) {
    document.getElementById(e).style.opacity = "1",
    document.getElementById(e).style.display = "block",
    fadeEffect.init(e, 1)
}
function hideEffectBlock(e) {
    document.getElementById(e).style.opacity = "0",
    fadeEffect.init(e, 0),
    document.getElementById(e).style.display = "none"
}
function sortBy(e, t) {
    var n = document.forms.pagerForm;
    n.elements.orderBy.value = e,
    t ? n.elements.direction.disabled = !1 : n.elements.direction.disabled = !0,
    n.submit()
}
function changeBlocks(e, t) {
    document.getElementById(e).style.display = "",
    document.getElementById(t).style.display = "none"
}
function confirmSubmit(e) {
    confirm("Вы уверены ?") && document.forms[e].submit()
}
function refreshCaptcha(e) {
    var n = new Date
      , s = n.getTime()
      , t = document.getElementById(e);
    t !== null && (t.src += "&refresh=" + s)
}
function focusCaptcha(e) {
    var t = document.getElementById(e);
    t !== null && (t.value = "",
    t.focus())
}
function showOriginalImage(e, t) {
    document.getElementById(e).style.left = findPosX(t) + 50 + "px",
    document.getElementById(e).style.top = findPosY(t) - 100 + "px",
    showEffectBlock(e)
}
function showAllMarks(e, t) {
    document.getElementById(e).style.left = findPosX(t) - 50 + "px",
    document.getElementById(e).style.top = findPosY(t) - 50 + "px",
    showEffectBlock(e)
}
function showAllSS(e, t) {
    document.getElementById(e).style.left = findPosX(t) - 50 + "px",
    document.getElementById(e).style.top = findPosY(t) - 50 + "px",
    showEffectBlock(e)
}
function findPosX(e) {
    var t = 0;
    if (e.offsetParent)
        for (; 1; ) {
            if (t += e.offsetLeft,
            !e.offsetParent)
                break;
            e = e.offsetParent
        }
    else
        e.x && (t += e.x);
    return t
}
function findPosY(e) {
    var t = 0;
    if (e.offsetParent)
        for (; 1; ) {
            if (t += e.offsetTop,
            !e.offsetParent)
                break;
            e = e.offsetParent
        }
    else
        e.y && (t += e.y);
    return t
}
function mousePageXY(e) {
    var t = 0
      , n = 0;
    return e || (e = window.event),
    e.pageX || e.pageY ? (t = e.pageX,
    n = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft,
    n = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop),
    {
        x: t,
        y: n
    }
}
function applyFilter(e, t) {
    var n = document.forms.pagerForm;
    n.elements[e].value = t,
    n.submit()
}
function setCookie(e, t, n, s, o, i) {
    document.cookie = e + "=" + encodeURIComponent(t) + (n ? "; expires=" + n : "") + (s ? "; path=" + s : "") + (o ? "; domain=" + o : "") + (i ? "; secure" : "")
}
function getCookie(e) {
    var t = " " + document.cookie
      , o = " " + e + "="
      , i = null
      , n = 0
      , s = 0;
    return t.length > 0 && (n = t.indexOf(o),
    n != -1 && (n += o.length,
    s = t.indexOf(";", n),
    s == -1 && (s = t.length),
    i = decodeURIComponent(t.substring(n, s)))),
    i
}
clearF = !1;
function clearField(e) {
    clearF || (e.value = "",
    clearF = !0)
}
function writeEmail(e) {
    for (var n = "", t = 0; t < e.length; t += 3)
        n = String.fromCharCode(e.substring(t, t + 3)) + n;
    window.open("mailto:" + n)
}
function trapABClick(e) {
    var t = new XMLHttpRequest;
    t.open("GET", "https://" + window.location.host + "/?area=ajaxAdBannerClick&id=" + parseInt(e), !0),
    t.setRequestHeader("X-REQUESTED-WITH", "XMLHttpRequest"),
    t.onload = function() {
        t.status >= 200 && t.status < 400 ? console.info("trapABClick(): click on " + e + " saved") : console.info("trapABClick() error: " + t.status + ": " + t.statusText)
    }
    ,
    t.send()
}
docCookies = {
    getItem: function(e) {
        return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
    },
    setItem: function(e, t, n, s, o, i) {
        if (!e || /^(?:expires|max-age|path|domain|secure)$/i.test(e))
            return !1;
        var a = "";
        if (n)
            switch (n.constructor) {
            case Number:
                a = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                break;
            case String:
                a = "; expires=" + n;
                break;
            case Date:
                a = "; expires=" + n.toUTCString();
                break
            }
        return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + a + (o ? "; domain=" + o : "") + (s ? "; path=" + s : "") + (i ? "; secure" : ""),
        !0
    },
    removeItem: function(e, t, n) {
        return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""),
        !0)
    },
    hasItem: function(e) {
        return !!e && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    },
    keys: function() {
        for (var e = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/), n = e.length, t = 0; t < n; t++)
            e[t] = decodeURIComponent(e[t]);
        return e
    }
},
window.addEventListener("load", function() {
    var t, n, s, o, i = window.innerWidth;
    i < 769 && (n = document.querySelector("#aside h2"),
    o = document.querySelector("#aside .nav"),
    n != null && n.addEventListener("click", function() {
        o.classList.toggle("expanded")
    })),
    s = document.querySelectorAll(".service-block");
    for (t = 0; t < s.length; t++)
        s[t].addEventListener("click", function() {
            var t = this.getAttribute("data-id");
            t > 0 && trapABClick(t)
        })
}),
document.addEventListener("DOMContentLoaded", ()=>{
    if (window.location.hash) {
        let e = window.location.hash;
        if (e != "#result")
            return;
        const t = document.querySelector('[data-id="result"]')
          , n = t.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: n - 45,
            behavior: "smooth"
        })
    }
}
),
BIS.namespace("BIS.IP.core"),
document.addEventListener("DOMContentLoaded", ()=>{
    let e = ()=>{
        let e = document.getElementsByTagName("body")[0];
        if (document.getElementById("menu-signin").classList.contains("open") || document.getElementById("menu-bookmarks").classList.contains("open")) {
            e.style.overflow = "hidden";
            return
        }
        e.style.overflow = ""
    }
    ;
    document.getElementById("toggle__menu-bookmarks").addEventListener("click", ()=>{
        document.getElementById("menu-signin").classList.contains("open") && document.getElementById("menu-signin").classList.toggle("open"),
        document.getElementById("menu-bookmarks").classList.toggle("open"),
        e()
    }
    );
    const t = document.getElementById("toggle__menu-signin");
    t != null && t.addEventListener("click", ()=>{
        document.getElementById("menu-bookmarks").classList.contains("open") && document.getElementById("menu-bookmarks").classList.toggle("open"),
        document.getElementById("menu-signin").classList.toggle("open"),
        e(),
        setTimeout(()=>{
            const e = document.getElementsByName("memberEmail");
            e.length > 0 && e[0].focus()
        }
        , 100)
    }
    );
    let n = document.getElementsByClassName("form-captcha_refresh");
    n.length > 0 && n[0].addEventListener("click", e=>{
        e.preventDefault();
        let t = document.getElementsByClassName("form-captcha")[0]
          , n = new Date
          , s = n.getTime();
        t.src += "&refresh=" + s
    }
    );
    let s = document.querySelectorAll("[data-toggle]");
    s.length > 0 && s.forEach(e=>{
        e.addEventListener("click", ()=>{
            let t = document.getElementById(e.dataset.toggle);
            t.style.display = t.style.display == "none" || t.style.display == "" ? "block" : "none"
        }
        )
    }
    )
}
),
document.addEventListener("DOMContentLoaded", ()=>{
    let t = document.querySelector("#result-anchor");
    if (t == null)
        return;
    let e = new URL(window.location);
    (e.searchParams.get("ip") != null || e.searchParams.get("domain") != null || e.searchParams.get("email") != null || e.searchParams.get("port") != null) && setTimeout(function() {
        window.scroll(0, t.offsetTop - 20)
    }, 300)
}
),
document.addEventListener("DOMContentLoaded", ()=>{
    let e = document.getElementsByClassName("bookmarks_add");
    Array.prototype.forEach.call(e, function(e) {
        e.addEventListener("click", ()=>{
            Bookmarks.add(e)
        }
        )
    })
}
),
document.addEventListener("DOMContentLoaded", ()=>{
    let e = document.getElementsByClassName("bookmarks_del");
    Array.prototype.forEach.call(e, function(e) {
        e.addEventListener("click", ()=>{
            Bookmarks.remove(e)
        }
        )
    })
}
);
let Bookmarks = {
    add: e=>{
        let t = e.parentElement.getElementsByClassName("txt")[0]
          , o = t.innerText
          , i = t.getAttribute("href")
          , n = e.parentElement.dataset.id
          , s = e.dataset.flink
          , a = Bookmarks.load(n, o, i, s);
        if (a && BIS.IP.core.isLogged && n.length > 0) {
            let e = new XMLHttpRequest;
            e.open("GET", "/?area=ajaxMenuBookmarkEditor&operation=add&index=-1&link=" + s, !0),
            e.send()
        }
        Bookmarks.saveBookmarksState()
    }
    ,
    load: (e,t,n,s)=>{
        let a = tmpl("favoritesTemplate", {
            id: e,
            name: t,
            link: n,
            flink: s
        })
          , l = Bookmarks.getAll();
        if (l.indexOf(n) > -1)
            return !1;
        let r = document.getElementsByClassName("favorite-list")[0];
        r != null && r.insertAdjacentHTML("beforeend", a);
        let c = document.getElementById("result-fav");
        c != null && c.insertAdjacentHTML("beforeend", a);
        let o = document.querySelectorAll(".favorite-list li[data-id='" + e + "'] div.bookmarks_del")[0];
        o && o.addEventListener("click", ()=>{
            Bookmarks.remove(o)
        }
        );
        let i = document.querySelectorAll(".right-menu li[data-id='" + e + "'] div.bookmarks_del")[0];
        return i && i.addEventListener("click", ()=>{
            Bookmarks.remove(i)
        }
        ),
        !0
    }
    ,
    getAll: ()=>{
        let t = document.querySelectorAll("#result-fav .test-item a.txt"), e, n = [];
        for (e = 0; e < t.length; ++e)
            n.push(t[e].getAttribute("href"));
        return n
    }
    ,
    remove: e=>{
        let t = e.dataset.fid
          , o = e.dataset.flink
          , n = document.querySelector('.favorite-list div[data-fid="' + t + '"]');
        n != null && n.parentElement.remove();
        let s = document.querySelector('#result-fav div[data-fid="' + t + '"]');
        if (s != null && s.parentElement.remove(),
        e.parentElement.remove(),
        BIS.IP.core.isLogged) {
            let e = new XMLHttpRequest;
            e.open("GET", "/?area=ajaxMenuBookmarkEditor&operation=del&index=-1&link=" + o, !0),
            e.send()
        }
        return Bookmarks.saveBookmarksState(),
        !1
    }
    ,
    saveBookmarksState: ()=>{
        let t = document.querySelectorAll("#result-fav .test-item a.txt"), e, n = [];
        for (e = 0; e < t.length; ++e)
            n.push(t[e].getAttribute("href"));
        let s = JSON.stringify(n);
        docCookies.setItem("bookmarks", s, 1 / 0, "/")
    }
    ,
    saveRecentState: e=>{
        let t = []
          , n = docCookies.getItem("head-menu-recent");
        n != null && (t = JSON.parse(n)),
        t.unshift(e),
        t.length > 10 && t.splice(-1, 1),
        docCookies.setItem("head-menu-recent", JSON.stringify(t), 1 / 0, "/")
    }
}
  , autocomplete = (e,t,n,s)=>{
    s.value = "";
    let i = "PATH_WEB_LANG"in window ? window.PATH_WEB_LANG : "/"
      , o = new XMLHttpRequest;
    t.addEventListener("keydown", ()=>{
        o.abort(),
        o.open("GET", i + "?area=ajaxAutocomplete&object=" + e + "&letter=" + t.value, !0),
        o.setRequestHeader("Accept", "application/json"),
        o.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                let o = JSON.parse(this.response)
                  , e = o.objectList;
                if (e.length == 0)
                    return;
                n.style.display = "block",
                n.innerHTML = "",
                e.forEach(function(e) {
                    let o = document.createElement("li");
                    o.dataset.id = e.id,
                    o.innerText = e.name,
                    o.addEventListener("click", ()=>{
                        s.value = o.dataset.id,
                        t.value = o.innerText,
                        n.innerHTML = "",
                        n.style.display = "none",
                        console.log(o)
                    }
                    ),
                    n.appendChild(o)
                })
            }
        }
        ,
        o.onerror = function() {}
        ,
        o.send()
    }
    )
}
  , Ajax = {
    Request: function(e, t) {
        let i = {
            color: "red",
            asynchronous: !0,
            method: "post",
            onSuccess: null,
            onError: null,
            on204: null,
            on400: null,
            on404: null,
            parameters: null
        }
          , n = Object.assign({}, i, t)
          , s = new XMLHttpRequest;
        s.open(n.method, e, n.asynchronous),
        s.onload = function() {
            this.status >= 200 && this.status < 400 && (n.on204 != null && this.status == 204 ? n.on204() : n.onSuccess != null && n.onSuccess({
                responseText: this.response
            }))
        }
        ,
        s.onerror = function() {
            this.status == 400 && n.on400 != null ? n.on400({
                responseJSON: {
                    errors: [s.status]
                }
            }) : this.status == 404 && n.on404 != null ? n.on404({
                responseJSON: {
                    errors: [s.status]
                }
            }) : n.onError != null && n.onError()
        }
        ;
        let o = null;
        return n.parameters != null && (o = Object.keys(n.parameters).map(function(e) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(n.parameters[e])
        }).join("&")),
        n.method == "post" && s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
        s.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        s.send(o),
        s
    },
    Updater: function(e, t, n) {
        n.onSuccess = function(t) {
            document.getElementById(e).innerHTML = t.responseText
        }
        ,
        new Ajax.Request(t,n)
    }
};
function writeEmail(e) {
    for (var n = "", t = 0; t < e.length; t += 3)
        n = String.fromCharCode(e.substring(t, t + 3)) + n;
    window.open("mailto:" + n)
}
(function(e) {
    "use strict";
    const t = function(t, n={}) {
        const o = ()=>{
            const e = {
                speed: 600,
                delay: 5e3,
                enableDrag: !0,
                autoplay: !1,
                loop: !0,
                slidesPerView: {},
                class: {
                    wrapper: "slider-wrapper",
                    slide: "slider-slide",
                    buttons: "slider-btn",
                    pagination: "slider-pagination",
                    paginationItem: "pagination-bullet"
                },
                onInit: ()=>{}
                ,
                onChange: ()=>{}
            };
            this.options = r(e, n)
        }
          , i = ()=>Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth)
          , a = ()=>{
            const {slidesPerView: e, class: {wrapper: n, slide: o, buttons: a, pagination: r}} = this.options;
            this.container = document.querySelector(t),
            this.wrapper = this.container.querySelector(`.${n}`),
            this.slides = this.container.querySelectorAll(`.${o}`),
            this.buttons = this.container.querySelectorAll(`.${a}`),
            this.pagination = this.container.querySelector(`.${r}`),
            this.disableEvents = !1,
            this.slidesWithClones = this.slides,
            this.maxSlidesPerView = Math.max(...Object.keys(e).map(t=>e[t]), 1),
            typeof disableSlideOffset != "undefined" ? this.index = 0 : this.index = i() > 768 ? 1 : 0,
            this.wrapperWidth = 0,
            this.transitionDuration = s("transitionDuration"),
            this.transform = s("transform"),
            this.timer,
            this.drag = {
                startX: 0,
                endX: 0,
                dragDiff: 0,
                focused: !1,
                isLink: !1
            }
        }
        ;
        this.init = ()=>{
            o(),
            a();
            const {onInit: e} = this.options;
            this.calculateSlidesPerView(),
            this.createClones(),
            this.setWidth(),
            this.moveWrapper(),
            this.createPagination(),
            this.autoplay(),
            this.attachEvents(),
            e()
        }
        ,
        this.attachEvents = ()=>{
            const {enableDrag: n} = this.options
              , t = this.container;
            ["touchstartHandler", "touchmoveHandler", "touchendHandler", "clickHandler", "mousedownHandler", "mousemoveHandler", "mouseupHandler", "mouseleaveHandler", "resizeHandler", "visibilitychangeHandler", "paginationBulletsHandler", "prevSlide", "nextSlide"].map(e=>{
                this[e] = this[e].bind(this)
            }
            ),
            n && (t.addEventListener("touchstart", this.touchstartHandler),
            t.addEventListener("touchmove", this.touchmoveHandler),
            t.addEventListener("touchend", this.touchendHandler),
            t.addEventListener("click", this.clickHandler),
            t.addEventListener("mousedown", this.mousedownHandler),
            t.addEventListener("mousemove", this.mousemoveHandler),
            t.addEventListener("mouseup", this.mouseupHandler),
            t.addEventListener("mouseleave", this.mouseleaveHandler)),
            t.addEventListener("click", this.paginationBulletsHandler),
            this.buttons.length === 2 && (this.buttons[0].addEventListener("click", this.prevSlide),
            this.buttons[1].addEventListener("click", this.nextSlide)),
            e.addEventListener("resize", this.resizeHandler),
            e.addEventListener("visibilitychange", this.visibilitychangeHandler)
        }
        ,
        this.detachEvents = ()=>{
            const t = this.container;
            t.removeEventListener("touchstart", this.touchstartHandler),
            t.removeEventListener("touchmove", this.touchmoveHandler),
            t.removeEventListener("touchend", this.touchendHandler),
            t.removeEventListener("click", this.clickHandler),
            t.removeEventListener("mousedown", this.mousedownHandler),
            t.removeEventListener("mousemove", this.mousemoveHandler),
            t.removeEventListener("mouseup", this.mouseupHandler),
            t.removeEventListener("mouseleave", this.mouseleaveHandler),
            t.removeEventListener("click", this.paginationBulletsHandler),
            this.buttons[0].removeEventListener("click", this.prevSlide),
            this.buttons[1].removeEventListener("click", this.nextSlide),
            e.removeEventListener("resize", this.resizeHandler),
            e.removeEventListener("visibilitychange", this.visibilitychangeHandler)
        }
        ,
        this.calculateSlidesPerView = ()=>{
            const {loop: t, slidesPerView: e} = this.options;
            this.slidesPerView = 1,
            Object.keys(e).forEach(t=>{
                document.body.offsetWidth >= t && (this.slidesPerView = e[t])
            }
            ),
            this.maxIndex = t ? this.slides.length : this.slides.length - this.slidesPerView + 1
        }
        ,
        this.createClones = ()=>{
            if (!this.options.loop)
                return;
            const {class: {slide: i}} = this.options
              , e = this.wrapper
              , n = this.slides.length - 1
              , o = document.createDocumentFragment()
              , s = document.createDocumentFragment();
            let t;
            for (let i = 0; i < this.maxSlidesPerView; i++) {
                if (n - i < 0 || i > n)
                    break;
                t = e.children[n - i].cloneNode(!0),
                s.insertBefore(t, s.childNodes[0]),
                t = e.children[i].cloneNode(!0),
                o.appendChild(t)
            }
            e.appendChild(o),
            e.insertBefore(s, this.slides[0]),
            this.slidesWithClones = this.container.querySelectorAll(`.${i}`)
        }
        ,
        this.setWidth = ()=>{
            const e = Math.round(this.container.offsetWidth / this.slidesPerView) + "px";
            this.wrapperWidth = 0,
            Object.keys(this.slidesWithClones).map(t=>{
                const n = this.slidesWithClones[t];
                n.style.width = e,
                this.wrapperWidth += n.offsetWidth
            }
            ),
            this.wrapper.style.width = this.wrapperWidth + "px"
        }
        ,
        this.moveWrapper = ()=>{
            const {loop: t} = this.options;
            let e = this.maxSlidesPerView + 1 - this.slidesPerView + Math.floor(this.slidesPerView / 2) + this.index;
            this.wrapperPosition = 0,
            t || (e = this.index >= this.maxIndex - Math.floor(this.slidesPerView / 2) ? this.maxIndex - 1 : this.index);
            for (let t = 0; t < e; t++) {
                if (this.slidesWithClones[t] == void 0)
                    continue;
                this.wrapperPosition += this.slidesWithClones[t].offsetWidth
            }
            this.wrapper.style[this.transform] = `translate3d(-${this.wrapperPosition}px, 0, 0)`
        }
        ,
        this.changeSlide = (e=!1)=>{
            const {speed: t, loop: n, onChange: s} = this.options;
            this.disableEvents || (e || (this.resetAutoplay(),
            this.autoplay()),
            n ? this.disableEvents = !0 : (this.index >= 0 && this.index < this.maxIndex && (this.disableEvents = !0),
            this.index = this.updateIndex(this.index)),
            this.highlightPaginationBullet(),
            this.wrapper.style[this.transitionDuration] = t + "ms",
            this.moveWrapper(),
            s(),
            setTimeout(()=>{
                n && (this.index < 0 || this.index >= this.slides.length) && (this.index = this.updateIndex(this.index),
                this.wrapper.style[this.transitionDuration] = 0 + "ms",
                this.moveWrapper()),
                this.disableEvents = !1
            }
            , t))
        }
        ,
        this.createPagination = ()=>{
            if (!this.pagination)
                return;
            const {loop: s, class: {paginationItem: t}} = this.options
              , n = document.createDocumentFragment()
              , o = s ? 0 : Math.min(this.index, this.maxIndex - 1);
            let e;
            for (let s = 0; s < this.maxIndex; s++)
                e = document.createElement("span"),
                e.classList.add(t),
                s == o && e.classList.add("is-active"),
                n.appendChild(e);
            this.pagination.appendChild(n),
            this.paginationBullets = this.pagination.querySelectorAll(`.${t}`)
        }
        ,
        this.destroyPagination = ()=>{
            if (!this.pagination)
                return;
            this.pagination.innerHTML = ""
        }
        ,
        this.paginationBulletsHandler = e=>{
            const {class: {paginationItem: n}} = this.options
              , t = [];
            if (e.target.classList.contains(n)) {
                for (let e = 0; e < this.paginationBullets.length; e++)
                    t.push(this.paginationBullets[e]);
                const n = t.indexOf(e.target);
                this.disableEvents || (this.index = n - 1,
                this.nextSlide())
            }
        }
        ,
        this.highlightPaginationBullet = ()=>{
            if (!this.pagination)
                return;
            const {class: {paginationItem: e}} = this.options
              , t = this.pagination.querySelector(".is-active");
            t.classList.remove("is-active");
            const n = this.pagination.querySelectorAll(`.${e}`)
              , s = this.updateIndex(this.index);
            n[s].classList.add("is-active")
        }
        ,
        this.prevSlide = ()=>{
            this.decreaseIndex(),
            this.changeSlide()
        }
        ,
        this.nextSlide = ()=>{
            this.increaseIndex(),
            this.changeSlide()
        }
        ,
        this.increaseIndex = ()=>{
            this.disableEvents || this.index++
        }
        ,
        this.decreaseIndex = ()=>{
            this.disableEvents || this.index--
        }
        ,
        this.updateIndex = e=>{
            const {loop: t} = this.options;
            return t ? e >= this.slides.length ? 0 : e < 0 ? this.slides.length - 1 : e : e >= this.maxIndex ? this.maxIndex - 1 : e <= 0 ? 0 : e
        }
        ,
        this.autoplay = ()=>{
            const {autoplay: e, delay: t, speed: n} = this.options;
            e && (this.timer = setTimeout(()=>{
                this.increaseIndex(),
                this.changeSlide(!0),
                this.autoplay()
            }
            , t + n))
        }
        ,
        this.resetAutoplay = ()=>clearTimeout(this.timer),
        this.updateSliderAfterDrag = ()=>{
            const {speed: e} = this.options;
            if (this.drag.focused = !1,
            !this.drag.dragDiff)
                return;
            this.autoplay(),
            Math.abs(this.drag.dragDiff) > 100 && (this.drag.dragDiff < 0 ? this.nextSlide() : this.prevSlide()),
            this.wrapper.style[this.transitionDuration] = e + "ms",
            this.moveWrapper(),
            this.drag.dragDiff = 0,
            this.drag.isLink = !1
        }
        ,
        this.updateSliderDuringDrag = ()=>{
            this.resetAutoplay();
            const {loop: t} = this.options
              , n = this.slides[this.index].offsetWidth
              , s = this.wrapperPosition - this.drag.dragDiff;
            let e = 100 + n;
            this.drag.dragDiff = this.drag.endX - this.drag.startX,
            t || (this.index <= 0 && this.drag.dragDiff > 0 && (e = 100),
            this.index >= this.maxIndex - 1 && this.drag.dragDiff < 0 && (e = 100)),
            this.drag.dragDiff < e && this.drag.dragDiff > -1 * e ? this.wrapper.style[this.transform] = `translate3d(${-1 * s}px, 0, 0)` : this.updateSliderAfterDrag()
        }
        ,
        this.mousedownHandler = e=>{
            e.stopPropagation(),
            e.preventDefault(),
            this.wrapper.style[this.transitionDuration] = 0 + "ms",
            this.drag.focused = !0,
            this.drag.startX = e.pageX
        }
        ,
        this.mousemoveHandler = e=>{
            e.stopPropagation(),
            !this.disableEvents && this.drag.focused && (e.target.nodeName === "A" && (this.drag.isLink = !0),
            this.drag.endX = e.pageX,
            this.updateSliderDuringDrag())
        }
        ,
        this.mouseupHandler = e=>{
            e.stopPropagation(),
            this.updateSliderAfterDrag()
        }
        ,
        this.mouseleaveHandler = e=>{
            e.stopPropagation(),
            this.updateSliderAfterDrag()
        }
        ,
        this.clickHandler = e=>{
            this.drag.isLink && e.preventDefault(),
            this.drag.isLink = !1
        }
        ,
        this.touchstartHandler = e=>{
            e.stopPropagation(),
            this.wrapper.style[this.transitionDuration] = 0 + "ms",
            this.drag.focused = !0,
            this.drag.startX = e.touches[0].pageX
        }
        ,
        this.touchmoveHandler = e=>{
            e.stopPropagation(),
            !this.disableEvents && this.drag.focused && (this.drag.endX = e.touches[0].pageX,
            this.updateSliderDuringDrag())
        }
        ,
        this.touchendHandler = e=>{
            e.stopPropagation(),
            this.updateSliderAfterDrag()
        }
        ,
        this.visibilitychangeHandler = ()=>{
            this.resetAutoplay(),
            document.hidden || this.autoplay()
        }
        ,
        this.resizeHandler = ()=>{
            const {loop: e} = this.options
              , t = this.slidesPerView;
            this.wrapper.style[this.transitionDuration] = 0 + "ms",
            this.calculateSlidesPerView(),
            this.setWidth(),
            this.moveWrapper(),
            !e && t !== this.slidesPerView && (this.destroyPagination(),
            this.createPagination())
        }
        ;
        const s = e=>typeof document.documentElement.style[e] == "string" ? e : (e = e.charAt(0).toUpperCase() + e.slice(1),
        `webkit${e}`)
          , r = (e,t)=>{
            let n, s;
            if (t != null && t != "undefined")
                for (n in t) {
                    const o = t[n];
                    if (typeof o == "object")
                        for (s in o)
                            e[n][s] = o[s];
                    else
                        e[n] = o
                }
            return e
        }
        ;
        this.init()
    };
    typeof module != "undefined" && typeof module.exports != "undefined" ? module.exports = t : e.SimpleSlider = t
}
)(window),
!function(e, t) {
    "function" == typeof define && define.amd ? define([], t(e)) : "object" == typeof exports ? module.exports = t(e) : e.iziToast = t(e)
}("undefined" != typeof global ? global : this.window || this.global, function() {
    "use strict";
    var u, o = {}, t = "iziToast", d = (document.querySelector("body"),
    !!/Mobi/.test(navigator.userAgent)), v = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), g = "undefined" != typeof InstallTrigger, r = "ontouchstart"in document.documentElement, m = ["bottomRight", "bottomLeft", "bottomCenter", "topRight", "topLeft", "topCenter", "center"], p = {
        info: {
            color: "blue",
            icon: "ico-info"
        },
        success: {
            color: "green",
            icon: "ico-check"
        },
        warning: {
            color: "yellow",
            icon: "ico-warning"
        },
        error: {
            color: "red",
            icon: "ico-error"
        }
    }, a = 568, c = {}, l = {
        id: "",
        class: "",
        title: "",
        titleColor: "",
        titleSize: "",
        titleLineHeight: "",
        message: "",
        messageColor: "",
        messageSize: "",
        messageLineHeight: "",
        backgroundColor: "",
        color: "",
        icon: "",
        iconText: "",
        iconColor: "",
        image: "",
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: !1,
        close: !0,
        rtl: !1,
        position: "bottomRight",
        target: "",
        targetFirst: !0,
        timeout: 5e3,
        drag: !0,
        pauseOnHover: !0,
        resetOnHover: !1,
        progressBar: !0,
        progressBarColor: "",
        animateInside: !0,
        buttons: {},
        transitionIn: "fadeInUp",
        transitionOut: "fadeOut",
        transitionInMobile: "fadeInUp",
        transitionOutMobile: "fadeOutDown",
        onOpen: function() {},
        onClose: function() {}
    };
    "remove"in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
    ),
    "function" != typeof window.CustomEvent && (u = function(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        n
    }
    ,
    u.prototype = window.Event.prototype,
    window.CustomEvent = u);
    var s = function(e, t, n) {
        if ("[object Object]" === Object.prototype.toString.call(e))
            for (o in e)
                Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
        else if (e)
            for (var o, s = 0, i = e.length; i > s; s++)
                t.call(n, e[s], s, e)
    }
      , n = function(e, t) {
        var n = {};
        return s(e, function(t, s) {
            n[s] = e[s]
        }),
        s(t, function(e, s) {
            n[s] = t[s]
        }),
        n
    }
      , h = function(e) {
        var n = document.createDocumentFragment()
          , t = document.createElement("div");
        for (t.innerHTML = e; t.firstChild; )
            n.appendChild(t.firstChild);
        return n
    }
      , b = function(e) {
        return "#" == e.substring(0, 1) || "rgb" == e.substring(0, 3) || "hsl" == e.substring(0, 3)
    }
      , i = function() {
        return {
            move: function(e, t, s, o) {
                var i, a = .3, r = 180;
                e.style.transform = "translateX(" + o + "px)",
                o > 0 ? (i = (r - o) / r,
                a > i && t.hide(n(s, {
                    transitionOut: "fadeOutRight",
                    transitionOutMobile: "fadeOutRight"
                }), e, "drag")) : (i = (r + o) / r,
                a > i && t.hide(n(s, {
                    transitionOut: "fadeOutLeft",
                    transitionOutMobile: "fadeOutLeft"
                }), e, "drag")),
                e.style.opacity = i,
                a > i && ((v || g) && (e.style.left = o + "px"),
                e.parentNode.style.opacity = a,
                this.stopMoving(e, null))
            },
            startMoving: function(e, t, n, s) {
                s = s || window.event;
                var c = r ? s.touches[0].clientX : s.clientX
                  , o = e.style.transform.replace("px)", "")
                  , o = o.replace("translateX(", "")
                  , a = c - o;
                e.classList.remove(n.transitionIn),
                e.classList.remove(n.transitionInMobile),
                e.style.transition = "",
                r ? document.ontouchmove = function(s) {
                    s.preventDefault(),
                    s = s || window.event;
                    var o = s.touches[0].clientX
                      , r = o - a;
                    i.move(e, t, n, r)
                }
                : document.onmousemove = function(s) {
                    s.preventDefault(),
                    s = s || window.event;
                    var o = s.clientX
                      , r = o - a;
                    i.move(e, t, n, r)
                }
            },
            stopMoving: function(e) {
                r ? document.ontouchmove = function() {}
                : document.onmousemove = function() {}
                ,
                e.style.transition = "transform 0.4s ease, opacity 0.4s ease",
                e.style.opacity = "",
                e.style.transform = "",
                window.setTimeout(function() {
                    e.style.transition = ""
                }, 400)
            }
        }
    }()
      , f = function(e, n, s) {
        var r = e.querySelector("." + t + "-progressbar div")
          , a = null
          , i = {
            Paused: !1,
            Reseted: !1,
            Closed: !1
        }
          , o = {
            hideEta: null,
            maxHideTime: null,
            currentTime: (new Date).getTime(),
            updateProgress: function() {
                if (i.Paused = !!e.classList.contains(t + "-paused"),
                i.Reseted = !!e.classList.contains(t + "-reseted"),
                i.Closed = !!e.classList.contains(t + "-closed"),
                i.Reseted && (clearTimeout(a),
                r.style.width = "100%",
                f(e, n, s),
                e.classList.remove(t + "-reseted")),
                i.Closed && (clearTimeout(a),
                e.classList.remove(t + "-closed")),
                !i.Paused && !i.Reseted && !i.Closed) {
                    o.currentTime = o.currentTime + 10;
                    var c = (o.hideEta - o.currentTime) / o.maxHideTime * 100;
                    r.style.width = c + "%",
                    (Math.round(c) < 0 || "object" != typeof e) && (clearTimeout(a),
                    s.apply())
                }
            }
        };
        n.timeout > 0 && (o.maxHideTime = parseFloat(n.timeout),
        o.hideEta = (new Date).getTime() + o.maxHideTime,
        a = setInterval(o.updateProgress, 10))
    };
    return o.destroy = function() {
        s(document.querySelectorAll("." + t + "-wrapper"), function(e) {
            e.remove()
        }),
        s(document.querySelectorAll("." + t), function(e) {
            e.remove()
        }),
        document.removeEventListener(t + "-open", {}, !1),
        document.removeEventListener(t + "-close", {}, !1),
        c = {}
    }
    ,
    o.settings = function(e) {
        o.destroy(),
        c = e,
        l = n(l, e || {})
    }
    ,
    s(p, function(e, t) {
        o[t] = function(t) {
            var s = n(c, t || {})
              , s = n(e, s || {});
            this.show(s)
        }
    }),
    o.hide = function(e, s, o) {
        var r, c, i = n(l, e || {});
        o = o || !1,
        "object" != typeof s && (s = document.querySelector(s)),
        s.classList.add(t + "-closed"),
        (i.transitionIn || i.transitionInMobile) && (s.classList.remove(i.transitionIn),
        s.classList.remove(i.transitionInMobile)),
        d || window.innerWidth <= a ? i.transitionOutMobile && s.classList.add(i.transitionOutMobile) : i.transitionOut && s.classList.add(i.transitionOut),
        r = s.parentNode.offsetHeight,
        s.parentNode.style.height = r + "px",
        s.style.pointerEvents = "none",
        (!d || window.innerWidth > a) && (s.parentNode.style.transitionDelay = "0.2s"),
        setTimeout(function() {
            s.parentNode.style.height = "0px",
            s.parentNode.style.overflow = "",
            window.setTimeout(function() {
                s.parentNode.remove()
            }, 1e3)
        }, 200);
        try {
            i.closedBy = o,
            c = new CustomEvent(t + "-close",{
                detail: i,
                bubles: !0,
                cancelable: !0
            }),
            document.dispatchEvent(c)
        } catch (e) {
            console.warn(e)
        }
        "undefined" != typeof i.onClose && i.onClose.apply(null, [i, s, o])
    }
    ,
    o.show = function(e) {
        var g, p = this, u = n(c, e || {}), u = n(l, u), o = {
            toast: document.createElement("div"),
            toastBody: document.createElement("div"),
            toastCapsule: document.createElement("div"),
            icon: document.createElement("i"),
            cover: document.createElement("div"),
            strong: document.createElement("strong"),
            p: document.createElement("p"),
            progressBar: document.createElement("div"),
            progressBarDiv: document.createElement("div"),
            buttonClose: document.createElement("button"),
            buttons: document.createElement("div"),
            wrapper: null
        };
        o.toastBody.appendChild(o.strong),
        o.toastBody.appendChild(o.p),
        o.toast.appendChild(o.toastBody),
        o.toastCapsule.appendChild(o.toast),
        function() {
            if (o.toast.classList.add(t),
            o.toastCapsule.classList.add(t + "-capsule"),
            o.toastBody.classList.add(t + "-body"),
            d || window.innerWidth <= a ? u.transitionInMobile && o.toast.classList.add(u.transitionInMobile) : u.transitionIn && o.toast.classList.add(u.transitionIn),
            u.class) {
                var e = u.class.split(" ");
                s(e, function(e) {
                    o.toast.classList.add(e)
                })
            }
            u.id && (o.toast.id = u.id),
            u.rtl && o.toast.classList.add(t + "-rtl"),
            u.layout > 1 && o.toast.classList.add(t + "-layout" + u.layout),
            u.balloon && o.toast.classList.add(t + "-balloon"),
            u.maxWidth && (isNaN(u.maxWidth) ? o.toast.style.maxWidth = u.maxWidth : o.toast.style.maxWidth = u.maxWidth + "px"),
            u.color && (b(u.color) ? o.toast.style.background = u.color : o.toast.classList.add(t + "-color-" + u.color)),
            u.backgroundColor && (o.toast.style.background = u.backgroundColor,
            u.balloon && (o.toast.style.borderColor = u.backgroundColor))
        }(),
        function() {
            u.image && (o.cover.classList.add(t + "-cover"),
            o.cover.style.width = u.imageWidth + "px",
            o.cover.style.backgroundImage = "url(" + u.image + ")",
            u.rtl ? o.toastBody.style.marginRight = u.imageWidth + 10 + "px" : o.toastBody.style.marginLeft = u.imageWidth + 10 + "px",
            o.toast.appendChild(o.cover))
        }(),
        function() {
            u.close ? (o.buttonClose.classList.add(t + "-close"),
            o.buttonClose.addEventListener("click", function(e) {
                e.target,
                p.hide(u, o.toast, "button")
            }),
            o.toast.appendChild(o.buttonClose)) : u.rtl ? o.toast.style.paddingLeft = "30px" : o.toast.style.paddingRight = "30px"
        }(),
        function() {
            u.progressBar ? (o.progressBar.classList.add(t + "-progressbar"),
            o.progressBarDiv.style.background = u.progressBarColor,
            o.progressBar.appendChild(o.progressBarDiv),
            o.toast.appendChild(o.progressBar),
            setTimeout(function() {
                f(o.toast, u, function() {
                    p.hide(u, o.toast)
                })
            }, 300)) : u.progressBar === !1 && u.timeout > 0 && setTimeout(function() {
                p.hide(u, o.toast)
            }, u.timeout)
        }(),
        function() {
            u.icon && (o.icon.setAttribute("class", t + "-icon " + u.icon),
            u.iconText && o.icon.appendChild(document.createTextNode(u.iconText)),
            u.rtl ? o.toastBody.style.paddingRight = "33px" : o.toastBody.style.paddingLeft = "33px",
            u.iconColor && (o.icon.style.color = u.iconColor),
            o.toastBody.appendChild(o.icon))
        }(),
        function() {
            u.titleColor && (o.strong.style.color = u.titleColor),
            u.titleSize && (isNaN(u.titleSize) ? o.strong.style.fontSize = u.titleSize : o.strong.style.fontSize = u.titleSize + "px"),
            u.titleLineHeight && (isNaN(u.titleSize) ? o.strong.style.lineHeight = u.titleLineHeight : o.strong.style.lineHeight = u.titleLineHeight + "px"),
            o.strong.appendChild(h(u.title))
        }(),
        function() {
            u.messageColor && (o.p.style.color = u.messageColor),
            u.messageSize && (isNaN(u.titleSize) ? o.p.style.fontSize = u.messageSize : o.p.style.fontSize = u.messageSize + "px"),
            u.messageLineHeight && (isNaN(u.titleSize) ? o.p.style.lineHeight = u.messageLineHeight : o.p.style.lineHeight = u.messageLineHeight + "px"),
            o.p.appendChild(h(u.message))
        }(),
        function() {
            if (u.buttons.length > 0) {
                o.buttons.classList.add(t + "-buttons"),
                u.rtl ? o.p.style.marginLeft = "15px" : o.p.style.marginRight = "15px";
                var e = 0;
                s(u.buttons, function(t) {
                    o.buttons.appendChild(h(t[0]));
                    var s = o.buttons.childNodes;
                    s[e].addEventListener("click", function(e) {
                        e.preventDefault();
                        var n = t[1];
                        return new n(p,o.toast)
                    }),
                    e++
                }),
                o.toastBody.appendChild(o.buttons)
            }
        }(),
        function() {
            o.toastCapsule.style.visibility = "hidden",
            setTimeout(function() {
                var s = o.toast.offsetHeight
                  , n = o.toast.currentStyle || window.getComputedStyle(o.toast)
                  , e = n.marginTop
                  , e = e.split("px")
                  , e = parseInt(e[0])
                  , t = n.marginBottom
                  , t = t.split("px")
                  , t = parseInt(t[0]);
                o.toastCapsule.style.visibility = "",
                o.toastCapsule.style.height = s + t + e + "px",
                setTimeout(function() {
                    o.toastCapsule.style.height = "auto",
                    u.target && (o.toastCapsule.style.overflow = "visible")
                }, 1e3)
            }, 100)
        }(),
        function() {
            var e = u.position;
            if (u.target)
                o.wrapper = document.querySelector(u.target),
                o.wrapper.classList.add(t + "-target"),
                u.targetFirst ? o.wrapper.insertBefore(o.toastCapsule, o.wrapper.firstChild) : o.wrapper.appendChild(o.toastCapsule);
            else {
                if (-1 == m.indexOf(u.position))
                    return void console.warn("[" + t + "] Incorrect position. It can be › " + m);
                e = d || window.innerWidth <= a ? "bottomLeft" == u.position || "bottomRight" == u.position || "bottomCenter" == u.position ? t + "-wrapper-bottomCenter" : "topLeft" == u.position || "topRight" == u.position || "topCenter" == u.position ? t + "-wrapper-topCenter" : t + "-wrapper-center" : t + "-wrapper-" + e,
                o.wrapper = document.querySelector("." + t + "-wrapper." + e),
                o.wrapper || (o.wrapper = document.createElement("div"),
                o.wrapper.classList.add(t + "-wrapper"),
                o.wrapper.classList.add(e),
                document.body.appendChild(o.wrapper)),
                "topLeft" == u.position || "topCenter" == u.position || "topRight" == u.position ? o.wrapper.insertBefore(o.toastCapsule, o.wrapper.firstChild) : o.wrapper.appendChild(o.toastCapsule)
            }
            isNaN(u.zindex) ? console.warn("[" + t + "] Invalid zIndex.") : o.wrapper.style.zIndex = u.zindex
        }(),
        function() {
            if (u.animateInside) {
                o.toast.classList.add(t + "-animateInside");
                var e, n = 200, i = 100, a = 300;
                "bounceInLeft" == u.transitionIn && (n = 400,
                i = 200,
                a = 400),
                window.setTimeout(function() {
                    o.strong.classList.add("slideIn")
                }, n),
                window.setTimeout(function() {
                    o.p.classList.add("slideIn")
                }, i),
                u.icon && window.setTimeout(function() {
                    o.icon.classList.add("revealIn")
                }, a),
                u.buttons.length > 0 && o.buttons && (e = 150,
                s(o.buttons.childNodes, function(t) {
                    window.setTimeout(function() {
                        t.classList.add("revealIn")
                    }, e),
                    e += e
                }))
            }
        }(),
        u.onOpen.apply(null, [u, o.toast]);
        try {
            g = new CustomEvent(t + "-open",{
                detail: u,
                bubles: !0,
                cancelable: !0
            }),
            document.dispatchEvent(g)
        } catch (e) {
            console.warn(e)
        }
        u.pauseOnHover && (o.toast.addEventListener("mouseenter", function() {
            this.classList.add(t + "-paused")
        }),
        o.toast.addEventListener("mouseleave", function() {
            this.classList.remove(t + "-paused")
        })),
        u.resetOnHover && (o.toast.addEventListener("mouseenter", function() {
            this.classList.add(t + "-reseted")
        }),
        o.toast.addEventListener("mouseleave", function() {
            this.classList.remove(t + "-reseted")
        })),
        u.drag && (r ? (o.toast.addEventListener("touchstart", function(e) {
            i.startMoving(this, p, u, e)
        }, !1),
        o.toast.addEventListener("touchend", function(e) {
            i.stopMoving(this, e)
        }, !1)) : (o.toast.addEventListener("mousedown", function(e) {
            e.preventDefault(),
            i.startMoving(this, p, u, e)
        }, !1),
        o.toast.addEventListener("mouseup", function(e) {
            e.preventDefault(),
            i.stopMoving(this, e)
        }, !1)))
    }
    ,
    o
}),
(()=>{
    "use strict";
    var t = {
        d: (e,n)=>{
            for (var s in n)
                t.o(n, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: n[s]
                })
        }
        ,
        o: (e,t)=>Object.prototype.hasOwnProperty.call(e, t)
    }
      , n = {};
    t.d(n, {
        default: ()=>d
    });
    class e {
        constructor() {
            String.prototype.format = function() {
                return [...arguments].reduce((e,t)=>e.replace(/%s/, t), this)
            }
        }
        getError() {
            return this.error
        }
        check() {}
    }
    const s = {
        ua_UA: "Будь ласка, введіть ваш e-mail",
        ru_RU: "Пожалуйста, введите ваш e-mail",
        en_US: "Please, enter email address"
    }
      , o = {
        ua_UA: "Будь ласка, введіть щонайменше %s символа",
        ru_RU: "Пожалуйста, введите не менее %s символов",
        en_US: "Please, enter at least %s characters"
    }
      , i = {
        ua_UA: "Будь ласка, введіть не більше %s символів",
        ru_RU: "Пожалуйста, не более %s символов",
        en_US: "Please, enter no more than %s characters"
    }
      , a = {
        ua_UA: "Будь ласка, введіть %s символів",
        ru_RU: "Пожалуйста, введите %s символа",
        en_US: "Please, enter %s characters"
    }
      , r = {
        ua_UA: "Дозволені розширення для зображень — %s",
        ru_RU: "Разрешенные расширения для изображений — %s",
        en_US: "Allowed extensions for images - %s"
    }
      , c = {
        ua_UA: "Будь ласка, введіть вашу IP адресу",
        ru_RU: "Пожалуйста, введите ваш IP адрес",
        en_US: "Please, enter IP address"
    }
      , l = {
        IsEmail: class extends e {
            constructor(e) {
                super(),
                this.error = s[e]
            }
            check(e) {
                return /\S+@\S+\.\S+/.test(e)
            }
        }
        ,
        MinLength: class extends e {
            constructor(e, t) {
                super(),
                this.value = t,
                this.error = o[e].format(t)
            }
            check(e) {
                return this.value <= e.length
            }
        }
        ,
        MaxLength: class extends e {
            constructor(e, t) {
                super(),
                this.value = t,
                this.error = i[e].format(t)
            }
            check(e) {
                return this.value > e.length
            }
        }
        ,
        EqualLength: class extends e {
            constructor(e, t) {
                super(),
                this.value = t,
                this.error = a[e].format(t)
            }
            check(e) {
                return this.value == e.length
            }
        }
        ,
        ImageExtension: class extends e {
            constructor(e, t) {
                super(),
                this.value = t,
                this.error = r[e].format(t.join(", "))
            }
            check(e) {
                let t, n, s = e.toLowerCase();
                if ("" == s)
                    return !0;
                for (t = 0,
                n = this.value.length; t < n; ++t)
                    if (-1 != s.lastIndexOf("." + this.value[t]))
                        return !0;
                return !1
            }
        }
        ,
        IsIPAddress: class extends e {
            constructor(e) {
                super(),
                this.error = c[e]
            }
            check(e) {
                return !!new RegExp("^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}(/[0-9]{1,2})?$","i").test(e)
            }
        }
    };
    class d {
        constructor(e, t, n) {
            if (void 0 !== e) {
                this.locale = void 0 === n ? "ru_RU" : n,
                this.form = e,
                this.rules = t,
                this.errorClassName = "form-group__validation",
                this.borderStyle = "1px solid red",
                e.addEventListener("submit", e=>{
                    this.validateForm() && e.preventDefault()
                }
                );
                for (let n in this.rules) {
                    let t = e.querySelectorAll(`[name="${n}"]`)[0];
                    if (!t)
                        return void console.info(`Element with name "${n}" not found.`);
                    t.addEventListener("keyup", ()=>{
                        this.validate(t)
                    }
                    )
                }
            }
        }
        validateForm() {
            let e = !1;
            for (let n in this.rules) {
                let s = this.form.querySelectorAll(`[name="${n}"]`)
                  , t = 0;
                for (; t < s.length; ++t) {
                    let o = s[t];
                    o ? (o.offsetWidth || o.offsetHeight || o.getClientRects().length) && (this.validate(o) || (e || (o.scrollIntoView(),
                    window.scrollBy(0, -10)),
                    e = !0)) : console.error(`Element with name "${n}" not found.`)
                }
            }
            return e
        }
        validate(e) {
            let t = e.getAttribute("name")
              , s = e.value
              , n = !0;
            for (let o in this.rules[t]) {
                let i = null;
                null != this.rules[t][o] && "value"in this.rules[t][o] && (i = this.rules[t][o].value);
                let d = o.charAt(0).toUpperCase() + o.substring(1)
                  , a = l[d]
                  , r = a ? new a(this.locale,i) : null
                  , u = r.check(s)
                  , c = r.getError();
                null != this.rules[t][o] && "error"in this.rules[t][o] && (c = this.rules[t][o].error),
                u ? this.removeHighlighting(e) : (this.highlight(e, c),
                n = !1)
            }
            return n
        }
        highlight(e, t) {
            for (; e.nextSibling.className == this.errorClassName; )
                e.nextSibling.remove();
            void 0 === e.dataset.border && (e.dataset.border = e.style.border),
            e.style.border = this.borderStyle;
            let s = e.getAttribute("name")
              , n = document.getElementById(s + "-error");
            if (!n) {
                let t = e.getAttribute("id");
                n = document.getElementById(t + "-error")
            }
            if (!n)
                return n = document.createElement("div"),
                n.className = this.errorClassName,
                n.innerText = t,
                void e.parentNode.insertBefore(n, e.nextSibling);
            n.className = this.errorClassName,
            n.innerText = t
        }
        removeHighlighting(e) {
            let n = e.getAttribute("name")
              , t = document.getElementById(n + "-error");
            for (t && (t.innerText = ""); e.nextSibling.className == this.errorClassName; )
                e.nextSibling.remove();
            e.style.border = e.dataset.border
        }
    }
    window.FormValidation = n.default
}
)(),
BIS = window.BIS || {},
BIS.autocomplete = {
    timeout: {},
    elements: [],
    init: function() {
        var e = this;
        document.addEventListener("DOMContentLoaded", function() {
            var n, s = e.elements.length, t = 0;
            for (t; t < s; t++)
                n = e.elements[t],
                e.create(n)
        })
    },
    add: function(e) {
        return this.elements.push(e),
        this
    },
    create: function(e) {
        var t, o, i, r, n = this, s = e.name, c = e.type, a = "callback"in e ? e.callback : null;
        s.charAt(0) == "." ? (s = s.substr(1),
        t = document.getElementsByClassName(s)[0]) : t = document.getElementsByName(s)[0],
        i = t.hasAttribute("data-name") ? t.getAttribute("data-name") : s + "Id",
        r = t.hasAttribute("data-id") ? t.getAttribute("data-id") : null,
        o = document.createElement("input"),
        o.name = i,
        o.id = i,
        o.type = "hidden",
        o.value = r,
        t.parentNode.insertBefore(o, t.previousSibling),
        t.addEventListener("keydown", function(e) {
            if (e.keyCode == 27 || e.keyCode == 9)
                return;
            if (e.keyCode == 38 || e.keyCode == 40) {
                n.moveSelection(t, e.keyCode);
                return
            }
            if (e.keyCode == 8 && (o.value = ""),
            e.keyCode == 13) {
                var i, r = n.getItem(t);
                r && (n.changeItem(t, r),
                n.destroyList(t),
                a != null && a(r),
                e.preventDefault());
                return
            }
            i = "_ts" + s,
            i in n.timeout && clearTimeout(n.timeout[i]),
            n.timeout[i] = setTimeout(function() {
                n.autocomplete(c, t, a)
            }, 400)
        })
    },
    getListByElement: function(e) {
        var t = e.nextSibling;
        if (t.className == "autocomplete")
            return t
    },
    getItem: function(e) {
        var n, t = this.getListByElement(e);
        if (t)
            return n = t.getElementsByClassName("selected"),
            n.length > 0 ? n[0] : t.firstChild
    },
    moveSelection: function(e, t) {
        var n, s, o = this.getItem(e);
        t == 40 && (n = "nextSibling"),
        t == 38 && (n = "previousSibling"),
        s = o[n],
        s && (o.className = "",
        s.className = "selected")
    },
    autocomplete: function(e, t, n) {
        if (o = this,
        i = t.value,
        i.length < 2)
            return;
        var o, i, s = new XMLHttpRequest, a = {
            object: e,
            letter: i
        }, r = Object.keys(a).map(function(e) {
            return e + "=" + a[e]
        }).join("&"), c = "PATH_WEB_LANG"in window ? window.PATH_WEB_LANG : "/";
        s.open("get", c + "?area=ajaxAutocomplete&" + r, !0),
        s.setRequestHeader("Accept", "application/json"),
        s.onreadystatechange = function() {
            if (s.readyState != 4 || s.status != 200)
                return;
            const e = JSON.parse(s.responseText);
            "objectList"in e && e.objectList.length > 0 ? o.makeList(t, e.objectList, n) : o.destroyList(t)
        }
        ,
        s.send()
    },
    makeList: function(e, t, n) {
        var s, i, r, a = this, o = document.createElement("ul"), c = window.getComputedStyle(e, null).getPropertyValue("font-size");
        o.style.listStyleType = "none",
        a.resize(e, o),
        window.addEventListener("resize", function() {
            a.resize(e, o)
        });
        for (r = !0,
        i = 0; i < t.length; i++)
            s = document.createElement("li"),
            s.innerHTML = t[i].name,
            s.setAttribute("data-id", t[i].id),
            s.style.fontSize = c,
            o.appendChild(s),
            a.attachSelectEvent(e, s, n),
            r && (s.className = "selected",
            r = !1);
        this.destroyList(e),
        e.parentNode.insertBefore(o, e.nextSibling)
    },
    resize: function(e, t) {
        var s = document.body.getBoundingClientRect()
          , o = e.getBoundingClientRect()
          , n = window.getComputedStyle(e)
          , i = parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)
          , a = o.top - s.top + e.offsetHeight + i;
        t.style.width = e.offsetWidth + "px",
        t.className = "autocomplete"
    },
    attachSelectEvent: function(e, t, n) {
        var s = this;
        t.addEventListener("click", function() {
            s.changeItem(e, t),
            n != null && n(t),
            s.destroyList(e)
        })
    },
    changeItem: function(e, t) {
        var n = t.getAttribute("data-id")
          , s = e.getAttribute("name")
          , o = e.hasAttribute("data-name") ? e.getAttribute("data-name") : s + "Id"
          , i = document.getElementsByName(o)[0];
        i.value = n,
        e.value = t.innerText
    },
    destroyList: function(e) {
        var t = e.nextSibling;
        t.className == "autocomplete" && t.remove()
    }
},
!function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    var e, t, n = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];
    (function() {
        var e, t = !1;
        try {
            e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            }),
            window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e)
        } catch {}
        return t
    }
    )() && (t = EventTarget.prototype.addEventListener,
    e = t,
    EventTarget.prototype.addEventListener = function(t, s, o) {
        var i, a = "object" == typeof o && null !== o, r = a ? o.capture : o;
        (o = a ? function(e) {
            var t = Object.getOwnPropertyDescriptor(e, "passive");
            return t && !0 !== t.writable && void 0 === t.set ? Object.assign({}, e) : e
        }(o) : {}).passive = void 0 !== (i = o.passive) ? i : -1 !== n.indexOf(t) && !0,
        o.capture = void 0 !== r && r,
        e.call(this, t, s, o)
    }
    ,
    EventTarget.prototype.addEventListener._original = e)
})