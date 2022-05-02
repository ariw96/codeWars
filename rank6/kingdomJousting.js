function joust(listField, vKnightLeft, vKnightRight) {
    while (listField[1].indexOf('<') > listField[0].indexOf('>')) {
        if (vKnightLeft !== 0) {
            listField[0] = ' '.repeat(vKnightLeft) + listField[0].slice(0, -(vKnightLeft))
        }
        if (vKnightRight !== 0) {
            listField[1] = listField[1].slice(vKnightRight) + " ".repeat(vKnightRight)
        }
        if (vKnightRight === 0 && vKnightLeft === 0) {
            return listField
        }

    }
    return listField

}


console.log(joust(["$->111", "111<-P"], , 1))