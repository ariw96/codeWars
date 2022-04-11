let str = 'Pig latin is cool !'
let arr = str.split(" ")
let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (/^[A-Za-z]+$/.test(arr[i])) {


        newArr.push(arr[i].slice(1) + arr[i][0] + 'ay');
    }
}
console.log(newArr.join(' '))
return newArr.join(' ')