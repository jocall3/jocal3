(self.webpackChunkcodespaces_web_client = self.webpackChunkcodespaces_web_client || []).push([[779], {
    72854: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            AppInsightsCore: ()=>R,
            BaseCore: ()=>U.Z,
            BaseTelemetryPlugin: ()=>ae.i,
            CoreUtils: ()=>C.Tr,
            DiagnosticLogger: ()=>E.AQ,
            ESPromise: ()=>q,
            ESPromiseScheduler: ()=>ee,
            EventHelper: ()=>ie.zB,
            EventLatency: ()=>v,
            EventPersistence: ()=>S,
            EventPropertyType: ()=>w,
            EventsDiscardedReason: ()=>se.h,
            FullVersionString: ()=>C.vs,
            InternalAppInsightsCore: ()=>I,
            InternalBaseCore: ()=>O.A,
            LoggingSeverity: ()=>D,
            MinChannelPriorty: ()=>ne,
            NotificationManager: ()=>z,
            PerfEvent: ()=>x.zn,
            PerfManager: ()=>x.Jk,
            ProcessTelemetryContext: ()=>re.Vi,
            TraceLevel: ()=>b,
            Undefined: ()=>oe.jA,
            Utils: ()=>C.cQ,
            ValueKind: ()=>g,
            ValueSanitizer: ()=>te,
            Version: ()=>C.Gf,
            _ExtendedInternalMessageId: ()=>H,
            _InternalLogMessage: ()=>E.lQ,
            _InternalMessageId: ()=>T,
            __getRegisteredEvents: ()=>de.um,
            _logInternalMessage: ()=>E.L4,
            _throwInternal: ()=>E.kP,
            _warnToConsole: ()=>E.jV,
            addEventHandler: ()=>de.Ib,
            addEventListeners: ()=>de.yw,
            addPageHideEventListener: ()=>de.TJ,
            addPageShowEventListener: ()=>de.nD,
            addPageUnloadEventListener: ()=>de.c9,
            areCookiesSupported: ()=>ue.p7,
            arrForEach: ()=>i.tO,
            arrIndexOf: ()=>i.UA,
            arrMap: ()=>i.Mr,
            arrReduce: ()=>i.Xz,
            attachEvent: ()=>de.pZ,
            cookieAvailable: ()=>ue.p7,
            createCookieMgr: ()=>ue.Nz,
            createEnumStyle: ()=>s.By,
            createGuid: ()=>C.cm,
            createProcessTelemetryContext: ()=>re.CD,
            createTraceParent: ()=>ce.SU,
            createUniqueNamespace: ()=>me.J,
            createUnloadHandlerContainer: ()=>le.Y,
            dateNow: ()=>i.m6,
            deleteCookie: ()=>C.kT,
            detachEvent: ()=>de.pD,
            disableCookies: ()=>C.oF,
            disallowsSameSiteNone: ()=>ue.UY,
            doPerf: ()=>x.Lm,
            dumpObj: ()=>P.eU,
            eventOff: ()=>de.QY,
            eventOn: ()=>de.XO,
            extend: ()=>C.l7,
            findW3cTraceParent: ()=>ce.lq,
            formatTraceParent: ()=>ce.aR,
            generateW3CId: ()=>ie.DO,
            getCommonSchemaMetaData: ()=>C.Vv,
            getConsole: ()=>P.dr,
            getCookie: ()=>C.ej,
            getCookieValue: ()=>C.Do,
            getCrypto: ()=>P.MX,
            getDocument: ()=>P.Me,
            getExceptionName: ()=>i.jj,
            getFieldValueType: ()=>C.Sy,
            getGlobal: ()=>K.Rd,
            getGlobalInst: ()=>P.a8,
            getHistory: ()=>P.s1,
            getIEVersion: ()=>P.sA,
            getISOString: ()=>i.Y6,
            getJSON: ()=>P.xA,
            getLocation: ()=>P.k$,
            getMsCrypto: ()=>P.gz,
            getNavigator: ()=>P.jW,
            getPerformance: ()=>P.r,
            getSetValue: ()=>i.qK,
            getTenantId: ()=>C.jM,
            getTime: ()=>C.hK,
            getWindow: ()=>P.Jj,
            hasDocument: ()=>P.Nv,
            hasHistory: ()=>P.fE,
            hasJSON: ()=>P.nS,
            hasNavigator: ()=>P.d6,
            hasOwnProperty: ()=>i.nr,
            hasWindow: ()=>P.Ym,
            isArray: ()=>i.kJ,
            isArrayValid: ()=>C.JT,
            isBeaconsSupported: ()=>P.MF,
            isBoolean: ()=>i.jn,
            isChromium: ()=>C.mJ,
            isDate: ()=>i.J_,
            isDocumentObjectAvailable: ()=>C.x9,
            isError: ()=>i.VZ,
            isFetchSupported: ()=>P.JO,
            isFunction: ()=>i.mf,
            isIE: ()=>P.w1,
            isLatency: ()=>C.r7,
            isNotTruthy: ()=>i.F,
            isNullOrUndefined: ()=>i.le,
            isNumber: ()=>i.hj,
            isObject: ()=>i.Kn,
            isReactNative: ()=>P.b$,
            isSampledFlag: ()=>ce.Pn,
            isString: ()=>i.HD,
            isTruthy: ()=>i.fQ,
            isTypeof: ()=>i.Ym,
            isUint8ArrayAvailable: ()=>C.IZ,
            isUndefined: ()=>i.o8,
            isValidSpanId: ()=>ce.Lc,
            isValidTraceId: ()=>ce.jN,
            isValidTraceParent: ()=>ce.J6,
            isValueAssigned: ()=>C.Sn,
            isValueKind: ()=>C.oS,
            isWindowObjectAvailable: ()=>C.dH,
            isXhrSupported: ()=>P.Z3,
            mergeEvtNamespace: ()=>de.jU,
            newGuid: ()=>ie.GW,
            newId: ()=>_e.pZ,
            normalizeJsName: ()=>i.Gf,
            objCreate: ()=>K.pu,
            objDefineAccessors: ()=>i.l_,
            objForEachKey: ()=>i.rW,
            objFreeze: ()=>i.FL,
            objKeys: ()=>i.FY,
            objSeal: ()=>i.Xi,
            openXhr: ()=>C.ot,
            optimizeObject: ()=>i.Ax,
            parseTraceParent: ()=>ce.j_,
            perfNow: ()=>ie.Jj,
            proxyAssign: ()=>i.cf,
            proxyFunctionAs: ()=>i.Oi,
            proxyFunctions: ()=>i.Vb,
            random32: ()=>_e._l,
            randomValue: ()=>_e.az,
            removeEventHandler: ()=>de.C1,
            removeEventListeners: ()=>de.nJ,
            removePageHideEventListener: ()=>de.C9,
            removePageShowEventListener: ()=>de.Yl,
            removePageUnloadEventListener: ()=>de.JA,
            safeGetCookieMgr: ()=>ue.JP,
            safeGetLogger: ()=>E.vH,
            sanitizeProperty: ()=>C.yj,
            setCookie: ()=>C.d8,
            setEnableEnvMocks: ()=>P.dI,
            setProcessTelemetryTimings: ()=>C.if,
            setValue: ()=>i.sO,
            strContains: ()=>i._Q,
            strEndsWith: ()=>i.Id,
            strFunction: ()=>oe.cb,
            strObject: ()=>oe.fK,
            strPrototype: ()=>oe.hB,
            strStartsWith: ()=>i.xe,
            strTrim: ()=>i.nd,
            strUndefined: ()=>oe.jA,
            throwError: ()=>i._y,
            toISOString: ()=>i.Y6,
            useXDomainRequest: ()=>P.cp
        });
        var a, r = n(49577), s = n(45299), i = n(96933), d = "Failed", _ = d + "MonitorAjax", o = "Track", u = "Start", m = "Stop", l = "Event", c = "AuthContext", M = "Exception", L = "Local", h = "Session", y = "Storage", Y = "Browser", f = "Cannot", p = "Buffer", k = "InstrumentationKey", D = (0,
        s.By)({
            CRITICAL: 1,
            WARNING: 2
        }), T = (0,
        s.By)(((a = {})[Y + "DoesNotSupport" + L + y] = 0,
        a[Y + f + "Read" + L + y] = 1,
        a[Y + f + "Read" + h + y] = 2,
        a[Y + f + "Write" + L + y] = 3,
        a[Y + f + "Write" + h + y] = 4,
        a[Y + d + "RemovalFrom" + L + y] = 5,
        a[Y + d + "RemovalFrom" + h + y] = 6,
        a[f + "SendEmptyTelemetry"] = 7,
        a.ClientPerformanceMathError = 8,
        a["ErrorParsingAI" + h + "Cookie"] = 9,
        a.ErrorPVCalc = 10,
        a[M + "WhileLoggingError"] = 11,
        a[d + "AddingTelemetryTo" + p] = 12,
        a[_ + "Abort"] = 13,
        a[_ + "Dur"] = 14,
        a[_ + "Open"] = 15,
        a[_ + "RSC"] = 16,
        a[_ + "Send"] = 17,
        a[_ + "GetCorrelationHeader"] = 18,
        a[d + "ToAddHandlerForOnBeforeUnload"] = 19,
        a[d + "ToSendQueuedTelemetry"] = 20,
        a[d + "ToReportDataLoss"] = 21,
        a["Flush" + d] = 22,
        a.MessageLimitPerPVExceeded = 23,
        a.MissingRequiredFieldSpecification = 24,
        a.NavigationTimingNotSupported = 25,
        a.OnError = 26,
        a[h + "RenewalDateIsZero"] = 27,
        a.SenderNotInitialized = 28,
        a[u + o + l + d] = 29,
        a[m + o + l + d] = 30,
        a[u + o + d] = 31,
        a[m + o + d] = 32,
        a.TelemetrySampledAndNotSent = 33,
        a[o + l + d] = 34,
        a[o + M + d] = 35,
        a[o + "Metric" + d] = 36,
        a[o + "PV" + d] = 37,
        a[o + "PV" + d + "Calc"] = 38,
        a[o + "Trace" + d] = 39,
        a["Transmission" + d] = 40,
        a[d + "ToSet" + y + p] = 41,
        a[d + "ToRestore" + y + p] = 42,
        a.InvalidBackendResponse = 43,
        a[d + "ToFixDepricatedValues"] = 44,
        a.InvalidDurationValue = 45,
        a.TelemetryEnvelopeInvalid = 46,
        a.CreateEnvelopeError = 47,
        a[f + "SerializeObject"] = 48,
        a[f + "SerializeObjectNonSerializable"] = 49,
        a.CircularReferenceDetected = 50,
        a["Clear" + c + d] = 51,
        a[M + "Truncated"] = 52,
        a.IllegalCharsInName = 53,
        a.ItemNotInArray = 54,
        a.MaxAjaxPerPVExceeded = 55,
        a.MessageTruncated = 56,
        a.NameTooLong = 57,
        a.SampleRateOutOfRange = 58,
        a["Set" + c + d] = 59,
        a["Set" + c + d + "AccountName"] = 60,
        a.StringValueTooLong = 61,
        a.StartCalledMoreThanOnce = 62,
        a.StopCalledWithoutStart = 63,
        a["TelemetryInitializer" + d] = 64,
        a.TrackArgumentsNotSpecified = 65,
        a.UrlTooLong = 66,
        a[h + y + p + "Full"] = 67,
        a[f + "AccessCookie"] = 68,
        a.IdTooLong = 69,
        a.InvalidEvent = 70,
        a[_ + "SetRequestHeader"] = 71,
        a["Send" + Y + "InfoOnUserInit"] = 72,
        a["Plugin" + M] = 73,
        a["Notification" + M] = 74,
        a.SnippetScriptLoadFailure = 99,
        a["Invalid" + k] = 100,
        a[f + "ParseAiBlobValue"] = 101,
        a.InvalidContentBlob = 102,
        a[o + "PageAction" + l + d] = 103,
        a[d + "AddingCustomDefinedRequestContext"] = 104,
        a["InMemory" + y + p + "Full"] = 105,
        a[k + "Deprecation"] = 106,
        a)), g = (0,
        s.By)({
            NotSet: 0,
            Pii_DistinguishedName: 1,
            Pii_GenericData: 2,
            Pii_IPV4Address: 3,
            Pii_IPv6Address: 4,
            Pii_MailSubject: 5,
            Pii_PhoneNumber: 6,
            Pii_QueryString: 7,
            Pii_SipAddress: 8,
            Pii_SmtpAddress: 9,
            Pii_Identity: 10,
            Pii_Uri: 11,
            Pii_Fqdn: 12,
            Pii_IPV4AddressLegacy: 13,
            CustomerContent_GenericContent: 32
        }), v = (0,
        s.By)({
            Normal: 1,
            CostDeferred: 2,
            RealTime: 3,
            Immediate: 4
        }), w = (0,
        s.By)({
            Unspecified: 0,
            String: 1,
            Int32: 2,
            UInt32: 3,
            Int64: 4,
            UInt64: 5,
            Double: 6,
            Bool: 7,
            Guid: 8,
            DateTime: 9
        }), S = (0,
        s.By)({
            Normal: 1,
            Critical: 2
        }), b = (0,
        s.By)({
            NONE: 0,
            ERROR: 1,
            WARNING: 2,
            INFORMATION: 3
        }), H = (0,
        i.FL)((0,
        r.uc)((0,
        r.uc)({}, T), (0,
        s.By)({
            AuthHandShakeError: 501,
            AuthRedirectFail: 502,
            BrowserCannotReadLocalStorage: 503,
            BrowserCannotWriteLocalStorage: 504,
            BrowserDoesNotSupportLocalStorage: 505,
            CannotParseBiBlobValue: 506,
            CannotParseDataAttribute: 507,
            CVPluginNotAvailable: 508,
            DroppedEvent: 509,
            ErrorParsingAISessionCookie: 510,
            ErrorProvidedChannels: 511,
            FailedToGetCookies: 512,
            FailedToInitializeCorrelationVector: 513,
            FailedToInitializeSDK: 514,
            InvalidContentBlob: 515,
            InvalidCorrelationValue: 516,
            SessionRenewalDateIsZero: 517,
            SendPostOnCompleteFailure: 518,
            PostResponseHandler: 519,
            SDKNotInitialized: 520
        }))), j = n(86948), E = n(55028), x = n(14270), P = n(28185), A = n(70390), O = n(937), W = n(60503);
        function F(e, t, n, a) {
            (0,
            i.tO)(e, (function(e) {
                if (e && e[t])
                    if (n)
                        setTimeout((function() {
                            return a(e)
                        }
                        ), 0);
                    else
                        try {
                            a(e)
                        } catch (e) {}
            }
            ))
        }
        var z = function() {
            function e(t) {
                this.listeners = [];
                var n = !!(t || {}).perfEvtsSendAll;
                (0,
                j.Z)(e, this, (function(e) {
                    e[A.g] = function(t) {
                        e.listeners[A.MW](t)
                    }
                    ,
                    e[A.n7] = function(t) {
                        for (var n = (0,
                        i.UA)(e[A.dE], t); n > -1; )
                            e.listeners[A.cb](n, 1),
                            n = (0,
                            i.UA)(e[A.dE], t)
                    }
                    ,
                    e[W.uC] = function(t) {
                        F(e[A.dE], W.uC, !0, (function(e) {
                            e[W.uC](t)
                        }
                        ))
                    }
                    ,
                    e[W.$F] = function(t, n) {
                        F(e[A.dE], W.$F, !0, (function(e) {
                            e[W.$F](t, n)
                        }
                        ))
                    }
                    ,
                    e[W.f_] = function(t, n) {
                        F(e[A.dE], W.f_, n, (function(e) {
                            e[W.f_](t, n)
                        }
                        ))
                    }
                    ,
                    e[W.C$] = function(t) {
                        t && (!n && t[A.PL]() || F(e[A.dE], W.C$, !1, (function(e) {
                            t[A.d] ? setTimeout((function() {
                                return e[W.C$](t)
                            }
                            ), 0) : e[W.C$](t)
                        }
                        )))
                    }
                }
                ))
            }
            return e.__ieDyn = 1,
            e
        }()
          , I = function(e) {
            function t() {
                var n = e.call(this) || this;
                return (0,
                j.Z)(t, n, (function(e, t) {
                    function n(t) {
                        var n = e[A.tb]();
                        n && n[W.$F]([t], 2)
                    }
                    e[A.VL] = function(e, n, a, r) {
                        t[A.VL](e, n, a || new E.AQ(e), r || new z(e))
                    }
                    ,
                    e.track = function(a) {
                        (0,
                        x.Lm)(e[W.kl](), (function() {
                            return "AppInsightsCore:track"
                        }
                        ), (function() {
                            null === a && (n(a),
                            (0,
                            i._y)("Invalid telemetry item")),
                            function(e) {
                                (0,
                                i.le)(e[A.I]) && (n(e),
                                (0,
                                i._y)("telemetry name required"))
                            }(a),
                            t.track(a)
                        }
                        ), (function() {
                            return {
                                item: a
                            }
                        }
                        ), !a.sync)
                    }
                }
                )),
                n
            }
            return (0,
            r.ne)(t, e),
            t.__ieDyn = 1,
            t
        }(O.A)
          , N = n(66619)
          , C = n(8823)
          , J = function(e) {
            function t() {
                var n = e.call(this) || this;
                return n.pluginVersionStringArr = [],
                (0,
                j.Z)(t, n, (function(e, t) {
                    e.logger && e.logger.queue || (e.logger = new E.AQ({
                        loggingLevelConsole: 1
                    })),
                    e.initialize = function(n, a, r, s) {
                        (0,
                        x.Lm)(e, (function() {
                            return "AppInsightsCore.initialize"
                        }
                        ), (function() {
                            var d = e.pluginVersionStringArr;
                            if (n) {
                                n.endpointUrl || (n.endpointUrl = N.YT);
                                var _ = n.propertyStorageOverride;
                                !_ || _.getProperty && _.setProperty || (0,
                                i._y)("Invalid property storage override passed."),
                                n.channels && (0,
                                i.tO)(n.channels, (function(e) {
                                    e && (0,
                                    i.tO)(e, (function(e) {
                                        if (e.identifier && e.version) {
                                            var t = e.identifier + "=" + e.version;
                                            d.push(t)
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            e.getWParam = function() {
                                return "undefined" != typeof document ? 0 : -1
                            }
                            ,
                            a && (0,
                            i.tO)(a, (function(e) {
                                if (e && e.identifier && e.version) {
                                    var t = e.identifier + "=" + e.version;
                                    d.push(t)
                                }
                            }
                            )),
                            e.pluginVersionString = d.join(";"),
                            e.pluginVersionStringArr = d;
                            try {
                                t.initialize(n, a, r, s),
                                e.pollInternalLogs("InternalLog")
                            } catch (t) {
                                var o = e.logger
                                  , u = (0,
                                P.eU)(t);
                                -1 !== u.indexOf("channels") && (u += "\n - Channels must be provided through config.channels only!"),
                                (0,
                                E.kP)(o, 1, 514, "SDK Initialization Failed - no telemetry will be sent: " + u)
                            }
                        }
                        ), (function() {
                            return {
                                config: n,
                                extensions: a,
                                logger: r,
                                notificationManager: s
                            }
                        }
                        ))
                    }
                    ,
                    e.track = function(n) {
                        (0,
                        x.Lm)(e, (function() {
                            return "AppInsightsCore.track"
                        }
                        ), (function() {
                            var a = n;
                            if (a) {
                                a.timings = a.timings || {},
                                a.timings.trackStart = (0,
                                C.hK)(),
                                (0,
                                C.r7)(a.latency) || (a.latency = 1);
                                var r = a.ext = a.ext || {};
                                r.sdk = r.sdk || {},
                                r.sdk.ver = C.vs;
                                var s = a.baseData = a.baseData || {};
                                s[N.o6] = s[N.o6] || {};
                                var i = s[N.o6];
                                i[N.p8] = e.pluginVersionString || i[N.p8] || N.qS
                            }
                            t.track(a)
                        }
                        ), (function() {
                            return {
                                item: n
                            }
                        }
                        ), !n.sync)
                    }
                }
                )),
                n
            }
            return (0,
            r.ne)(t, e),
            t.__ieDyn = 1,
            t
        }(I);
        const R = J;
        var U = n(21356)
          , V = i.mf;
        function B(e, t, n) {
            return function(a) {
                e[t] = a,
                n()
            }
        }
        const q = function() {
            function e(t) {
                var n = 0
                  , a = null
                  , r = [];
                function s() {
                    if (r.length > 0) {
                        var e = r.slice();
                        r = [],
                        setTimeout((function() {
                            for (var t = 0, n = e.length; t < n; ++t)
                                try {
                                    e[t]()
                                } catch (e) {}
                        }
                        ), 0)
                    }
                }
                function i(e) {
                    0 === n && (a = e,
                    n = 1,
                    s())
                }
                function d(e) {
                    0 === n && (a = e,
                    n = 2,
                    s())
                }
                (0,
                j.Z)(e, this, (function(t) {
                    t.then = function(t, i) {
                        return new e((function(d, _) {
                            !function(t, i, d, _) {
                                r.push((function() {
                                    var r;
                                    try {
                                        (r = 1 === n ? V(t) ? t(a) : a : V(i) ? i(a) : a)instanceof e ? r.then(d, _) : 2 !== n || V(i) ? d(r) : _(r)
                                    } catch (e) {
                                        return void _(e)
                                    }
                                }
                                )),
                                0 !== n && s()
                            }(t, i, d, _)
                        }
                        ))
                    }
                    ,
                    t.catch = function(e) {
                        return t.then(null, e)
                    }
                }
                )),
                function() {
                    if (!V(t))
                        throw new TypeError("ESPromise: resolvedFunc argument is not a Function");
                    try {
                        t(i, d)
                    } catch (e) {
                        d(e)
                    }
                }()
            }
            return e.resolve = function(t) {
                return t instanceof e ? t : t && V(t.then) ? new e((function(e, n) {
                    try {
                        t.then(e, n)
                    } catch (e) {
                        n(e)
                    }
                }
                )) : new e((function(e) {
                    e(t)
                }
                ))
            }
            ,
            e.reject = function(t) {
                return new e((function(e, n) {
                    n(t)
                }
                ))
            }
            ,
            e.all = function(t) {
                if (t && t.length)
                    return new e((function(e, n) {
                        try {
                            for (var a = [], r = 0, s = 0; s < t.length; s++) {
                                var i = t[s];
                                i && V(i.then) ? (r++,
                                i.then(B(a, s, (function() {
                                    0 == --r && e(a)
                                }
                                )), n)) : a[s] = i
                            }
                            0 === r && setTimeout((function() {
                                e(a)
                            }
                            ), 0)
                        } catch (e) {
                            n(e)
                        }
                    }
                    ))
            }
            ,
            e.race = function(t) {
                return new e((function(e, n) {
                    if (t && t.length)
                        try {
                            for (var a = function(a) {
                                var r = t[a];
                                r && V(r.then) ? r.then(e, n) : setTimeout((function() {
                                    e(r)
                                }
                                ), 0)
                            }, r = 0; r < t.length; r++)
                                a(r)
                        } catch (e) {
                            n(e)
                        }
                }
                ))
            }
            ,
            e
        }();
        var K = n(52863)
          , Z = 0
          , G = []
          , $ = []
          , Q = [];
        function X() {
            return (new Date).getTime()
        }
        const ee = function() {
            function e(t, n) {
                var a = 0
                  , r = (t || "<unnamed>") + "." + Z;
                function s(e) {
                    var t = (0,
                    K.Rd)();
                    t && t.QUnit && console && console.log("ESPromiseScheduler[" + r + "] " + e)
                }
                function i(e) {
                    (0,
                    E.jV)(n, "ESPromiseScheduler[" + r + "] " + e)
                }
                Z++,
                (0,
                j.Z)(e, this, (function(e) {
                    var t = null
                      , n = 0;
                    function d(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n].id === t)
                                return e.splice(n, 1)[0];
                        return null
                    }
                    e.scheduleEvent = function(e, _, o) {
                        var u = r + "." + n;
                        n++,
                        _ && (u += "-(" + _ + ")");
                        var m = u + "{" + a + "}";
                        a++;
                        var l, c, M, L = {
                            evt: null,
                            tm: X(),
                            id: m,
                            isRunning: !1,
                            isAborted: !1
                        };
                        return L.evt = t ? (l = L,
                        c = t,
                        M = new q((function(e, t) {
                            var n = X() - c.tm
                              , a = c.id;
                            s("[" + u + "] is waiting for [" + a + ":" + n + " ms] to complete before starting -- [" + $.length + "] waiting and [" + G.length + "] running"),
                            l.abort = function(e) {
                                l.abort = null,
                                d($, u),
                                l.isAborted = !0,
                                t(new Error(e))
                            }
                            ,
                            c.evt.then((function(n) {
                                d($, u),
                                k(l).then(e, t)
                            }
                            ), (function(n) {
                                d($, u),
                                k(l).then(e, t)
                            }
                            ))
                        }
                        )),
                        $.push(l),
                        M) : k(L),
                        (t = L).evt._schId = m,
                        L.evt;
                        function h(e) {
                            for (var t = X(), n = t - 6e5, a = e.length, r = 0; r < a; ) {
                                var s = e[r];
                                if (s && s.tm < n) {
                                    var d = null;
                                    s.abort ? (d = "Aborting [" + s.id + "] due to Excessive runtime (" + (t - s.tm) + " ms)",
                                    s.abort(d)) : d = "Removing [" + s.id + "] due to Excessive runtime (" + (t - s.tm) + " ms)",
                                    i(d),
                                    e.splice(r, 1),
                                    a--
                                } else
                                    r++
                            }
                        }
                        function y(e, n) {
                            var a = !1
                              , r = d(G, e);
                            if (r || (r = d(Q, e),
                            a = !0),
                            r) {
                                r.to && (clearTimeout(r.to),
                                r.to = null);
                                var _ = X() - r.tm;
                                n ? a ? i("Timed out event [" + e + "] finally complete -- " + _ + " ms") : s("Promise [" + e + "] Complete -- " + _ + " ms") : (Q.push(r),
                                i("Event [" + e + "] Timed out and removed -- " + _ + " ms"))
                            } else
                                s("Failed to remove [" + e + "] from running queue");
                            t && t.id === e && (t = null),
                            h(G),
                            h($),
                            h(Q)
                        }
                        function Y(e, t) {
                            return function(n) {
                                return y(e, !0),
                                t && t(n),
                                n
                            }
                        }
                        function f(e, t, n, a) {
                            t.then((function(t) {
                                return t instanceof q ? (s("Event [" + e + "] returned a promise -- waiting"),
                                f(e, t, n, a),
                                t) : Y(e, n)(t)
                            }
                            ), Y(e, a))
                        }
                        function p(e, t) {
                            var n = e.id;
                            return new q((function(a, r) {
                                s("Event [" + n + "] Starting -- waited for " + (e.wTm || "--") + " ms"),
                                e.isRunning = !0,
                                e.abort = function(t) {
                                    e.abort = null,
                                    e.isAborted = !0,
                                    y(n, !1),
                                    r(new Error(t))
                                }
                                ;
                                var i = t(n);
                                i instanceof q ? (o && (e.to = setTimeout((function() {
                                    y(n, !1),
                                    r(new Error("Timed out after [" + o + "] ms"))
                                }
                                ), o)),
                                f(n, i, (function(t) {
                                    s("Event [" + n + "] Resolving after " + (X() - e.tm) + " ms"),
                                    a(t)
                                }
                                ), r)) : (s("Promise [" + n + "] Auto completed as the start action did not return a promise"),
                                a())
                            }
                            ))
                        }
                        function k(t) {
                            var n = X();
                            return t.wTm = n - t.tm,
                            t.tm = n,
                            t.isAborted ? q.reject(new Error("[" + u + "] was aborted")) : (G.push(t),
                            p(t, e))
                        }
                    }
                }
                ))
            }
            return e.incomplete = function() {
                return G
            }
            ,
            e.waitingToStart = function() {
                return $
            }
            ,
            e
        }();
        var te = function() {
            function e(e) {
                var t = this
                  , n = {}
                  , a = []
                  , r = [];
                function s(e, t) {
                    var s, d = n[e];
                    if (d && (s = d[t]),
                    !s && null !== s) {
                        if ((0,
                        i.HD)(e) && (0,
                        i.HD)(t))
                            if (r.length > 0) {
                                for (var _ = 0; _ < r.length; _++)
                                    if (r[_].handleField(e, t)) {
                                        s = {
                                            canHandle: !0,
                                            fieldHandler: r[_]
                                        };
                                        break
                                    }
                            } else
                                0 === a.length && (s = {
                                    canHandle: !0
                                });
                        if (!s && null !== s) {
                            s = null;
                            for (_ = 0; _ < a.length; _++)
                                if (a[_].handleField(e, t)) {
                                    s = {
                                        canHandle: !0,
                                        handler: a[_],
                                        fieldHandler: null
                                    };
                                    break
                                }
                        }
                        d || (d = n[e] = {}),
                        d[t] = s
                    }
                    return s
                }
                function d(e, t, n, a, r, s) {
                    if (e.handler)
                        return e.handler.property(t, n, r, s);
                    if (!(0,
                    i.le)(r.kind)) {
                        if (4096 == (4096 & a) || !(0,
                        C.oS)(r.kind))
                            return null;
                        r.value = r.value.toString()
                    }
                    return o(e.fieldHandler, t, n, a, r)
                }
                function _(e, t, n) {
                    return (0,
                    C.Sn)(n) ? {
                        value: n
                    } : null
                }
                function o(e, n, a, r, s) {
                    if (s && e) {
                        var d = e.getSanitizer(n, a, r, s.kind, s.propertyType);
                        if (d)
                            if (4 === r) {
                                var u = {}
                                  , m = s.value;
                                (0,
                                i.rW)(m, (function(t, r) {
                                    var s = n + "." + a;
                                    if ((0,
                                    C.Sn)(r)) {
                                        var i = _(0, 0, r);
                                        (i = o(e, s, t, (0,
                                        C.Sy)(r), i)) && (u[t] = i.value)
                                    }
                                }
                                )),
                                s.value = u
                            } else {
                                var l = {
                                    path: n,
                                    name: a,
                                    type: r,
                                    prop: s,
                                    sanitizer: t
                                };
                                s = d.call(t, l)
                            }
                    }
                    return s
                }
                e && r.push(e),
                t.addSanitizer = function(e) {
                    e && (a.push(e),
                    n = {})
                }
                ,
                t.addFieldSanitizer = function(e) {
                    e && (r.push(e),
                    n = {})
                }
                ,
                t.handleField = function(e, t) {
                    var n = s(e, t);
                    return !!n && n.canHandle
                }
                ,
                t.value = function(e, t, n, a) {
                    var r = s(e, t);
                    if (r && r.canHandle) {
                        if (!r || !r.canHandle)
                            return null;
                        if (r.handler)
                            return r.handler.value(e, t, n, a);
                        if (!(0,
                        i.HD)(t) || (0,
                        i.le)(n) || n === N.qS)
                            return null;
                        var o = null
                          , u = (0,
                        C.Sy)(n);
                        if (8192 == (8192 & u)) {
                            var m = -8193 & u;
                            if (o = n,
                            !(0,
                            C.Sn)(o.value) || 1 !== m && 2 !== m && 3 !== m && 4096 != (4096 & m))
                                return null
                        } else
                            1 === u || 2 === u || 3 === u || 4096 == (4096 & u) ? o = _(e, t, n) : 4 === u && (o = _(e, t, a ? JSON.stringify(n) : n));
                        if (o)
                            return d(r, e, t, u, o, a)
                    }
                    return null
                }
                ,
                t.property = function(e, t, n, a) {
                    var r = s(e, t);
                    if (!r || !r.canHandle)
                        return null;
                    if (!(0,
                    i.HD)(t) || (0,
                    i.le)(n) || !(0,
                    C.Sn)(n.value))
                        return null;
                    var _ = (0,
                    C.Sy)(n.value);
                    return 0 === _ ? null : d(r, e, t, _, n, a)
                }
            }
            return e.getFieldType = C.Sy,
            e
        }()
          , ne = 100
          , ae = n(63143)
          , re = n(51616)
          , se = n(23558)
          , ie = n(10112)
          , de = n(96739)
          , _e = n(91342)
          , oe = n(31819)
          , ue = n(10015)
          , me = n(68886)
          , le = n(90130)
          , ce = n(86849)
    }
    ,
    66619: (e,t,n)=>{
        "use strict";
        n.d(t, {
            YT: ()=>r,
            o6: ()=>i,
            p8: ()=>s,
            qS: ()=>a
        });
        var a = ""
          , r = "https://browser.events.data.microsoft.com/OneCollector/1.0/"
          , s = "version"
          , i = "properties"
    }
    ,
    45299: (e,t,n)=>{
        "use strict";
        n.d(t, {
            By: ()=>r
        });
        var a = n(96933);
        function r(e) {
            var t = {};
            return (0,
            a.rW)(e, (function(e, n) {
                t[e] = n,
                t[n] = e
            }
            )),
            (0,
            a._A)(t)
        }
    }
    ,
    23558: (e,t,n)=>{
        "use strict";
        n.d(t, {
            h: ()=>a
        });
        var a = (0,
        n(45299).By)({
            Unknown: 0,
            NonRetryableStatus: 1,
            InvalidEvent: 2,
            SizeLimitExceeded: 3,
            KillSwitch: 4,
            QueueFull: 5
        })
    }
    ,
    63143: (e,t,n)=>{
        "use strict";
        n.d(t, {
            i: ()=>u
        });
        var a = n(86948)
          , r = n(70390)
          , s = n(96933)
          , i = n(60503)
          , d = n(51616)
          , _ = n(90130)
          , o = "getPlugin"
          , u = function() {
            function e() {
                var t, n, u, m, l, c = this;
                function M(e) {
                    void 0 === e && (e = null);
                    var t = e;
                    if (!t) {
                        var a = n || (0,
                        d.CD)(null, {}, c[i.oV]);
                        t = u && u[o] ? a[r.zV](null, u[o]) : a[r.zV](null, u)
                    }
                    return t
                }
                function L(e, t, a) {
                    e && (0,
                    s.sO)(e, i.Zh, [], null, s.le),
                    !a && t && (a = t[r.SD]()[r.W2]());
                    var _ = u;
                    u && u[o] && (_ = u[o]()),
                    c[i.oV] = t,
                    n = (0,
                    d.CD)(a, e, t, _)
                }
                function h() {
                    t = !1,
                    c[i.oV] = null,
                    n = null,
                    u = null,
                    l = [],
                    m = (0,
                    _.Y)()
                }
                h(),
                (0,
                a.Z)(e, c, (function(e) {
                    e[r.VL] = function(e, n, a, r) {
                        L(e, n, r),
                        t = !0
                    }
                    ,
                    e[r.fi] = function(t, n) {
                        var a, _ = e[i.oV];
                        if (_ && (!t || _ === t[i.oV]())) {
                            var c, M = !1, L = t || (0,
                            d.Bt)(null, _, u && u[o] ? u[o]() : u), y = n || ((a = {
                                reason: 0
                            })[r.d] = !1,
                            a);
                            return e[r.F3] && !0 === e[r.F3](L, y, Y) ? c = !0 : Y(),
                            c
                        }
                        function Y() {
                            if (!M) {
                                M = !0,
                                m.run(L, n);
                                var e = l;
                                l = [],
                                (0,
                                s.tO)(e, (function(e) {
                                    e.rm()
                                }
                                )),
                                !0 === c && L[r.uL](y),
                                h()
                            }
                        }
                    }
                    ,
                    e[r.Tu] = function(t, n) {
                        var a = e[i.oV];
                        if (a && (!t || a === t[i.oV]())) {
                            var s, _ = !1, m = t || (0,
                            d.xy)(null, a, u && u[o] ? u[o]() : u), l = n || {
                                reason: 0
                            };
                            return e._doUpdate && !0 === e._doUpdate(m, l, c) ? s = !0 : c(),
                            s
                        }
                        function c() {
                            _ || (_ = !0,
                            L(m.getCfg(), m.core(), m[r.W2]()))
                        }
                    }
                    ,
                    e._addHook = function(e) {
                        e && ((0,
                        s.kJ)(e) ? l = l.concat(e) : l[r.MW](e))
                    }
                    ,
                    (0,
                    s.Oi)(e, "_addUnloadCb", (function() {
                        return m
                    }
                    ), "add")
                }
                )),
                c[r.mc] = function(e) {
                    return M(e)[r.mc]()
                }
                ,
                c[r.yl] = function() {
                    return t
                }
                ,
                c.setInitialized = function(e) {
                    t = e
                }
                ,
                c[r.Jd] = function(e) {
                    u = e
                }
                ,
                c[r.uL] = function(e, t) {
                    t ? t[r.uL](e) : u && (0,
                    s.mf)(u[i.hL]) && u[i.hL](e, null)
                }
                ,
                c._getTelCtx = M
            }
            return e.__ieDyn = 1,
            e
        }()
    }
    ,
    26177: (e,t,n)=>{
        "use strict";
        n.d(t, {
            A0: ()=>l,
            Aw: ()=>_,
            ct: ()=>m
        });
        var a = n(70390)
          , r = n(96933)
          , s = n(60503)
          , i = n(51616)
          , d = n(79498)
          , _ = 500
          , o = "Channel has invalid priority - ";
        function u(e, t, n) {
            t && (0,
            r.kJ)(t) && t[a.R5] > 0 && (t = t.sort((function(e, t) {
                return e[s.yi] - t[s.yi]
            }
            )),
            (0,
            r.tO)(t, (function(e) {
                e[s.yi] < _ && (0,
                r._y)(o + e[a.pZ])
            }
            )),
            e[a.MW]({
                queue: (0,
                r.FL)(t),
                chain: (0,
                i.jV)(t, n[a.TC], n)
            }))
        }
        function m(e, t) {
            function n() {
                return (0,
                i.CD)(null, t[a.TC], t, null)
            }
            function s(e, t, n, s) {
                var i = e ? e[a.R5] + 1 : 1;
                function d() {
                    0 === --i && (s && s(),
                    s = null)
                }
                i > 0 && (0,
                r.tO)(e, (function(e) {
                    if (e && e.queue[a.R5] > 0) {
                        var r = e.chain
                          , s = t[a.zV](r);
                        s[a.Fc](d),
                        n(s)
                    } else
                        i--
                }
                )),
                d()
            }
            var o = !1
              , u = {
                identifier: "ChannelControllerPlugin",
                priority: _,
                initialize: function(t, n, s, _) {
                    o = !0,
                    (0,
                    r.tO)(e, (function(e) {
                        e && e.queue[a.R5] > 0 && (0,
                        d.bP)((0,
                        i.CD)(e.chain, t, n), s)
                    }
                    ))
                },
                isInitialized: function() {
                    return o
                },
                processTelemetry: function(t, r) {
                    s(e, r || n(), (function(e) {
                        e[a.uL](t)
                    }
                    ), (function() {
                        r[a.uL](t)
                    }
                    ))
                },
                update: function(t, n) {
                    var r = n || {
                        reason: 0
                    };
                    return s(e, t, (function(e) {
                        e[a.uL](r)
                    }
                    ), (function() {
                        t[a.uL](r)
                    }
                    )),
                    !0
                },
                pause: function() {
                    s(e, n(), (function(e) {
                        e.iterate((function(e) {
                            e.pause && e.pause()
                        }
                        ))
                    }
                    ), null)
                },
                resume: function() {
                    s(e, n(), (function(e) {
                        e.iterate((function(e) {
                            e.resume && e.resume()
                        }
                        ))
                    }
                    ), null)
                },
                teardown: function(t, n) {
                    var r = n || {
                        reason: 0,
                        isAsync: !1
                    };
                    return s(e, t, (function(e) {
                        e[a.uL](r)
                    }
                    ), (function() {
                        t[a.uL](r),
                        o = !1
                    }
                    )),
                    !0
                },
                getChannel: function(t) {
                    var n = null;
                    return e && e[a.R5] > 0 && (0,
                    r.tO)(e, (function(e) {
                        if (e && e.queue[a.R5] > 0 && ((0,
                        r.tO)(e.queue, (function(e) {
                            if (e[a.pZ] === t)
                                return n = e,
                                -1
                        }
                        )),
                        n))
                            return -1
                    }
                    )),
                    n
                },
                flush: function(t, r, i, d) {
                    var _ = 1
                      , o = !1
                      , u = null;
                    function m() {
                        _--,
                        o && 0 === _ && (u && (clearTimeout(u),
                        u = null),
                        r && r(o),
                        r = null)
                    }
                    return d = d || 5e3,
                    s(e, n(), (function(e) {
                        e.iterate((function(e) {
                            if (e[a.kL]) {
                                _++;
                                var n = !1;
                                e[a.kL](t, (function() {
                                    n = !0,
                                    m()
                                }
                                ), i) || n || (t && null == u ? u = setTimeout((function() {
                                    u = null,
                                    m()
                                }
                                ), d) : m())
                            }
                        }
                        ))
                    }
                    ), (function() {
                        o = !0,
                        m()
                    }
                    )),
                    !0
                },
                _setQueue: function(t) {
                    e = t
                }
            };
            return u
        }
        function l(e, t, n) {
            var i = [];
            if (e && (0,
            r.tO)(e, (function(e) {
                return u(i, e, n)
            }
            )),
            t) {
                var d = [];
                (0,
                r.tO)(t, (function(e) {
                    e[s.yi] > _ && d[a.MW](e)
                }
                )),
                u(i, d, n)
            }
            return i
        }
    }
    ,
    10015: (e,t,n)=>{
        "use strict";
        n.d(t, {
            JP: ()=>g,
            Nz: ()=>v,
            UY: ()=>x,
            kj: ()=>D,
            p7: ()=>w
        });
        var a = n(70390)
          , r = n(55028)
          , s = n(28185)
          , i = n(96933)
          , d = n(60503)
          , _ = "toGMTString"
          , o = "toUTCString"
          , u = "cookie"
          , m = "expires"
          , l = "enabled"
          , c = "isCookieUseDisabled"
          , M = "disableCookiesUsage"
          , L = "_ckMgr"
          , h = null
          , y = null
          , Y = null
          , f = (0,
        s.Me)()
          , p = {}
          , k = {};
        function D(e, t) {
            var n = v[L] || k[L];
            return n || (n = v[L] = v(e, t),
            k[L] = n),
            n
        }
        function T(e) {
            return !e || e.isEnabled()
        }
        function g(e, t) {
            var n;
            if (e)
                n = e.getCookieMgr();
            else if (t) {
                var r = t[a.Lk];
                n = r[L] ? r[L] : v(t)
            }
            return n || (n = D(t, (e || {})[a.eZ])),
            n
        }
        function v(e, t) {
            var n, r = function(e) {
                var t = e[a.Lk] = e[a.Lk] || {};
                if ((0,
                i.sO)(t, "domain", e.cookieDomain, i.BX, i.le),
                (0,
                i.sO)(t, "path", e.cookiePath || "/", null, i.le),
                (0,
                i.le)(t[l])) {
                    var n = void 0;
                    (0,
                    i.o8)(e[c]) || (n = !e[c]),
                    (0,
                    i.o8)(e[M]) || (n = !e[M]),
                    t[l] = n
                }
                return t
            }(e || k), u = r.path || "/", h = r.domain, Y = !1 !== r[l], f = ((n = {
                isEnabled: function() {
                    var e = Y && w(t)
                      , n = k[L];
                    return e && n && f !== n && (e = T(n)),
                    e
                }
            })[a.$h] = function(e) {
                Y = !1 !== e
            }
            ,
            n.set = function(e, t, n, l, c) {
                var M = !1;
                if (T(f)) {
                    var L = {}
                      , Y = (0,
                    i.nd)(t || d.qS)
                      , p = Y[a.ou](";");
                    if (-1 !== p && (Y = (0,
                    i.nd)(t[a.zc](0, p)),
                    L = S(t[a.zc](p + 1))),
                    (0,
                    i.sO)(L, "domain", l || h, i.fQ, i.o8),
                    !(0,
                    i.le)(n)) {
                        var k = (0,
                        s.w1)();
                        if ((0,
                        i.o8)(L[m])) {
                            var D = (0,
                            i.m6)() + 1e3 * n;
                            if (D > 0) {
                                var g = new Date;
                                g.setTime(D),
                                (0,
                                i.sO)(L, m, b(g, k ? _ : o) || b(g, k ? _ : o) || d.qS, i.fQ)
                            }
                        }
                        k || (0,
                        i.sO)(L, "max-age", d.qS + n, null, i.o8)
                    }
                    var v = (0,
                    s.k$)();
                    v && "https:" === v.protocol && ((0,
                    i.sO)(L, "secure", null, null, i.o8),
                    null === y && (y = !x(((0,
                    s.jW)() || {})[a.qV])),
                    y && (0,
                    i.sO)(L, "SameSite", "None", null, i.o8)),
                    (0,
                    i.sO)(L, "path", c || u, null, i.o8),
                    (r.setCookie || E)(e, H(Y, L)),
                    M = !0
                }
                return M
            }
            ,
            n.get = function(e) {
                var t = d.qS;
                return T(f) && (t = (r.getCookie || j)(e)),
                t
            }
            ,
            n.del = function(e, t) {
                var n = !1;
                return T(f) && (n = f.purge(e, t)),
                n
            }
            ,
            n.purge = function(e, n) {
                var a, i = !1;
                if (w(t)) {
                    var _ = ((a = {}).path = n || "/",
                    a[m] = "Thu, 01 Jan 1970 00:00:01 GMT",
                    a);
                    (0,
                    s.w1)() || (_["max-age"] = "0"),
                    (r.delCookie || E)(e, H(d.qS, _)),
                    i = !0
                }
                return i
            }
            ,
            n);
            return f[L] = f,
            f
        }
        function w(e) {
            if (null === h) {
                h = !1;
                try {
                    h = void 0 !== (f || {})[u]
                } catch (t) {
                    (0,
                    r.kP)(e, 2, 68, "Cannot access document.cookie - " + (0,
                    i.jj)(t), {
                        exception: (0,
                        s.eU)(t)
                    })
                }
            }
            return h
        }
        function S(e) {
            var t = {};
            if (e && e[a.R5]) {
                var n = (0,
                i.nd)(e)[a.w6](";");
                (0,
                i.tO)(n, (function(e) {
                    if (e = (0,
                    i.nd)(e || d.qS)) {
                        var n = e[a.ou]("=");
                        -1 === n ? t[e] = null : t[(0,
                        i.nd)(e[a.zc](0, n))] = (0,
                        i.nd)(e[a.zc](n + 1))
                    }
                }
                ))
            }
            return t
        }
        function b(e, t) {
            return (0,
            i.mf)(e[t]) ? e[t]() : null
        }
        function H(e, t) {
            var n = e || d.qS;
            return (0,
            i.rW)(t, (function(e, t) {
                n += "; " + e + ((0,
                i.le)(t) ? d.qS : "=" + t)
            }
            )),
            n
        }
        function j(e) {
            var t = d.qS;
            if (f) {
                var n = f[u] || d.qS;
                Y !== n && (p = S(n),
                Y = n),
                t = (0,
                i.nd)(p[e] || d.qS)
            }
            return t
        }
        function E(e, t) {
            f && (f[u] = e + "=" + t)
        }
        function x(e) {
            return !!(0,
            i.HD)(e) && (!(!(0,
            i._Q)(e, "CPU iPhone OS 12") && !(0,
            i._Q)(e, "iPad; CPU OS 12")) || (!!((0,
            i._Q)(e, "Macintosh; Intel Mac OS X 10_14") && (0,
            i._Q)(e, "Version/") && (0,
            i._Q)(e, "Safari")) || (!(!(0,
            i._Q)(e, "Macintosh; Intel Mac OS X 10_14") || !(0,
            i.Id)(e, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) || (!(!(0,
            i._Q)(e, "Chrome/5") && !(0,
            i._Q)(e, "Chrome/6")) || (!(!(0,
            i._Q)(e, "UnrealEngine") || (0,
            i._Q)(e, "Chrome")) || !(!(0,
            i._Q)(e, "UCBrowser/12") && !(0,
            i._Q)(e, "UCBrowser/11")))))))
        }
    }
    ,
    10112: (e,t,n)=>{
        "use strict";
        n.d(t, {
            DO: ()=>L,
            GW: ()=>c,
            Jj: ()=>M,
            zB: ()=>Y
        });
        var a, r = n(52863), s = n(70390), i = n(10015), d = n(28185), _ = n(96739), o = n(96933), u = n(60503), m = n(91342), l = null;
        function c() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[s.i7](y, (function(e) {
                var t = 0 | (0,
                m.az)(15);
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        function M() {
            var e = (0,
            d.r)();
            return e && e.now ? e.now() : (0,
            o.m6)()
        }
        function L() {
            for (var e, t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], n = u.qS, a = 0; a < 4; a++)
                n += t[15 & (e = (0,
                m._l)())] + t[e >> 4 & 15] + t[e >> 8 & 15] + t[e >> 12 & 15] + t[e >> 16 & 15] + t[e >> 20 & 15] + t[e >> 24 & 15] + t[e >> 28 & 15];
            var r = t[8 + (3 & (0,
            m._l)()) | 0];
            return n[s.Jn](0, 8) + n[s.Jn](9, 4) + "4" + n[s.Jn](13, 3) + r + n[s.Jn](16, 3) + n[s.Jn](19, 12)
        }
        var h = {
            _canUseCookies: void 0,
            isTypeof: o.Ym,
            isUndefined: o.o8,
            isNullOrUndefined: o.le,
            hasOwnProperty: o.nr,
            isFunction: o.mf,
            isObject: o.Kn,
            isDate: o.J_,
            isArray: o.kJ,
            isError: o.VZ,
            isString: o.HD,
            isNumber: o.hj,
            isBoolean: o.jn,
            toISOString: o.Y6,
            arrForEach: o.tO,
            arrIndexOf: o.UA,
            arrMap: o.Mr,
            arrReduce: o.Xz,
            strTrim: o.nd,
            objCreate: r.pu,
            objKeys: o.FY,
            objDefineAccessors: o.l_,
            addEventHandler: _.Ib,
            dateNow: o.m6,
            isIE: d.w1,
            disableCookies: function() {
                f()[s.$h](!1)
            },
            newGuid: c,
            perfNow: M,
            newId: m.pZ,
            randomValue: m.az,
            random32: m._l,
            mwcRandomSeed: m.CN,
            mwcRandom32: m.F6,
            generateW3CId: L
        }
          , y = /[xy]/g
          , Y = {
            Attach: _.pZ,
            AttachEvent: _.pZ,
            Detach: _.pD,
            DetachEvent: _.pD
        };
        function f(e, t) {
            var n = (0,
            i.kj)(e, t)
              , r = h._canUseCookies;
            return null === l && (l = [],
            a = r,
            (0,
            o.l_)(h, "_canUseCookies", (function() {
                return a
            }
            ), (function(e) {
                a = e,
                (0,
                o.tO)(l, (function(t) {
                    t[s.$h](e)
                }
                ))
            }
            ))),
            -1 === (0,
            o.UA)(l, n) && l[s.MW](n),
            (0,
            o.jn)(r) && n[s.$h](r),
            (0,
            o.jn)(a) && n[s.$h](a),
            n
        }
    }
    ,
    68886: (e,t,n)=>{
        "use strict";
        n.d(t, {
            J: ()=>M,
            K: ()=>L
        });
        var a = n(31819)
          , r = n(70390)
          , s = n(96933)
          , i = n(60503)
          , d = n(91342)
          , _ = a.RJ
          , o = "2.8.5"
          , u = "." + (0,
        d.pZ)(6)
          , m = 0;
        function l(e) {
            return 1 === e[r.xv] || 9 === e[r.xv] || !+e[r.xv]
        }
        function c(e, t) {
            var n = t[e.id];
            if (!n) {
                n = {};
                try {
                    l(t) && (function(e, t, n) {
                        if (_)
                            try {
                                return _(e, t, {
                                    value: n,
                                    enumerable: !1,
                                    configurable: !0
                                }),
                                !0
                            } catch (e) {}
                        return !1
                    }(t, e.id, n) || (t[e.id] = n))
                } catch (e) {}
            }
            return n
        }
        function M(e, t) {
            return void 0 === t && (t = !1),
            (0,
            s.Gf)(e + m++ + (t ? "." + o : i.qS) + u)
        }
        function L(e) {
            var t = {
                id: M("_aiData-" + (e || i.qS) + "." + o),
                accept: function(e) {
                    return l(e)
                },
                get: function(e, n, a, r) {
                    var i = e[t.id];
                    return i ? i[(0,
                    s.Gf)(n)] : (r && ((i = c(t, e))[(0,
                    s.Gf)(n)] = a),
                    a)
                },
                kill: function(e, t) {
                    if (e && e[t])
                        try {
                            delete e[t]
                        } catch (e) {}
                }
            };
            return t
        }
    }
    ,
    51108: (e,t,n)=>{
        "use strict";
        n.d(t, {
            j: ()=>o,
            p: ()=>u
        });
        var a, r = n(70390), s = n(28185), i = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"], d = null;
        function _(e, t) {
            return function() {
                var n = arguments
                  , a = o(t);
                if (a) {
                    var s = a.listener;
                    s && s[e] && s[e][r.ZV](s, n)
                }
            }
        }
        function o(e) {
            var t, n = d;
            return n || !0 === e.disableDbgExt || (n = d || ((t = (0,
            s.a8)("Microsoft")) && (d = t.ApplicationInsights),
            d)),
            n ? n.ChromeDbgExt : null
        }
        function u(e) {
            if (!a) {
                a = {};
                for (var t = 0; t < i[r.R5]; t++)
                    a[i[t]] = _(i[t], e)
            }
            return a
        }
    }
    ,
    55028: (e,t,n)=>{
        "use strict";
        n.d(t, {
            AQ: ()=>c,
            L4: ()=>y,
            jV: ()=>h,
            kP: ()=>L,
            lQ: ()=>m,
            vH: ()=>l
        });
        var a = n(86948)
          , r = n(70390)
          , s = n(51108)
          , i = n(28185)
          , d = n(96933)
          , _ = n(60503);
        function o(e) {
            return e ? '"' + e[r.i7](/\"/g, _.qS) + '"' : _.qS
        }
        function u(e, t) {
            var n = (0,
            i.dr)();
            if (n) {
                var a = "log";
                n[e] && (a = e),
                (0,
                d.mf)(n[a]) && n[a](t)
            }
        }
        var m = function() {
            function e(e, t, n, a) {
                void 0 === n && (n = !1);
                var s = this;
                s[r.Gc] = e,
                s[r.gU] = (n ? "AI: " : "AI (Internal): ") + e;
                var d = _.qS;
                (0,
                i.nS)() && (d = (0,
                i.xA)().stringify(a));
                var u = (t ? " message:" + o(t) : _.qS) + (a ? " props:" + o(d) : _.qS);
                s[r.gU] += u
            }
            return e.dataType = "MessageData",
            e
        }();
        function l(e, t) {
            return (e || {})[r.eZ] || new c(t)
        }
        var c = function() {
            function e(t) {
                this.identifier = "DiagnosticLogger",
                this.queue = [];
                var n, o, l, c, M = 0, L = {};
                (0,
                a.Z)(e, this, (function(e) {
                    function a(t, n) {
                        if (!(M >= l)) {
                            var a = !0
                              , s = "AITR_" + n[r.Gc];
                            if (L[s] ? a = !1 : L[s] = !0,
                            a && (t <= o && (e.queue[r.MW](n),
                            M++,
                            h(1 === t ? "error" : "warn", n)),
                            M === l)) {
                                var i = "Internal events throttle limit per PageView reached for this app."
                                  , d = new m(23,i,!1);
                                e.queue[r.MW](d),
                                1 === t ? e[_.ys](i) : e[_.cL](i)
                            }
                        }
                    }
                    function h(e, n) {
                        var a = (0,
                        s.j)(t || {});
                        a && a[r.mc] && a[r.mc](e, n)
                    }
                    !function(e) {
                        n = (0,
                        d.v4)(e.loggingLevelConsole, 0),
                        o = (0,
                        d.v4)(e.loggingLevelTelemetry, 1),
                        l = (0,
                        d.v4)(e.maxMessageLimit, 25),
                        c = (0,
                        d.v4)(e[r.Fr], !1)
                    }(t || {}),
                    e.consoleLoggingLevel = function() {
                        return n
                    }
                    ,
                    e.telemetryLoggingLevel = function() {
                        return o
                    }
                    ,
                    e.maxInternalMessageLimit = function() {
                        return l
                    }
                    ,
                    e[r.Fr] = function() {
                        return c
                    }
                    ,
                    e.throwInternal = function(t, s, o, u, l) {
                        void 0 === l && (l = !1);
                        var M = new m(s,o,l,u);
                        if (c)
                            throw (0,
                            i.eU)(M);
                        var y = 1 === t ? _.ys : _.cL;
                        if ((0,
                        d.o8)(M[r.gU]))
                            h("throw" + (1 === t ? "Critical" : "Warning"), M);
                        else {
                            if (l) {
                                var Y = +M[r.Gc];
                                !L[Y] && n >= t && (e[y](M[r.gU]),
                                L[Y] = !0)
                            } else
                                n >= t && e[y](M[r.gU]);
                            a(t, M)
                        }
                    }
                    ,
                    e[_.cL] = function(e) {
                        u("warn", e),
                        h("warning", e)
                    }
                    ,
                    e[_.ys] = function(e) {
                        u("error", e),
                        h("error", e)
                    }
                    ,
                    e.resetInternalMessageCount = function() {
                        M = 0,
                        L = {}
                    }
                    ,
                    e[r.jk] = a
                }
                ))
            }
            return e.__ieDyn = 1,
            e
        }();
        function M(e) {
            return e || new c
        }
        function L(e, t, n, a, r, s) {
            void 0 === s && (s = !1),
            M(e).throwInternal(t, n, a, r, s)
        }
        function h(e, t) {
            M(e)[_.cL](t)
        }
        function y(e, t, n) {
            M(e)[r.jk](t, n)
        }
    }
    ,
    28185: (e,t,n)=>{
        "use strict";
        n.d(t, {
            JO: ()=>$,
            Jj: ()=>x,
            MF: ()=>G,
            MX: ()=>U,
            Me: ()=>A,
            Nv: ()=>P,
            Ym: ()=>E,
            Z3: ()=>X,
            a8: ()=>j,
            b$: ()=>B,
            cp: ()=>Q,
            d6: ()=>O,
            dI: ()=>H,
            dr: ()=>N,
            eU: ()=>Z,
            ed: ()=>te,
            fE: ()=>F,
            gz: ()=>V,
            jW: ()=>W,
            k$: ()=>I,
            nS: ()=>J,
            pI: ()=>ne,
            r: ()=>C,
            s1: ()=>z,
            sA: ()=>K,
            w1: ()=>q,
            xA: ()=>R
        });
        var a = n(31819)
          , r = n(52863)
          , s = n(70390)
          , i = n(96933)
          , d = n(60503)
          , _ = "window"
          , o = "document"
          , u = "documentMode"
          , m = "navigator"
          , l = "history"
          , c = "location"
          , M = "console"
          , L = "performance"
          , h = "JSON"
          , y = "crypto"
          , Y = "msCrypto"
          , f = "ReactNative"
          , p = "msie"
          , k = "trident/"
          , D = "XMLHttpRequest"
          , T = null
          , g = null
          , v = !1
          , w = null
          , S = null;
        function b(e, t) {
            var n = !1;
            if (e) {
                try {
                    if (!(n = t in e)) {
                        var r = e[a.hB];
                        r && (n = t in r)
                    }
                } catch (e) {}
                if (!n)
                    try {
                        var s = new e;
                        n = !(0,
                        i.o8)(s[t])
                    } catch (e) {}
            }
            return n
        }
        function H(e) {
            v = e
        }
        function j(e) {
            var t = (0,
            r.Rd)();
            return t && t[e] ? t[e] : e === _ && E() ? window : null
        }
        function E() {
            return Boolean(typeof window === a.fK && window)
        }
        function x() {
            return E() ? window : j(_)
        }
        function P() {
            return Boolean(typeof document === a.fK && document)
        }
        function A() {
            return P() ? document : j(o)
        }
        function O() {
            return Boolean(typeof navigator === a.fK && navigator)
        }
        function W() {
            return O() ? navigator : j(m)
        }
        function F() {
            return Boolean(typeof history === a.fK && history)
        }
        function z() {
            return F() ? history : j(l)
        }
        function I(e) {
            if (e && v) {
                var t = j("__mockLocation");
                if (t)
                    return t
            }
            return typeof location === a.fK && location ? location : j(c)
        }
        function N() {
            return typeof console !== a.jA ? console : j(M)
        }
        function C() {
            return j(L)
        }
        function J() {
            return Boolean(typeof JSON === a.fK && JSON || null !== j(h))
        }
        function R() {
            return J() ? JSON || j(h) : null
        }
        function U() {
            return j(y)
        }
        function V() {
            return j(Y)
        }
        function B() {
            var e = W();
            return !(!e || !e.product) && e.product === f
        }
        function q() {
            var e = W();
            if (e && (e[s.qV] !== g || null === T)) {
                var t = ((g = e[s.qV]) || d.qS)[s.T1]();
                T = (0,
                i._Q)(t, p) || (0,
                i._Q)(t, k)
            }
            return T
        }
        function K(e) {
            if (void 0 === e && (e = null),
            !e) {
                var t = W() || {};
                e = t ? (t[s.qV] || d.qS)[s.T1]() : d.qS
            }
            var n = (e || d.qS)[s.T1]();
            if ((0,
            i._Q)(n, p)) {
                var a = A() || {};
                return Math.max(parseInt(n[s.w6](p)[1]), a[u] || 0)
            }
            if ((0,
            i._Q)(n, k)) {
                var r = parseInt(n[s.w6](k)[1]);
                if (r)
                    return r + 4
            }
            return null
        }
        function Z(e) {
            var t = Object[a.hB].toString[s._S](e)
              , n = d.qS;
            return "[object Error]" === t ? n = "{ stack: '" + e.stack + "', message: '" + e.message + "', name: '" + e[s.I] + "'" : J() && (n = R().stringify(e)),
            t + n
        }
        function G() {
            return null === S && (S = O() && Boolean(W().sendBeacon)),
            S
        }
        function $(e) {
            var t = !1;
            try {
                t = !!j("fetch");
                var n = j("Request");
                t && e && n && (t = b(n, "keepalive"))
            } catch (e) {}
            return t
        }
        function Q() {
            return null === w && (w = typeof XDomainRequest !== a.jA) && X() && (w = w && !b(j(D), "withCredentials")),
            w
        }
        function X() {
            var e = !1;
            try {
                e = !!j(D)
            } catch (e) {}
            return e
        }
        function ee(e, t) {
            if (e)
                for (var n = 0; n < e[s.R5]; n++) {
                    var a = e[n];
                    if (a[s.I] && a[s.I] === t)
                        return a
                }
            return {}
        }
        function te(e) {
            var t = A();
            return t && e ? ee(t.querySelectorAll("meta"), e).content : null
        }
        function ne(e) {
            var t, n = C();
            if (n) {
                var a = n.getEntriesByType("navigation") || [];
                t = ee((a[s.R5] > 0 ? a[0] : {}).serverTiming, e).description
            }
            return t
        }
    }
    ,
    60503: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $F: ()=>c,
            C$: ()=>L,
            DN: ()=>i,
            Z: ()=>r,
            Zh: ()=>_,
            cL: ()=>y,
            f_: ()=>M,
            hL: ()=>u,
            js: ()=>o,
            kl: ()=>Y,
            mE: ()=>d,
            oV: ()=>s,
            qS: ()=>a,
            uC: ()=>l,
            yi: ()=>m,
            ys: ()=>h
        });
        var a = ""
          , r = "channels"
          , s = "core"
          , i = "createPerfMgr"
          , d = "disabled"
          , _ = "extensionConfig"
          , o = "extensions"
          , u = "processTelemetry"
          , m = "priority"
          , l = "eventsSent"
          , c = "eventsDiscarded"
          , M = "eventsSendRequest"
          , L = "perfEvent"
          , h = "errorToConsole"
          , y = "warnToConsole"
          , Y = "getPerfMgr"
    }
    ,
    14270: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Jk: ()=>l,
            Lm: ()=>M,
            j5: ()=>L,
            zn: ()=>m
        });
        var a = n(86948)
          , r = n(70390)
          , s = n(96933)
          , i = n(60503)
          , d = "ctx"
          , _ = "ParentContextKey"
          , o = "ChildrenContextKey"
          , u = null
          , m = function() {
            function e(t, n, a) {
                var i, u = this, m = !1;
                (u.start = (0,
                s.m6)(),
                u[r.I] = t,
                u[r.d] = a,
                u[r.PL] = function() {
                    return !1
                }
                ,
                (0,
                s.mf)(n)) && (m = (0,
                s.l_)(u, "payload", (function() {
                    return !i && (0,
                    s.mf)(n) && (i = n(),
                    n = null),
                    i
                }
                )));
                u[r.T] = function(t) {
                    return t ? t === e[_] || t === e[o] ? u[t] : (u[d] || {})[t] : null
                }
                ,
                u[r.wu] = function(t, n) {
                    if (t)
                        if (t === e[_])
                            u[t] || (u[r.PL] = function() {
                                return !0
                            }
                            ),
                            u[t] = n;
                        else if (t === e[o])
                            u[t] = n;
                        else {
                            (u[d] = u[d] || {})[t] = n
                        }
                }
                ,
                u[r.Km] = function() {
                    var t = 0
                      , a = u[r.T](e[o]);
                    if ((0,
                    s.kJ)(a))
                        for (var i = 0; i < a[r.R5]; i++) {
                            var d = a[i];
                            d && (t += d[r.Z_])
                        }
                    u[r.Z_] = (0,
                    s.m6)() - u.start,
                    u.exTime = u[r.Z_] - t,
                    u[r.Km] = function() {}
                    ,
                    !m && (0,
                    s.mf)(n) && (u.payload = n())
                }
            }
            return e.ParentContextKey = "parent",
            e.ChildrenContextKey = "childEvts",
            e
        }()
          , l = function() {
            function e(t) {
                this.ctx = {},
                (0,
                a.Z)(e, this, (function(e) {
                    e.create = function(e, t, n) {
                        return new m(e,t,n)
                    }
                    ,
                    e.fire = function(e) {
                        e && (e[r.Km](),
                        t && (0,
                        s.mf)(t[i.C$]) && t[i.C$](e))
                    }
                    ,
                    e[r.wu] = function(t, n) {
                        t && ((e[d] = e[d] || {})[t] = n)
                    }
                    ,
                    e[r.T] = function(t) {
                        return (e[d] || {})[t]
                    }
                }
                ))
            }
            return e.__ieDyn = 1,
            e
        }()
          , c = "CoreUtils.doPerf";
        function M(e, t, n, a, s) {
            if (e) {
                var d = e;
                if (d[i.kl] && (d = d[i.kl]()),
                d) {
                    var u = void 0
                      , l = d[r.T](c);
                    try {
                        if (u = d.create(t(), a, s)) {
                            if (l && u[r.wu] && (u[r.wu](m[_], l),
                            l[r.T] && l[r.wu])) {
                                var M = l[r.T](m[o]);
                                M || (M = [],
                                l[r.wu](m[o], M)),
                                M[r.MW](u)
                            }
                            return d[r.wu](c, u),
                            n(u)
                        }
                    } catch (e) {
                        u && u[r.wu] && u[r.wu]("exception", e)
                    } finally {
                        u && d.fire(u),
                        d[r.wu](c, l)
                    }
                }
            }
            return n()
        }
        function L() {
            return u
        }
    }
    ,
    91342: (e,t,n)=>{
        "use strict";
        n.d(t, {
            CN: ()=>h,
            F6: ()=>y,
            _l: ()=>L,
            az: ()=>M,
            pZ: ()=>Y
        });
        var a = n(70390)
          , r = n(28185)
          , s = n(96933)
          , i = n(60503)
          , d = 4294967296
          , _ = 4294967295
          , o = !1
          , u = 123456789
          , m = 987654321;
        function l(e) {
            e < 0 && (e >>>= 0),
            u = 123456789 + e & _,
            m = 987654321 - e & _,
            o = !0
        }
        function c() {
            try {
                var e = 2147483647 & (0,
                s.m6)();
                l((Math.random() * d ^ e) + e)
            } catch (e) {}
        }
        function M(e) {
            return e > 0 ? Math.floor(L() / _ * (e + 1)) >>> 0 : 0
        }
        function L(e) {
            var t = 0
              , n = (0,
            r.MX)() || (0,
            r.gz)();
            return n && n.getRandomValues && (t = n.getRandomValues(new Uint32Array(1))[0] & _),
            0 === t && (0,
            r.w1)() && (o || c(),
            t = y() & _),
            0 === t && (t = Math.floor(d * Math.random() | 0)),
            e || (t >>>= 0),
            t
        }
        function h(e) {
            e ? l(e) : c()
        }
        function y(e) {
            var t = ((m = 36969 * (65535 & m) + (m >> 16) & _) << 16) + (65535 & (u = 18e3 * (65535 & u) + (u >> 16) & _)) >>> 0 & _ | 0;
            return e || (t >>>= 0),
            t
        }
        function Y(e) {
            void 0 === e && (e = 22);
            for (var t = L() >>> 0, n = 0, r = i.qS; r[a.R5] < e; )
                n++,
                r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(63 & t),
                t >>>= 6,
                5 === n && (t = (L() << 2 & 4294967295 | 3 & t) >>> 0,
                n = 0);
            return r
        }
    }
    ,
    79498: (e,t,n)=>{
        "use strict";
        n.d(t, {
            AA: ()=>m,
            OY: ()=>o,
            Yn: ()=>l,
            bP: ()=>u
        });
        var a = n(70390)
          , r = n(68886)
          , s = n(96933)
          , i = n(60503)
          , d = n(86849)
          , _ = (0,
        r.K)("plugin");
        function o(e) {
            return _.get(e, "state", {}, !0)
        }
        function u(e, t) {
            for (var n, r = [], d = null, _ = e[a.W2](); _; ) {
                var u = _[a.TO]();
                if (u) {
                    d && (0,
                    s.mf)(d[a.Jd]) && (0,
                    s.mf)(u[i.hL]) && d[a.Jd](u);
                    ((0,
                    s.mf)(u[a.yl]) ? u[a.yl]() : (n = o(u))[a.yl]) || r[a.MW](u),
                    d = u,
                    _ = _[a.W2]()
                }
            }
            (0,
            s.tO)(r, (function(r) {
                var s = e[i.oV]();
                r[a.VL](e.getCfg(), s, t, e[a.W2]()),
                n = o(r),
                r[i.oV] || n[i.oV] || (n[i.oV] = s),
                n[a.yl] = !0,
                delete n[a.fi]
            }
            ))
        }
        function m(e) {
            return e.sort((function(e, t) {
                var n = 0;
                if (t) {
                    var a = (0,
                    s.mf)(t[i.hL]);
                    (0,
                    s.mf)(e[i.hL]) ? n = a ? e[i.yi] - t[i.yi] : 1 : a && (n = -1)
                } else
                    n = e ? 1 : -1;
                return n
            }
            ))
        }
        function l(e) {
            var t = {};
            return {
                getName: function() {
                    return t[a.I]
                },
                setName: function(n) {
                    e && e.setName(n),
                    t[a.I] = n
                },
                getTraceId: function() {
                    return t[a.nY]
                },
                setTraceId: function(n) {
                    e && e.setTraceId(n),
                    (0,
                    d.jN)(n) && (t[a.nY] = n)
                },
                getSpanId: function() {
                    return t[a._d]
                },
                setSpanId: function(n) {
                    e && e.setSpanId(n),
                    (0,
                    d.Lc)(n) && (t[a._d] = n)
                },
                getTraceFlags: function() {
                    return t[a.T0]
                },
                setTraceFlags: function(n) {
                    e && e.setTraceFlags(n),
                    t[a.T0] = n
                }
            }
        }
    }
    ,
    10780: (e,t,n)=>{
        "use strict";
        n.d(t, {
            R: ()=>m
        });
        var a = n(49577)
          , r = n(86948)
          , s = n(70390)
          , i = n(63143)
          , d = n(55028)
          , _ = n(28185)
          , o = n(96933)
          , u = n(60503)
          , m = function(e) {
            function t() {
                var n, a, i = e.call(this) || this;
                function m() {
                    n = 0,
                    a = []
                }
                return i.identifier = "TelemetryInitializerPlugin",
                i.priority = 199,
                m(),
                (0,
                r.Z)(t, i, (function(e, t) {
                    e.addTelemetryInitializer = function(e) {
                        var t = {
                            id: n++,
                            fn: e
                        };
                        return a[s.MW](t),
                        {
                            remove: function() {
                                (0,
                                o.tO)(a, (function(e, n) {
                                    if (e.id === t.id)
                                        return a[s.cb](n, 1),
                                        -1
                                }
                                ))
                            }
                        }
                    }
                    ,
                    e[u.hL] = function(t, n) {
                        for (var r = !1, i = a[s.R5], u = 0; u < i; ++u) {
                            var m = a[u];
                            if (m)
                                try {
                                    if (!1 === m.fn[s.ZV](null, [t])) {
                                        r = !0;
                                        break
                                    }
                                } catch (e) {
                                    (0,
                                    d.kP)(n[s.mc](), 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + (0,
                                    o.jj)(e), {
                                        exception: (0,
                                        _.eU)(e)
                                    }, !0)
                                }
                        }
                        r || e[s.uL](t, n)
                    }
                    ,
                    e[s.F3] = function() {
                        m()
                    }
                }
                )),
                i
            }
            return (0,
            a.ne)(t, e),
            t.__ieDyn = 1,
            t
        }(i.i)
    }
    ,
    90130: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Y: ()=>d
        });
        var a = n(70390)
          , r = n(55028)
          , s = n(28185)
          , i = n(96933);
        function d() {
            var e = [];
            return {
                add: function(t) {
                    t && e[a.MW](t)
                },
                run: function(t, n) {
                    (0,
                    i.tO)(e, (function(e) {
                        try {
                            e(t, n)
                        } catch (e) {
                            (0,
                            r.kP)(t[a.mc](), 2, 73, "Unexpected error calling unload handler - " + (0,
                            s.eU)(e))
                        }
                    }
                    )),
                    e = []
                }
            }
        }
    }
    ,
    86849: (e,t,n)=>{
        "use strict";
        n.d(t, {
            J6: ()=>p,
            Lc: ()=>f,
            Pn: ()=>k,
            SU: ()=>h,
            aR: ()=>D,
            jN: ()=>Y,
            j_: ()=>y,
            lq: ()=>T
        });
        var a = n(70390)
          , r = n(10112)
          , s = n(28185)
          , i = n(96933)
          , d = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]*)?$/
          , _ = "00"
          , o = "ff"
          , u = "00000000000000000000000000000000"
          , m = "0000000000000000"
          , l = 1;
        function c(e, t, n) {
            return !(!e || e[a.R5] !== t || e === n) && !!e.match(/^[\da-f]*$/)
        }
        function M(e, t, n) {
            return c(e, t) ? e : n
        }
        function L(e) {
            (isNaN(e) || e < 0 || e > 255) && (e = 1);
            for (var t = e.toString(16); t[a.R5] < 2; )
                t = "0" + t;
            return t
        }
        function h(e, t, n, s) {
            var i;
            return (i = {})[a.PA] = c(s, 2, o) ? s : _,
            i[a.nY] = Y(e) ? e : (0,
            r.DO)(),
            i.spanId = f(t) ? t : (0,
            r.DO)()[a.Jn](0, 16),
            i.traceFlags = n >= 0 && n <= 255 ? n : 1,
            i
        }
        function y(e) {
            var t;
            if (!e)
                return null;
            if ((0,
            i.kJ)(e) && (e = e[0] || ""),
            !e || !(0,
            i.HD)(e) || e[a.R5] > 8192)
                return null;
            var n = d.exec((0,
            i.nd)(e));
            return n && n[1] !== o && n[2] !== u && n[3] !== m ? ((t = {})[a.PA] = n[1],
            t[a.nY] = n[2],
            t[a._d] = n[3],
            t[a.T0] = parseInt(n[4], 16),
            t) : null
        }
        function Y(e) {
            return c(e, 32, u)
        }
        function f(e) {
            return c(e, 16, m)
        }
        function p(e) {
            return !!(e && c(e[a.PA], 2, o) && c(e[a.nY], 32, u) && c(e[a._d], 16, m) && c(L(e[a.T0]), 2))
        }
        function k(e) {
            return !!p(e) && (e[a.T0] & l) === l
        }
        function D(e) {
            if (e) {
                var t = L(e[a.T0]);
                c(t, 2) || (t = "01");
                var n = e[a.PA] || _;
                return "00" !== n && "ff" !== n && (n = _),
                "".concat(n, "-").concat(M(e.traceId, 32, u), "-").concat(M(e.spanId, 16, m), "-").concat(t)
            }
            return ""
        }
        function T() {
            var e = "traceparent"
              , t = y((0,
            s.ed)(e));
            return t || (t = y((0,
            s.pI)(e))),
            t
        }
    }
    ,
    70390: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $h: ()=>I,
            F3: ()=>b,
            Fc: ()=>f,
            Fr: ()=>U,
            Gc: ()=>v,
            I: ()=>r,
            Jd: ()=>x,
            Jn: ()=>C,
            Km: ()=>ee,
            Kn: ()=>Z,
            LS: ()=>Y,
            Lk: ()=>A,
            MW: ()=>d,
            P6: ()=>K,
            PA: ()=>re,
            PL: ()=>$,
            R5: ()=>l,
            SD: ()=>L,
            T: ()=>Q,
            T0: ()=>ae,
            T1: ()=>B,
            TC: ()=>o,
            TO: ()=>p,
            Tu: ()=>H,
            VL: ()=>a,
            W2: ()=>j,
            ZV: ()=>R,
            Z_: ()=>c,
            _S: ()=>q,
            _d: ()=>ne,
            cb: ()=>T,
            d: ()=>S,
            dE: ()=>G,
            eZ: ()=>m,
            fi: ()=>g,
            g: ()=>h,
            gU: ()=>w,
            i7: ()=>N,
            iC: ()=>D,
            jk: ()=>V,
            kL: ()=>k,
            mc: ()=>E,
            n7: ()=>y,
            nY: ()=>te,
            ou: ()=>O,
            p$: ()=>u,
            pZ: ()=>i,
            qV: ()=>F,
            tb: ()=>s,
            uL: ()=>M,
            w6: ()=>z,
            wu: ()=>X,
            xv: ()=>J,
            yl: ()=>_,
            zV: ()=>P,
            zc: ()=>W
        });
        var a = "initialize"
          , r = "name"
          , s = "getNotifyMgr"
          , i = "identifier"
          , d = "push"
          , _ = "isInitialized"
          , o = "config"
          , u = "instrumentationKey"
          , m = "logger"
          , l = "length"
          , c = "time"
          , M = "processNext"
          , L = "getProcessTelContext"
          , h = "addNotificationListener"
          , y = "removeNotificationListener"
          , Y = "stopPollingInternalLogs"
          , f = "onComplete"
          , p = "getPlugin"
          , k = "flush"
          , D = "_extensions"
          , T = "splice"
          , g = "teardown"
          , v = "messageId"
          , w = "message"
          , S = "isAsync"
          , b = "_doTeardown"
          , H = "update"
          , j = "getNext"
          , E = "diagLog"
          , x = "setNextPlugin"
          , P = "createNew"
          , A = "cookieCfg"
          , O = "indexOf"
          , W = "substring"
          , F = "userAgent"
          , z = "split"
          , I = "setEnabled"
          , N = "replace"
          , C = "substr"
          , J = "nodeType"
          , R = "apply"
          , U = "enableDebugExceptions"
          , V = "logInternalMessage"
          , B = "toLowerCase"
          , q = "call"
          , K = "type"
          , Z = "handler"
          , G = "listeners"
          , $ = "isChildEvt"
          , Q = "getCtx"
          , X = "setCtx"
          , ee = "complete"
          , te = "traceId"
          , ne = "spanId"
          , ae = "traceFlags"
          , re = "version"
    }
    ,
    39312: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        var a = n(9895);
        const r = function() {
            function e() {
                var t = !0
                  , n = !0
                  , r = !0
                  , s = "use-collector-delta"
                  , i = !1;
                (0,
                a.Z)(e, this, (function(e) {
                    e.allowRequestSending = function() {
                        return t
                    }
                    ,
                    e.firstRequestSent = function() {
                        r && (r = !1,
                        i || (t = !1))
                    }
                    ,
                    e.shouldAddClockSkewHeaders = function() {
                        return n
                    }
                    ,
                    e.getClockSkewHeaderValue = function() {
                        return s
                    }
                    ,
                    e.setClockSkew = function(e) {
                        i || (e ? (s = e,
                        n = !0,
                        i = !0) : n = !1,
                        t = !0)
                    }
                }
                ))
            }
            return e.__ieDyn = 1,
            e
        }()
    }
    ,
    70872: (e,t,n)=>{
        "use strict";
        n.d(t, {
            e2: ()=>s,
            je: ()=>r,
            ow: ()=>a
        });
        var a = "REAL_TIME"
          , r = "NEAR_REAL_TIME"
          , s = "BEST_EFFORT"
    }
    ,
    51281: (e,t,n)=>{
        "use strict";
        n.d(t, {
            l: ()=>_
        });
        var a = n(8823)
          , r = n(96933)
          , s = n(96247);
        function i(e) {
            var t = (e.ext || {}).intweb;
            return t && (0,
            a.Sn)(t[s.fz]) ? t[s.fz] : null
        }
        function d(e) {
            for (var t = null, n = 0; null === t && n < e.length; n++)
                t = i(e[n]);
            return t
        }
        var _ = function() {
            function e(t, n) {
                var a = n ? [].concat(n) : []
                  , s = this
                  , _ = d(a);
                s.iKey = function() {
                    return t
                }
                ,
                s.Msfpc = function() {
                    return _ || ""
                }
                ,
                s.count = function() {
                    return a.length
                }
                ,
                s.events = function() {
                    return a
                }
                ,
                s.addEvent = function(e) {
                    return !!e && (a.push(e),
                    _ || (_ = i(e)),
                    !0)
                }
                ,
                s.split = function(n, s) {
                    var i;
                    if (n < a.length) {
                        var o = a.length - n;
                        (0,
                        r.le)(s) || (o = s < o ? s : o),
                        i = a.splice(n, o),
                        _ = d(a)
                    }
                    return new e(t,i)
                }
            }
            return e.create = function(t, n) {
                return new e(t,n)
            }
            ,
            e
        }()
    }
    ,
    66624: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            BE_PROFILE: ()=>r.e2,
            NRT_PROFILE: ()=>r.je,
            PostChannel: ()=>a.Z,
            RT_PROFILE: ()=>r.ow
        });
        var a = n(42135)
          , r = n(70872)
    }
    ,
    96247: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $W: ()=>s,
            EY: ()=>y,
            E_: ()=>o,
            Fb: ()=>r,
            Ft: ()=>Y,
            Hf: ()=>l,
            IY: ()=>b,
            ME: ()=>m,
            TB: ()=>k,
            V2: ()=>c,
            WA: ()=>d,
            Zv: ()=>v,
            aG: ()=>a,
            cE: ()=>p,
            dG: ()=>g,
            dI: ()=>u,
            fs: ()=>M,
            fz: ()=>w,
            iP: ()=>L,
            iV: ()=>D,
            j9: ()=>T,
            jv: ()=>i,
            kd: ()=>f,
            oW: ()=>h,
            xv: ()=>_,
            zC: ()=>S
        });
        var a = "POST"
          , r = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation"
          , s = "drop"
          , i = "send"
          , d = "requeue"
          , _ = "rspFail"
          , o = "oth"
          , u = "no-cache, no-store"
          , m = "application/x-json-stream"
          , l = "cache-control"
          , c = "content-type"
          , M = "kill-tokens"
          , L = "kill-duration"
          , h = "kill-duration-seconds"
          , y = "time-delta-millis"
          , Y = "client-version"
          , f = "client-id"
          , p = "time-delta-to-apply-millis"
          , k = "upload-time"
          , D = "apikey"
          , T = "AuthMsaDeviceTicket"
          , g = "AuthXToken"
          , v = "NoResponseBody"
          , w = "msfpc"
          , S = "trace"
          , b = "user"
    }
    ,
    6806: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        var a = n(9895)
          , r = n(96933);
        const s = function() {
            function e() {
                var t = {};
                (0,
                a.Z)(e, this, (function(e) {
                    e.setKillSwitchTenants = function(e, n) {
                        if (e && n)
                            try {
                                var a = (d = e.split(","),
                                _ = [],
                                d && (0,
                                r.tO)(d, (function(e) {
                                    _.push((0,
                                    r.nd)(e))
                                }
                                )),
                                _);
                                if ("this-request-only" === n)
                                    return a;
                                for (var s = 1e3 * parseInt(n, 10), i = 0; i < a.length; ++i)
                                    t[a[i]] = (0,
                                    r.m6)() + s
                            } catch (e) {
                                return []
                            }
                        var d, _;
                        return []
                    }
                    ,
                    e.isTenantKilled = function(e) {
                        var n = t
                          , a = (0,
                        r.nd)(e);
                        return void 0 !== n[a] && n[a] > (0,
                        r.m6)() || (delete n[a],
                        !1)
                    }
                }
                ))
            }
            return e.__ieDyn = 1,
            e
        }()
    }
    ,
    99322: (e,t,n)=>{
        "use strict";
        n.d(t, {
            D: ()=>d,
            e: ()=>_
        });
        var a = .8
          , r = 1.2
          , s = 3e3
          , i = 6e5;
        function d(e) {
            return !(e >= 300 && e < 500 && 408 != e && 429 != e || 501 == e || 505 == e)
        }
        function _(e) {
            var t, n = s * a, d = s * r, _ = Math.floor(Math.random() * (d - n)) + n;
            return t = Math.pow(2, e) * _,
            Math.min(t, i)
        }
    }
    ,
    45464: (e,t,n)=>{
        "use strict";
        n.d(t, {
            e: ()=>c
        });
        var a = n(9895)
          , r = n(14270)
          , s = n(96933)
          , i = n(8823)
          , d = n(51281)
          , _ = 2e6
          , o = Math.min(_, 65e3)
          , u = "metadata"
          , m = "f"
          , l = /\./
          , c = function() {
            function e(t, n, u, m) {
                var c = "data"
                  , L = "baseData"
                  , h = !!m
                  , y = n
                  , Y = {};
                (0,
                a.Z)(e, this, (function(e) {
                    function n(e, t, a, r, d, _, o) {
                        (0,
                        s.rW)(e, (function(e, m) {
                            var c = null;
                            if (m || (0,
                            i.Sn)(m)) {
                                var M = a
                                  , L = e
                                  , f = d
                                  , p = t;
                                if (h && !r && l.test(e)) {
                                    var k = e.split(".")
                                      , D = k.length;
                                    if (D > 1) {
                                        f && (f = f.slice());
                                        for (var T = 0; T < D - 1; T++) {
                                            var g = k[T];
                                            p = p[g] = p[g] || {},
                                            M += "." + g,
                                            f && f.push(g)
                                        }
                                        L = k[D - 1]
                                    }
                                }
                                var v = r && function(e, t) {
                                    var n = Y[e];
                                    return void 0 === n && (e.length >= 7 && (n = (0,
                                    s.xe)(e, "ext.metadata") || (0,
                                    s.xe)(e, "ext.web")),
                                    Y[e] = n),
                                    n
                                }(M);
                                if (c = !v && y && y.handleField(M, L) ? y.value(M, L, m, u) : (0,
                                i.yj)(L, m, u)) {
                                    var w = c.value;
                                    if (p[L] = w,
                                    _ && _(f, L, c),
                                    o && "object" == typeof w && !(0,
                                    s.kJ)(w)) {
                                        var S = f;
                                        S && (S = S.slice()).push(L),
                                        n(m, w, M + "." + L, r, S, _, o)
                                    }
                                }
                            }
                        }
                        ))
                    }
                    e.createPayload = function(e, t, n, a, r, s) {
                        return {
                            apiKeys: [],
                            payloadBlob: "",
                            overflow: null,
                            sizeExceed: [],
                            failedEvts: [],
                            batches: [],
                            numEvents: 0,
                            retryCnt: e,
                            isTeardown: t,
                            isSync: n,
                            isBeacon: a,
                            sendType: s,
                            sendReason: r
                        }
                    }
                    ,
                    e.appendPayload = function(n, a, i) {
                        var u = n && a && !n.overflow;
                        return u && (0,
                        r.Lm)(t, (function() {
                            return "Serializer:appendPayload"
                        }
                        ), (function() {
                            for (var t = a.events(), r = n.payloadBlob, u = n.numEvents, m = !1, l = [], c = [], M = n.isBeacon, L = M ? 65e3 : 3984588, h = M ? o : _, y = 0, Y = 0; y < t.length; ) {
                                var f = t[y];
                                if (f) {
                                    if (u >= i) {
                                        n.overflow = a.split(y);
                                        break
                                    }
                                    var p = e.getEventBlob(f);
                                    if (p && p.length <= h) {
                                        var k = p.length;
                                        if (r.length + k > L) {
                                            n.overflow = a.split(y);
                                            break
                                        }
                                        r && (r += "\n"),
                                        r += p,
                                        ++Y > 20 && (r.substr(0, 1),
                                        Y = 0),
                                        m = !0,
                                        u++
                                    } else
                                        p ? l.push(f) : c.push(f),
                                        t.splice(y, 1),
                                        y--
                                }
                                y++
                            }
                            if (l && l.length > 0 && n.sizeExceed.push(d.l.create(a.iKey(), l)),
                            c && c.length > 0 && n.failedEvts.push(d.l.create(a.iKey(), c)),
                            m) {
                                n.batches.push(a),
                                n.payloadBlob = r,
                                n.numEvents = u;
                                var D = a.iKey();
                                -1 === (0,
                                s.UA)(n.apiKeys, D) && n.apiKeys.push(D)
                            }
                        }
                        ), (function() {
                            return {
                                payload: n,
                                theBatch: {
                                    iKey: a.iKey(),
                                    evts: a.events()
                                },
                                max: i
                            }
                        }
                        )),
                        u
                    }
                    ,
                    e.getEventBlob = function(e) {
                        try {
                            return (0,
                            r.Lm)(t, (function() {
                                return "Serializer.getEventBlob"
                            }
                            ), (function() {
                                var t = {};
                                t.name = e.name,
                                t.time = e.time,
                                t.ver = e.ver,
                                t.iKey = "o:" + (0,
                                i.jM)(e.iKey);
                                var a = {}
                                  , r = e.ext;
                                r && (t.ext = a,
                                (0,
                                s.rW)(r, (function(e, t) {
                                    n(t, a[e] = {}, "ext." + e, !0, null, null, !0)
                                }
                                )));
                                var d = t[c] = {};
                                d.baseType = e.baseType;
                                var _ = d[L] = {};
                                return n(e.baseData, _, L, !1, [L], (function(e, t, n) {
                                    M(a, e, t, n)
                                }
                                ), true),
                                n(e.data, d, c, !1, [], (function(e, t, n) {
                                    M(a, e, t, n)
                                }
                                ), true),
                                JSON.stringify(t)
                            }
                            ), (function() {
                                return {
                                    item: e
                                }
                            }
                            ))
                        } catch (e) {
                            return null
                        }
                    }
                }
                ))
            }
            return e.__ieDyn = 1,
            e
        }();
        function M(e, t, n, a) {
            if (a && e) {
                var r = (0,
                i.Vv)(a.value, a.kind, a.propertyType);
                if (r > -1) {
                    var d = e[u];
                    d || (d = e[u] = {
                        f: {}
                    });
                    var _ = d[m];
                    if (_ || (_ = d[m] = {}),
                    t)
                        for (var o = 0; o < t.length; o++) {
                            var l = t[o];
                            _[l] || (_[l] = {
                                f: {}
                            });
                            var c = _[l][m];
                            c || (c = _[l][m] = {}),
                            _ = c
                        }
                    _ = _[n] = {},
                    (0,
                    s.kJ)(a.value) ? _.a = {
                        t: r
                    } : _.t = r
                }
            }
        }
    }
    ,
    92633: (e,t,n)=>{
        "use strict";
        function a(e, t) {
            for (var n = [], a = 2; a < arguments.length; a++)
                n[a - 2] = arguments[a];
            return setTimeout(e, t, n)
        }
        function r(e) {
            clearTimeout(e)
        }
        function s(e, t) {
            return {
                set: e || a,
                clear: t || r
            }
        }
        n.d(t, {
            zG: ()=>s
        })
    }
    ,
    31819: (e,t,n)=>{
        "use strict";
        n.d(t, {
            CY: ()=>c,
            Pw: ()=>_,
            RJ: ()=>l,
            V4: ()=>o,
            bO: ()=>d,
            cb: ()=>a,
            fK: ()=>r,
            hB: ()=>i,
            jA: ()=>s,
            rl: ()=>u,
            yu: ()=>m
        });
        var a = "function"
          , r = "object"
          , s = "undefined"
          , i = "prototype"
          , d = "hasOwnProperty"
          , _ = Object
          , o = _[i]
          , u = _.assign
          , m = _.create
          , l = _.defineProperty
          , c = o[d]
    }
    ,
    52863: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Rd: ()=>s,
            ZU: ()=>i,
            pu: ()=>d
        });
        var a = n(31819)
          , r = null;
        function s(e) {
            return void 0 === e && (e = !0),
            r && e || (typeof globalThis !== a.jA && globalThis && (r = globalThis),
            typeof self !== a.jA && self && (r = self),
            typeof window !== a.jA && window && (r = window),
            typeof n.g !== a.jA && n.g && (r = n.g)),
            r
        }
        function i(e) {
            throw new TypeError(e)
        }
        function d(e) {
            var t = a.yu;
            if (t)
                return t(e);
            if (null == e)
                return {};
            var n = typeof e;
            function r() {}
            return n !== a.fK && n !== a.cb && i("Object prototype may only be an Object:" + e),
            r[a.hB] = e,
            new r
        }
    }
    ,
    49577: (e,t,n)=>{
        "use strict";
        n.d(t, {
            $h: ()=>_,
            ne: ()=>d,
            uc: ()=>s
        });
        var a = n(31819)
          , r = n(52863)
          , s = (((0,
        r.Rd)() || {}).Symbol,
        ((0,
        r.Rd)() || {}).Reflect,
        a.rl || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var s in t = arguments[n])
                    a.V4[a.bO].call(t, s) && (e[s] = t[s]);
            return e
        }
        )
          , i = function(e, t) {
            return i = a.Pw.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t[a.bO](n) && (e[n] = t[n])
            }
            ,
            i(e, t)
        };
        function d(e, t) {
            function n() {
                this.constructor = e
            }
            typeof t !== a.cb && null !== t && (0,
            r.ZU)("Class extends value " + String(t) + " is not a constructor or null"),
            i(e, t),
            e[a.hB] = null === t ? (0,
            r.pu)(t) : (n[a.hB] = t[a.hB],
            new n)
        }
        function _(e, t) {
            for (var n = 0, a = t.length, r = e.length; n < a; n++,
            r++)
                e[r] = t[n];
            return e
        }
    }
    ,
    62465: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FaultType = void 0,
        function(e) {
            e[e.Error = 0] = "Error",
            e[e.User = 1] = "User",
            e[e.Unknown = 2] = "Unknown",
            e[e.NonBlockingFault = 3] = "NonBlockingFault",
            e[e.UserCancelled = 4] = "UserCancelled",
            e[e.ByDesign = 5] = "ByDesign"
        }(t.FaultType || (t.FaultType = {}))
    }
    ,
    33792: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Result = void 0,
        function(e) {
            e[e.Cancel = 0] = "Cancel",
            e[e.Success = 1] = "Success",
            e[e.Failure = 2] = "Failure",
            e[e.UserFailure = 3] = "UserFailure",
            e[e.IndeterminateFailure = 4] = "IndeterminateFailure",
            e[e.NonBlockingFailure = 5] = "NonBlockingFailure",
            e[e.ByDesignFailure = 6] = "ByDesignFailure"
        }(t.Result || (t.Result = {}))
    }
    ,
    86048: function(e, t, n) {
        "use strict";
        var a = this && this.__awaiter || function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, s) {
                function i(e) {
                    try {
                        _(a.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function d(e) {
                    try {
                        _(a.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function _(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, d)
                }
                _((a = a.apply(e, t || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.propagateOffsetMarkTime = t.cleanSensitiveInformation = t.TimedEvent = t.Fault = t.TelemetryEvent = t.Telemetry = t.TelemetryClass = void 0;
        const r = n(11792)
          , s = n(93816)
          , i = n(62465)
          , d = n(23725)
          , _ = n(83730)
          , o = n(33792);
        let u = 0;
        class m {
            constructor() {
                this.onTelemetrySentEmitter = new _.Emitter,
                this.onTelemetrySent = this.onTelemetrySentEmitter.event,
                this.telemetryEvents = {},
                this.filters = [],
                this.telemetryReporters = [],
                this.canSendSensitiveFlag = !1
            }
            get reporters() {
                return this.telemetryReporters
            }
            get canSendSensitiveInformation() {
                return this.canSendSensitiveFlag
            }
            init(e, t, n, a) {
                this.telemetryReporters.push(e),
                this.canSendSensitiveFlag = n,
                d.TelemetryPropertyNames.FEATURE_NAME = t || "",
                a && (c = a),
                this.contextProperties = {},
                this.addContextProperty(d.TelemetryPropertyNames.SESSION_ID, r.v4())
            }
            addReporter(e) {
                this.telemetryReporters.push(e)
            }
            addFilter(e) {
                this.filters.push(e)
            }
            removeFilter(e) {
                const t = this.filters.indexOf(e);
                t >= 0 && this.filters.splice(t, 1)
            }
            updateTelemetryReporterWithCachedData(e, t) {
                for (const n of t)
                    e.sendTelemetryEvent(n.eventName, n.properties, n.measures)
            }
            addContextProperties(e, t=!1) {
                for (const [n,a] of Object.entries(e))
                    this.addContextProperty(n, a, t);
                return this
            }
            addContextProperty(e, t, n=!1) {
                if (void 0 === t)
                    return this;
                const a = String(t);
                return n && !this.canSendSensitiveInformation ? this.contextProperties[e] = s.Privacy.redact(a) : this.contextProperties[e] = a,
                this
            }
            removeContextProperty(e) {
                delete this.contextProperties[e]
            }
            getContextProperty(e) {
                return this.contextProperties[e]
            }
            addContextPropertiesToObject(e) {
                return Object.assign({}, this.contextProperties, e)
            }
            filterAndSendTelemetryEvent(e, t, n, a) {
                if (0 === this.reporters.length)
                    return;
                const r = Object.assign({}, a)
                  , s = this.addContextPropertiesToObject(n);
                for (const t of this.filters)
                    if (!t.shouldSend(e, s, r))
                        return;
                r[d.TelemetryPropertyNames.SEQUENCE_NUMBER] = (u += 1,
                u),
                t({
                    eventName: e,
                    properties: s,
                    measures: r
                }),
                this.onTelemetrySentEmitter.fire({
                    eventName: e,
                    properties: s,
                    measures: r
                })
            }
            iterateAndSendTelemetryEvent(e) {
                return t=>{
                    for (let n in this.reporters) {
                        let a = this.reporters[n];
                        e && e.length > 0 ? a.sendTelemetryErrorEvent(t.eventName, t.properties, t.measures, e) : a.sendTelemetryEvent(t.eventName, t.properties, t.measures)
                    }
                }
            }
            sendTelemetryEvent(e, t, n) {
                const a = this.iterateAndSendTelemetryEvent();
                this.filterAndSendTelemetryEvent(e, a, t, n)
            }
            sendTelemetryErrorEvent(e, t, n, a) {
                const r = this.iterateAndSendTelemetryEvent(a);
                this.filterAndSendTelemetryEvent(e, r, t, n)
            }
            sendFault(e, t, n, a, r) {
                new L(e,t,n,a,r).send()
            }
            startTimedEvent(e, t=!1) {
                const n = new h(e,t);
                return this.telemetryEvents[n.id] = n,
                n
            }
            setCorrelationEvent(e) {
                this.correlationEvent = e
            }
            removeCorrelationEvent(e) {
                this.correlationEvent === e && (this.correlationEvent = void 0)
            }
            correlate(e) {
                this.correlationEvent && e.correlateWith(this.correlationEvent)
            }
            endAllPendingEvents() {
                return a(this, void 0, void 0, (function*() {
                    for (let e of Object.keys(this.telemetryEvents)) {
                        const t = this.telemetryEvents[e];
                        yield t.endIfNotSent(),
                        delete this.telemetryEvents[e]
                    }
                }
                ))
            }
            dispose() {
                return a(this, void 0, void 0, (function*() {
                    for (let e in this.reporters) {
                        let t = this.reporters[e];
                        yield t.dispose()
                    }
                    this.telemetryReporters = []
                }
                ))
            }
        }
        t.TelemetryClass = m;
        const l = new m;
        let c;
        t.Telemetry = l;
        class M {
            constructor(e, t=!1) {
                this.isSent = !1,
                this.id = r.v4(),
                this.eventName = e,
                this.properties = {},
                this.measures = {},
                this.correlationId = r.v4(),
                t && l.correlate(this)
            }
            static create(e, t) {
                const n = !!t && !!t.correlate
                  , a = new M(e,n);
                return t.properties && Object.keys(t.properties).forEach((e=>a.addProperty(d.TelemetryPropertyNames.FEATURE_NAME + e, t.properties[e]))),
                t.measures && Object.keys(t.measures).forEach((e=>a.addMeasure(d.TelemetryPropertyNames.FEATURE_NAME + e, t.measures[e]))),
                a
            }
            addProperty(e, t, n=!1) {
                if (void 0 === t)
                    return this;
                const a = String(t);
                return n && !l.canSendSensitiveInformation ? this.properties[e] = s.Privacy.redact(a) : this.properties[e] = a,
                this
            }
            addProperties(e, t=!0) {
                for (let[n,a] of Object.entries(e))
                    this.addProperty(n, a, t);
                return this
            }
            addPropertyIfNotExists(e, t, n=!1) {
                return this.propertyExists(e) || this.addProperty(e, t, n),
                this
            }
            propertyExists(e) {
                return e in this.properties
            }
            addMeasure(e, t) {
                this.measures[e] = t
            }
            addMeasureIfNotExists(e, t) {
                void 0 === this.measures[e] && this.addMeasure(e, t)
            }
            getCorrelationId() {
                return this.correlationId
            }
            correlateWith(e) {
                return this.correlationId = e.getCorrelationId(),
                this
            }
            correlateWithId(e) {
                return this.correlationId = e,
                this
            }
            addCommonProperties() {
                this.addProperty(d.TelemetryPropertyNames.EVENT_ID, this.id),
                this.addProperty(d.TelemetryPropertyNames.CORRELATION_ID, this.correlationId)
            }
            send() {
                this.addCommonProperties(),
                l.sendTelemetryEvent(this.eventName, this.properties, this.measures),
                this.isSent = !0
            }
            sendAsError(e) {
                this.addCommonProperties(),
                l.sendTelemetryErrorEvent(this.eventName, this.properties, this.measures, e),
                this.isSent = !0
            }
        }
        t.TelemetryEvent = M;
        class L extends M {
            constructor(e, t, n, a, r) {
                super(e),
                this.exception = a,
                this.addProperty(d.TelemetryPropertyNames.FAULT_TYPE, i.FaultType[t]),
                n && this.addProperty(d.TelemetryPropertyNames.EVENT_MESSAGE, y(n));
                let o = "";
                a && a instanceof _.ResponseError && (a.code && "number" == typeof a.code && this.addMeasure(d.TelemetryPropertyNames.EVENT_EXCEPTION_CODE, a.code),
                a.data && "string" == typeof a.data && (o += y(a.data) + "\n   --- End of remote exception stack trace ---\n")),
                a && a.stack && "string" == typeof a.stack && (o += y((0,
                s.errorToString)(a))),
                o || (o = "No Stack"),
                this.addProperty(d.TelemetryPropertyNames.EVENT_EXCEPTION_STACK, o),
                r && this.correlateWith(r)
            }
            send() {
                const e = Object.create(null, {
                    sendAsError: {
                        get: ()=>super.sendAsError
                    }
                });
                return a(this, void 0, void 0, (function*() {
                    let t = [];
                    return c && (t = yield c(this)),
                    e.sendAsError.call(this, [...t, d.TelemetryPropertyNames.EVENT_MESSAGE, d.TelemetryPropertyNames.EVENT_EXCEPTION_STACK])
                }
                ))
            }
        }
        t.Fault = L;
        class h extends M {
            constructor(e, t=!1, n=!1) {
                if (super(e, t),
                this.startTime = (new Date).getTime(),
                this.lastMarkTime = this.startTime,
                h.scopeStack.push(this),
                this.addProperty(d.TelemetryPropertyNames.EVENT_CREATION_TIME, (new Date).toISOString()),
                this.addProperty(d.TelemetryPropertyNames.EVENT_TYPE, d.TelemetryPropertyValues.END),
                n) {
                    const t = new M(e);
                    t.correlateWith(this),
                    t.addProperty(d.TelemetryPropertyNames.EVENT_TYPE, d.TelemetryPropertyValues.START),
                    t.send()
                }
            }
            markTime(e, t=!1) {
                let n = (new Date).getTime()
                  , a = t ? n - this.startTime : n - this.lastMarkTime;
                return this.lastMarkTime = n,
                this.addMeasure(e, a),
                a
            }
            end(e, t, n=!0) {
                this.addProperty(d.TelemetryPropertyNames.EVENT_RESULT, o.Result[e]),
                t && this.addProperty(d.TelemetryPropertyNames.EVENT_MESSAGE, y(t));
                const a = this.markTime(d.TelemetryPropertyNames.EVENT_DURATION, !0);
                l.removeCorrelationEvent(this),
                n && this.send();
                for (let e = h.scopeStack.length - 1; e >= 0; e--)
                    h.scopeStack[e] === this && h.scopeStack.splice(e, 1);
                return a
            }
            endIfNotSent() {
                return a(this, void 0, void 0, (function*() {
                    this.isSent || (yield this.end(o.Result.Cancel, "Completing pending telemetry events."))
                }
                ))
            }
        }
        function y(e) {
            return e ? function(e) {
                return e.replace(/[\S]+@[\S]+/gi, "[EMAIL]")
            }(function(e, t="") {
                return e.replace(/([A-Za-z]:)?(\S*[\\\/])+\S*/gi, ((e,n,a,r,s)=>{
                    if (/^\d{1,4}\/\d{1,2}\/\d{1,4}$/.test(e))
                        return e;
                    {
                        const r = (n ? n.length : 0) + a.length
                          , s = e.substr(r);
                        return t + s
                    }
                }
                ))
            }(e, "[PATH]/")) : e
        }
        t.TimedEvent = h,
        h.scopeStack = [],
        t.cleanSensitiveInformation = y;
        t.propagateOffsetMarkTime = (e,t)=>{
            for (let n = 0; n < h.scopeStack.length; n++) {
                const a = h.scopeStack[n];
                a !== t && a.markTime(e)
            }
        }
    },
    87132: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SamplingFilter = t.SendOnceFilter = void 0;
        const a = n(23725);
        t.SendOnceFilter = class {
            constructor(e, t=[]) {
                this.eventName = e,
                this.distinctProperties = t,
                this.sentEventsProperties = []
            }
            shouldSend(e, t, n) {
                if (e === this.eventName) {
                    for (const e of this.sentEventsProperties)
                        if (this.propertySubsetsEqual(t, e))
                            return !1;
                    this.sentEventsProperties.push(this.createPropertySubset(t))
                }
                return !0
            }
            reset() {
                this.sentEventsProperties = []
            }
            createPropertySubset(e) {
                const t = {};
                for (const n of this.distinctProperties)
                    t[n] = e[n];
                return t
            }
            propertySubsetsEqual(e, t) {
                for (const n of this.distinctProperties)
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }
        }
        ;
        t.SamplingFilter = class {
            constructor(e) {
                this.samplingConfig = e
            }
            shouldSend(e, t, n) {
                if (!e)
                    return !0;
                const r = this.samplingConfig[e];
                if ("number" == typeof r && !isNaN(r)) {
                    if (0 === r || Math.random() * r > 1)
                        return !1;
                    n[a.TelemetryPropertyNames.SAMPLE_RATE] = r
                }
                return !0
            }
        }
    }
    ,
    23725: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TelemetryPropertyValues = t.TelemetryPropertyNames = void 0;
        class n {
            static get FAULT_TYPE() {
                return n.FEATURE_NAME + "FaultType"
            }
            static get EVENT_ID() {
                return n.FEATURE_NAME + "EventId"
            }
            static get CORRELATION_ID() {
                return n.FEATURE_NAME + "CorrelationId"
            }
            static get LOG_LINES() {
                return n.FEATURE_NAME + "LogLines"
            }
            static get EVENT_MESSAGE() {
                return n.FEATURE_NAME + "Message"
            }
            static get EVENT_EXCEPTION_STACK() {
                return n.FEATURE_NAME + "ExceptionStack"
            }
            static get EVENT_RESULT() {
                return n.FEATURE_NAME + "Result"
            }
            static get EVENT_TYPE() {
                return n.FEATURE_NAME + "Type"
            }
            static get EVENT_DURATION() {
                return n.FEATURE_NAME + "Duration"
            }
            static get EVENT_CREATION_TIME() {
                return n.FEATURE_NAME + "CreationTime"
            }
            static get SESSION_ID() {
                return n.FEATURE_NAME + "SessionId"
            }
            static get EVENT_EXCEPTION_CODE() {
                return n.FEATURE_NAME + "ExceptionCode"
            }
            static get SAMPLE_RATE() {
                return n.FEATURE_NAME + "SampleRate"
            }
            static get SEQUENCE_NUMBER() {
                return n.FEATURE_NAME + "SequenceNumber"
            }
        }
        t.TelemetryPropertyNames = n,
        n.FEATURE_NAME = "liveshare.";
        class a {
        }
        t.TelemetryPropertyValues = a,
        a.START = "start",
        a.END = "end"
    }
    ,
    1009: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    ss: "%d sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    23739: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
              , n = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , a = function(e) {
                return function(a, r, s, i) {
                    var d = t(a)
                      , _ = n[e][t(a)];
                    return 2 === d && (_ = _[r ? 0 : 1]),
                    _.replace(/%d/i, a)
                }
            }
              , r = ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar-dz", {
                months: r,
                monthsShort: r,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: a("s"),
                    ss: a("s"),
                    m: a("m"),
                    mm: a("m"),
                    h: a("h"),
                    hh: a("h"),
                    d: a("d"),
                    dd: a("d"),
                    M: a("M"),
                    MM: a("M"),
                    y: a("y"),
                    yy: a("y")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(n(61320))
    },
    93745: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            })
        }(n(61320))
    },
    99576: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            }
              , n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
              , a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , r = function(e) {
                return function(t, r, s, i) {
                    var d = n(t)
                      , _ = a[e][n(t)];
                    return 2 === d && (_ = _[r ? 0 : 1]),
                    _.replace(/%d/i, t)
                }
            }
              , s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar-ly", {
                months: s,
                monthsShort: s,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: r("s"),
                    ss: r("s"),
                    m: r("m"),
                    mm: r("m"),
                    h: r("h"),
                    hh: r("h"),
                    d: r("d"),
                    dd: r("d"),
                    M: r("M"),
                    MM: r("M"),
                    y: r("y"),
                    yy: r("y")
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(61320))
    },
    67408: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    48781: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
            e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    87856: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    ss: "%d ثانية",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    88769: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
              , a = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
              , r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
              , s = function(e) {
                return function(t, n, s, i) {
                    var d = a(t)
                      , _ = r[e][a(t)];
                    return 2 === d && (_ = _[n ? 0 : 1]),
                    _.replace(/%d/i, t)
                }
            }
              , i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
            e.defineLocale("ar", {
                months: i,
                monthsShort: i,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: s("s"),
                    ss: s("s"),
                    m: s("m"),
                    mm: s("m"),
                    h: s("h"),
                    hh: s("h"),
                    d: s("d"),
                    dd: s("d"),
                    M: s("M"),
                    MM: s("M"),
                    y: s("y"),
                    yy: s("y")
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(61320))
    },
    2030: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            };
            e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "bir neçə saniyə",
                    ss: "%d saniyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e)
                        return e + "-ıncı";
                    var n = e % 10
                      , a = e % 100 - n
                      , r = e >= 100 ? 100 : null;
                    return e + (t[n] || t[a] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    56476: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, a) {
                return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t({
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                }[a], +e)
            }
            e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    25304: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Миналата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Миналия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    ss: "%d секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    w: "седмица",
                    ww: "%d седмици",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10
                      , n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    48125: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("bm", {
                months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
                monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
                weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
                weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "MMMM [tile] D [san] YYYY",
                    LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                    LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
                },
                calendar: {
                    sameDay: "[Bi lɛrɛ] LT",
                    nextDay: "[Sini lɛrɛ] LT",
                    nextWeek: "dddd [don lɛrɛ] LT",
                    lastDay: "[Kunu lɛrɛ] LT",
                    lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s kɔnɔ",
                    past: "a bɛ %s bɔ",
                    s: "sanga dama dama",
                    ss: "sekondi %d",
                    m: "miniti kelen",
                    mm: "miniti %d",
                    h: "lɛrɛ kelen",
                    hh: "lɛrɛ %d",
                    d: "tile kelen",
                    dd: "tile %d",
                    M: "kalo kelen",
                    MM: "kalo %d",
                    y: "san kelen",
                    yy: "san %d"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    29835: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
              , n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
            e.defineLocale("bn-bd", {
                months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "রাত" === t ? e < 4 ? e : e + 12 : "ভোর" === t || "সকাল" === t ? e : "দুপুর" === t ? e >= 3 ? e : e + 12 : "বিকাল" === t || "সন্ধ্যা" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "রাত" : e < 6 ? "ভোর" : e < 12 ? "সকাল" : e < 15 ? "দুপুর" : e < 18 ? "বিকাল" : e < 20 ? "সন্ধ্যা" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    34: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
              , n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            };
            e.defineLocale("bn", {
                months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    ss: "%d সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    64082: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            }
              , n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            };
            e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
                monthsShortRegex: /^(ཟླ་\d{1,2})/,
                monthsParseExact: !0,
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    ss: "%d སྐར་ཆ།",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    8317: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n) {
                return e + " " + r({
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                }[n], e)
            }
            function n(e) {
                switch (a(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + " bloaz";
                default:
                    return e + " vloaz"
                }
            }
            function a(e) {
                return e > 9 ? a(e % 10) : e
            }
            function r(e, t) {
                return 2 === t ? s(e) : e
            }
            function s(e) {
                var t = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
            }
            var i = [/^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i]
              , d = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
              , _ = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i
              , o = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i
              , u = [/^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i]
              , m = [/^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i]
              , l = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
            e.defineLocale("br", {
                months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParse: l,
                fullWeekdaysParse: u,
                shortWeekdaysParse: m,
                minWeekdaysParse: l,
                monthsRegex: d,
                monthsShortRegex: d,
                monthsStrictRegex: _,
                monthsShortStrictRegex: o,
                monthsParse: i,
                longMonthsParse: i,
                shortMonthsParse: i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY HH:mm",
                    LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warcʼhoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Decʼh da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s ʼzo",
                    s: "un nebeud segondennoù",
                    ss: "%d eilenn",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    return e + (1 === e ? "añ" : "vet")
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /a.m.|g.m./,
                isPM: function(e) {
                    return "g.m." === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "a.m." : "g.m."
                }
            })
        }(n(61320))
    },
    37982: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                case "ss":
                    return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    68272: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    ss: "%d segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"),
                    e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    98567: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                format: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
                standalone: "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split("_")
            }
              , n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
              , a = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i]
              , r = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
            function s(e) {
                return e > 1 && e < 5 && 1 != ~~(e / 10)
            }
            function i(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                case "s":
                    return t || a ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || a ? r + (s(e) ? "sekundy" : "sekund") : r + "sekundami";
                case "m":
                    return t ? "minuta" : a ? "minutu" : "minutou";
                case "mm":
                    return t || a ? r + (s(e) ? "minuty" : "minut") : r + "minutami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? r + (s(e) ? "hodiny" : "hodin") : r + "hodinami";
                case "d":
                    return t || a ? "den" : "dnem";
                case "dd":
                    return t || a ? r + (s(e) ? "dny" : "dní") : r + "dny";
                case "M":
                    return t || a ? "měsíc" : "měsícem";
                case "MM":
                    return t || a ? r + (s(e) ? "měsíce" : "měsíců") : r + "měsíci";
                case "y":
                    return t || a ? "rok" : "rokem";
                case "yy":
                    return t || a ? r + (s(e) ? "roky" : "let") : r + "lety"
                }
            }
            e.defineLocale("cs", {
                months: t,
                monthsShort: n,
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
                monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: i,
                    ss: i,
                    m: i,
                    mm: i,
                    h: i,
                    hh: i,
                    d: i,
                    dd: i,
                    M: i,
                    MM: i,
                    y: i,
                    yy: i
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    61583: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    ss: "%d ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    10076: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    ss: "%d eiliad",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = "";
                    return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
                    e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    31760: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    ss: "%d sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    63214: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    74728: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    8973: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    w: ["eine Woche", "einer Woche"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? r[n][0] : r[n][1]
            }
            e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    ss: "%d Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    w: t,
                    ww: "%d Wochen",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    54053: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
              , n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
            e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(e) {
                    return "މފ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    ss: "d% ސިކުންތު",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            })
        }(n(61320))
    },
    7499: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e) {
                return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        return 6 === this.day() ? "[το προηγούμενο] dddd [{}] LT" : "[την προηγούμενη] dddd [{}] LT"
                    },
                    sameElse: "L"
                },
                calendar: function(e, n) {
                    var a = this._calendarEl[e]
                      , r = n && n.hours();
                    return t(a) && (a = a.apply(n)),
                    a.replace("{}", r % 12 == 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    ss: "%d δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    67876: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            })
        }(n(61320))
    },
    47010: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            })
        }(n(61320))
    },
    34239: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    99830: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    28438: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-il", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            })
        }(n(61320))
    },
    25322: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-in", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    43264: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    55449: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("en-sg", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    39486: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "[la] D[-an de] MMMM, YYYY",
                    LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
                    LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
                    llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd[n je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasintan] dddd[n je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "kelkaj sekundoj",
                    ss: "%d sekundoj",
                    m: "unu minuto",
                    mm: "%d minutoj",
                    h: "unu horo",
                    hh: "%d horoj",
                    d: "unu tago",
                    dd: "%d tagoj",
                    M: "unu monato",
                    MM: "%d monatoj",
                    y: "unu jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    16310: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    27038: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es-mx", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 4
                },
                invalidDate: "Fecha inválida"
            })
        }(n(61320))
    },
    73099: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es-us", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "MM/DD/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    32430: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
              , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
              , a = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
              , r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
            e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    w: "una semana",
                    ww: "%d semanas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                },
                invalidDate: "Fecha inválida"
            })
        }(n(61320))
    },
    34975: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    ss: [e + "sekundi", e + "sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? r[n][2] ? r[n][2] : r[n][1] : a ? r[n][0] : r[n][1]
            }
            e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    87063: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    ss: "%d segundo",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    68073: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            }
              , n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
            e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    ss: "%d ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, (function(e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(61320))
    },
    50957: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
              , n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
            function a(e, t, n, a) {
                var s = "";
                switch (n) {
                case "s":
                    return a ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    s = a ? "sekunnin" : "sekuntia";
                    break;
                case "m":
                    return a ? "minuutin" : "minuutti";
                case "mm":
                    s = a ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return a ? "tunnin" : "tunti";
                case "hh":
                    s = a ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return a ? "päivän" : "päivä";
                case "dd":
                    s = a ? "päivän" : "päivää";
                    break;
                case "M":
                    return a ? "kuukauden" : "kuukausi";
                case "MM":
                    s = a ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return a ? "vuoden" : "vuosi";
                case "yy":
                    s = a ? "vuoden" : "vuotta"
                }
                return s = r(e, a) + " " + s
            }
            function r(e, a) {
                return e < 10 ? a ? n[e] : t[e] : e
            }
            e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    8764: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("fil", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    81775: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    ss: "%d sekundir",
                    m: "ein minuttur",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaður",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    14306: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                    }
                }
            })
        }(n(61320))
    },
    73791: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    74179: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
              , n = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i
              , a = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
              , r = [/^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i];
            e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsRegex: a,
                monthsShortRegex: a,
                monthsStrictRegex: t,
                monthsShortStrictRegex: n,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    ss: "%d secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    w: "une semaine",
                    ww: "%d semaines",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    47014: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
              , n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
            e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    ss: "%d sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    46911: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig"]
              , n = ["Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll"]
              , a = ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn"]
              , r = ["Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath"]
              , s = ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"];
            e.defineLocale("ga", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Inniu ag] LT",
                    nextDay: "[Amárach ag] LT",
                    nextWeek: "dddd [ag] LT",
                    lastDay: "[Inné ag] LT",
                    lastWeek: "dddd [seo caite] [ag] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i %s",
                    past: "%s ó shin",
                    s: "cúpla soicind",
                    ss: "%d soicind",
                    m: "nóiméad",
                    mm: "%d nóiméad",
                    h: "uair an chloig",
                    hh: "%d uair an chloig",
                    d: "lá",
                    dd: "%d lá",
                    M: "mí",
                    MM: "%d míonna",
                    y: "bliain",
                    yy: "%d bliain"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    62958: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
              , n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"]
              , a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
              , r = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"]
              , s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
            e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: a,
                weekdaysShort: r,
                weekdaysMin: s,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    ss: "%d diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    87344: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    ss: "%d segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    33161: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
                    ss: [e + " सॅकंडांनी", e + " सॅकंड"],
                    m: ["एका मिणटान", "एक मिनूट"],
                    mm: [e + " मिणटांनी", e + " मिणटां"],
                    h: ["एका वरान", "एक वर"],
                    hh: [e + " वरांनी", e + " वरां"],
                    d: ["एका दिसान", "एक दीस"],
                    dd: [e + " दिसांनी", e + " दीस"],
                    M: ["एका म्हयन्यान", "एक म्हयनो"],
                    MM: [e + " म्हयन्यानी", e + " म्हयने"],
                    y: ["एका वर्सान", "एक वर्स"],
                    yy: [e + " वर्सांनी", e + " वर्सां"]
                };
                return a ? r[n][0] : r[n][1]
            }
            e.defineLocale("gom-deva", {
                months: {
                    standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                    format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
                weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
                weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [वाजतां]",
                    LTS: "A h:mm:ss [वाजतां]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [वाजतां]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
                    llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
                },
                calendar: {
                    sameDay: "[आयज] LT",
                    nextDay: "[फाल्यां] LT",
                    nextWeek: "[फुडलो] dddd[,] LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[फाटलो] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s आदीं",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
                ordinal: function(e, t) {
                    return "D" === t ? e + "वेर" : e
                },
                week: {
                    dow: 0,
                    doy: 3
                },
                meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "राती" === t ? e < 4 ? e : e + 12 : "सकाळीं" === t ? e : "दनपारां" === t ? e > 12 ? e : e + 12 : "सांजे" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "राती" : e < 12 ? "सकाळीं" : e < 16 ? "दनपारां" : e < 20 ? "सांजे" : "राती"
                }
            })
        }(n(61320))
    },
    35798: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    s: ["thoddea sekondamni", "thodde sekond"],
                    ss: [e + " sekondamni", e + " sekond"],
                    m: ["eka mintan", "ek minut"],
                    mm: [e + " mintamni", e + " mintam"],
                    h: ["eka voran", "ek vor"],
                    hh: [e + " voramni", e + " voram"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disamni", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineamni", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsamni", e + " vorsam"]
                };
                return a ? r[n][0] : r[n][1]
            }
            e.defineLocale("gom-latn", {
                months: {
                    standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                    format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
                    isFormat: /MMMM(\s)+D[oD]?/
                },
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Fuddlo] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fattlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function(e, t) {
                    return "D" === t ? e + "er" : e
                },
                week: {
                    dow: 0,
                    doy: 3
                },
                meridiemParse: /rati|sokallim|donparam|sanje/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "rati" === t ? e < 4 ? e : e + 12 : "sokallim" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "rati" : e < 12 ? "sokallim" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            })
        }(n(61320))
    },
    68485: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "૧",
                2: "૨",
                3: "૩",
                4: "૪",
                5: "૫",
                6: "૬",
                7: "૭",
                8: "૮",
                9: "૯",
                0: "૦"
            }
              , n = {
                "૧": "1",
                "૨": "2",
                "૩": "3",
                "૪": "4",
                "૫": "5",
                "૬": "6",
                "૭": "7",
                "૮": "8",
                "૯": "9",
                "૦": "0"
            };
            e.defineLocale("gu", {
                months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
                monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
                monthsParseExact: !0,
                weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
                weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
                weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
                longDateFormat: {
                    LT: "A h:mm વાગ્યે",
                    LTS: "A h:mm:ss વાગ્યે",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                    LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
                },
                calendar: {
                    sameDay: "[આજ] LT",
                    nextDay: "[કાલે] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ગઇકાલે] LT",
                    lastWeek: "[પાછલા] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s મા",
                    past: "%s પહેલા",
                    s: "અમુક પળો",
                    ss: "%d સેકંડ",
                    m: "એક મિનિટ",
                    mm: "%d મિનિટ",
                    h: "એક કલાક",
                    hh: "%d કલાક",
                    d: "એક દિવસ",
                    dd: "%d દિવસ",
                    M: "એક મહિનો",
                    MM: "%d મહિનો",
                    y: "એક વર્ષ",
                    yy: "%d વર્ષ"
                },
                preparse: function(e) {
                    return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    27917: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    ss: "%d שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            })
        }(n(61320))
    },
    52159: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            }
              , a = [/^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i]
              , r = [/^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i];
            e.defineLocale("hi", {
                months: {
                    format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                    standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
                },
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: r,
                monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
                monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
                monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    ss: "%d सेकंड",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    95842: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n) {
                var a = e + " ";
                switch (n) {
                case "ss":
                    return a += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return a += 1 === e ? "dan" : "dana";
                case "MM":
                    return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM YYYY",
                    LLL: "Do MMMM YYYY H:mm",
                    LLLL: "dddd, Do MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[prošlu] [nedjelju] [u] LT";
                        case 3:
                            return "[prošlu] [srijedu] [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    30005: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
            function n(e, t, n, a) {
                var r = e;
                switch (n) {
                case "s":
                    return a || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return r + (a || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (a || t ? " perc" : " perce");
                case "mm":
                    return r + (a || t ? " perc" : " perce");
                case "h":
                    return "egy" + (a || t ? " óra" : " órája");
                case "hh":
                    return r + (a || t ? " óra" : " órája");
                case "d":
                    return "egy" + (a || t ? " nap" : " napja");
                case "dd":
                    return r + (a || t ? " nap" : " napja");
                case "M":
                    return "egy" + (a || t ? " hónap" : " hónapja");
                case "MM":
                    return r + (a || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (a || t ? " év" : " éve");
                case "yy":
                    return r + (a || t ? " év" : " éve")
                }
                return ""
            }
            function a(e) {
                return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
            }
            e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return a.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return a.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    51312: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    ss: "%d վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    60781: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    ss: "%d detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    64101: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e) {
                return e % 100 == 11 || e % 10 != 1
            }
            function n(e, n, a, r) {
                var s = e + " ";
                switch (a) {
                case "s":
                    return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? s + (n || r ? "sekúndur" : "sekúndum") : s + "sekúnda";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? s + (n || r ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return t(e) ? s + (n || r ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return n ? "dagur" : r ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? s + "dagar" : s + (r ? "daga" : "dögum") : n ? s + "dagur" : s + (r ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : r ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? n ? s + "mánuðir" : s + (r ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (r ? "mánuð" : "mánuði");
                case "y":
                    return n || r ? "ár" : "ári";
                case "yy":
                    return t(e) ? s + (n || r ? "ár" : "árum") : s + (n || r ? "ár" : "ári")
                }
            }
            e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    ss: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    4759: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("it-ch", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        return 0 === this.day() ? "[la scorsa] dddd [alle] LT" : "[lo scorso] dddd [alle] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    43467: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[Oggi a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextDay: function() {
                        return "[Domani a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    nextWeek: function() {
                        return "dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastDay: function() {
                        return "[Ieri a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    lastWeek: function() {
                        return 0 === this.day() ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") + "]LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "tra %s",
                    past: "%s fa",
                    s: "alcuni secondi",
                    ss: "%d secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    w: "una settimana",
                    ww: "%d settimane",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    44164: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ja", {
                eras: [{
                    since: "2019-05-01",
                    offset: 1,
                    name: "令和",
                    narrow: "㋿",
                    abbr: "R"
                }, {
                    since: "1989-01-08",
                    until: "2019-04-30",
                    offset: 1,
                    name: "平成",
                    narrow: "㍻",
                    abbr: "H"
                }, {
                    since: "1926-12-25",
                    until: "1989-01-07",
                    offset: 1,
                    name: "昭和",
                    narrow: "㍼",
                    abbr: "S"
                }, {
                    since: "1912-07-30",
                    until: "1926-12-24",
                    offset: 1,
                    name: "大正",
                    narrow: "㍽",
                    abbr: "T"
                }, {
                    since: "1873-01-01",
                    until: "1912-07-29",
                    offset: 6,
                    name: "明治",
                    narrow: "㍾",
                    abbr: "M"
                }, {
                    since: "0001-01-01",
                    until: "1873-12-31",
                    offset: 1,
                    name: "西暦",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -1 / 0,
                    offset: 1,
                    name: "紀元前",
                    narrow: "BC",
                    abbr: "BC"
                }],
                eraYearOrdinalRegex: /(元|\d+)年/,
                eraYearOrdinalParse: function(e, t) {
                    return "元" === t[1] ? 1 : parseInt(t[1] || e, 10)
                },
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 dddd HH:mm",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日(ddd) HH:mm"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: function(e) {
                        return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT"
                    },
                    lastDay: "[昨日] LT",
                    lastWeek: function(e) {
                        return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "y":
                        return 1 === e ? "元年" : e + "年";
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    ss: "%d秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            })
        }(n(61320))
    },
    70079: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    ss: "%d detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    57036: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ka", {
                months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function(e, t, n) {
                            return "ი" === n ? t + "ში" : t + n + "ში"
                        }
                        ))
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : e
                    },
                    s: "რამდენიმე წამი",
                    ss: "%d წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    92022: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            };
            e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    ss: "%d секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(e) {
                    var n = e % 10
                      , a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    63418: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "១",
                2: "២",
                3: "៣",
                4: "៤",
                5: "៥",
                6: "៦",
                7: "៧",
                8: "៨",
                9: "៩",
                0: "០"
            }
              , n = {
                "១": "1",
                "២": "2",
                "៣": "3",
                "៤": "4",
                "៥": "5",
                "៦": "6",
                "៧": "7",
                "៨": "8",
                "៩": "9",
                "០": "0"
            };
            e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ព្រឹក|ល្ងាច/,
                isPM: function(e) {
                    return "ល្ងាច" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ព្រឹក" : "ល្ងាច"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    ss: "%d វិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                dayOfMonthOrdinalParse: /ទី\d{1,2}/,
                ordinal: "ទី%d",
                preparse: function(e) {
                    return e.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    43655: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            }
              , n = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            };
            e.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    ss: "%d ಸೆಕೆಂಡುಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function(e) {
                    return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function(e) {
                    return e + "ನೇ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    30986: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD.",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e
                    }
                },
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            })
        }(n(61320))
    },
    91902: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
              , n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
              , a = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
            e.defineLocale("ku", {
                months: a,
                monthsShort: a,
                weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /ئێواره‌|به‌یانی/,
                isPM: function(e) {
                    return /ئێواره‌/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "به‌یانی" : "ئێواره‌"
                },
                calendar: {
                    sameDay: "[ئه‌مرۆ كاتژمێر] LT",
                    nextDay: "[به‌یانی كاتژمێر] LT",
                    nextWeek: "dddd [كاتژمێر] LT",
                    lastDay: "[دوێنێ كاتژمێر] LT",
                    lastWeek: "dddd [كاتژمێر] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "له‌ %s",
                    past: "%s",
                    s: "چه‌ند چركه‌یه‌ك",
                    ss: "چركه‌ %d",
                    m: "یه‌ك خوله‌ك",
                    mm: "%d خوله‌ك",
                    h: "یه‌ك كاتژمێر",
                    hh: "%d كاتژمێر",
                    d: "یه‌ك ڕۆژ",
                    dd: "%d ڕۆژ",
                    M: "یه‌ك مانگ",
                    MM: "%d مانگ",
                    y: "یه‌ك ساڵ",
                    yy: "%d ساڵ"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(e) {
                        return n[e]
                    }
                    )).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    )).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(61320))
    },
    4604: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            };
            e.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кечээ саат] LT",
                    lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    ss: "%d секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function(e) {
                    var n = e % 10
                      , a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    99026: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? r[n][0] : r[n][1]
            }
            function n(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            }
            function a(e) {
                return r(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            }
            function r(e) {
                if (e = parseInt(e, 10),
                isNaN(e))
                    return !1;
                if (e < 0)
                    return !0;
                if (e < 10)
                    return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10;
                    return r(0 === t ? e / 10 : t)
                }
                if (e < 1e4) {
                    for (; e >= 10; )
                        e /= 10;
                    return r(e)
                }
                return r(e /= 1e3)
            }
            e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "e puer Sekonnen",
                    ss: "%d Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    20537: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    ss: "%d ວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            })
        }(n(61320))
    },
    22288: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                ss: "sekundė_sekundžių_sekundes",
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            };
            function n(e, t, n, a) {
                return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
            }
            function a(e, t, n, a) {
                return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
            }
            function r(e) {
                return e % 10 == 0 || e > 10 && e < 20
            }
            function s(e) {
                return t[e].split("_")
            }
            function i(e, t, n, i) {
                var d = e + " ";
                return 1 === e ? d + a(e, t, n[0], i) : t ? d + (r(e) ? s(n)[1] : s(n)[0]) : i ? d + s(n)[1] : d + (r(e) ? s(n)[1] : s(n)[2])
            }
            e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: n,
                    ss: i,
                    m: a,
                    mm: i,
                    h: a,
                    hh: i,
                    d: a,
                    dd: i,
                    M: a,
                    MM: i,
                    y: a,
                    yy: i
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    1495: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            };
            function n(e, t, n) {
                return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
            }
            function a(e, a, r) {
                return e + " " + n(t[r], e, a)
            }
            function r(e, a, r) {
                return n(t[r], e, a)
            }
            function s(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }
            e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s,
                    ss: a,
                    m: r,
                    mm: a,
                    h: r,
                    hh: a,
                    d: r,
                    dd: a,
                    M: r,
                    MM: a,
                    y: r,
                    yy: a
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    60690: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                words: {
                    ss: ["sekund", "sekunda", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, a) {
                    var r = t.words[a];
                    return 1 === a.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
                }
            };
            e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mjesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    2571: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    ss: "%d hēkona",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    93959: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    ss: "%d секунди",
                    m: "една минута",
                    mm: "%d минути",
                    h: "еден час",
                    hh: "%d часа",
                    d: "еден ден",
                    dd: "%d дена",
                    M: "еден месец",
                    MM: "%d месеци",
                    y: "една година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10
                      , n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    97225: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    ss: "%d സെക്കൻഡ്",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            })
        }(n(61320))
    },
    88: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                switch (n) {
                case "s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return e + (t ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return e + (t ? " минут" : " минутын");
                case "h":
                case "hh":
                    return e + (t ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return e + (t ? " сар" : " сарын");
                case "y":
                case "yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e
                }
            }
            e.defineLocale("mn", {
                months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
                monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
                monthsParseExact: !0,
                weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
                weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
                weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY оны MMMMын D",
                    LLL: "YYYY оны MMMMын D HH:mm",
                    LLLL: "dddd, YYYY оны MMMMын D HH:mm"
                },
                meridiemParse: /ҮӨ|ҮХ/i,
                isPM: function(e) {
                    return "ҮХ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ҮӨ" : "ҮХ"
                },
                calendar: {
                    sameDay: "[Өнөөдөр] LT",
                    nextDay: "[Маргааш] LT",
                    nextWeek: "[Ирэх] dddd LT",
                    lastDay: "[Өчигдөр] LT",
                    lastWeek: "[Өнгөрсөн] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s дараа",
                    past: "%s өмнө",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " өдөр";
                    default:
                        return e
                    }
                }
            })
        }(n(61320))
    },
    46622: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            function a(e, t, n, a) {
                var r = "";
                if (t)
                    switch (n) {
                    case "s":
                        r = "काही सेकंद";
                        break;
                    case "ss":
                        r = "%d सेकंद";
                        break;
                    case "m":
                        r = "एक मिनिट";
                        break;
                    case "mm":
                        r = "%d मिनिटे";
                        break;
                    case "h":
                        r = "एक तास";
                        break;
                    case "hh":
                        r = "%d तास";
                        break;
                    case "d":
                        r = "एक दिवस";
                        break;
                    case "dd":
                        r = "%d दिवस";
                        break;
                    case "M":
                        r = "एक महिना";
                        break;
                    case "MM":
                        r = "%d महिने";
                        break;
                    case "y":
                        r = "एक वर्ष";
                        break;
                    case "yy":
                        r = "%d वर्षे"
                    }
                else
                    switch (n) {
                    case "s":
                        r = "काही सेकंदां";
                        break;
                    case "ss":
                        r = "%d सेकंदां";
                        break;
                    case "m":
                        r = "एका मिनिटा";
                        break;
                    case "mm":
                        r = "%d मिनिटां";
                        break;
                    case "h":
                        r = "एका तासा";
                        break;
                    case "hh":
                        r = "%d तासां";
                        break;
                    case "d":
                        r = "एका दिवसा";
                        break;
                    case "dd":
                        r = "%d दिवसां";
                        break;
                    case "M":
                        r = "एका महिन्या";
                        break;
                    case "MM":
                        r = "%d महिन्यां";
                        break;
                    case "y":
                        r = "एका वर्षा";
                        break;
                    case "yy":
                        r = "%d वर्षां"
                    }
                return r.replace(/%d/i, e)
            }
            e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: a,
                    ss: a,
                    m: a,
                    mm: a,
                    h: a,
                    hh: a,
                    d: a,
                    dd: a,
                    M: a,
                    MM: a,
                    y: a,
                    yy: a
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "पहाटे" === t || "सकाळी" === t ? e : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t ? e >= 12 ? e : e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e >= 0 && e < 6 ? "पहाटे" : e < 12 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    48899: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    11070: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    ss: "%d saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    63931: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("mt", {
                months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
                monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
                weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
                weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
                weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Illum fil-]LT",
                    nextDay: "[Għada fil-]LT",
                    nextWeek: "dddd [fil-]LT",
                    lastDay: "[Il-bieraħ fil-]LT",
                    lastWeek: "dddd [li għadda] [fil-]LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "f’ %s",
                    past: "%s ilu",
                    s: "ftit sekondi",
                    ss: "%d sekondi",
                    m: "minuta",
                    mm: "%d minuti",
                    h: "siegħa",
                    hh: "%d siegħat",
                    d: "ġurnata",
                    dd: "%d ġranet",
                    M: "xahar",
                    MM: "%d xhur",
                    y: "sena",
                    yy: "%d sni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    95393: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            }
              , n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            };
            e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    ss: "%d စက္ကန့်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    4274: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    ss: "%d sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    w: "en uke",
                    ww: "%d uker",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    8914: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
              , n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
            e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    ss: "%d सेकेण्ड",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    68479: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
              , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
              , a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
              , r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    33114: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
              , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
              , a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
              , r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
            e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, a) {
                    return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: r,
                monthsShortRegex: r,
                monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    ss: "%d seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    w: "één week",
                    ww: "%d weken",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    4513: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    ss: "%d sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    w: "ei veke",
                    ww: "%d veker",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    46549: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("oc-lnc", {
                months: {
                    standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
                    format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "D MMMM [de] YYYY [a] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: "[uèi a] LT",
                    nextDay: "[deman a] LT",
                    nextWeek: "dddd [a] LT",
                    lastDay: "[ièr a] LT",
                    lastWeek: "dddd [passat a] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "unas segondas",
                    ss: "%d segondas",
                    m: "una minuta",
                    mm: "%d minutas",
                    h: "una ora",
                    hh: "%d oras",
                    d: "un jorn",
                    dd: "%d jorns",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"),
                    e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    28264: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            }
              , n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            };
            e.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "[ਅਗਲਾ] dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    ss: "%d ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function(e) {
                    return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    32848: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
              , n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
              , a = [/^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i];
            function r(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
            }
            function s(e, t, n) {
                var a = e + " ";
                switch (n) {
                case "ss":
                    return a + (r(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return a + (r(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return a + (r(e) ? "godziny" : "godzin");
                case "ww":
                    return a + (r(e) ? "tygodnie" : "tygodni");
                case "MM":
                    return a + (r(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return a + (r(e) ? "lata" : "lat")
                }
            }
            e.defineLocale("pl", {
                months: function(e, a) {
                    return e ? /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                        }
                    },
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    ss: s,
                    m: s,
                    mm: s,
                    h: s,
                    hh: s,
                    d: "1 dzień",
                    dd: "%d dni",
                    w: "tydzień",
                    ww: s,
                    M: "miesiąc",
                    MM: s,
                    y: "rok",
                    yy: s
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    55077: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("pt-br", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
                weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
                weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "poucos segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                invalidDate: "Data inválida"
            })
        }(n(61320))
    },
    90899: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("pt", {
                months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    ss: "%d segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    w: "uma semana",
                    ww: "%d semanas",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    92512: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n) {
                var a = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "),
                e + a + {
                    ss: "secunde",
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    ww: "săptămâni",
                    MM: "luni",
                    yy: "ani"
                }[n]
            }
            e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    ss: t,
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    w: "o săptămână",
                    ww: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    21753: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, a) {
                return "m" === a ? n ? "минута" : "минуту" : e + " " + t({
                    ss: n ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                }[a], +e)
            }
            var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
            e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: a,
                longMonthsParse: a,
                shortMonthsParse: a,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., H:mm",
                    LLLL: "dddd, D MMMM YYYY г., H:mm"
                },
                calendar: {
                    sameDay: "[Сегодня, в] LT",
                    nextDay: "[Завтра, в] LT",
                    lastDay: "[Вчера, в] LT",
                    nextWeek: function(e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT"
                        }
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
                        switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    ss: n,
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    w: "неделя",
                    ww: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    16840: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
              , n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
            e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    ss: "%d سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    78362: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    ss: "%d sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    50464: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    ss: "තත්පර %d",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            })
        }(n(61320))
    },
    66324: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
              , n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
            function a(e) {
                return e > 1 && e < 5
            }
            function r(e, t, n, r) {
                var s = e + " ";
                switch (n) {
                case "s":
                    return t || r ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || r ? s + (a(e) ? "sekundy" : "sekúnd") : s + "sekundami";
                case "m":
                    return t ? "minúta" : r ? "minútu" : "minútou";
                case "mm":
                    return t || r ? s + (a(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? s + (a(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return t || r ? "deň" : "dňom";
                case "dd":
                    return t || r ? s + (a(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return t || r ? "mesiac" : "mesiacom";
                case "MM":
                    return t || r ? s + (a(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return t || r ? "rok" : "rokom";
                case "yy":
                    return t || r ? s + (a(e) ? "roky" : "rokov") : s + "rokmi"
                }
            }
            e.defineLocale("sk", {
                months: t,
                monthsShort: n,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: r,
                    ss: r,
                    m: r,
                    mm: r,
                    h: r,
                    hh: r,
                    d: r,
                    dd: r,
                    M: r,
                    MM: r,
                    y: r,
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    41963: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = e + " ";
                switch (n) {
                case "s":
                    return t || a ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || a ? "sekundi" : "sekundah" : e < 5 ? t || a ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
                case "d":
                    return t || a ? "en dan" : "enim dnem";
                case "dd":
                    return r += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
                case "M":
                    return t || a ? "en mesec" : "enim mesecem";
                case "MM":
                    return r += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
                case "y":
                    return t || a ? "eno leto" : "enim letom";
                case "yy":
                    return r += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
                }
            }
            e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD. MM. YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    53039: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    ss: "%d sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    10466: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                words: {
                    ss: ["секунда", "секунде", "секунди"],
                    m: ["један минут", "једног минута"],
                    mm: ["минут", "минута", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    d: ["један дан", "једног дана"],
                    dd: ["дан", "дана", "дана"],
                    M: ["један месец", "једног месеца"],
                    MM: ["месец", "месеца", "месеци"],
                    y: ["једну годину", "једне године"],
                    yy: ["годину", "године", "година"]
                },
                correctGrammaticalCase: function(e, t) {
                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
                },
                translate: function(e, n, a, r) {
                    var s, i = t.words[a];
                    return 1 === a.length ? "y" === a && n ? "једна година" : r || n ? i[0] : i[1] : (s = t.correctGrammaticalCase(e, i),
                    "yy" === a && n && "годину" === s ? e + " година" : e + " " + s)
                }
            };
            e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: t.translate,
                    dd: t.translate,
                    M: t.translate,
                    MM: t.translate,
                    y: t.translate,
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    93454: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                words: {
                    ss: ["sekunda", "sekunde", "sekundi"],
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    d: ["jedan dan", "jednog dana"],
                    dd: ["dan", "dana", "dana"],
                    M: ["jedan mesec", "jednog meseca"],
                    MM: ["mesec", "meseca", "meseci"],
                    y: ["jednu godinu", "jedne godine"],
                    yy: ["godinu", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? t[0] : t[1] : t[2]
                },
                translate: function(e, n, a, r) {
                    var s, i = t.words[a];
                    return 1 === a.length ? "y" === a && n ? "jedna godina" : r || n ? i[0] : i[1] : (s = t.correctGrammaticalCase(e, i),
                    "yy" === a && n && "godinu" === s ? e + " godina" : e + " " + s)
                }
            };
            e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    ss: t.translate,
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: t.translate,
                    dd: t.translate,
                    M: t.translate,
                    MM: t.translate,
                    y: t.translate,
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    95158: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    ss: "%d mzuzwana",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    28859: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    ss: "%d sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? ":e" : 1 === t || 2 === t ? ":a" : ":e")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    57594: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "hh:mm A",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    ss: "sekunde %d",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "siku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    26915: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            }
              , n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            };
            e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    ss: "%d விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function(e) {
                    return e + "வது"
                },
                preparse: function(e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(e) {
                        return n[e]
                    }
                    ))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return t[e]
                    }
                    ))
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e, t, n) {
                    return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    15677: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    ss: "%d సెకన్లు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            })
        }(n(61320))
    },
    92154: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "segundu balun",
                    ss: "segundu %d",
                    m: "minutu ida",
                    mm: "minutu %d",
                    h: "oras ida",
                    hh: "oras %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    74098: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                0: "-ум",
                1: "-ум",
                2: "-юм",
                3: "-юм",
                4: "-ум",
                5: "-ум",
                6: "-ум",
                7: "-ум",
                8: "-ум",
                9: "-ум",
                10: "-ум",
                12: "-ум",
                13: "-ум",
                20: "-ум",
                30: "-юм",
                40: "-ум",
                50: "-ум",
                60: "-ум",
                70: "-ум",
                80: "-ум",
                90: "-ум",
                100: "-ум"
            };
            e.defineLocale("tg", {
                months: {
                    format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
                    standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
                },
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
                weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
                weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Имрӯз соати] LT",
                    nextDay: "[Фардо соати] LT",
                    lastDay: "[Дирӯз соати] LT",
                    nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
                    lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "баъди %s",
                    past: "%s пеш",
                    s: "якчанд сония",
                    m: "як дақиқа",
                    mm: "%d дақиқа",
                    h: "як соат",
                    hh: "%d соат",
                    d: "як рӯз",
                    dd: "%d рӯз",
                    M: "як моҳ",
                    MM: "%d моҳ",
                    y: "як сол",
                    yy: "%d сол"
                },
                meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
                ordinal: function(e) {
                    var n = e % 10
                      , a = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    89071: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    ss: "%d วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    w: "1 สัปดาห์",
                    ww: "%d สัปดาห์",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            })
        }(n(61320))
    },
    49381: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "'inji",
                5: "'inji",
                8: "'inji",
                70: "'inji",
                80: "'inji",
                2: "'nji",
                7: "'nji",
                20: "'nji",
                50: "'nji",
                3: "'ünji",
                4: "'ünji",
                100: "'ünji",
                6: "'njy",
                9: "'unjy",
                10: "'unjy",
                30: "'unjy",
                60: "'ynjy",
                90: "'ynjy"
            };
            e.defineLocale("tk", {
                months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
                monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
                weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
                weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
                weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün sagat] LT",
                    nextDay: "[ertir sagat] LT",
                    nextWeek: "[indiki] dddd [sagat] LT",
                    lastDay: "[düýn] LT",
                    lastWeek: "[geçen] dddd [sagat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s soň",
                    past: "%s öň",
                    s: "birnäçe sekunt",
                    m: "bir minut",
                    mm: "%d minut",
                    h: "bir sagat",
                    hh: "%d sagat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir aý",
                    MM: "%d aý",
                    y: "bir ýyl",
                    yy: "%d ýyl"
                },
                ordinal: function(e, n) {
                    switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e)
                            return e + "'unjy";
                        var a = e % 10
                          , r = e % 100 - a
                          , s = e >= 100 ? 100 : null;
                        return e + (t[a] || t[r] || t[s])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    1869: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    ss: "%d segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    92346: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
            function n(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
            }
            function a(e) {
                var t = e;
                return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
            }
            function r(e, t, n, a) {
                var r = s(e);
                switch (n) {
                case "ss":
                    return r + " lup";
                case "mm":
                    return r + " tup";
                case "hh":
                    return r + " rep";
                case "dd":
                    return r + " jaj";
                case "MM":
                    return r + " jar";
                case "yy":
                    return r + " DIS"
                }
            }
            function s(e) {
                var n = Math.floor(e % 1e3 / 100)
                  , a = Math.floor(e % 100 / 10)
                  , r = e % 10
                  , s = "";
                return n > 0 && (s += t[n] + "vatlh"),
                a > 0 && (s += ("" !== s ? " " : "") + t[a] + "maH"),
                r > 0 && (s += ("" !== s ? " " : "") + t[r]),
                "" === s ? "pagh" : s
            }
            e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: n,
                    past: a,
                    s: "puS lup",
                    ss: r,
                    m: "wa’ tup",
                    mm: r,
                    h: "wa’ rep",
                    hh: r,
                    d: "wa’ jaj",
                    dd: r,
                    M: "wa’ jar",
                    MM: r,
                    y: "wa’ DIS",
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    71483: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            };
            e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "öö" : "ÖÖ" : n ? "ös" : "ÖS"
                },
                meridiemParse: /öö|ÖÖ|ös|ÖS/,
                isPM: function(e) {
                    return "ös" === e || "ÖS" === e
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[gelecek] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    ss: "%d saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    w: "bir hafta",
                    ww: "%d hafta",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                ordinal: function(e, n) {
                    switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e)
                            return e + "'ıncı";
                        var a = e % 10
                          , r = e % 100 - a
                          , s = e >= 100 ? 100 : null;
                        return e + (t[a] || t[r] || t[s])
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    30266: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t, n, a) {
                var r = {
                    s: ["viensas secunds", "'iensas secunds"],
                    ss: [e + " secunds", e + " secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", e + " ars"]
                };
                return a || t ? r[n][0] : r[n][1]
            }
            e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function(e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    ss: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    32960: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    ss: "%d imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(61320))
    },
    33138: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    ss: "%d ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            })
        }(n(61320))
    },
    29456: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("ug-cn", {
                months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
                weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
                weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
                    LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
                    LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
                },
                meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "يېرىم كېچە" : a < 900 ? "سەھەر" : a < 1130 ? "چۈشتىن بۇرۇن" : a < 1230 ? "چۈش" : a < 1800 ? "چۈشتىن كېيىن" : "كەچ"
                },
                calendar: {
                    sameDay: "[بۈگۈن سائەت] LT",
                    nextDay: "[ئەتە سائەت] LT",
                    nextWeek: "[كېلەركى] dddd [سائەت] LT",
                    lastDay: "[تۆنۈگۈن] LT",
                    lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s كېيىن",
                    past: "%s بۇرۇن",
                    s: "نەچچە سېكونت",
                    ss: "%d سېكونت",
                    m: "بىر مىنۇت",
                    mm: "%d مىنۇت",
                    h: "بىر سائەت",
                    hh: "%d سائەت",
                    d: "بىر كۈن",
                    dd: "%d كۈن",
                    M: "بىر ئاي",
                    MM: "%d ئاي",
                    y: "بىر يىل",
                    yy: "%d يىل"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-كۈنى";
                    case "w":
                    case "W":
                        return e + "-ھەپتە";
                    default:
                        return e
                    }
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    50805: function(e, t, n) {
        !function(e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, a) {
                return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t({
                    ss: n ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                }[a], +e)
            }
            function a(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
            }
            function r(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: a,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: r("[Сьогодні "),
                    nextDay: r("[Завтра "),
                    lastDay: r("[Вчора "),
                    nextWeek: r("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return r("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return r("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    ss: n,
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    61127: function(e, t, n) {
        !function(e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
              , n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    ss: "%d سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    80840: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    ss: "%d soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    29628: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    ss: "%d фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            })
        }(n(61320))
    },
    56962: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần trước lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    ss: "%d giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    w: "một tuần",
                    ww: "%d tuần",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    49257: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    ss: "%d s~écóñ~ds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10;
                    return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    62423: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    ss: "aayá %d",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    61002: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日Ah点mm分",
                    LLLL: "YYYY年M月D日ddddAh点mm分",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: function(e) {
                        return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT"
                    },
                    lastDay: "[昨天]LT",
                    lastWeek: function(e) {
                        return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT"
                    },
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s后",
                    past: "%s前",
                    s: "几秒",
                    ss: "%d 秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    w: "1 周",
                    ww: "%d 周",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            })
        }(n(61320))
    },
    6046: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1200 ? "上午" : 1200 === a ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(n(61320))
    },
    36903: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("zh-mo", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "D/M/YYYY",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(n(61320))
    },
    24710: function(e, t, n) {
        !function(e) {
            "use strict";
            e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日dddd HH:mm",
                    l: "YYYY/M/D",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                    "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var a = 100 * e + t;
                    return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天] LT",
                    nextDay: "[明天] LT",
                    nextWeek: "[下]dddd LT",
                    lastDay: "[昨天] LT",
                    lastWeek: "[上]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "幾秒",
                    ss: "%d 秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            })
        }(n(61320))
    },
    91513: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>a
        });
        const a = "00000000-0000-0000-0000-000000000000"
    }
    ,
    64015: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        var a = n(53475);
        const r = function(e) {
            if (!(0,
            a.Z)(e))
                throw TypeError("Invalid UUID");
            var t, n = new Uint8Array(16);
            return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24,
            n[1] = t >>> 16 & 255,
            n[2] = t >>> 8 & 255,
            n[3] = 255 & t,
            n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8,
            n[5] = 255 & t,
            n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8,
            n[7] = 255 & t,
            n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8,
            n[9] = 255 & t,
            n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255,
            n[11] = t / 4294967296 & 255,
            n[12] = t >>> 24 & 255,
            n[13] = t >>> 16 & 255,
            n[14] = t >>> 8 & 255,
            n[15] = 255 & t,
            n
        }
    }
    ,
    3135: (e,t,n)=>{
        "use strict";
        var a;
        n.d(t, {
            Z: ()=>s
        });
        var r = new Uint8Array(16);
        function s() {
            if (!a && !(a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return a(r)
        }
    }
    ,
    14325: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>i
        });
        for (var a = n(53475), r = [], s = 0; s < 256; ++s)
            r.push((s + 256).toString(16).substr(1));
        const i = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = (r[e[t + 0]] + r[e[t + 1]] + r[e[t + 2]] + r[e[t + 3]] + "-" + r[e[t + 4]] + r[e[t + 5]] + "-" + r[e[t + 6]] + r[e[t + 7]] + "-" + r[e[t + 8]] + r[e[t + 9]] + "-" + r[e[t + 10]] + r[e[t + 11]] + r[e[t + 12]] + r[e[t + 13]] + r[e[t + 14]] + r[e[t + 15]]).toLowerCase();
            if (!(0,
            a.Z)(n))
                throw TypeError("Stringified UUID is invalid");
            return n
        }
    }
    ,
    17984: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>o
        });
        var a, r, s = n(3135), i = n(14325), d = 0, _ = 0;
        const o = function(e, t, n) {
            var o = t && n || 0
              , u = t || new Array(16)
              , m = (e = e || {}).node || a
              , l = void 0 !== e.clockseq ? e.clockseq : r;
            if (null == m || null == l) {
                var c = e.random || (e.rng || s.Z)();
                null == m && (m = a = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
                null == l && (l = r = 16383 & (c[6] << 8 | c[7]))
            }
            var M = void 0 !== e.msecs ? e.msecs : Date.now()
              , L = void 0 !== e.nsecs ? e.nsecs : _ + 1
              , h = M - d + (L - _) / 1e4;
            if (h < 0 && void 0 === e.clockseq && (l = l + 1 & 16383),
            (h < 0 || M > d) && void 0 === e.nsecs && (L = 0),
            L >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            d = M,
            _ = L,
            r = l;
            var y = (1e4 * (268435455 & (M += 122192928e5)) + L) % 4294967296;
            u[o++] = y >>> 24 & 255,
            u[o++] = y >>> 16 & 255,
            u[o++] = y >>> 8 & 255,
            u[o++] = 255 & y;
            var Y = M / 4294967296 * 1e4 & 268435455;
            u[o++] = Y >>> 8 & 255,
            u[o++] = 255 & Y,
            u[o++] = Y >>> 24 & 15 | 16,
            u[o++] = Y >>> 16 & 255,
            u[o++] = l >>> 8 | 128,
            u[o++] = 255 & l;
            for (var f = 0; f < 6; ++f)
                u[o + f] = m[f];
            return t || (0,
            i.Z)(u)
        }
    }
    ,
    77036: (e,t,n)=>{
        "use strict";
        function a(e) {
            return 14 + (e + 64 >>> 9 << 4) + 1
        }
        function r(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function s(e, t, n, a, s, i) {
            return r((d = r(r(t, e), r(a, i))) << (_ = s) | d >>> 32 - _, n);
            var d, _
        }
        function i(e, t, n, a, r, i, d) {
            return s(t & n | ~t & a, e, t, r, i, d)
        }
        function d(e, t, n, a, r, i, d) {
            return s(t & a | n & ~a, e, t, r, i, d)
        }
        function _(e, t, n, a, r, i, d) {
            return s(t ^ n ^ a, e, t, r, i, d)
        }
        function o(e, t, n, a, r, i, d) {
            return s(n ^ (t | ~a), e, t, r, i, d)
        }
        n.d(t, {
            Z: ()=>m
        });
        const u = function(e) {
            if ("string" == typeof e) {
                var t = unescape(encodeURIComponent(e));
                e = new Uint8Array(t.length);
                for (var n = 0; n < t.length; ++n)
                    e[n] = t.charCodeAt(n)
            }
            return function(e) {
                for (var t = [], n = 32 * e.length, a = "0123456789abcdef", r = 0; r < n; r += 8) {
                    var s = e[r >> 5] >>> r % 32 & 255
                      , i = parseInt(a.charAt(s >>> 4 & 15) + a.charAt(15 & s), 16);
                    t.push(i)
                }
                return t
            }(function(e, t) {
                e[t >> 5] |= 128 << t % 32,
                e[a(t) - 1] = t;
                for (var n = 1732584193, s = -271733879, u = -1732584194, m = 271733878, l = 0; l < e.length; l += 16) {
                    var c = n
                      , M = s
                      , L = u
                      , h = m;
                    n = i(n, s, u, m, e[l], 7, -680876936),
                    m = i(m, n, s, u, e[l + 1], 12, -389564586),
                    u = i(u, m, n, s, e[l + 2], 17, 606105819),
                    s = i(s, u, m, n, e[l + 3], 22, -1044525330),
                    n = i(n, s, u, m, e[l + 4], 7, -176418897),
                    m = i(m, n, s, u, e[l + 5], 12, 1200080426),
                    u = i(u, m, n, s, e[l + 6], 17, -1473231341),
                    s = i(s, u, m, n, e[l + 7], 22, -45705983),
                    n = i(n, s, u, m, e[l + 8], 7, 1770035416),
                    m = i(m, n, s, u, e[l + 9], 12, -1958414417),
                    u = i(u, m, n, s, e[l + 10], 17, -42063),
                    s = i(s, u, m, n, e[l + 11], 22, -1990404162),
                    n = i(n, s, u, m, e[l + 12], 7, 1804603682),
                    m = i(m, n, s, u, e[l + 13], 12, -40341101),
                    u = i(u, m, n, s, e[l + 14], 17, -1502002290),
                    n = d(n, s = i(s, u, m, n, e[l + 15], 22, 1236535329), u, m, e[l + 1], 5, -165796510),
                    m = d(m, n, s, u, e[l + 6], 9, -1069501632),
                    u = d(u, m, n, s, e[l + 11], 14, 643717713),
                    s = d(s, u, m, n, e[l], 20, -373897302),
                    n = d(n, s, u, m, e[l + 5], 5, -701558691),
                    m = d(m, n, s, u, e[l + 10], 9, 38016083),
                    u = d(u, m, n, s, e[l + 15], 14, -660478335),
                    s = d(s, u, m, n, e[l + 4], 20, -405537848),
                    n = d(n, s, u, m, e[l + 9], 5, 568446438),
                    m = d(m, n, s, u, e[l + 14], 9, -1019803690),
                    u = d(u, m, n, s, e[l + 3], 14, -187363961),
                    s = d(s, u, m, n, e[l + 8], 20, 1163531501),
                    n = d(n, s, u, m, e[l + 13], 5, -1444681467),
                    m = d(m, n, s, u, e[l + 2], 9, -51403784),
                    u = d(u, m, n, s, e[l + 7], 14, 1735328473),
                    n = _(n, s = d(s, u, m, n, e[l + 12], 20, -1926607734), u, m, e[l + 5], 4, -378558),
                    m = _(m, n, s, u, e[l + 8], 11, -2022574463),
                    u = _(u, m, n, s, e[l + 11], 16, 1839030562),
                    s = _(s, u, m, n, e[l + 14], 23, -35309556),
                    n = _(n, s, u, m, e[l + 1], 4, -1530992060),
                    m = _(m, n, s, u, e[l + 4], 11, 1272893353),
                    u = _(u, m, n, s, e[l + 7], 16, -155497632),
                    s = _(s, u, m, n, e[l + 10], 23, -1094730640),
                    n = _(n, s, u, m, e[l + 13], 4, 681279174),
                    m = _(m, n, s, u, e[l], 11, -358537222),
                    u = _(u, m, n, s, e[l + 3], 16, -722521979),
                    s = _(s, u, m, n, e[l + 6], 23, 76029189),
                    n = _(n, s, u, m, e[l + 9], 4, -640364487),
                    m = _(m, n, s, u, e[l + 12], 11, -421815835),
                    u = _(u, m, n, s, e[l + 15], 16, 530742520),
                    n = o(n, s = _(s, u, m, n, e[l + 2], 23, -995338651), u, m, e[l], 6, -198630844),
                    m = o(m, n, s, u, e[l + 7], 10, 1126891415),
                    u = o(u, m, n, s, e[l + 14], 15, -1416354905),
                    s = o(s, u, m, n, e[l + 5], 21, -57434055),
                    n = o(n, s, u, m, e[l + 12], 6, 1700485571),
                    m = o(m, n, s, u, e[l + 3], 10, -1894986606),
                    u = o(u, m, n, s, e[l + 10], 15, -1051523),
                    s = o(s, u, m, n, e[l + 1], 21, -2054922799),
                    n = o(n, s, u, m, e[l + 8], 6, 1873313359),
                    m = o(m, n, s, u, e[l + 15], 10, -30611744),
                    u = o(u, m, n, s, e[l + 6], 15, -1560198380),
                    s = o(s, u, m, n, e[l + 13], 21, 1309151649),
                    n = o(n, s, u, m, e[l + 4], 6, -145523070),
                    m = o(m, n, s, u, e[l + 11], 10, -1120210379),
                    u = o(u, m, n, s, e[l + 2], 15, 718787259),
                    s = o(s, u, m, n, e[l + 9], 21, -343485551),
                    n = r(n, c),
                    s = r(s, M),
                    u = r(u, L),
                    m = r(m, h)
                }
                return [n, s, u, m]
            }(function(e) {
                if (0 === e.length)
                    return [];
                for (var t = 8 * e.length, n = new Uint32Array(a(t)), r = 0; r < t; r += 8)
                    n[r >> 5] |= (255 & e[r / 8]) << r % 32;
                return n
            }(e), 8 * e.length))
        };
        const m = (0,
        n(26616).ZP)("v3", 48, u)
    }
    ,
    26616: (e,t,n)=>{
        "use strict";
        n.d(t, {
            ZP: ()=>d
        });
        var a = n(14325)
          , r = n(64015);
        var s = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
          , i = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function d(e, t, n) {
            function d(e, s, i, d) {
                if ("string" == typeof e && (e = function(e) {
                    e = unescape(encodeURIComponent(e));
                    for (var t = [], n = 0; n < e.length; ++n)
                        t.push(e.charCodeAt(n));
                    return t
                }(e)),
                "string" == typeof s && (s = (0,
                r.Z)(s)),
                16 !== s.length)
                    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                var _ = new Uint8Array(16 + e.length);
                if (_.set(s),
                _.set(e, s.length),
                (_ = n(_))[6] = 15 & _[6] | t,
                _[8] = 63 & _[8] | 128,
                i) {
                    d = d || 0;
                    for (var o = 0; o < 16; ++o)
                        i[d + o] = _[o];
                    return i
                }
                return (0,
                a.Z)(_)
            }
            try {
                d.name = e
            } catch (e) {}
            return d.DNS = s,
            d.URL = i,
            d
        }
    }
    ,
    70942: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>s
        });
        var a = n(3135)
          , r = n(14325);
        const s = function(e, t, n) {
            var s = (e = e || {}).random || (e.rng || a.Z)();
            if (s[6] = 15 & s[6] | 64,
            s[8] = 63 & s[8] | 128,
            t) {
                n = n || 0;
                for (var i = 0; i < 16; ++i)
                    t[n + i] = s[i];
                return t
            }
            return (0,
            r.Z)(s)
        }
    }
    ,
    60534: (e,t,n)=>{
        "use strict";
        function a(e, t, n, a) {
            switch (e) {
            case 0:
                return t & n ^ ~t & a;
            case 1:
            case 3:
                return t ^ n ^ a;
            case 2:
                return t & n ^ t & a ^ n & a
            }
        }
        function r(e, t) {
            return e << t | e >>> 32 - t
        }
        n.d(t, {
            Z: ()=>i
        });
        const s = function(e) {
            var t = [1518500249, 1859775393, 2400959708, 3395469782]
              , n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
                var s = unescape(encodeURIComponent(e));
                e = [];
                for (var i = 0; i < s.length; ++i)
                    e.push(s.charCodeAt(i))
            } else
                Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            for (var d = e.length / 4 + 2, _ = Math.ceil(d / 16), o = new Array(_), u = 0; u < _; ++u) {
                for (var m = new Uint32Array(16), l = 0; l < 16; ++l)
                    m[l] = e[64 * u + 4 * l] << 24 | e[64 * u + 4 * l + 1] << 16 | e[64 * u + 4 * l + 2] << 8 | e[64 * u + 4 * l + 3];
                o[u] = m
            }
            o[_ - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
            o[_ - 1][14] = Math.floor(o[_ - 1][14]),
            o[_ - 1][15] = 8 * (e.length - 1) & 4294967295;
            for (var c = 0; c < _; ++c) {
                for (var M = new Uint32Array(80), L = 0; L < 16; ++L)
                    M[L] = o[c][L];
                for (var h = 16; h < 80; ++h)
                    M[h] = r(M[h - 3] ^ M[h - 8] ^ M[h - 14] ^ M[h - 16], 1);
                for (var y = n[0], Y = n[1], f = n[2], p = n[3], k = n[4], D = 0; D < 80; ++D) {
                    var T = Math.floor(D / 20)
                      , g = r(y, 5) + a(T, Y, f, p) + k + t[T] + M[D] >>> 0;
                    k = p,
                    p = f,
                    f = r(Y, 30) >>> 0,
                    Y = y,
                    y = g
                }
                n[0] = n[0] + y >>> 0,
                n[1] = n[1] + Y >>> 0,
                n[2] = n[2] + f >>> 0,
                n[3] = n[3] + p >>> 0,
                n[4] = n[4] + k >>> 0
            }
            return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
        };
        const i = (0,
        n(26616).ZP)("v5", 80, s)
    }
    ,
    53475: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        const a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        const r = function(e) {
            return "string" == typeof e && a.test(e)
        }
    }
    ,
    43732: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Z: ()=>r
        });
        var a = n(53475);
        const r = function(e) {
            if (!(0,
            a.Z)(e))
                throw TypeError("Invalid UUID");
            return parseInt(e.substr(14, 1), 16)
        }
    }
}]);
