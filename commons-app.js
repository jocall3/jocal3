"use strict";
(self.webpackChunkcodespaces_web_client = self.webpackChunkcodespaces_web_client || []).push([[693], {
    62688: (e,o,s)=>{
        var r = s(2260)
          , t = r
          , i = function() {
            return this ? this : "undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : Function("return this")()
        }
        .call(null);
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest", null, i),
        t.exportSymbol("proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse", null, i),
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.repeatedFields_, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.repeatedFields_, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse = function(e) {
            r.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        t.inherits(proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse, r.Message),
        t.DEBUG && !COMPILED && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.displayName = "proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse"),
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.repeatedFields_ = [2],
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.toObject = function(e, o) {
            var s, t = {
                clientid: r.Message.getFieldWithDefault(o, 1, ""),
                clientactivitiesList: null == (s = r.Message.getRepeatedField(o, 2)) ? void 0 : s
            };
            return e && (t.$jspbMessageInstance = o),
            t
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                switch (o.getFieldNumber()) {
                case 1:
                    var s = o.readString();
                    e.setClientid(s);
                    break;
                case 2:
                    s = o.readString();
                    e.addClientactivities(s);
                    break;
                default:
                    o.skipField()
                }
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.serializeBinaryToWriter = function(e, o) {
            var s = void 0;
            (s = e.getClientid()).length > 0 && o.writeString(1, s),
            (s = e.getClientactivitiesList()).length > 0 && o.writeRepeatedString(2, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.getClientid = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.setClientid = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.getClientactivitiesList = function() {
            return r.Message.getRepeatedField(this, 2)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.setClientactivitiesList = function(e) {
            return r.Message.setField(this, 2, e || [])
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.addClientactivities = function(e, o) {
            return r.Message.addToRepeatedField(this, 2, e, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityRequest.prototype.clearClientactivitiesList = function() {
            return this.setClientactivitiesList([])
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.toObject = function(e, o) {
            var s = {
                result: r.Message.getBooleanFieldWithDefault(o, 1, !1),
                message: r.Message.getFieldWithDefault(o, 2, "")
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                switch (o.getFieldNumber()) {
                case 1:
                    var s = o.readBool();
                    e.setResult(s);
                    break;
                case 2:
                    s = o.readString();
                    e.setMessage(s);
                    break;
                default:
                    o.skipField()
                }
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.serializeBinaryToWriter = function(e, o) {
            var s = void 0;
            (s = e.getResult()) && o.writeBool(1, s),
            (s = e.getMessage()).length > 0 && o.writeString(2, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.prototype.getResult = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.prototype.setResult = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.prototype.getMessage = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.NotifyCodespaceOfClientActivityResponse.prototype.setMessage = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.toObject = function(e, o) {
            var s = {
                filepath: r.Message.getFieldWithDefault(o, 1, "")
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readString();
                    e.setFilepath(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getFilepath()).length > 0 && o.writeString(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.prototype.getFilepath = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ExportLogsResponse.prototype.setFilepath = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.toObject = function(e, o) {
            var s = {
                containerpersistedfolderpath: r.Message.getFieldWithDefault(o, 1, "")
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readString();
                    e.setContainerpersistedfolderpath(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getContainerpersistedfolderpath()).length > 0 && o.writeString(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.prototype.getContainerpersistedfolderpath = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetContainerPersistedFolderPathResponse.prototype.setContainerpersistedfolderpath = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.toObject = function(e, o) {
            var s = {
                isrecoverycontainer: r.Message.getBooleanFieldWithDefault(o, 1, !1)
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readBool();
                    e.setIsrecoverycontainer(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getIsrecoverycontainer()) && o.writeBool(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.prototype.getIsrecoverycontainer = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.IsRecoveryContainerResponse.prototype.setIsrecoverycontainer = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.toObject = function(e, o) {
            var s = {
                terminateoryxtask: r.Message.getBooleanFieldWithDefault(o, 1, !1)
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readBool();
                    e.setTerminateoryxtask(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getTerminateoryxtask()) && o.writeBool(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.prototype.getTerminateoryxtask = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminateOryxTaskResponse.prototype.setTerminateoryxtask = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.toObject = function(e, o) {
            var s = {
                cpuusage: r.Message.getFieldWithDefault(o, 1, ""),
                memoryused: r.Message.getFieldWithDefault(o, 2, ""),
                dockerlibdiskused: r.Message.getFieldWithDefault(o, 3, "")
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                switch (o.getFieldNumber()) {
                case 1:
                    var s = o.readString();
                    e.setCpuusage(s);
                    break;
                case 2:
                    s = o.readString();
                    e.setMemoryused(s);
                    break;
                case 3:
                    s = o.readString();
                    e.setDockerlibdiskused(s);
                    break;
                default:
                    o.skipField()
                }
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.serializeBinaryToWriter = function(e, o) {
            var s = void 0;
            (s = e.getCpuusage()).length > 0 && o.writeString(1, s),
            (s = e.getMemoryused()).length > 0 && o.writeString(2, s),
            (s = e.getDockerlibdiskused()).length > 0 && o.writeString(3, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.getCpuusage = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.setCpuusage = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.getMemoryused = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.setMemoryused = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.getDockerlibdiskused = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.GetPerformanceDataResponse.prototype.setDockerlibdiskused = function(e) {
            return r.Message.setProto3StringField(this, 3, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.ConfigureEnvironmentResponse.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.toObject = function(e, o) {
            var s = {
                incremental: r.Message.getBooleanFieldWithDefault(o, 1, !1)
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readBool();
                    e.setIncremental(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.serializeBinaryToWriter = function(e, o) {
            var s;
            null != (s = r.Message.getField(e, 1)) && o.writeBool(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.prototype.getIncremental = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.prototype.setIncremental = function(e) {
            return r.Message.setField(this, 1, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.prototype.clearIncremental = function() {
            return r.Message.setField(this, 1, void 0)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerRequest.prototype.hasIncremental = function() {
            return null != r.Message.getField(this, 1)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.toObject = function(e, o) {
            var s = {
                rebuildcontainer: r.Message.getBooleanFieldWithDefault(o, 1, !1)
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readBool();
                    e.setRebuildcontainer(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getRebuildcontainer()) && o.writeBool(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.prototype.getRebuildcontainer = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.RebuildContainerResponse.prototype.setRebuildcontainer = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.toObject = function(e, o) {
            var s = {
                id: r.Message.getFieldWithDefault(o, 1, "")
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readString();
                    e.setId(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getId()).length > 0 && o.writeString(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamRequest.prototype.setId = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.repeatedFields_ = [4],
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.toObject = function(e, o) {
            var s = {
                id: r.Message.getFieldWithDefault(o, 1, ""),
                type: r.Message.getFieldWithDefault(o, 2, ""),
                payload: r.Message.getFieldWithDefault(o, 3, ""),
                previouseventsList: r.Message.toObjectList(o.getPreviouseventsList(), proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.toObject, e)
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                switch (o.getFieldNumber()) {
                case 1:
                    var s = o.readString();
                    e.setId(s);
                    break;
                case 2:
                    s = o.readString();
                    e.setType(s);
                    break;
                case 3:
                    s = o.readString();
                    e.setPayload(s);
                    break;
                case 4:
                    s = new proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse;
                    o.readMessage(s, proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.deserializeBinaryFromReader),
                    e.addPreviousevents(s);
                    break;
                default:
                    o.skipField()
                }
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.serializeBinaryToWriter = function(e, o) {
            var s = void 0;
            (s = e.getId()).length > 0 && o.writeString(1, s),
            (s = e.getType()).length > 0 && o.writeString(2, s),
            (s = e.getPayload()).length > 0 && o.writeString(3, s),
            (s = e.getPreviouseventsList()).length > 0 && o.writeRepeatedMessage(4, s, proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.serializeBinaryToWriter)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.setId = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.getType = function() {
            return r.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.setType = function(e) {
            return r.Message.setProto3StringField(this, 2, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.getPayload = function() {
            return r.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.setPayload = function(e) {
            return r.Message.setProto3StringField(this, 3, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.getPreviouseventsList = function() {
            return r.Message.getRepeatedWrapperField(this, proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse, 4)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.setPreviouseventsList = function(e) {
            return r.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.addPreviousevents = function(e, o) {
            return r.Message.addToRepeatedWrapperField(this, 4, e, proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.EventStreamResponse.prototype.clearPreviouseventsList = function() {
            return this.setPreviouseventsList([])
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.toObject = function(e, o) {
            var s = {
                id: r.Message.getFieldWithDefault(o, 1, "")
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readString();
                    e.setId(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getId()).length > 0 && o.writeString(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.prototype.getId = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeRequest.prototype.setId = function(e) {
            return r.Message.setProto3StringField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.toObject = function(e, o) {
            var s = {
                success: r.Message.getBooleanFieldWithDefault(o, 1, !1)
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readBool();
                    e.setSuccess(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getSuccess()) && o.writeBool(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.prototype.getSuccess = function() {
            return r.Message.getBooleanFieldWithDefault(this, 1, !1)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.UnsubscribeResponse.prototype.setSuccess = function(e) {
            return r.Message.setProto3BooleanField(this, 1, e)
        }
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.toObject = function(e, o) {
            var s = {};
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                o.getFieldNumber();
                o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamRequest.serializeBinaryToWriter = function(e, o) {}
        ,
        r.Message.GENERATE_TO_OBJECT && (proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.prototype.toObject = function(e) {
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.toObject(e, this)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.toObject = function(e, o) {
            var s = {
                payload: o.getPayload_asB64()
            };
            return e && (s.$jspbMessageInstance = o),
            s
        }
        ),
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.deserializeBinary = function(e) {
            var o = new r.BinaryReader(e)
              , s = new proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.deserializeBinaryFromReader(s, o)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.deserializeBinaryFromReader = function(e, o) {
            for (; o.nextField() && !o.isEndGroup(); ) {
                if (1 === o.getFieldNumber()) {
                    var s = o.readBytes();
                    e.setPayload(s)
                } else
                    o.skipField()
            }
            return e
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.prototype.serializeBinary = function() {
            var e = new r.BinaryWriter;
            return proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.serializeBinaryToWriter(this, e),
            e.getResultBuffer()
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.serializeBinaryToWriter = function(e, o) {
            var s;
            (s = e.getPayload_asU8()).length > 0 && o.writeBytes(1, s)
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.prototype.getPayload = function() {
            return r.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.prototype.getPayload_asB64 = function() {
            return r.Message.bytesAsB64(this.getPayload())
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.prototype.getPayload_asU8 = function() {
            return r.Message.bytesAsU8(this.getPayload())
        }
        ,
        proto.Codespaces.Grpc.CodespaceHostService.v1.TerminalStreamResponse.prototype.setPayload = function(e) {
            return r.Message.setProto3BytesField(this, 1, e)
        }
        ,
        t.object.extend(o, proto.Codespaces.Grpc.CodespaceHostService.v1)
    }
}]);
