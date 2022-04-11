let s = 'stress hhh'
s = s.replace(' ', "")
let result;
for (let i = 0; i < s.length; i += 1) {

    if ((s.split(`${s[i]}`).length - 1) === 1) {
        result = s[i]
        break;
    }

}
console.log(s)
s = s.toLowerCase()