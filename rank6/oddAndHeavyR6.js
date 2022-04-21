 const isOddHeavy = function isOddHeavy(array) {
     let arrOdd = []
     let arrEven = []
     let isEven = false
     for (let i = 0; i < array.length; i++) {
         if (array[i] % 2 === 0) {
             arrEven.push(array[i])
         } else { arrOdd.push(array[i]) }
     }
     if (arrOdd.length === 0) { return false }
     isEven = (Math.max(...arrEven) < Math.min(...arrOdd))
     return isEven
 }
 module.exports = isOddHeavy