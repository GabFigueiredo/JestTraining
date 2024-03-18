function capitalize(string) {
    const toArray = string.split('')
    const capitalizedLetter = toArray[0].toUpperCase()
    return capitalizedLetter
  }

module.exports = { capitalize }