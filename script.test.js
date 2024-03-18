const { capitalize, calculator } = require('./script')
const { reverseString } = require('./script')
const { caesarCipher } = require('./script')
const { analyzeArray } = require('./script')

describe('Testing capitalize function', () => {
  beforeEach(() => {
    console.log('Iniciando Teste')
  })

  it('String in lower case', () => {
    expect(capitalize('abelha')).toBe('A')
  })
})

describe('Testing capitalize function', () => {
  it('Regular string', () => {
    expect(reverseString('Abelha')).toBe('ahlebA')
  })

  it('Number string', () => {
    expect(reverseString('1234')).toBe('4321')
  })
})

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

describe('Caesar Cipher test', () => {
  it('Name gabriel', () => {
    expect(caesarCipher("Gabriel", 2)).toBe("Icdtkgn")
  })
})

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

