// const chai = require("chai");
// const assert = chai.assert;

(function spinWords(str) {
    let arrResult = [];
    let arr = [];
    arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            arrResult.push(arr[i].split('').reverse().join(''))
            console.log(arrResult)
        } else arrResult.push(arr[i])

    }
    console.log(arrResult.join(' '));

})
('Welcome 123456 123')