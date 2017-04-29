var IdolState;
(function (IdolState) {
    IdolState[IdolState["Rookie"] = 0] = "Rookie";
    IdolState[IdolState["Active"] = 1] = "Active";
    IdolState[IdolState["Break"] = 2] = "Break";
    IdolState[IdolState["Retirement"] = 3] = "Retirement";
})(IdolState || (IdolState = {}));
var IdolService = (function () {
    function IdolService() {
    }
    IdolService.prototype.add = function (idol) {
        idol.id = this.nextId;
        this.idols.push(idol);
        return idol;
    };
    IdolService.prototype.delete = function () {
    };
    IdolService.prototype.getAll = function () {
    };
    IdolService.prototype.getById = function () {
    };
    IdolService.getNextId = function () {
        return IdolService.lastId += 0;
    };
    return IdolService;
}());
IdolService.lastId = 0;
