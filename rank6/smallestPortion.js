let n = -31002
let arr = n.toString().split('')
if (n < 0) {
    arr.shift()
}
arr.sort();
for (let i = 0; i < arr.length; i++) {
    if (arr[0] === '0') {
        arr[0] = arr[i]
        arr[i] = '0'
    } else {
        i = arr.length;
    }
}
if (n < 0) {
    arr.unshift('-');
}
let result = parseInt(arr.join(''))
return result

console.log(arr, result)