var IdolState;
(function (IdolState) {
    IdolState[IdolState["Rookie"] = 0] = "Rookie";
    IdolState[IdolState["Active"] = 1] = "Active";
    IdolState[IdolState["Break"] = 2] = "Break";
    IdolState[IdolState["Retirement"] = 3] = "Retirement";
})(IdolState || (IdolState = {}));
var idol = {
    name: '사나',
    get state() {
        return this._state;
    },
    set state(newState) {
        if (newState == IdolState.Retirement) {
            var canBeRetirement = this._state == IdolState.Active ||
                this._state == IdolState.Break;
            if (!canBeRetirement) {
                throw 'Idol must be Active or Braek in order to be marked as Retirement';
            }
        }
        this._state = newState;
    }
};
console.log(idol.name);
console.log(idol.state);
idol.state = IdolState.Rookie;
console.log(idol.state);
idol.state = IdolState.Active;
console.log(idol.state);
idol.state = IdolState.Retirement;
console.log(idol.state);
var SmartIdol = (function () {
    function SmartIdol(name) {
        this.name = name;
    }
    Object.defineProperty(SmartIdol.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            if (newState == IdolState.Retirement) {
                var canBeRetirement = this._state == IdolState.Active ||
                    this._state == IdolState.Break;
                if (!canBeRetirement) {
                    throw 'Idol must be Active or Braek in order to be marked as Retirement';
                }
            }
            this._state = newState;
        },
        enumerable: true,
        configurable: true
    });
    return SmartIdol;
}());
var jIdol = new SmartIdol("전효성");
jIdol.state = IdolState.Rookie;
jIdol.state = IdolState.Retirement;
