
//init 
let currentInput = '';
let operator = ''
let firstOperand = null;

//appends number to the screen
function appendNumber(number){
    currentInput += number;
    updateDisplay();
}
//appends operator to the calculator operation
function appendOperator(op) {
    if (currentInput === '')
         return;
    operator = op;
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
      currentInput = '';
    }
  }
  

  //runs the operation
  function calculate() {
    if (currentInput === '' || operator === '' || firstOperand === null) return;
  
    const secondOperand = parseFloat(currentInput);
    let result = 0;
    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
    }

    //prints out the result
    currentInput = result.toString();
    //resets operator and operand
    operator = '';
    firstOperand = null;
    updateDisplay();
  }
  
  function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateDisplay();
  }
  
  function updateDisplay() {
    document.getElementById('display').value = currentInput;
  }