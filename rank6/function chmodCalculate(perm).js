function chmodCalculate(perm) {
    let string = ''

    function getSumValue(string) {
        let sum = 0
        if (typeof string === 'string') {
            sum = string.split('').reduce(function(accumulator, currentValue) {
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
        }
        return sum
    }
    string = `${getSumValue(perm.user)}` + `${getSumValue(perm.group)}` + `${getSumValue(perm.other)}`
    return string
}
console.log(chmodCalculate({ group: 'rwx', other: '' }))