System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function generateIdolId() {
        return _lastId += 1;
    }
    var _lastId, IdolService;
    return {
        setters: [],
        execute: function () {
            _lastId = 0;
            IdolService = (function () {
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
            exports_1("IdolService", IdolService);
        }
    };
});
