let array1 = ["xyz", "live", "strong"]
let array2 = ["lively", "alive", "harp", "sharp", "armstrong"]
let str = array2.join(' ');
let array3 = [];
for (let i = 0; i < array1.length; i++) {
    if (str.includes(array1[i])) { array3.push(array1[i]) }
}
console.log(array2.join(' '), array3)