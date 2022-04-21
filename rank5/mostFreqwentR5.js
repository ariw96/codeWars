let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let sumStartAt = 0
let sumEndAt = arr.length
let tempSumStart = -999999999999999999999999999999999999999999999
let tempSumLast = -999999999999999999999999999999999999999999999999
let sum = function getSum(arr) {
    let sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return sum
}
let result = sum(arr) //
while (arr[0] < 0) {
    arr.shift()
}
while (arr[arr.length - 1] < 0) {
    arr.pop()
}

for (let i = 0; i < arr.length; i++) {
    if (sum(arr.slice(i)) > sum(arr) && sum(arr.slice(i)) > tempSumStart) {
        sumStartAt = i;
        tempSumStart = sum(arr.slice(sumStartAt, sumEndAt));
        result = tempSumStart
    }
    if (sum(arr.slice(sumStartAt, arr.length - i)) > sum(arr) && sum(arr.slice(sumStartAt, arr.length - i)) > tempSumLast) {
        sumEndAt = arr.length - i;
        tempSumLast = sum(arr.slice(sumStartAt, sumEndAt));
        result = tempSumLast
    }

}






console.log(sum(arr.slice(sumStartAt))) //?
console.log(sum(arr.slice(sumStartAt, sumEndAt)))
console.log(arr.length)
console.log(sumStartAt)
console.log(sumEndAt)