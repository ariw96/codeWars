function timeMath(time1, op, time2) {
    let time1Arr = time1.split(":")
    let time2Arr = time2.split(":")
    let hoursInSeconds, minutesInSeconds, seconds;

    time1Arr = time1Arr.map(function(e) {
        return parseInt(e)
    })
    time2Arr = time2Arr.map(function(e) {
        return parseInt(e)
    })
    if (op === "+") {
        hoursInSeconds = time1Arr[0] * 60 * 60 + time2Arr[0] * 60 * 60 + time1Arr[1] * 60 + time2Arr[1] * 60 + time1Arr[2] + time2Arr[2]
        minutesInSeconds = time1Arr[1] * 60 + time2Arr[1] * 60 + time1Arr[2] + time2Arr[2]
        seconds = time1Arr[2] + time2Arr[2]
    } else {
        hoursInSeconds = time1Arr[0] * 60 * 60 - time2Arr[0] * 60 * 60 + time1Arr[1] * 60 - time2Arr[1] * 60 - time1Arr[2] - time2Arr[2]
        minutesInSeconds = time1Arr[1] * 60 - time2Arr[1] * 60 + time1Arr[2] - time2Arr[2]
        seconds = time1Arr[2] - time2Arr[2]
    }
    while (hoursInSeconds < 0) {
        hoursInSeconds += 24 * 3600
    }
    while (hoursInSeconds < 24 * 3600) {
        hoursInSeconds -= 24 * 3600
    }
    while (minutesInSeconds < 0) {
        minutesInSeconds += 3600
    }
    while (seconds < 0) {
        seconds += 60
    }


    let minutes = Math.floor(minutesInSeconds / 60)
    let hours = Math.floor(hoursInSeconds / 3600)
    hours < 10 && (hours = `0${hours}`)
    minutes < 10 && (minutes = `0${minutes}`)
    seconds < 10 && (seconds = `0${seconds}`)
    let result = `${hours}:${minutes}:${seconds}`





    return [hoursInSeconds, minutesInSeconds, seconds, minutes, hours, result]

}
console.log(timeMath('11:24:31', '+', '22:16:05'))