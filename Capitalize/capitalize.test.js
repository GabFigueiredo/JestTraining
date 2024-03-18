const { capitalize } = require('./capitalize')

describe('Testing capitalize function', () => {
  beforeEach(() => {
    console.log('Iniciando Teste')
  })

  it('String in lower case', () => {
    expect(capitalize('abelha')).toBe('A')
  })
})
