// Functions for basic math operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Variables for calculator operations

let firstNumber = "";
let secondNumber = "";
let theOperator = "";

// Variable for display value

let displayValue = "";

// Function that uses the variables and the operator to calculate the operation

const operate = function(operator, num1, num2) {
  return operator(num1, num2);
};