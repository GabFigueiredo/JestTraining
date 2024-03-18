const { caesarCipher } = require('./caesar')

describe('Caesar Cipher test', () => {
    it('Name gabriel', () => {
      expect(caesarCipher("Gabriel", 2)).toBe("Icdtkgn")
    })
  })
  