let column = [1, 8, 4, 5, 2]
let row = [3, 1, 2, 7, 1]
let widthC = 0;
let widthR = 0;

function chessBoard(cols, rows) {
    let black = 0
    let white = 0

    for (var j = 0; j < cols.length; j += 2) {

        for (var i = 0; i < row.length; i += 2) {
            if ((i % 2) === (j % 2)) {
                white += rows[i] * cols[j]
            } else { black += rows[i] * cols[j] }

        }
    }
    for (var j = 1; j < cols.length; j += 2) {

        for (var i = 1; i < rows.length; i += 2) {
            if ((i % 2) === (j % 2)) {
                white += rows[i] * cols[j]
            } else { black += rows[i] * cols[j] }

        }
    }
    for (var j = ; j < cols.length; j++) {
        widthR += rows[j]
        widthC += cols[j]

    }
    black = widthR * widthC - white
    console.log(black, white)
    return [white, black]
}
console.log(chessBoard(row, column))