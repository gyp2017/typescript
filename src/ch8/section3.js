// function totalLength(x: { length: number }, y: { length: number }) {
//   var total: number = x.length + y.length;
//   return total;
// }
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
function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}
var length = totalLength([1, 2], [1, 2, 3]);
var CustomArray = (function (_super) {
    __extends(CustomArray, _super);
    function CustomArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomArray.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return CustomArray;
}(Array));
var KeyValuePair = (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var KeyValuePairPrinter = (function () {
    function KeyValuePairPrinter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePairPrinter.prototype.print = function () {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p.key + ": " + p.value);
        }
    };
    return KeyValuePairPrinter;
}());
var pair1 = new KeyValuePair(1, 'First');
var pair2 = new KeyValuePair('2', new Date(Date.now()));
var pair3 = new KeyValuePair(3, 'Third');
var pairs = new KeyValuePairPrinter([pair1, pair3]);
