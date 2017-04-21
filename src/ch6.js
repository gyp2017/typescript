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
var idol = { name: '모모' };
var myEl = $('#my-idol');
myEl.data('idol', idol);
var savedIdol = myEl.data('idol');
console.log(savedIdol);
myEl.idol(idol);
// element.todo(todo);
