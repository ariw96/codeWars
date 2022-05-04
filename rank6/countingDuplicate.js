let string = 'abcccca'
let result = 0
var map = string.toLowerCase().split('').reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
}, {});
for ([key, value] of Object.entries(map)) {
    if (value > 1) {
        result++;
    }
}
return result
console.log(result, map)