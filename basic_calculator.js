// basicCalculator.js

function calculate(num1, num2, operation) {
    // Validate that the input numbers are valid
    if (num1 === null || num1 === undefined || num2 === null || num2 === undefined) {
      return "Error: Invalid numbers provided.";
    }
  
    // Validate that the operation is one of the allowed strings
    if (typeof operation !== 'string' || !['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
      return "Error: Invalid operation. Allowed operations are 'add', 'subtract', 'multiply', 'divide'.";
    }
  
    // Perform the appropriate operation based on the input string
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 === 0) {
          return "Error: Cannot divide by zero.";
        }
        return num1 / num2;
      default:
        return "Error: Operation not supported.";
    }
  }
  
  // Testing the function with different inputs
  console.log(calculate(5, 3, 'add'));        // Output: 8
  console.log(calculate(10, 2, 'divide'));    // Output: 5
  console.log(calculate(8, 4, 'multiply'));   // Output: 32
  console.log(calculate(9, 3, 'subtract'));   // Output: 6
  console.log(calculate(9, 0, 'divide'));     // Output: Error: Cannot divide by zero.
  console.log(calculate(9, 3, 'modulus'));    // Output: Error: Invalid operation.
  