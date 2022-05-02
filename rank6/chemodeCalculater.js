function chmodCalculate(perm) {
    let string = ''
    func getSumValue(string) {
        let sum = 0
        sum = string.split('').reduce(function(accumulator, currentValue) {) {
            if (currentValue === 'x') {
                return accumulator + 1;
            }
            if (currentValue === 'w') {
                return accumulator + 2;
            }
            if (currentValue === 'r') {
                return accumulator + 4;
            }
            return accumulator
        }, 0)
        return sum
    }
    string = getSumValue(perm.user) + getSumValue(perm.group) + getSumValue(perm.other)
    return string
}
console.log(chmodCalculate({ user: 'rwx', group: 'x', other: 'x' })) //