let a = [1, 2, 3, ]
let b = [4, 5, 6, ]
if
let newArr = []
if (a[a.length - 1] < b[0]) {
    for (let j = 0; j < a.length; j++) {
        newArr.push(a[j])
    }
    if (a[a.length - 1] < b[0]) { return [...a, ...b] }
    if (b[b.length - 1] < a[0]) { return [...b...a] }
    for (let j = 0; j < a.length; j++) {
        newArr.push(b[j])
    } else {
        for (let j = 0; j < a.length; j++) {
            newArr.push(a[j])
            newArr.push(b[j])
        }

    }

}

console.log(newArr)
return newArr