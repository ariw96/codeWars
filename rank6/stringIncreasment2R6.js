let str = "foobar0099"
let arr = str.split("")
let numArr = []
let newStr = ""
for (let i = 0; i < arr.length; i++) {
    if (!/[a-z]/ig.test(arr[i])) {
        numArr.push(parseInt(arr[i]))
    } else {
        newStr += arr[i]
    }
}

if (numArr[0] === 9 && numArr[numArr.length - 1] === 9) { numArr.unshift(0) }
for (let i = numArr.length - 1; i >= 0; i--) {
    if (numArr[i - 1] === 0 && numArr[i] === 9) { numArr[i - 1] += 1 }
    if (numArr[i] === 9) {
        numArr[i] = 0
        continue
    }
    if (numArr[i] !== 9 && i === (numArr.length - 1)) {
        numArr[i] += 1
    }
}
console.log(newStr + numArr.join(""))
return newStr + numArr.join("")