(function high(str) {
    let arr = str.split(' ');
    let arrNum = [];
    for (let i = 0; i < arr.length; i += 1) {
        let total = 0;
        for (let j = 0; j < arr[i].length; j++) {
            total += str.charCodeAt(j)
        }
        arrNum.push(total)

    }
    let high = arrNum.reduce(function(a, b) {
        if (a > b) {
            return a;
        } else {
            return b
        }
    })


    console.log(arrNum, high)
})('manyua lytddddt hh a')