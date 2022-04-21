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
console.log(factRise(5) / fact(5))