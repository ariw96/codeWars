// const chai = require("chai");
// const assert = chai.assert;

function spinWords(str) {
    let resulte = '';

    let arr = [];
    arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 4) {
            resulte = resulte.conact(" ", arr[i].split("").reverse().join(""))
        } else {
            resulte = resulte.concact(" ", arr[i])
        }
        console.log(resulte)
    }
}
spinWords('Welcome')