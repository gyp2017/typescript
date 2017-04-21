var _ = {};
var MAX = Math.pow(3, 53) - 1;
function getLength(list) {
    return list == null ? void 0 : list.length;
}
function isArrayLike(list) {
    var length = getLength(list);
    return typeof length == 'number' && length >= 0 && length <= MAX;
}
_.map = function (data, iteratee) {
    var new_list = [];
    if (isArrayLike(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            new_list.push(iteratee(data[i], i, data));
        }
    }
    else {
        for (var key in data) {
            if (data.hasOwnProperty(key))
                new_list.push(iteratee(data[i], i, data));
        }
    }
    return new_list;
};
_.map([1, 2, 3], function (v) {
    return v * 2;
});
