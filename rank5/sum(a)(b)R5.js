let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]
let newArr = []
let result;
for (let i = 0; i < arr.length; i++) {

    newArr.push(arr.reduce((total, x) => (x == arr[i] ? total + 1 : total), 0))
}
for (let i = 0; i < arr.length; i++) {
    if (
        Math.max(...newArr) === newArr[i]
    ) {
        result = arr[i];
        break;
    }
}
return result