System.register(["./Model", "./DataAccess"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Model_1, DataAccess_1, service, idols;
    return {
        setters: [
            function (Model_1_1) {
                Model_1 = Model_1_1;
            },
            function (DataAccess_1_1) {
                DataAccess_1 = DataAccess_1_1;
            }
        ],
        execute: function () {
            service = new DataAccess_1.IdolService([]);
            service.add({
                id: 1,
                name: '모모',
                state: Model_1.IdolState.Active
            });
            service.add({
                name: '사나',
                state: Model_1.IdolState.Rookie
            });
            service.add({
                name: '정연',
                state: Model_1.IdolState.Retirement
            });
            service.add({
                name: '쯔위',
                state: Model_1.IdolState.Break
            });
            idols = service.getAll();
            idols.forEach(function (idol) {
                return console.log(idol.name + " [" + Model_1.IdolState[idol.state] + "]");
            });
        }
    };
});
