function analyzeArray(array) {
    const average = () => {
      let calc = array.reduce((x, y) => x + y, 0)
      return calc / array.length
    }
  
    const min = () => {
      let minNum = array[0]
      for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
          minNum = array[i]
        }
      }
      return minNum
    }

module.exports = { analyzeArray }