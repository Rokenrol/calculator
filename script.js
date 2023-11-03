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

// Variables for selecting DOM elements (number buttons and the "screen")

const buttons = document.getElementsByClassName("btn");
const display = document.body.children[0].firstElementChild;

// Add event listeners to the number buttons

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    displayValue += e.target.textContent;
    if (displayValue.length > 9) {
      displayValue = displayValue.slice(0, 9);
    }
    display.textContent = displayValue;
    displayValue = parseInt(displayValue);
  });
};

// Variables for selecting DOM elements (operator buttons)

const plusButton = document.getElementsByClassName("add")[0];
const minusButton = document.getElementsByClassName("subtract")[0];
const multiplyButton = document.getElementsByClassName("multiply")[0];
const divideButton = document.getElementsByClassName("divide")[0];
const clearButton = document.getElementsByClassName("clear")[0];
const equalsButton = document.getElementsByClassName("equals")[0];

/* Event listeners for operator buttons */

// Plus button

plusButton.addEventListener("click", () => {
  if (firstNumber === "") {
    theOperator = add;
    firstNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }

  if (firstNumber !== "" && secondNumber !== "") {
    if (secondNumber === 0 && theOperator === divide) {
      display.textContent = "NOPE";
      secondNumber = "";
    } else {
      result = operate(theOperator, firstNumber, secondNumber);
      if (!Number.isInteger(result)) {
        result = +result.toFixed(2);
      }
      displayValue = result;
      display.textContent = result;
      firstNumber = result;
      theOperator = add;
      secondNumber = "";
    }
  }
  displayValue = "";
  result = "";
  secondNumber = "";
});

// Minus button

minusButton.addEventListener("click", () => {
  if (firstNumber === "") {
    theOperator = subtract;
    firstNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }

  if (firstNumber !== "" && secondNumber !== "") {
    if (secondNumber === 0 && theOperator === divide) {
      display.textContent = "NOPE";
      secondNumber = "";
    } else {
      result = operate(theOperator, firstNumber, secondNumber);
      if (!Number.isInteger(result)) {
        result = +result.toFixed(2);
      }
      displayValue = result;
      display.textContent = result;
      firstNumber = result;
      theOperator = subtract;
      secondNumber = "";
    }
  }
  displayValue = "";
  result = "";
  secondNumber = "";
});

// Multiply button

multiplyButton.addEventListener("click", () => {
  if (firstNumber === "") {
    theOperator = multiply;
    firstNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }

  if (firstNumber !== "" && secondNumber !== "") {
    if (secondNumber === 0 && theOperator === divide) {
      display.textContent = "NOPE";
      secondNumber = "";
    } else {
      result = operate(theOperator, firstNumber, secondNumber);
      if (!Number.isInteger(result)) {
        result = +result.toFixed(2);
      }
      displayValue = result;
      display.textContent = result;
      firstNumber = result;
      theOperator = multiply;
      secondNumber = "";
    }
  }
  displayValue = "";
  result = "";
  secondNumber = "";
});

// Divide button

divideButton.addEventListener("click", () => {
  if (firstNumber === "") {
    theOperator = divide;
    firstNumber = displayValue;
  } else {
    secondNumber = displayValue;
  }

  if (firstNumber !== "" && secondNumber !== "") {
    if (secondNumber === 0 && theOperator === divide) {
      display.textContent = "NOPE";
      firstNumber = "";
      secondNumber = "";
    } else {
      result = operate(theOperator, firstNumber, secondNumber);
      if (!Number.isInteger(result)) {
        result = +result.toFixed(2);
      }
      displayValue = result;
      display.textContent = result;
      firstNumber = result;
      theOperator = divide;
      secondNumber = "";
    }
  }

  displayValue = "";
  result = "";
  secondNumber = "";
});