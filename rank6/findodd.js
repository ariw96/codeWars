function OddRepeat(A) {
    for (let i = 0; i < A.length; i++) {
        let counter = 0
        let numberRepeated = arr.reduce((counter, currentValue) => {
            if (currentValue === A[i]) { counter += 1 }
            return counter
        }, 0)
        if (numberRepeated % 2 === 1) { return A[i] }
    }
}
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);