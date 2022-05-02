let column = [1, 8, 4, 5, 2]
let row = [3, 1, 2, 7, 1]

function chessBoard(column, row) {
    let resultColumn = 0
    let resultRow = 0
    let result = [resultColumn, resultRow]
    for (var i = 0; i < column.length; i++) {
        for (var j = 0; j < row.length; j++) {
            if (resultRow[i] > resultColumn[j]) {
                resultRow += 1
            } else { resultColumn += 1 }
        }
    }
}
console.log(chessBoard(column, row))