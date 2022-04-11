let dice = [6, 5, 6, 3, 1]
const countOccurrences = (dice, i) => dice.reduce((a, v) => (v === i ? a + 1 : a), 0);
let score = 0;
let sortDice = dice.sort()
console.log(sortDice)
console.log(countOccurrences(sortDice, 6));