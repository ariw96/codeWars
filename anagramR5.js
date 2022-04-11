let word = 'abba'
let words = ['aabb', 'abcd', 'bbaa', 'dada']
let arr = []
for (let i = 0; i < words.length; i += 1) {
    if (words.split('').sort().join('') === word.split('').sort().join('')) { arr.push(words[i]) }
}
return arr