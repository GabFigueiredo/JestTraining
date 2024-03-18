const { calculator } = require('./calculator')

describe('Testing calculator function', () => {
  
    it('Add', () => {
      expect(calculator.add(1, 2)).toBe(3)
    })
    it('subtract', () => {
      expect(calculator.subtract(3, 2)).toBe(1)
    })
    it('divide', () => {
      expect(calculator.divide(4, 2)).toBe(2)
    })
    it('multiply', () => {
      expect(calculator.multiply(5, 2)).toBe(10)
    })
  })