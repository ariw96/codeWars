let arr = [2, 3, 4];
let lcm = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue / gcd(accumulator, currentValue);
}, );

function gcd(a, b) {
    if (a === 0)
        return b;
    return gcd(b % a, a);
}
return lcm;




console.log(lcm);