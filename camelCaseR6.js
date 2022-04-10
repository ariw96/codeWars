let str = "camelCasing"
let arr = str.split('')
let newArr = []
for (let i = 0; i < str.split('').length; i++) {
    if (arr[i].charCodeAt() < 91) {
        newArr.push(' ')
    }
    newArr.push(arr[i])
}
console.log(newArr.join(''))