var container = document.getElementById('container');
function countdown(_a) {
    var current = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
countdown({
    initial: 10
});
