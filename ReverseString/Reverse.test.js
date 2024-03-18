const { reverseString } = require('./Reverse')

describe('Testing capitalize function', () => {
    it('Regular string', () => {
      expect(reverseString('Abelha')).toBe('ahlebA')
    })
  
    it('Number string', () => {
      expect(reverseString('1234')).toBe('4321')
    })
  })