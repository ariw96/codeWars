let braces = '()[{}'
let arr = braces.split('')
    // let result;
    // console.log(`${arr[0]}${arr[arr.length-1]}`)
for (let i = 0; i < arr.length * 2; i++) {

    if (`${arr[0]}${arr[arr.length-1]}` === '()' || `${arr[0]}${arr[arr.length-1]}` === '{}' || `${arr[0]}${arr[arr.length-1]}` === '[]') {
        arr.pop()
        arr.shift()
    }
    if (`${arr[0]}${arr[1]}` === '()' || `${arr[0]}${arr[1]}` === '{}' || `${arr[0]}${arr[1]}` === '[]') {
        arr.shift()
        arr.shift()
    }
}
if (arr.length === 0) { console.log(true) } else { console.log(false) }
console.log(arr)
    // while (arr.length>1){
    // switch (arr[0]) {
    //     case "(":
    //         arr.pop()
    //         arr.shift()
    //         break;

// }
// console.log(arr)