function changeItUp(element) {
    newStr = ''
    element.toLowerCase().split('').forEach((element, index) => {
        let char = element.charCodeAt(0)
        if (char >= 97 && char <= 122) {
            if (char === 122) {
                char = 97
            } else { char += 1 }
        }
        newStr += String.fromCharCode(char)
    })
    return newStr.split('').map((element) => {
        if (
            element === "a" ||
            element === "e" ||
            element === "i" ||
            element === "o" ||
            element === "u"
        ) { return element.toUpperCase() }
        return element
    }).join('')
}
console.log(changeItUp('Cat30'))