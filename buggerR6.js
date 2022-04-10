// let num = 49;
// let arr = [num]
// let x = num.toString().length;
// while (num !== num % x) {
//     num = (num % x) * ((num - (num % x)) / x)
//     arr.push(num)
// }
// console.log(x)
// function divid(num) {




//     if (num !== 1) { return divid(num / 10); }
//     return num
// }
// console.log(divid(1000))
let num = 39
let arrNum = [num]
while (num > 9) {
    arr = num.toString().split('').map(x => parseInt(x)); // convert to arr digits

    num = arr.reduce(function(accumulator, currentValue) { //define next num
        return accumulator * currentValue;
    }, 1);
    arrNum.push(num) // push  it to arr
}
console.log(arrNum.length)
return arrNum.length;