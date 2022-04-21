let battlefield = 'abde[fgh]ij#k'
let numbersOfStrikes = battlefield.split("#").length - 1,
    flagBomber = 0,
    flagShelter = 0
    // kill who is out of shelter
if (numbersOfStrikes > 0) {
    battlefield = battlefield.split('').reduce(function(accumulator, currentValue) {
        if (currentValue === "#") {
            return accumulator += currentValue;
        }
        if (flagShelter === 0 && currentValue === "[") {
            flagShelter = 1;
            return accumulator += currentValue;
        }
        if (currentValue === "]") {
            flagShelter = 0;
            return accumulator += currentValue;
        }
        if (flagShelter === 0) {
            return accumulator
        }
        if (flagShelter === 1) {
            return accumulator += currentValue;
        }
    }, '');
}
if (numbersOfStrikes <= 1) {
    battlefield = battlefield.split('').reduce(function(accumulator, currentValue) {
        if (currentValue === "#" || currentValue === "[" || currentValue === "]") {
            return accumulator
        } else return accumulator += currentValue;
    }, '');
}
ler arr = battlefield.split("#")
for (var i = 0; i < arr.length; i++) {
    if (arr[i - 1] === "" || arr[i + 1] === "") {
        arr[i] = "kill"
    }
}

for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i][0] === "[" && arr[i][arr[i].length - 1] === ']' && !arr[i].includes('][')) {
        arr[i] = 'kill'
    }
}
for (var i = 1; i < arr.length; i++) {
    if (arr[i] === "kill") arr[i] = ""
}
return arr;

console.log(battlefield)