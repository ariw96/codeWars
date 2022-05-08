function encrypts(key, message) {
    var cipher = "";
    for (var i = 0; i < message.length; i++) {
        var char = message.charCodeAt(i);
        let shift = char + key

        if (char >= 65 && char <= 90) {
            while (shift > 90) {
                shift -= 26;
            }
            while (shift < 65) {
                shift += 26;
            }
            cipher += String.fromCharCode(shift);
        } else if (char >= 97 && char <= 122) {
            while (shift > 122) {
                shift -= 26;
            }
            while (shift < 97) {
                shift += 26;
            }
            cipher += String.fromCharCode(shift);

        } else {
            cipher += message.charAt(i);
        }
    }
    return cipher;
}
console.log(encrypts(-5, "Hello World!"));