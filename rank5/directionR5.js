function directionReduction(arr) {
    let result = [];
    let towLastLetterOfElementsArr = arr.map(function(element) {
        return element.slice(-2);
    })
    let length = towLastLetterOfElementsArr.length - 1

    for (let i = 0; i < length; i++) {
        if (towLastLetterOfElementsArr[i] === towLastLetterOfElementsArr[i + 1] && arr[i] !== arr[i + 1]) {
            arr.splice(i, 2, 0, 1);
        }
    }
    return arr;
}
console.log(directionReduction(['north', 'south', 'west', 'west', 'east']));