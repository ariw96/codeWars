let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
let newArr = []
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
        newArr.unshift(arr[i])
    } else { newArr.push(arr[i]) }
}
console.log(newArr)