(function high(str) {
    let arr = str.toUpperCase().split(' ');
    let arrNum = [];
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].split('');
        let total = 0;
        for (let j = 0; j < arr[i].length; j++) {

            total += (arr[i][j].charCodeAt() - 64)
        }
        arrNum.push(total)
    }
    let max = Math.max(...arrNum)
    let index = arrNum.indexOf(max)
    console.log(arr, arrNum, max, index, arr[index].toLowerCase())
})('a b ab are we climbing up the volcano')