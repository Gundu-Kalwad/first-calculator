let display = document.getElementById('display');

function appendToDisplay(value) {
  setTimeout(() => {
    display.value += value;
  }, 0); // Small delay
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const expression = display.value;
    const result = evaluateExpression(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Error: ' + error.message;
    console.error(error); // Log the error for debugging
  }
}

function evaluateExpression(expression) {
  try {
    return Function('return ' + expression)();
  } catch (error) {
    throw new Error('Invalid expression');
  }
}

function isValidExpression(expression) {
  // More robust validation
  if (/[^0-9+\-*/().]/.test(expression)) {
    return false; // Contains invalid characters
  }
  
  // Check for consecutive operators
  if (/[+\-*/]{2,}/.test(expression)) {
      return false;
  }

  return true;
}
