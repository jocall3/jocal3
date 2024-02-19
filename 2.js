(self.webpackChunkcodespaces_web_client = self.webpackChunkcodespaces_web_client || []).push([[211], {
    35929: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Net = void 0,
            t.Net = {
                Socket: function() {}
            }
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    77306: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CodespacesPendingOperationError = t.DisconnectedError = t.ConnectedError = t.ControlFlowError = void 0;
            class r extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "ControlFlowError"
                }
            }
            t.ControlFlowError = r;
            t.ConnectedError = class extends r {
                constructor() {
                    super(...arguments),
                    this.errorType = "ConnectedError"
                }
            }
            ;
            t.DisconnectedError = class extends r {
                constructor() {
                    super(...arguments),
                    this.errorType = "DisconnectedError"
                }
            }
            ;
            t.CodespacesPendingOperationError = class extends r {
                constructor() {
                    super(...arguments),
                    this.errorType = "CodespacesPendingOperationError"
                }
            }
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    27593: (e,t,r)=>{
        var o, n;
        o = [r, t, r(11627)],
        n = function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ConnectionAbortedError = t.WebSocketError = t.ConnectionError = t.CodespacesInternalTransportError = t.TunnelProviderError = t.GenericAuthServiceError = t.KeychainEncryptionError = t.KeychainGetKeyError = t.KeychainGetRecordError = t.WorkbenchMountedTwiceError = t.NetworkError = t.ThrottlingApiError = t.JupyterError = t.VSCodeCommitNotFound = t.FatalPlatformRedirectionError = t.CodespaceNotAvailableError = t.SshChannelError = t.OutdatedCodespaceStateError = t.CodespacesPolicyViolationError = t.CancellationError = t.AssertionError = t.HttpError = t.AuthenticationFatalError = t.AuthenticationError = t.GitHubRepoAccessError = t.GitHubNeedsAuthenticationError = t.GitHubError = void 0;
            class o {
                constructor() {
                    this.errorType = "GitHubError"
                }
            }
            t.GitHubError = o;
            t.GitHubNeedsAuthenticationError = class extends o {
                constructor() {
                    super(...arguments),
                    this.errorType = "GitHubNeedsAuthenticationError"
                }
            }
            ;
            t.GitHubRepoAccessError = class extends o {
                constructor() {
                    super(...arguments),
                    this.errorType = "GitHubRepoAccessError"
                }
            }
            ;
            class n extends r.BaseError {
                constructor() {
                    super(...arguments),
                    this.errorType = "AuthenticationError"
                }
            }
            t.AuthenticationError = n;
            t.AuthenticationFatalError = class extends n {
                constructor() {
                    super(...arguments),
                    this.errorType = "AuthenticationFatalError"
                }
            }
            ;
            class s extends r.BaseError {
                constructor(e, t, r) {
                    super(`${e} ${t} on URL: ${r}`, e),
                    this.statusCode = e,
                    this.statusText = t,
                    this.url = r,
                    this.errorType = "HttpError"
                }
            }
            t.HttpError = s;
            t.AssertionError = class {
                constructor() {
                    this.errorType = "AssertionError"
                }
            }
            ;
            t.CancellationError = class {
                constructor() {
                    this.errorType = "CancellationError"
                }
            }
            ;
            class i extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "CodespacesPolicyViolationError"
                }
            }
            t.CodespacesPolicyViolationError = i;
            class a extends Error {
                constructor(e, t) {
                    super(e),
                    this.state = t,
                    this.errorType = "OutdatedCodespaceStateError"
                }
            }
            t.OutdatedCodespaceStateError = a;
            class c extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "SshChannelError"
                }
            }
            t.SshChannelError = c;
            class d extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "CodespaceNotAvailableError"
                }
            }
            t.CodespaceNotAvailableError = d;
            t.FatalPlatformRedirectionError = class extends n {
                constructor() {
                    super(...arguments),
                    this.errorType = "FatalPlatformRedirectionError"
                }
            }
            ;
            class u extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "VSCodeCommitNotFound"
                }
            }
            t.VSCodeCommitNotFound = u;
            class l extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "JupyterError"
                }
            }
            t.JupyterError = l;
            class E extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "ThrottlingApiError"
                }
            }
            t.ThrottlingApiError = E;
            class p extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "NetworkError"
                }
            }
            t.NetworkError = p;
            class h extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "WorkbenchMountedTwiceError"
                }
            }
            t.WorkbenchMountedTwiceError = h;
            class _ extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "KeychainGetRecordError"
                }
            }
            t.KeychainGetRecordError = _;
            class C extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "KeychainGetKeyError"
                }
            }
            t.KeychainGetKeyError = C;
            class y extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "KeychainEncryptionError"
                }
            }
            t.KeychainEncryptionError = y;
            class T extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "GenericAuthServiceError"
                }
            }
            t.GenericAuthServiceError = T;
            class S extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "TunnelProviderError"
                }
            }
            t.TunnelProviderError = S;
            class A extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "CodespacesInternalTransportError"
                }
            }
            t.CodespacesInternalTransportError = A;
            class f extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "ConnectionError"
                }
            }
            t.ConnectionError = f;
            class O extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "WebSocketError"
                }
            }
            t.WebSocketError = O;
            class v extends Error {
                constructor() {
                    super(...arguments),
                    this.errorType = "ConnectionAbortedError"
                }
            }
            t.ConnectionAbortedError = v
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    }
    ,
    50162: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            var r, o, n, s;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CodespaceErrorCodes = t.BillableOwnerType = t.PortPrivacy = t.CodespaceStateInfo = void 0,
            function(e) {
                e.Deleted = "Deleted",
                e.Available = "Available",
                e.Unavailable = "Unavailable",
                e.Shutdown = "Shutdown",
                e.ShuttingDown = "ShuttingDown",
                e.Failed = "Failed",
                e.Starting = "Starting",
                e.Provisioning = "Provisioning",
                e.Queued = "Queued",
                e.Rebuilding = "Rebuilding",
                e.Updating = "Updating",
                e.Created = "Created",
                e.Awaiting = "Awaiting",
                e.Exporting = "Exporting"
            }(r || (t.CodespaceStateInfo = r = {})),
            function(e) {
                e.Private = "private",
                e.Public = "public",
                e.Org = "org"
            }(o || (t.PortPrivacy = o = {})),
            function(e) {
                e.User = "User",
                e.Organization = "Organization"
            }(n || (t.BillableOwnerType = n = {})),
            function(e) {
                e[e.unknown = 0] = "unknown",
                e[e.exceededQuota = 1] = "exceededQuota",
                e[e.codespaceNameAlreadyExists = 2] = "codespaceNameAlreadyExists",
                e[e.codespaceDoesNotExist = 3] = "codespaceDoesNotExist",
                e[e.shutdownStaticCodespace = 4] = "shutdownStaticCodespace",
                e[e.startStaticCodespace = 5] = "startStaticCodespace",
                e[e.codespaceNotAvailable = 6] = "codespaceNotAvailable",
                e[e.codespaceNotShutdown = 7] = "codespaceNotShutdown",
                e[e.unableToAllocateResources = 8] = "unableToAllocateResources",
                e[e.unableToAllocateResourcesWhileStarting = 9] = "unableToAllocateResourcesWhileStarting",
                e[e.requestedAutoShutdownDelayMinutesIsInvalid = 10] = "requestedAutoShutdownDelayMinutesIsInvalid",
                e[e.unableToUpdateSku = 11] = "unableToUpdateSku",
                e[e.requestedSkuIsInvalid = 12] = "requestedSkuIsInvalid",
                e[e.heartbeatUnhealthy = 13] = "heartbeatUnhealthy",
                e[e.customContainersCreationFailed = 14] = "customContainersCreationFailed",
                e[e.shutdownFailed = 1001] = "shutdownFailed",
                e[e.cMBMutexFailure = 1002] = "cMBMutexFailure",
                e[e.cMBGeneralError = 1003] = "cMBGeneralError",
                e[e.startCodespaceHandlerFailedToStartContainer = 1004] = "startCodespaceHandlerFailedToStartContainer",
                e[e.startCodespaceHandlerRequiredParameterMissing = 1005] = "startCodespaceHandlerRequiredParameterMissing",
                e[e.startCodespaceHandlerKitchensinkMissing = 1006] = "startCodespaceHandlerKitchensinkMissing",
                e[e.startCodespaceHandlerLiveshareLoginFailed = 1007] = "startCodespaceHandlerLiveshareLoginFailed",
                e[e.startCodespaceHandlerMoreThanOneContainerFoundOnRestart = 1008] = "startCodespaceHandlerMoreThanOneContainerFoundOnRestart",
                e[e.customContainersGeneralError = 1100] = "customContainersGeneralError",
                e[e.customContainersKitchensinkCreationFailed = 1121] = "customContainersKitchensinkCreationFailed",
                e[e.customContainersKitchensinkStartFailed = 1122] = "customContainersKitchensinkStartFailed",
                e[e.customContainersCloneFailed = 1151] = "customContainersCloneFailed",
                e[e.customContainersPrivateClonetimeout = 1152] = "customContainersPrivateClonetimeout",
                e[e.customContainersCouldNotPullImage = 1153] = "customContainersCouldNotPullImage",
                e[e.customContainersCouldNotBuildUserImage = 1154] = "customContainersCouldNotBuildUserImage",
                e[e.customContainersCouldNotCreateUserContainer = 1155] = "customContainersCouldNotCreateUserContainer",
                e[e.customContainersCouldNotRunUserContainer = 1156] = "customContainersCouldNotRunUserContainer",
                e[e.customContainersCLICopyFailed = 1157] = "customContainersCLICopyFailed",
                e[e.customContainersDependenciesFailed = 1158] = "customContainersDependenciesFailed",
                e[e.customContainersCLIStartFailed = 1158] = "customContainersCLIStartFailed",
                e[e.customContainersIncorrectUserID = 1159] = "customContainersIncorrectUserID",
                e[e.customContainersComposeGeneralError = 1200] = "customContainersComposeGeneralError",
                e[e.customContainersComposeValidationError = 1201] = "customContainersComposeValidationError",
                e[e.customContainersComposeConfigError = 1202] = "customContainersComposeConfigError",
                e[e.customContainersWrongServiceError = 1203] = "customContainersWrongServiceError",
                e[e.customContainersComposeUpError = 1204] = "customContainersComposeUpError"
            }(s || (t.CodespaceErrorCodes = s = {}))
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    6074: function(e, t, r) {
        var o, n, s = r(48764).lW, i = this && this.__awaiter || function(e, t, r, o) {
            return new (r || (r = Promise))((function(n, s) {
                function i(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r((function(e) {
                        e(t)
                    }
                    ))).then(i, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        }
        ;
        o = [r, t, r(48459), r(33746)],
        n = function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.decryptCipherRecord = void 0;
            t.decryptCipherRecord = (e,t)=>i(void 0, void 0, void 0, (function*() {
                try {
                    const n = s.from(e.iv, "base64")
                      , i = new o.WebCipher(!1,t.method,t.methodMode,8 * t.key.length,8 * n.length);
                    yield i.init(t.key, n);
                    const a = s.from(e.payload, "base64")
                      , c = yield i.transform(a)
                      , d = c.slice(0, 4)
                      , u = (0,
                    r.bufferToInt)(d)
                      , l = c.slice(4).slice(0, u);
                    return l.toString("utf8")
                } catch (e) {
                    throw e
                }
            }
            ))
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    },
    42006: function(e, t, r) {
        var o, n, s = r(48764).lW, i = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
            void 0 === o && (o = r);
            var n = Object.getOwnPropertyDescriptor(t, r);
            n && !("get"in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, o, n)
        }
        : function(e, t, r, o) {
            void 0 === o && (o = r),
            e[o] = t[r]
        }
        ), a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        ), c = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && i(t, e, r);
            return a(t, e),
            t
        }
        , d = this && this.__awaiter || function(e, t, r, o) {
            return new (r || (r = Promise))((function(n, s) {
                function i(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r((function(e) {
                        e(t)
                    }
                    ))).then(i, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        }
        ;
        o = [r, t, r(52830), r(40993), r(33746)],
        n = function(e, t, r, o, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.encryptCipherPayload = void 0,
            r = c(r);
            t.encryptCipherPayload = (e,t)=>d(void 0, void 0, void 0, (function*() {
                try {
                    const i = r.default(16)
                      , a = new n.WebCipher(!0,t.method,t.methodMode,8 * t.key.length,8 * i.length)
                      , c = s.from(e, "utf8");
                    yield a.init(t.key, i);
                    const d = (0,
                    o.intToBytes)(c.length)
                      , u = s.concat([d, c]);
                    let l = a.blockLength - u.length % a.blockLength;
                    for (; l < 8; )
                        l += a.blockLength;
                    const E = s.concat([u, r.default(l)])
                      , p = yield a.transform(E);
                    return {
                        payload: p.toString("base64"),
                        iv: i.toString("base64")
                    }
                } catch (e) {
                    throw e
                }
            }
            ))
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    },
    72736: (e,t,r)=>{
        var o, n = r(48764).lW;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.enhanceEncryptionKeys = void 0;
            t.enhanceEncryptionKeys = e=>e.map((e=>({
                id: e.id,
                key: n.from(e.key, "base64"),
                expiresOn: parseInt(`${e.expiresOn}`, 10),
                method: "AES",
                methodMode: "CBC"
            })))
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    8957: function(e, t, r) {
        var o, n, s = this && this.__awaiter || function(e, t, r, o) {
            return new (r || (r = Promise))((function(n, s) {
                function i(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r((function(e) {
                        e(t)
                    }
                    ))).then(i, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        }
        ;
        o = [r, t, r(47035), r(6074), r(42006), r(21398), r(98099), r(27593)],
        n = function(e, t, r, o, n, i, a, c) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.localStorageKeychain = t.LocalStorageKeychain = t.trace = void 0,
            t.trace = a.mainTrace.createChild("LocalStorageKeychain");
            class d {
                get keys() {
                    return (0,
                    i.getKeychainKeys)().sort(((e,t)=>t.expiresOn - e.expiresOn))
                }
                readBookKeepingKeys() {
                    try {
                        const e = localStorage.getItem(r.ENTRIES_STORED_KEY);
                        if (!e)
                            return {};
                        return JSON.parse(e) || {}
                    } catch (e) {
                        return {}
                    }
                }
                writeBookKeeingKeys(e) {
                    try {
                        localStorage.setItem(r.ENTRIES_STORED_KEY, JSON.stringify(e))
                    } catch (e) {}
                }
                bookkeepKey(e) {
                    const t = this.readBookKeepingKeys();
                    t[e] = !0,
                    this.writeBookKeeingKeys(t)
                }
                removeBookkeepKey(e) {
                    const t = this.readBookKeepingKeys();
                    delete t[e],
                    this.writeBookKeeingKeys(t)
                }
                getCipherRecord(e) {
                    try {
                        const t = localStorage.getItem(e);
                        if (!t)
                            return;
                        return JSON.parse(t)
                    } catch (e) {
                        t.trace.error("Failed to get cipher record", e)
                    }
                }
                get(e) {
                    return s(this, void 0, void 0, (function*() {
                        let r = !1;
                        try {
                            const t = this.getCipherRecord(e);
                            if (!t)
                                throw r = !0,
                                new c.KeychainGetRecordError("Failed to get cipher record");
                            const n = this.getKeyToDecrypt(t.keyId);
                            if (!n)
                                throw r = !0,
                                new c.KeychainGetKeyError("Failed to get key to decrypt");
                            const s = yield(0,
                            o.decryptCipherRecord)(t, n);
                            if (!s)
                                throw r = !0,
                                new c.KeychainEncryptionError("Failed to decrypt record");
                            return {
                                succeeded: !0,
                                result: s
                            }
                        } catch (e) {
                            return r ? t.trace.verbose(e) : t.trace.error(e),
                            {
                                succeeded: !1,
                                error: e
                            }
                        }
                    }
                    ))
                }
                set(e, r) {
                    return s(this, void 0, void 0, (function*() {
                        let o = !1;
                        try {
                            const t = this.getKeyToEncrypt();
                            if (!t)
                                throw o = !0,
                                new c.KeychainGetKeyError("Failed to get key to encrypt");
                            const s = yield(0,
                            n.encryptCipherPayload)(r, t);
                            if (!s)
                                throw o = !0,
                                new c.KeychainEncryptionError("Failed to encrypt record");
                            const i = Object.assign(Object.assign({}, s), {
                                keyId: t.id
                            })
                              , a = JSON.stringify(i);
                            return localStorage.setItem(e, a),
                            this.bookkeepKey(e),
                            {
                                succeeded: !0
                            }
                        } catch (e) {
                            return o ? t.trace.verbose(e) : t.trace.error(e),
                            {
                                succeeded: !1,
                                error: e
                            }
                        }
                    }
                    ))
                }
                delete(e) {
                    return s(this, void 0, void 0, (function*() {
                        try {
                            return localStorage.removeItem(e),
                            this.removeBookkeepKey(e),
                            {
                                succeeded: !0
                            }
                        } catch (e) {
                            return t.trace.error(e),
                            {
                                succeeded: !1,
                                error: e
                            }
                        }
                    }
                    ))
                }
                getKeyToDecrypt(e) {
                    return this.keys.find((t=>t.id === e))
                }
                getKeyToEncrypt() {
                    if (this.isValidAesKey(this.keys[0]))
                        return this.keys[0];
                    throw new Error("No valid keys found.")
                }
                isValidAesKey(e) {
                    if (!e)
                        return !1;
                    return new Date(e.expiresOn).getTime() - Date.now() > 0
                }
                getAllKeys() {
                    const e = this.readBookKeepingKeys();
                    return e ? Object.keys(e) : []
                }
                deleteAll() {
                    return s(this, void 0, void 0, (function*() {
                        const e = this.readBookKeepingKeys()
                          , t = Object.keys(e);
                        for (let e of t)
                            yield this.delete(e)
                    }
                    ))
                }
                has(e) {
                    return !!this.readBookKeepingKeys()[e]
                }
            }
            t.LocalStorageKeychain = d,
            t.localStorageKeychain = new d
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    },
    21398: function(e, t, r) {
        var o, n, s = r(48764).lW, i = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
            void 0 === o && (o = r);
            var n = Object.getOwnPropertyDescriptor(t, r);
            n && !("get"in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, o, n)
        }
        : function(e, t, r, o) {
            void 0 === o && (o = r),
            e[o] = t[r]
        }
        ), a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        ), c = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && i(t, e, r);
            return a(t, e),
            t
        }
        ;
        o = [r, t, r(52830)],
        n = function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.isExpiredKey = t.addRandomKey = t.getRandomKey = t.setKeychainKeys = t.getKeychainKeys = t.defaultKey = t.invalidateGitHubKey = t.removeKey = t.addDefaultGithubKey = void 0,
            r = c(r);
            const o = "vso-random-keychain-key"
              , n = {
                id: "github-keychain-key",
                key: new s("ABCDEF0123456789"),
                expiresOn: Date.now() + 26784e5,
                method: "AES",
                methodMode: "CBC"
            };
            t.addDefaultGithubKey = ()=>{
                (0,
                t.removeKey)(n.id),
                u.push(n)
            }
            ;
            const i = e=>u.find((t=>t.id === e));
            t.removeKey = e=>{
                u = u.filter((t=>t.id !== e))
            }
            ;
            const a = ()=>Date.now() - 864e5
              , d = e=>{
                const r = i(e);
                r && (r && (0,
                t.removeKey)(e),
                u.push({
                    id: e,
                    key: r.key,
                    expiresOn: a(),
                    method: "AES",
                    methodMode: "CBC"
                }))
            }
            ;
            t.invalidateGitHubKey = ()=>d(n.id),
            t.defaultKey = {
                id: "012345827ccb0eea8a706c4c34a16891f84e7c",
                key: new s("0123456789ABCDEF"),
                expiresOn: a(),
                method: "AES",
                methodMode: "CBC"
            };
            let u = [];
            t.getKeychainKeys = ()=>[Object.assign({}, t.defaultKey), ...u];
            t.setKeychainKeys = e=>{
                const t = i(o);
                return u = [...e],
                t && u.push(Object.assign({}, t)),
                d(o),
                u
            }
            ;
            t.getRandomKey = ()=>{
                const e = i(o);
                if (!e)
                    throw new Error("Random key has to be present.");
                return e
            }
            ;
            t.addRandomKey = e=>{
                const n = i(o);
                let s = n ? n.key : r.default(16);
                e && (s = e),
                n && (0,
                t.removeKey)(o),
                u.push({
                    id: o,
                    key: s,
                    expiresOn: Date.now() + 864e5,
                    method: "AES",
                    methodMode: "CBC"
                })
            }
            ;
            t.isExpiredKey = e=>{
                const t = u.find((t=>t.id === e));
                return !t || t.expiresOn <= Date.now()
            }
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    },
    33746: function(e, t, r) {
        var o, n = r(48764).lW, s = this && this.__awaiter || function(e, t, r, o) {
            return new (r || (r = Promise))((function(n, s) {
                function i(e) {
                    try {
                        c(o.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(o.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? n(e.value) : (t = e.value,
                    t instanceof r ? t : new r((function(e) {
                        e(t)
                    }
                    ))).then(i, a)
                }
                c((o = o.apply(e, t || [])).next())
            }
            ))
        }
        ;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.WebCipher = void 0;
            t.WebCipher = class {
                get blockLength() {
                    return this.blockSizeInBits / 8
                }
                constructor(e, t, r, o, n) {
                    if (this.isEncryption = e,
                    this.algorithmName = t,
                    this.cipherMode = r,
                    this.keySizeInBits = o,
                    this.blockSizeInBits = n,
                    "AES" === this.algorithmName && "CTR" === this.cipherMode)
                        this.transform = this.aesCtr.bind(this, e);
                    else {
                        if ("AES" !== this.algorithmName || "CBC" !== this.cipherMode)
                            throw new Error(`Unsupported encryption algorithm: ${this.algorithmName}-${this.cipherMode}`);
                        this.transform = this.aesCbc.bind(this, e)
                    }
                }
                init(e, t) {
                    return s(this, void 0, void 0, (function*() {
                        try {
                            const t = `${this.algorithmName}-${this.cipherMode}`;
                            this.key = yield crypto.subtle.importKey("raw", e, {
                                name: t,
                                length: this.keySizeInBits
                            }, !1, this.isEncryption ? ["encrypt"] : ["decrypt"])
                        } catch (e) {
                            throw new Error("Failed to initialize AES: " + e)
                        }
                        this.iv = n.from(t)
                    }
                    ))
                }
                aesCtr(e, t) {
                    return s(this, void 0, void 0, (function*() {
                        if (t.length % this.blockLength != 0) {
                            const e = `Encrypt/decrypt input has invalid length ${t.length}, not a multiple of block size ${this.blockLength}.`;
                            throw new Error(e)
                        }
                        let r;
                        if (r = e ? n.from(yield crypto.subtle.encrypt({
                            name: "AES-CTR",
                            counter: this.iv,
                            length: this.blockSizeInBits
                        }, this.key, t)) : n.from(yield crypto.subtle.decrypt({
                            name: "AES-CTR",
                            counter: this.iv,
                            length: this.blockSizeInBits
                        }, this.key, t)),
                        r.length !== t.length) {
                            const e = `Result from encrypt/decrypt has invalid length ${r.length}, expected ${t.length}.`;
                            throw new Error(e)
                        }
                        const o = t.length / this.blockLength;
                        for (let e = 0; e < o; e++)
                            for (let e = this.iv.length - 1; e >= 0 && (this.iv[e] = this.iv[e] + 1,
                            !this.iv[e]); e--)
                                ;
                        return r
                    }
                    ))
                }
                aesCbc(e, t) {
                    return s(this, void 0, void 0, (function*() {
                        if (e) {
                            return n.from(yield crypto.subtle.encrypt({
                                name: "AES-CBC",
                                iv: this.iv
                            }, this.key, t))
                        }
                        {
                            const e = yield crypto.subtle.decrypt({
                                name: "AES-CBC",
                                iv: this.iv
                            }, this.key, t);
                            return n.from(e)
                        }
                    }
                    ))
                }
            }
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    },
    83714: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getHash = t.cleanupPIIForExternal = t.cleanupPII = t.obfusticateEmailAddresses = t.obfusticatePaths = void 0;
            const o = r(32337);
            t.obfusticatePaths = (e,t="")=>e.replace(/([A-Za-z]:)?(\S*[\\\/])+\S*/gi, ((e,r,o)=>{
                if (/^\d{1,4}\/\d{1,2}\/\d{1,4}$/.test(e))
                    return e;
                {
                    const n = (r ? r.length : 0) + o.length
                      , s = e.substr(n);
                    return t + s
                }
            }
            ));
            t.obfusticateEmailAddresses = e=>e.replace(/[\S]+@[\S]+/gi, "[EMAIL]");
            t.cleanupPII = e=>e ? (0,
            t.obfusticateEmailAddresses)((0,
            t.obfusticatePaths)(e, "[PATH]/")) : e;
            t.cleanupPIIForExternal = (e,r)=>e ? r : (0,
            t.cleanupPII)(r);
            t.getHash = e=>o.createHash("sha256").update(e).digest("hex")
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    98099: (e,t,r)=>{
        var o, n;
        o = [r, t, r(11627), r(93816)],
        n = function(e, t, r, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.mainTrace = void 0;
            const n = (0,
            r.randomString)(2);
            t.mainTrace = r.globalTrace.createChild(`web-client:${n}`),
            t.mainTrace.addTraceListener(new o.BrowserConsoleTraceListener(globalThis.console))
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    }
    ,
    95456: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CodespaceWorkspaceState = void 0,
            function(e) {
                e.Error = "Error",
                e.Unknown = "Unknown",
                e.Connected = "Connected"
            }(r || (t.CodespaceWorkspaceState = r = {}))
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    48459: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.bufferToInt = void 0;
            t.bufferToInt = e=>{
                let t = 0;
                const r = e.length - 1;
                for (let o = r; o >= 0; o--)
                    t += e[r - o] << 8 * o;
                return t
            }
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    47035: (e,t,r)=>{
        var o, n;
        o = [r, t, r(11627), r(77306), r(27593), r(50162), r(95456)],
        n = function(e, t, r, o, n, s, i) {
            "use strict";
            var a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.CODESPACES_INTERNAL_WEB_PORT = t.CODESPACES_INTERNAL_WEB_PORT_NAME = t.CODESPACES_INTERNAL_PORT_NAME = t.BASIS_CS_EXTENSION_NAME = t.HANDLED_HTTP_ERROR_MESSAGES = t.HANDLED_WEB_ERROR_TYPES = t.MAX_POLL_ATTEMPTS = t.MS_AUTH_EXTENSION_ID = t.GH_AUTH_EXTENSION_ID = t.MS_ACCOUNT_KEY = t.GH_ACCOUNT_KEY = t.PROVIDER_NAME = t.AUTH_FAILED_SCREEN_BUTTON_MESSAGE = t.AUTH_FAILED_SCREEN_MESSAGE = t.LOADING_ENVIRONMENT_STAGE = t.tipEntries = t.CODESPACES_EMBEDDER_NAME = t.PORT_FORWARDING_PRIVACY_PRIVATE_ORG = t.PORT_FORWARDING_PRIVACY_PUBLIC = t.PORT_FORWARDING_PRIVACY_PRIVATE = t.GITHUB_DARK_THEME_CSS_CLASS = t.vscodeRemoteResourcePathComponent = t.assetsPathComponent = t.FALLBACK_REDIRECT_URL = t.CODESPACES_EXTENSION_AUTHORITY = t.VSCODE_RECONNECTION_TIMEOUT = t.VSCODE_INITIAL_CONNECTION_TIMEOUT = t.WORKBENCH_REACT_ROOT_ELEMENT_ID = t.STATES_TO_RENDER_EARLY_WORKBENCH = t.STATES_TO_RENDER_WORKBENCH = t.CODESPACE_IN_PROGRESS_STATES = t.CS_FEATURESET_LOCALSTORAGE_KEY = t.GITHUB_PAYLOAD_DARK_THEME_NAME = t.SEARCH_PARAMS_KEY = t.WORKBENCH_TYPE_KEY = t.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY = t.PARTNER_INFO_KEYCHAIN_KEY = t.ENTRIES_STORED_KEY = t.TRUSTED_DOMAINS = t.PRIVACY_STATEMENT_URL = t.LICENSE_URL = t.DOCUMENTATION_URL = t.REMOTE_HUB_EXTENSION_NAME = t.AUTH_REDIRECT_FALLBACK_URL = t.EMBEDDER_NAME = t.CODESPACES_BUILT_IN_EXTENSIONS = t.WEB_EDITOR_BUILT_IN_EXTENSIONS = t.ENABLED_EXTENSIONS = t.GITHUB_TARBALL_PROXY_URL = t.SETTINGS_SYNC_AUTH_URL = t.FeatureSet = void 0,
            function(e) {
                e.Stable = "stable",
                e.Insider = "insider"
            }(a || (t.FeatureSet = a = {}));
            const c = "github.codespaces";
            t.EMBEDDER_NAME = "github.dev";
            t.REMOTE_HUB_EXTENSION_NAME = "github.remotehub";
            t.AUTH_REDIRECT_FALLBACK_URL = "https://github.com/auth/github_editor";
            t.DOCUMENTATION_URL = "https://github.co/codespaces-editor-help",
            t.SETTINGS_SYNC_AUTH_URL = "https://github.com/codespaces/allow_settings_sync",
            t.GITHUB_TARBALL_PROXY_URL = "https://github.dev/-tarball/{owner}/{repo}/{sha}",
            t.ENABLED_EXTENSIONS = [c],
            t.WEB_EDITOR_BUILT_IN_EXTENSIONS = [c, "ms-vscode.anycode"],
            t.CODESPACES_BUILT_IN_EXTENSIONS = t.ENABLED_EXTENSIONS,
            t.LICENSE_URL = "https://github.co/codespaces-terms",
            t.PRIVACY_STATEMENT_URL = "https://github.co/codespaces-privacy",
            t.TRUSTED_DOMAINS = ["https://github.co"],
            t.ENTRIES_STORED_KEY = "vsonline.keychain.keys",
            t.PARTNER_INFO_KEYCHAIN_KEY = "cs-partner-info",
            t.AUTH_ATTEMPTS_COUNT_LOCALSTORAGE_KEY = "cs-oauth-flow-attempt-count",
            t.WORKBENCH_TYPE_KEY = "cs-workbench-type",
            t.SEARCH_PARAMS_KEY = "cs-search-params",
            t.GITHUB_PAYLOAD_DARK_THEME_NAME = "GitHub Dark Default",
            t.CS_FEATURESET_LOCALSTORAGE_KEY = "cs-featureset",
            t.CODESPACE_IN_PROGRESS_STATES = [s.CodespaceStateInfo.Queued, s.CodespaceStateInfo.Starting, s.CodespaceStateInfo.Provisioning, s.CodespaceStateInfo.ShuttingDown, s.CodespaceStateInfo.Rebuilding, s.CodespaceStateInfo.Updating, i.CodespaceWorkspaceState.Unknown],
            t.STATES_TO_RENDER_WORKBENCH = [s.CodespaceStateInfo.Starting, s.CodespaceStateInfo.Available, i.CodespaceWorkspaceState.Connected],
            t.STATES_TO_RENDER_EARLY_WORKBENCH = [s.CodespaceStateInfo.Starting, s.CodespaceStateInfo.Provisioning, s.CodespaceStateInfo.Rebuilding, s.CodespaceStateInfo.Available, i.CodespaceWorkspaceState.Connected],
            t.WORKBENCH_REACT_ROOT_ELEMENT_ID = "js-vscode-workbench-placeholder",
            t.VSCODE_INITIAL_CONNECTION_TIMEOUT = 2 * r.TIME_MINUTE_MS,
            t.VSCODE_RECONNECTION_TIMEOUT = 15 * r.TIME_SECOND_MS,
            t.CODESPACES_EXTENSION_AUTHORITY = "codespaces",
            t.FALLBACK_REDIRECT_URL = "https://github.com/codespaces/",
            t.assetsPathComponent = "assets",
            t.vscodeRemoteResourcePathComponent = "vscode-remote-resource",
            t.GITHUB_DARK_THEME_CSS_CLASS = "github-dark",
            t.PORT_FORWARDING_PRIVACY_PRIVATE = "Private",
            t.PORT_FORWARDING_PRIVACY_PUBLIC = "Public",
            t.PORT_FORWARDING_PRIVACY_PRIVATE_ORG = "Private to Organization",
            t.CODESPACES_EMBEDDER_NAME = "codespaces",
            t.tipEntries = [{
                text: "Customize your codespace using a devcontainer.json file.",
                url: "https://aka.ms/codespaces-customize"
            }, {
                text: "Use the command palette to search and select commands in Visual Studio Code.",
                url: "https://aka.ms/codespaces-command-palette"
            }, {
                text: "See your application running with port forwarding.",
                url: "https://aka.ms/codespaces-forwarding-ports"
            }, {
                text: "Keep your sensitive information safe with native secret support.",
                url: "https://aka.ms/codespaces-managing-secrets"
            }],
            t.LOADING_ENVIRONMENT_STAGE = "loading...",
            t.AUTH_FAILED_SCREEN_MESSAGE = "We were unable to authenticate your session.",
            t.AUTH_FAILED_SCREEN_BUTTON_MESSAGE = "Try again.",
            t.PROVIDER_NAME = "Partner Info",
            t.GH_ACCOUNT_KEY = "github.auth",
            t.MS_ACCOUNT_KEY = "microsoft.login",
            t.GH_AUTH_EXTENSION_ID = "vscode.github-authentication",
            t.MS_AUTH_EXTENSION_ID = "vscode.microsoft-authentication",
            t.MAX_POLL_ATTEMPTS = 1500,
            t.HANDLED_WEB_ERROR_TYPES = [o.DisconnectedError, n.ThrottlingApiError, n.CodespacesPolicyViolationError, n.OutdatedCodespaceStateError, n.WorkbenchMountedTwiceError, o.CodespacesPendingOperationError, n.NetworkError, n.WebSocketError, n.ConnectionAbortedError],
            t.HANDLED_HTTP_ERROR_MESSAGES = ["400 You may have too many codespaces starting at the same time. Please stop some and try again.", "409 The codespace is already running", "400 You have too many codespaces running. Please stop some and try again.", "403 Sorry. Your account was suspended."],
            t.BASIS_CS_EXTENSION_NAME = "Github-Codespaces-Extension",
            t.CODESPACES_INTERNAL_PORT_NAME = "CodespacesInternal",
            t.CODESPACES_INTERNAL_WEB_PORT_NAME = t.CODESPACES_INTERNAL_PORT_NAME + "_web",
            t.CODESPACES_INTERNAL_WEB_PORT = 16635
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    }
    ,
    98221: (e,t,r)=>{
        var o, n;
        o = [r, t, r(83714)],
        n = function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.errorToObject = void 0;
            t.errorToObject = (e,t)=>{
                var o, n, s, i;
                const a = e;
                return {
                    errorCode: null !== (o = a.errorCode) && void 0 !== o ? o : -1,
                    errorType: null !== (n = a.errorType) && void 0 !== n ? n : "GenericError",
                    errorMessage: null !== (s = (0,
                    r.cleanupPII)(a.message)) && void 0 !== s ? s : "<no message>",
                    originalErrorType: null !== (i = a.originalErrorType) && void 0 !== i ? i : "[no original type]",
                    errorDidCatch: null != t && t,
                    stack: (0,
                    r.cleanupPII)(a.stack)
                }
            }
        }
        .apply(t, o),
        void 0 === n || (e.exports = n)
    }
    ,
    40993: (e,t,r)=>{
        var o, n = r(48764).lW;
        o = function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.intToBytes = void 0;
            t.intToBytes = (e,t=4)=>{
                const r = new n(t);
                for (let o = t - 1; o >= 0; o--)
                    r[o] = e >> 8 * o & 255;
                return r.reverse()
            }
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    98698: (e,t,r)=>{
        var o;
        o = function(e, t) {
            "use strict";
            var r, o, n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.IEditorType = t.FeatureSet = t.IWorkbenchType = void 0,
            function(e) {
                e.editor = "editor",
                e.codespaces = "codespaces",
                e.codespacesSimple = "codespaces-simple"
            }(r || (t.IWorkbenchType = r = {})),
            function(e) {
                e.Stable = "stable",
                e.Insider = "insider"
            }(o || (t.FeatureSet = o = {})),
            function(e) {
                e.vscode = "vscode",
                e.jupyter = "jupyter"
            }(n || (t.IEditorType = n = {}))
        }
        .apply(t, [r, t]),
        void 0 === o || (e.exports = o)
    }
    ,
    45545: ()=>{}
    ,
    46047: ()=>{}
    ,
    78028: ()=>{}
    ,
    50695: ()=>{}
    ,
    84215: ()=>{}
    ,
    47021: ()=>{}
    ,
    50471: ()=>{}
    ,
    71632: ()=>{}
    ,
    42782: ()=>{}
}]);
