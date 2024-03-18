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

  module.exports = { calculator }