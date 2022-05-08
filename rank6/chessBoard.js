let column = [1, 8, 4, 5, 2]
let row = [3, 1, 2, 7, 1]


function chessBoard(cols, rows) {
    let black = 0
    let white = 0
    let w1 = 0;
    let w2 = 0;
    let h1 = 0;
    let h2 = 0;
    for (let i = 0; i < cols.length; i++) {
        if (i % 2 === 0) {
            w1 += cols[i]
            h1 += rows[i]
        } else {
            w2 += cols[i]
            h2 += rows[i]
        }
    }


    black = w1 * h1 + w2 * h2;
    white = h1 * w2 + h2 * w1;

    return [white, black]

}
console.log(chessBoard(row, column))