const { analyzeArray } = require('./analyze')

describe('Analyze Array', () => {
    it('Average test', () => {
      const object = analyzeArray([1, 8, 3, 4, 2, 6])
      expect(object.average()).toBe(4)
    })
    it('Min test', () => {
      const object = analyzeArray([1, 8, 3, 4, 2, 6])
      expect(object.min()).toBe(1)
    })
    it('Max test', () => {
      const object = analyzeArray([1, 8, 3, 4, 2, 6])
      expect(object.max()).toBe(8)
    })
    it('Length test', () => {
      const object = analyzeArray([1, 8, 3, 4, 2, 6])
      expect(object.length()).toBe(6)
    })
  })