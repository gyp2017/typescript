function solution(board)
{
    var length = maxLength(board);
    for (var i = length; i > 1; i--) {
        if (findSqure(board, i)) {
            return i * i;
        }
    }
    return 1;
}

function maxLength(arr) {
    var row = arr.length;
    var column = arr[0].length;
    return Math.min(row, column);
}

function findSqure(arr, length) {
    var iMax = arr.length - length;
    var jMax = arr[0].length - length;
    for (var i = 0; i <= iMax; i++) {
        for (var j = 0; j <= jMax; j++) {

            var rows = [];
            for (var r = i; r < length + i; r++) {
                var columns = [];
                for (var c = j; c < length + j; c++) {
                    columns.push(arr[r][c]);
                }
                rows.push(columns);
            }
            if (checkSqure(rows)) {
                return true;
            }
        }
    }
}

function checkSqure(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != 1) {
                return false;
            }
        }
    }
    return true;
}
