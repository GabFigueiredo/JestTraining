function reverseString(string) {
    const toArray = string.split('')
    const reversedArray = toArray.reverse()
    const reversedString = reversedArray.join('')
    return reversedString
  }

module.exports = { reverseString }