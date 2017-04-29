var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    IdolStateChanger.prototype.changeState = function (idol) {
        if (this.canChangeState(idol)) {
            idol.state = this.newState;
        }
        return idol;
    };
    return IdolStateChanger;
}());
var RetirementIdolStateChanger = (function (_super) {
    __extends(RetirementIdolStateChanger, _super);
    function RetirementIdolStateChanger() {
        return _super.call(this, IdolState.Retirement) || this;
    }
    RetirementIdolStateChanger.prototype.canChangeState = function (idol) {
        return !!idol && (idol.state == IdolState.Active ||
            idol.state == IdolState.Retirement);
    };
    return RetirementIdolStateChanger;
}(IdolStateChanger));
// Error!!!
// new IdolStateChanger();
