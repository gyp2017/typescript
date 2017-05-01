System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IdolState;
    return {
        setters: [],
        execute: function () {
            (function (IdolState) {
                IdolState[IdolState["Rookie"] = 0] = "Rookie";
                IdolState[IdolState["Active"] = 1] = "Active";
                IdolState[IdolState["Break"] = 2] = "Break";
                IdolState[IdolState["Retirement"] = 3] = "Retirement";
            })(IdolState || (IdolState = {}));
            exports_1("IdolState", IdolState);
        }
    };
});
