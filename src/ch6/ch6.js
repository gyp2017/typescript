var $ = function (selector) {
};
$.fn.idol = function (idol) {
    if (idol) {
        $(this).data('idol', idol);
    }
    else {
        return $(this).data('idol');
    }
};
// var idol = { name: '모모' };
// var myEl = $('#my-idol');
// myEl.data('idol', idol);
// var savedIdol = myEl.data('idol');
// console.log(savedIdol);
// myEl.idol(idol);
// element.todo(todo);
var IdolState;
(function (IdolState) {
    IdolState[IdolState["Rookie"] = 0] = "Rookie";
    IdolState[IdolState["Active"] = 1] = "Active";
    IdolState[IdolState["Break"] = 2] = "Break";
    IdolState[IdolState["Retirement"] = 3] = "Retirement";
})(IdolState || (IdolState = {}));
function deleteIdol(idol) {
    if (idol.state != IdolState.Rookie) {
        throw "Can't delete incomplete task!";
    }
}
// var idol: { name: string };
// idol = { age: 20 };
function totalLength1(x, y) {
    var total = x.length + y.length;
    return total;
}
function totalLength2(x, y) {
    var total = x.length + y.length;
    return total;
}
