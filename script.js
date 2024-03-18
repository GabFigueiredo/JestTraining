function capitalize(string) {
  const toArray = string.split('')
  const capitalizedLetter = toArray[0].toUpperCase()
  return capitalizedLetter
}

function reverseString(string) {
  const toArray = string.split('')
  const reversedArray = toArray.reverse()
  const reversedString = reversedArray.join('')
  return reversedString
}

function calculatorFunction() {

  const add = (x, y) => {
    return x + y
  }

  const subtract = (x, y) => {
      return x - y
  }

  const divide = (x, y) => {
    return x / y
  }

  const multiply = (x, y) => {
    return x * y
  }

  return { add, subtract, divide, multiply }
}

const calculator = calculatorFunction()

function caesarCipher(string, factor) {
  let Alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = '';
  for (let i = 0; i < string.length; i ++) {
    let char = string[i]
    let index = Alphabet.indexOf(char.toLowerCase())
    if (index === -1) {
      result += chat;
    } else {
      let newIndex = (index + factor)
      if (newIndex < 0) newIndex += Alphabet.length
      let newChar = Alphabet[newIndex]
      if (char === char.toUpperCase()) {
        result += newChar.toUpperCase();
      } else {
        result += newChar.toLowerCase()
      }
    }
  }
  return result
}

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

  const max = () => {
    let maxNum = array[0]
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i]
      }
    }
    return maxNum
  }

  const length = () => {
    return array.length
  }

  return { average, min, max, length }
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
