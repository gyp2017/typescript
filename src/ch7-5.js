var IdolState;
(function (IdolState) {
    IdolState[IdolState["Rookie"] = 0] = "Rookie";
    IdolState[IdolState["Active"] = 1] = "Active";
    IdolState[IdolState["Break"] = 2] = "Break";
    IdolState[IdolState["Retirement"] = 3] = "Retirement";
})(IdolState || (IdolState = {}));
var IdolStateChanger = (function () {
    function IdolStateChanger(newState) {
        this.newState = newState;
    }
    IdolStateChanger.prototype.canChangeState = function (idol) {
        return !!idol;
    };
    IdolStateChanger.prototype.changeState = function (idol) {
        if (this.canChangeState(idol)) {
            idol.state = this.newState;
        }
        return idol;
    };
    return IdolStateChanger;
}());
