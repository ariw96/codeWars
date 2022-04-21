function generateDiagonal(n, l) {
    let arr = []

    let fact = function factorialize(num) {
        if (num < 2) return 1;
        return num *= factorialize(num - 1);
    }
    let factRise = function factorializeRizing(num) {
        let factRise = num
        for (let i = 1; i < num; i++) {
            factRise *= (num + i)
        }
        return factRise
    }
    if (n === 1) {
        for (let i = 1; i <= l; i++) {
            arr.push(i)
        }
    }
    if (n === 2) {
        for (let i = 1; i <= l; i++) {
            arr.push((i(i + 1)) / 2)
        }
    }
    if (n > 2) {
        for (let i = 1; i <= l; i++) {
            arr.push(factRise(i) / fact(i))
        }
    }

    return arr
}
console.log(generateDiagonal(3, 7))