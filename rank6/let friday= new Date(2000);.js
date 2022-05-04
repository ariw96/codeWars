function findFriday(start, end) {
    let newEnd
    let date = ''
    let result = 1
    let friday;
    let year;
    let month;
    let day;
    if (end === undefined) {
        newEnd = start
    } else { newEnd = end }
    for (var i = start; i <= newEnd; i++) {
        for (var j = 0; j < 13; j++) {
            date = new Date(Date.UTC(i, j, 13))
            friday = date.toString().split(' ')[0]
            if (friday === 'Fri') {
                if (result === 1) {
                    result = `${j+1}/13/${i}`
                } else { result += ` ${j+1}/13/${i}` }
            }
        }
    }
    console.log(date.toString().split(' ')[0])
    return result;
}
console.log(findFriday(1999, 2000))