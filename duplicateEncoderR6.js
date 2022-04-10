let string = 'recede'
let str = string.toLowerCase()
let newStr = ''
let num;
for (let i = 0; i < str.length; i++) {
    num = str.split(str[i]).length - 1
    if (num > 1) {
        newStr += ")"
    } else { newStr += "(" }
}
return newStr
console.log(newStr)