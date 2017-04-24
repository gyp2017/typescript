var IdolService = (function () {
    function IdolService() {
    }
    IdolService.prototype.add = function (idol) {
        var newId = IdolService.getNextId();
    };
    IdolService.prototype.getAll = function () {
    };
    IdolService.getNextId = function () {
        return IdolService.lastId += 0;
    };
    return IdolService;
}());
IdolService.lastId = 0;
