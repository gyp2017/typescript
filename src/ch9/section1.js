var GirlGroupApp;
(function (GirlGroupApp) {
    var Model;
    (function (Model) {
        var IdolState;
        (function (IdolState) {
            IdolState[IdolState["Rookie"] = 0] = "Rookie";
            IdolState[IdolState["Active"] = 1] = "Active";
            IdolState[IdolState["Break"] = 2] = "Break";
            IdolState[IdolState["Retirement"] = 3] = "Retirement";
        })(IdolState = Model.IdolState || (Model.IdolState = {}));
    })(Model = GirlGroupApp.Model || (GirlGroupApp.Model = {}));
})(GirlGroupApp || (GirlGroupApp = {}));
