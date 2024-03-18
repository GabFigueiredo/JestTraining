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

module.exports = { caesarCipher }