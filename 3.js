(self.webpackChunkcodespaces_web_client = self.webpackChunkcodespaces_web_client || []).push([[351], {
    31847: (e,t,r)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.assert = void 0;
        const n = r(66973);
        t.assert = (e,t)=>{
            if (!0 !== e) {
                throw "string" == typeof t ? new n.AssertionError(t) : t
            }
        }
    }
    ,
    118: (e,t,r)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SamplingFilter = t.SendOnceFilter = t.TelemetryResult = t.FaultType = t.TelemetryPropertyNames = t.propagateOffsetMarkTime = t.cleanSensitiveInformation = t.TimedEvent = t.Fault = t.TelemetryEvent = t.TelemetryClass = t.Telemetry = void 0;
        var n = r(86048);
        Object.defineProperty(t, "Telemetry", {
            enumerable: !0,
            get: function() {
                return n.Telemetry
            }
        }),
        Object.defineProperty(t, "TelemetryClass", {
            enumerable: !0,
            get: function() {
                return n.TelemetryClass
            }
        }),
        Object.defineProperty(t, "TelemetryEvent", {
            enumerable: !0,
            get: function() {
                return n.TelemetryEvent
            }
        }),
        Object.defineProperty(t, "Fault", {
            enumerable: !0,
            get: function() {
                return n.Fault
            }
        }),
        Object.defineProperty(t, "TimedEvent", {
            enumerable: !0,
            get: function() {
                return n.TimedEvent
            }
        }),
        Object.defineProperty(t, "cleanSensitiveInformation", {
            enumerable: !0,
            get: function() {
                return n.cleanSensitiveInformation
            }
        }),
        Object.defineProperty(t, "propagateOffsetMarkTime", {
            enumerable: !0,
            get: function() {
                return n.propagateOffsetMarkTime
            }
        });
        var i = r(23725);
        Object.defineProperty(t, "TelemetryPropertyNames", {
            enumerable: !0,
            get: function() {
                return i.TelemetryPropertyNames
            }
        });
        var o = r(62465);
        Object.defineProperty(t, "FaultType", {
            enumerable: !0,
            get: function() {
                return o.FaultType
            }
        });
        var s = r(33792);
        Object.defineProperty(t, "TelemetryResult", {
            enumerable: !0,
            get: function() {
                return s.Result
            }
        });
        var a = r(87132);
        Object.defineProperty(t, "SendOnceFilter", {
            enumerable: !0,
            get: function() {
                return a.SendOnceFilter
            }
        }),
        Object.defineProperty(t, "SamplingFilter", {
            enumerable: !0,
            get: function() {
                return a.SamplingFilter
            }
        })
    }
    ,
    75516: (e,t)=>{
        "use strict";
        t.readUInt32BE = function(e, t) {
            return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
        }
        ,
        t.writeUInt32BE = function(e, t, r) {
            e[0 + r] = t >>> 24,
            e[1 + r] = t >>> 16 & 255,
            e[2 + r] = t >>> 8 & 255,
            e[3 + r] = 255 & t
        }
        ,
        t.ip = function(e, t, r, n) {
            for (var i = 0, o = 0, s = 6; s >= 0; s -= 2) {
                for (var a = 0; a <= 24; a += 8)
                    i <<= 1,
                    i |= t >>> a + s & 1;
                for (a = 0; a <= 24; a += 8)
                    i <<= 1,
                    i |= e >>> a + s & 1
            }
            for (s = 6; s >= 0; s -= 2) {
                for (a = 1; a <= 25; a += 8)
                    o <<= 1,
                    o |= t >>> a + s & 1;
                for (a = 1; a <= 25; a += 8)
                    o <<= 1,
                    o |= e >>> a + s & 1
            }
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        t.rip = function(e, t, r, n) {
            for (var i = 0, o = 0, s = 0; s < 4; s++)
                for (var a = 24; a >= 0; a -= 8)
                    i <<= 1,
                    i |= t >>> a + s & 1,
                    i <<= 1,
                    i |= e >>> a + s & 1;
            for (s = 4; s < 8; s++)
                for (a = 24; a >= 0; a -= 8)
                    o <<= 1,
                    o |= t >>> a + s & 1,
                    o <<= 1,
                    o |= e >>> a + s & 1;
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        t.pc1 = function(e, t, r, n) {
            for (var i = 0, o = 0, s = 7; s >= 5; s--) {
                for (var a = 0; a <= 24; a += 8)
                    i <<= 1,
                    i |= t >> a + s & 1;
                for (a = 0; a <= 24; a += 8)
                    i <<= 1,
                    i |= e >> a + s & 1
            }
            for (a = 0; a <= 24; a += 8)
                i <<= 1,
                i |= t >> a + s & 1;
            for (s = 1; s <= 3; s++) {
                for (a = 0; a <= 24; a += 8)
                    o <<= 1,
                    o |= t >> a + s & 1;
                for (a = 0; a <= 24; a += 8)
                    o <<= 1,
                    o |= e >> a + s & 1
            }
            for (a = 0; a <= 24; a += 8)
                o <<= 1,
                o |= e >> a + s & 1;
            r[n + 0] = i >>> 0,
            r[n + 1] = o >>> 0
        }
        ,
        t.r28shl = function(e, t) {
            return e << t & 268435455 | e >>> 28 - t
        }
        ;
        var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        t.pc2 = function(e, t, n, i) {
            for (var o = 0, s = 0, a = r.length >>> 1, u = 0; u < a; u++)
                o <<= 1,
                o |= e >>> r[u] & 1;
            for (u = a; u < r.length; u++)
                s <<= 1,
                s |= t >>> r[u] & 1;
            n[i + 0] = o >>> 0,
            n[i + 1] = s >>> 0
        }
        ,
        t.expand = function(e, t, r) {
            var n = 0
              , i = 0;
            n = (1 & e) << 5 | e >>> 27;
            for (var o = 23; o >= 15; o -= 4)
                n <<= 6,
                n |= e >>> o & 63;
            for (o = 11; o >= 3; o -= 4)
                i |= e >>> o & 63,
                i <<= 6;
            i |= (31 & e) << 1 | e >>> 31,
            t[r + 0] = n >>> 0,
            t[r + 1] = i >>> 0
        }
        ;
        var n = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        t.substitute = function(e, t) {
            for (var r = 0, i = 0; i < 4; i++) {
                r <<= 4,
                r |= n[64 * i + (e >>> 18 - 6 * i & 63)]
            }
            for (i = 0; i < 4; i++) {
                r <<= 4,
                r |= n[256 + 64 * i + (t >>> 18 - 6 * i & 63)]
            }
            return r >>> 0
        }
        ;
        var i = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        t.permute = function(e) {
            for (var t = 0, r = 0; r < i.length; r++)
                t <<= 1,
                t |= e >>> i[r] & 1;
            return t >>> 0
        }
        ,
        t.padSplit = function(e, t, r) {
            for (var n = e.toString(2); n.length < t; )
                n = "0" + n;
            for (var i = [], o = 0; o < t; o += r)
                i.push(n.slice(o, o + r));
            return i.join(" ")
        }
    }
    ,
    32655: (e,t,r)=>{
        "use strict";
        r.r(t),
        r.d(t, {
            BotInfo: ()=>u,
            BrowserInfo: ()=>o,
            NodeInfo: ()=>s,
            ReactNativeInfo: ()=>l,
            SearchBotDeviceInfo: ()=>a,
            browserName: ()=>m,
            detect: ()=>p,
            detectOS: ()=>g,
            getNodeVersion: ()=>y,
            parseUserAgent: ()=>_
        });
        var n = r(27061)
          , i = function(e, t, r) {
            if (r || 2 === arguments.length)
                for (var n, i = 0, o = t.length; i < o; i++)
                    !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)),
                    n[i] = t[i]);
            return e.concat(n || Array.prototype.slice.call(t))
        }
          , o = function(e, t, r) {
            this.name = e,
            this.version = t,
            this.os = r,
            this.type = "browser"
        }
          , s = function(e) {
            this.version = e,
            this.type = "node",
            this.name = "node",
            this.os = n.platform
        }
          , a = function(e, t, r, n) {
            this.name = e,
            this.version = t,
            this.os = r,
            this.bot = n,
            this.type = "bot-device"
        }
          , u = function() {
            this.type = "bot",
            this.bot = !0,
            this.name = "bot",
            this.version = null,
            this.os = null
        }
          , l = function() {
            this.type = "react-native",
            this.name = "react-native",
            this.version = null,
            this.os = null
        }
          , c = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
          , h = 3
          , f = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]]
          , d = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
        function p(e) {
            return e ? _(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new l : "undefined" != typeof navigator ? _(navigator.userAgent) : y()
        }
        function v(e) {
            return "" !== e && f.reduce((function(t, r) {
                var n = r[0]
                  , i = r[1];
                if (t)
                    return t;
                var o = i.exec(e);
                return !!o && [n, o]
            }
            ), !1)
        }
        function m(e) {
            var t = v(e);
            return t ? t[0] : null
        }
        function _(e) {
            var t = v(e);
            if (!t)
                return null;
            var r = t[0]
              , n = t[1];
            if ("searchbot" === r)
                return new u;
            var s = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
            s ? s.length < h && (s = i(i([], s, !0), function(e) {
                for (var t = [], r = 0; r < e; r++)
                    t.push("0");
                return t
            }(h - s.length), !0)) : s = [];
            var l = s.join(".")
              , f = g(e)
              , d = c.exec(e);
            return d && d[1] ? new a(r,l,f,d[1]) : new o(r,l,f)
        }
        function g(e) {
            for (var t = 0, r = d.length; t < r; t++) {
                var n = d[t]
                  , i = n[0];
                if (n[1].exec(e))
                    return i
            }
            return null
        }
        function y() {
            return void 0 !== n && n.version ? new s(n.version.slice(1)) : null
        }
    }
    ,
    53369: (e,t,r)=>{
        "use strict";
        var n = t
          , i = r(63785)
          , o = r(77859)
          , s = r(2910);
        n.assert = o,
        n.toArray = s.toArray,
        n.zero2 = s.zero2,
        n.toHex = s.toHex,
        n.encode = s.encode,
        n.getNAF = function(e, t, r) {
            var n = new Array(Math.max(e.bitLength(), r) + 1);
            n.fill(0);
            for (var i = 1 << t + 1, o = e.clone(), s = 0; s < n.length; s++) {
                var a, u = o.andln(i - 1);
                o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u,
                o.isubn(a)) : a = 0,
                n[s] = a,
                o.iushrn(1)
            }
            return n
        }
        ,
        n.getJSF = function(e, t) {
            var r = [[], []];
            e = e.clone(),
            t = t.clone();
            for (var n, i = 0, o = 0; e.cmpn(-i) > 0 || t.cmpn(-o) > 0; ) {
                var s, a, u = e.andln(3) + i & 3, l = t.andln(3) + o & 3;
                3 === u && (u = -1),
                3 === l && (l = -1),
                s = 0 == (1 & u) ? 0 : 3 !== (n = e.andln(7) + i & 7) && 5 !== n || 2 !== l ? u : -u,
                r[0].push(s),
                a = 0 == (1 & l) ? 0 : 3 !== (n = t.andln(7) + o & 7) && 5 !== n || 2 !== u ? l : -l,
                r[1].push(a),
                2 * i === s + 1 && (i = 1 - i),
                2 * o === a + 1 && (o = 1 - o),
                e.iushrn(1),
                t.iushrn(1)
            }
            return r
        }
        ,
        n.cachedProperty = function(e, t, r) {
            var n = "_" + t;
            e.prototype[t] = function() {
                return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
            }
        }
        ,
        n.parseBytes = function(e) {
            return "string" == typeof e ? n.toArray(e, "hex") : e
        }
        ,
        n.intFromLE = function(e) {
            return new i(e,"hex","le")
        }
    }
    ,
    50343: e=>{
        "use strict";
        var t, r = "object" == typeof Reflect ? Reflect : null, n = r && "function" == typeof r.apply ? r.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        }
        ;
        t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var i = Number.isNaN || function(e) {
            return e != e
        }
        ;
        function o() {
            o.init.call(this)
        }
        e.exports = o,
        e.exports.once = function(e, t) {
            return new Promise((function(r, n) {
                function i(r) {
                    e.removeListener(t, o),
                    n(r)
                }
                function o() {
                    "function" == typeof e.removeListener && e.removeListener("error", i),
                    r([].slice.call(arguments))
                }
                v(e, t, o, {
                    once: !0
                }),
                "error" !== t && function(e, t, r) {
                    "function" == typeof e.on && v(e, "error", t, r)
                }(e, i, {
                    once: !0
                })
            }
            ))
        }
        ,
        o.EventEmitter = o,
        o.prototype._events = void 0,
        o.prototype._eventsCount = 0,
        o.prototype._maxListeners = void 0;
        var s = 10;
        function a(e) {
            if ("function" != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function u(e) {
            return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
        }
        function l(e, t, r, n) {
            var i, o, s, l;
            if (a(r),
            void 0 === (o = e._events) ? (o = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
            o = e._events),
            s = o[t]),
            void 0 === s)
                s = o[t] = r,
                ++e._eventsCount;
            else if ("function" == typeof s ? s = o[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r),
            (i = u(e)) > 0 && s.length > i && !s.warned) {
                s.warned = !0;
                var c = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning",
                c.emitter = e,
                c.type = t,
                c.count = s.length,
                l = c,
                console && console.warn && console.warn(l)
            }
            return e
        }
        function c() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function h(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            }
              , i = c.bind(n);
            return i.listener = r,
            n.wrapFn = i,
            i
        }
        function f(e, t, r) {
            var n = e._events;
            if (void 0 === n)
                return [];
            var i = n[t];
            return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                return t
            }(i) : p(i, i.length)
        }
        function d(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function p(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = e[n];
            return r
        }
        function v(e, t, r, n) {
            if ("function" == typeof e.on)
                n.once ? e.once(t, r) : e.on(t, r);
            else {
                if ("function" != typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function i(o) {
                    n.once && e.removeEventListener(t, i),
                    r(o)
                }
                ))
            }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || i(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                s = e
            }
        }),
        o.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        o.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || i(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        o.prototype.getMaxListeners = function() {
            return u(this)
        }
        ,
        o.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t.push(arguments[r]);
            var i = "error" === e
              , o = this._events;
            if (void 0 !== o)
                i = i && void 0 === o.error;
            else if (!i)
                return !1;
            if (i) {
                var s;
                if (t.length > 0 && (s = t[0]),
                s instanceof Error)
                    throw s;
                var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw a.context = s,
                a
            }
            var u = o[e];
            if (void 0 === u)
                return !1;
            if ("function" == typeof u)
                n(u, this, t);
            else {
                var l = u.length
                  , c = p(u, l);
                for (r = 0; r < l; ++r)
                    n(c[r], this, t)
            }
            return !0
        }
        ,
        o.prototype.addListener = function(e, t) {
            return l(this, e, t, !1)
        }
        ,
        o.prototype.on = o.prototype.addListener,
        o.prototype.prependListener = function(e, t) {
            return l(this, e, t, !0)
        }
        ,
        o.prototype.once = function(e, t) {
            return a(t),
            this.on(e, h(this, e, t)),
            this
        }
        ,
        o.prototype.prependOnceListener = function(e, t) {
            return a(t),
            this.prependListener(e, h(this, e, t)),
            this
        }
        ,
        o.prototype.removeListener = function(e, t) {
            var r, n, i, o, s;
            if (a(t),
            void 0 === (n = this._events))
                return this;
            if (void 0 === (r = n[e]))
                return this;
            if (r === t || r.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
                n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (i = -1,
                o = r.length - 1; o >= 0; o--)
                    if (r[o] === t || r[o].listener === t) {
                        s = r[o].listener,
                        i = o;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? r.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(r, i),
                1 === r.length && (n[e] = r[0]),
                void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }
        ,
        o.prototype.off = o.prototype.removeListener,
        o.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events))
                return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
                this;
            if (0 === arguments.length) {
                var i, o = Object.keys(r);
                for (n = 0; n < o.length; ++n)
                    "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = r[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--)
                    this.removeListener(e, t[n]);
            return this
        }
        ,
        o.prototype.listeners = function(e) {
            return f(this, e, !0)
        }
        ,
        o.prototype.rawListeners = function(e) {
            return f(this, e, !1)
        }
        ,
        o.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t)
        }
        ,
        o.prototype.listenerCount = d,
        o.prototype.eventNames = function() {
            return this._eventsCount > 0 ? t(this._events) : []
        }
    }
    ,
    88626: (e,t,r)=>{
        "use strict";
        var n = r(77859)
          , i = r(70087);
        function o(e, t) {
            return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
        }
        function s(e) {
            return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
        }
        function a(e) {
            return 1 === e.length ? "0" + e : e
        }
        function u(e) {
            return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
        }
        t.inherits = i,
        t.toArray = function(e, t) {
            if (Array.isArray(e))
                return e.slice();
            if (!e)
                return [];
            var r = [];
            if ("string" == typeof e)
                if (t) {
                    if ("hex" === t)
                        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e),
                        i = 0; i < e.length; i += 2)
                            r.push(parseInt(e[i] + e[i + 1], 16))
                } else
                    for (var n = 0, i = 0; i < e.length; i++) {
                        var s = e.charCodeAt(i);
                        s < 128 ? r[n++] = s : s < 2048 ? (r[n++] = s >> 6 | 192,
                        r[n++] = 63 & s | 128) : o(e, i) ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)),
                        r[n++] = s >> 18 | 240,
                        r[n++] = s >> 12 & 63 | 128,
                        r[n++] = s >> 6 & 63 | 128,
                        r[n++] = 63 & s | 128) : (r[n++] = s >> 12 | 224,
                        r[n++] = s >> 6 & 63 | 128,
                        r[n++] = 63 & s | 128)
                    }
            else
                for (i = 0; i < e.length; i++)
                    r[i] = 0 | e[i];
            return r
        }
        ,
        t.toHex = function(e) {
            for (var t = "", r = 0; r < e.length; r++)
                t += a(e[r].toString(16));
            return t
        }
        ,
        t.htonl = s,
        t.toHex32 = function(e, t) {
            for (var r = "", n = 0; n < e.length; n++) {
                var i = e[n];
                "little" === t && (i = s(i)),
                r += u(i.toString(16))
            }
            return r
        }
        ,
        t.zero2 = a,
        t.zero8 = u,
        t.join32 = function(e, t, r, i) {
            var o = r - t;
            n(o % 4 == 0);
            for (var s = new Array(o / 4), a = 0, u = t; a < s.length; a++,
            u += 4) {
                var l;
                l = "big" === i ? e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3] : e[u + 3] << 24 | e[u + 2] << 16 | e[u + 1] << 8 | e[u],
                s[a] = l >>> 0
            }
            return s
        }
        ,
        t.split32 = function(e, t) {
            for (var r = new Array(4 * e.length), n = 0, i = 0; n < e.length; n++,
            i += 4) {
                var o = e[n];
                "big" === t ? (r[i] = o >>> 24,
                r[i + 1] = o >>> 16 & 255,
                r[i + 2] = o >>> 8 & 255,
                r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24,
                r[i + 2] = o >>> 16 & 255,
                r[i + 1] = o >>> 8 & 255,
                r[i] = 255 & o)
            }
            return r
        }
        ,
        t.rotr32 = function(e, t) {
            return e >>> t | e << 32 - t
        }
        ,
        t.rotl32 = function(e, t) {
            return e << t | e >>> 32 - t
        }
        ,
        t.sum32 = function(e, t) {
            return e + t >>> 0
        }
        ,
        t.sum32_3 = function(e, t, r) {
            return e + t + r >>> 0
        }
        ,
        t.sum32_4 = function(e, t, r, n) {
            return e + t + r + n >>> 0
        }
        ,
        t.sum32_5 = function(e, t, r, n, i) {
            return e + t + r + n + i >>> 0
        }
        ,
        t.sum64 = function(e, t, r, n) {
            var i = e[t]
              , o = n + e[t + 1] >>> 0
              , s = (o < n ? 1 : 0) + r + i;
            e[t] = s >>> 0,
            e[t + 1] = o
        }
        ,
        t.sum64_hi = function(e, t, r, n) {
            return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
        }
        ,
        t.sum64_lo = function(e, t, r, n) {
            return t + n >>> 0
        }
        ,
        t.sum64_4_hi = function(e, t, r, n, i, o, s, a) {
            var u = 0
              , l = t;
            return u += (l = l + n >>> 0) < t ? 1 : 0,
            u += (l = l + o >>> 0) < o ? 1 : 0,
            e + r + i + s + (u += (l = l + a >>> 0) < a ? 1 : 0) >>> 0
        }
        ,
        t.sum64_4_lo = function(e, t, r, n, i, o, s, a) {
            return t + n + o + a >>> 0
        }
        ,
        t.sum64_5_hi = function(e, t, r, n, i, o, s, a, u, l) {
            var c = 0
              , h = t;
            return c += (h = h + n >>> 0) < t ? 1 : 0,
            c += (h = h + o >>> 0) < o ? 1 : 0,
            c += (h = h + a >>> 0) < a ? 1 : 0,
            e + r + i + s + u + (c += (h = h + l >>> 0) < l ? 1 : 0) >>> 0
        }
        ,
        t.sum64_5_lo = function(e, t, r, n, i, o, s, a, u, l) {
            return t + n + o + a + l >>> 0
        }
        ,
        t.rotr64_hi = function(e, t, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }
        ,
        t.rotr64_lo = function(e, t, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }
        ,
        t.shr64_hi = function(e, t, r) {
            return e >>> r
        }
        ,
        t.shr64_lo = function(e, t, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }
    }
    ,
    2910: (e,t)=>{
        "use strict";
        var r = t;
        function n(e) {
            return 1 === e.length ? "0" + e : e
        }
        function i(e) {
            for (var t = "", r = 0; r < e.length; r++)
                t += n(e[r].toString(16));
            return t
        }
        r.toArray = function(e, t) {
            if (Array.isArray(e))
                return e.slice();
            if (!e)
                return [];
            var r = [];
            if ("string" != typeof e) {
                for (var n = 0; n < e.length; n++)
                    r[n] = 0 | e[n];
                return r
            }
            if ("hex" === t) {
                (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e);
                for (n = 0; n < e.length; n += 2)
                    r.push(parseInt(e[n] + e[n + 1], 16))
            } else
                for (n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n)
                      , o = i >> 8
                      , s = 255 & i;
                    o ? r.push(o, s) : r.push(s)
                }
            return r
        }
        ,
        r.zero2 = n,
        r.toHex = i,
        r.encode = function(e, t) {
            return "hex" === t ? i(e) : e
        }
    }
    ,
    24023: (e,t)=>{
        t.getArg = function(e, t, r) {
            if (t in e)
                return e[t];
            if (3 === arguments.length)
                return r;
            throw new Error('"' + t + '" is a required argument.')
        }
        ;
        var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/
          , n = /^data:.+\,.+$/;
        function i(e) {
            var t = e.match(r);
            return t ? {
                scheme: t[1],
                auth: t[2],
                host: t[3],
                port: t[4],
                path: t[5]
            } : null
        }
        function o(e) {
            var t = "";
            return e.scheme && (t += e.scheme + ":"),
            t += "//",
            e.auth && (t += e.auth + "@"),
            e.host && (t += e.host),
            e.port && (t += ":" + e.port),
            e.path && (t += e.path),
            t
        }
        function s(e) {
            var r = e
              , n = i(e);
            if (n) {
                if (!n.path)
                    return e;
                r = n.path
            }
            for (var s, a = t.isAbsolute(r), u = r.split(/\/+/), l = 0, c = u.length - 1; c >= 0; c--)
                "." === (s = u[c]) ? u.splice(c, 1) : ".." === s ? l++ : l > 0 && ("" === s ? (u.splice(c + 1, l),
                l = 0) : (u.splice(c, 2),
                l--));
            return "" === (r = u.join("/")) && (r = a ? "/" : "."),
            n ? (n.path = r,
            o(n)) : r
        }
        function a(e, t) {
            "" === e && (e = "."),
            "" === t && (t = ".");
            var r = i(t)
              , a = i(e);
            if (a && (e = a.path || "/"),
            r && !r.scheme)
                return a && (r.scheme = a.scheme),
                o(r);
            if (r || t.match(n))
                return t;
            if (a && !a.host && !a.path)
                return a.host = t,
                o(a);
            var u = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
            return a ? (a.path = u,
            o(a)) : u
        }
        t.urlParse = i,
        t.urlGenerate = o,
        t.normalize = s,
        t.join = a,
        t.isAbsolute = function(e) {
            return "/" === e.charAt(0) || r.test(e)
        }
        ,
        t.relative = function(e, t) {
            "" === e && (e = "."),
            e = e.replace(/\/$/, "");
            for (var r = 0; 0 !== t.indexOf(e + "/"); ) {
                var n = e.lastIndexOf("/");
                if (n < 0)
                    return t;
                if ((e = e.slice(0, n)).match(/^([^\/]+:\/)?\/*$/))
                    return t;
                ++r
            }
            return Array(r + 1).join("../") + t.substr(e.length + 1)
        }
        ;
        var u = !("__proto__"in Object.create(null));
        function l(e) {
            return e
        }
        function c(e) {
            if (!e)
                return !1;
            var t = e.length;
            if (t < 9)
                return !1;
            if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9))
                return !1;
            for (var r = t - 10; r >= 0; r--)
                if (36 !== e.charCodeAt(r))
                    return !1;
            return !0
        }
        function h(e, t) {
            return e === t ? 0 : null === e ? 1 : null === t ? -1 : e > t ? 1 : -1
        }
        t.toSetString = u ? l : function(e) {
            return c(e) ? "$" + e : e
        }
        ,
        t.fromSetString = u ? l : function(e) {
            return c(e) ? e.slice(1) : e
        }
        ,
        t.compareByOriginalPositions = function(e, t, r) {
            var n = h(e.source, t.source);
            return 0 !== n || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) || r || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = e.generatedLine - t.generatedLine) ? n : h(e.name, t.name)
        }
        ,
        t.compareByGeneratedPositionsDeflated = function(e, t, r) {
            var n = e.generatedLine - t.generatedLine;
            return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || r || 0 !== (n = h(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : h(e.name, t.name)
        }
        ,
        t.compareByGeneratedPositionsInflated = function(e, t) {
            var r = e.generatedLine - t.generatedLine;
            return 0 !== r || 0 !== (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = h(e.source, t.source)) || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) ? r : h(e.name, t.name)
        }
        ,
        t.parseSourceMapInput = function(e) {
            return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""))
        }
        ,
        t.computeSourceURL = function(e, t, r) {
            if (t = t || "",
            e && ("/" !== e[e.length - 1] && "/" !== t[0] && (e += "/"),
            t = e + t),
            r) {
                var n = i(r);
                if (!n)
                    throw new Error("sourceMapURL could not be parsed");
                if (n.path) {
                    var u = n.path.lastIndexOf("/");
                    u >= 0 && (n.path = n.path.substring(0, u + 1))
                }
                t = a(o(n), t)
            }
            return s(t)
        }
    }
    ,
    11792: (e,t,r)=>{
        "use strict";
        r.r(t),
        r.d(t, {
            NIL: ()=>a.Z,
            parse: ()=>h.Z,
            stringify: ()=>c.Z,
            v1: ()=>n.Z,
            v3: ()=>i.Z,
            v4: ()=>o.Z,
            v5: ()=>s.Z,
            validate: ()=>l.Z,
            version: ()=>u.Z
        });
        var n = r(17984)
          , i = r(77036)
          , o = r(70942)
          , s = r(60534)
          , a = r(91513)
          , u = r(43732)
          , l = r(53475)
          , c = r(14325)
          , h = r(64015)
    }
    ,
    16559: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.create = function(e) {
                return {
                    dispose: e
                }
            }
        }(t.Disposable || (t.Disposable = {})),
        function(e) {
            const t = {
                dispose() {}
            };
            e.None = function() {
                return t
            }
        }(t.Event || (t.Event = {}));
        class r {
            add(e, t=null, r) {
                this._callbacks || (this._callbacks = [],
                this._contexts = []),
                this._callbacks.push(e),
                this._contexts.push(t),
                Array.isArray(r) && r.push({
                    dispose: ()=>this.remove(e, t)
                })
            }
            remove(e, t=null) {
                if (this._callbacks) {
                    for (var r = !1, n = 0, i = this._callbacks.length; n < i; n++)
                        if (this._callbacks[n] === e) {
                            if (this._contexts[n] === t)
                                return this._callbacks.splice(n, 1),
                                void this._contexts.splice(n, 1);
                            r = !0
                        }
                    if (r)
                        throw new Error("When adding a listener with a context, you should remove it with the same context")
                }
            }
            invoke(...e) {
                if (!this._callbacks)
                    return [];
                for (var t = [], r = this._callbacks.slice(0), n = this._contexts.slice(0), i = 0, o = r.length; i < o; i++)
                    try {
                        t.push(r[i].apply(n[i], e))
                    } catch (e) {
                        console.error(e)
                    }
                return t
            }
            isEmpty() {
                return !this._callbacks || 0 === this._callbacks.length
            }
            dispose() {
                this._callbacks = void 0,
                this._contexts = void 0
            }
        }
        class n {
            constructor(e) {
                this._options = e
            }
            get event() {
                return this._event || (this._event = (e,t,i)=>{
                    let o;
                    return this._callbacks || (this._callbacks = new r),
                    this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this),
                    this._callbacks.add(e, t),
                    o = {
                        dispose: ()=>{
                            this._callbacks.remove(e, t),
                            o.dispose = n._noop,
                            this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this)
                        }
                    },
                    Array.isArray(i) && i.push(o),
                    o
                }
                ),
                this._event
            }
            fire(e) {
                this._callbacks && this._callbacks.invoke.call(this._callbacks, e)
            }
            dispose() {
                this._callbacks && (this._callbacks.dispose(),
                this._callbacks = void 0)
            }
        }
        n._noop = function() {}
        ,
        t.Emitter = n
    }
    ,
    22299: (e,t)=>{
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.None = 0,
            e.First = 1,
            e.Last = 2
        }(r = t.Touch || (t.Touch = {}));
        t.LinkedMap = class {
            constructor() {
                this._map = new Map,
                this._head = void 0,
                this._tail = void 0,
                this._size = 0
            }
            clear() {
                this._map.clear(),
                this._head = void 0,
                this._tail = void 0,
                this._size = 0
            }
            isEmpty() {
                return !this._head && !this._tail
            }
            get size() {
                return this._size
            }
            has(e) {
                return this._map.has(e)
            }
            get(e) {
                const t = this._map.get(e);
                if (t)
                    return t.value
            }
            set(e, t, n=r.None) {
                let i = this._map.get(e);
                if (i)
                    i.value = t,
                    n !== r.None && this.touch(i, n);
                else {
                    switch (i = {
                        key: e,
                        value: t,
                        next: void 0,
                        previous: void 0
                    },
                    n) {
                    case r.None:
                        this.addItemLast(i);
                        break;
                    case r.First:
                        this.addItemFirst(i);
                        break;
                    case r.Last:
                    default:
                        this.addItemLast(i)
                    }
                    this._map.set(e, i),
                    this._size++
                }
            }
            delete(e) {
                const t = this._map.get(e);
                return !!t && (this._map.delete(e),
                this.removeItem(t),
                this._size--,
                !0)
            }
            shift() {
                if (!this._head && !this._tail)
                    return;
                if (!this._head || !this._tail)
                    throw new Error("Invalid list");
                const e = this._head;
                return this._map.delete(e.key),
                this.removeItem(e),
                this._size--,
                e.value
            }
            forEach(e, t) {
                let r = this._head;
                for (; r; )
                    t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this),
                    r = r.next
            }
            forEachReverse(e, t) {
                let r = this._tail;
                for (; r; )
                    t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this),
                    r = r.previous
            }
            values() {
                let e = []
                  , t = this._head;
                for (; t; )
                    e.push(t.value),
                    t = t.next;
                return e
            }
            keys() {
                let e = []
                  , t = this._head;
                for (; t; )
                    e.push(t.key),
                    t = t.next;
                return e
            }
            addItemFirst(e) {
                if (this._head || this._tail) {
                    if (!this._head)
                        throw new Error("Invalid list");
                    e.next = this._head,
                    this._head.previous = e
                } else
                    this._tail = e;
                this._head = e
            }
            addItemLast(e) {
                if (this._head || this._tail) {
                    if (!this._tail)
                        throw new Error("Invalid list");
                    e.previous = this._tail,
                    this._tail.next = e
                } else
                    this._head = e;
                this._tail = e
            }
            removeItem(e) {
                if (e === this._head && e === this._tail)
                    this._head = void 0,
                    this._tail = void 0;
                else if (e === this._head)
                    this._head = e.next;
                else if (e === this._tail)
                    this._tail = e.previous;
                else {
                    const t = e.next
                      , r = e.previous;
                    if (!t || !r)
                        throw new Error("Invalid list");
                    t.previous = r,
                    r.next = t
                }
            }
            touch(e, t) {
                if (!this._head || !this._tail)
                    throw new Error("Invalid list");
                if (t === r.First || t === r.Last)
                    if (t === r.First) {
                        if (e === this._head)
                            return;
                        const t = e.next
                          , r = e.previous;
                        e === this._tail ? (r.next = void 0,
                        this._tail = r) : (t.previous = r,
                        r.next = t),
                        e.previous = void 0,
                        e.next = this._head,
                        this._head.previous = e,
                        this._head = e
                    } else if (t === r.Last) {
                        if (e === this._tail)
                            return;
                        const t = e.next
                          , r = e.previous;
                        e === this._head ? (t.previous = void 0,
                        this._head = t) : (t.previous = r,
                        r.next = t),
                        e.next = void 0,
                        e.previous = this._tail,
                        this._tail.next = e,
                        this._tail = e
                    }
            }
        }
    }
}]);