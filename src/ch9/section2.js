var GGApp;
(function (GGApp) {
    var Model;
    (function (Model) {
        var IdolState;
        (function (IdolState) {
            IdolState[IdolState["Rookie"] = 0] = "Rookie";
            IdolState[IdolState["Active"] = 1] = "Active";
            IdolState[IdolState["Break"] = 2] = "Break";
            IdolState[IdolState["Retirement"] = 3] = "Retirement";
        })(IdolState = Model.IdolState || (Model.IdolState = {}));
    })(Model = GGApp.Model || (GGApp.Model = {}));
})(GGApp || (GGApp = {}));
var DataAccess;
(function (DataAccess) {
    var _lastId = 0;
    function generateIdolId() {
        return _lastId += 1;
    }
    var IdolService = (function () {
        function IdolService(idols) {
            this.idols = idols;
        }
        IdolService.prototype.add = function (idol) {
            idol.id = generateIdolId();
            this.idols.push(idol);
            return idol;
        };
        IdolService.prototype.delete = function (idolId) {
            var toDelete = this.getById(idolId);
            var deletedIndex = this.idols.indexOf(toDelete);
            this.idols.splice(deletedIndex, 1);
        };
        IdolService.prototype.getAll = function () {
            var clone = JSON.stringify(this.idols);
            return JSON.parse(clone);
        };
        IdolService.prototype.getById = function (idolId) {
            var filterd = this.idols.filter(function (idol) { return idol.id == idolId; });
            if (filterd.length) {
                return filterd[0];
            }
            return null;
        };
        return IdolService;
    }());
})(DataAccess || (DataAccess = {}));
