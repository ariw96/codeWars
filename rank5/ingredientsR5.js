let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flou: 1200, sugar: 1200, eggs: 5, milk: 200 };
let arr = [];
let num = [];
for (const property in recipe) {

    num = available[property] / recipe[property] || 0;
    if (num > 0) { arr.push(Math.floor(num)) }

}
console.log(arr)
return Math.min(...arr)