let a = "abC"
let b = "cef"
let result = ""
for (let i = 0; i < a.length; i++) {
    if (a[i].charCodeAt() > 96) {
        (b.toLowerCase().split(a[i].toLowerCase()).length % 2 === 0) ? result += a[i].toUpperCase(): result += a[i];
    } else {
        (b.toLowerCase().split(a[i].toLowerCase()).length % 2 === 0) ? result += a[i].toLowerCase(): result += a[i];
    }
}
for (let i = 0; i < b.length; i++) {
    if (b[i].charCodeAt() > 96) {
        (a.toLowerCase().split(b[i].toLowerCase()).length % 2 === 0) ? result += b[i].toUpperCase(): result += b[i];
    } else {
        (a.toLowerCase().split(b[i].toLowerCase()).length % 2 === 0) ? result += b[i].toLowerCase(): result += b[i];
    }
}
return result
console.log(result)