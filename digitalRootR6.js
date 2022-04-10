let num = 942;
while (num > 9) {
    num = num.toString().split('').map(function(x) {
        return parseInt(x);
    })
    num = num.reduce((a, b) => a + b)

}
console.log(num)
return num;