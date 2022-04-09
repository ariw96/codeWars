(function(iterable) {
    let arr = iterable
    let result = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }
    }


    console.log(arr, result)
})('AAAABBBCCDAABBB')