let currentValue = 0;
let operator = '+';

function appendToResult(value) {
  const result = document.getElementById('result');
  if (result.value === '0' && value !== '.') {
    result.value = value;
  } else {
    result.value += value;
  }
}

function performOperation(selectedOperator) {
  const result = document.getElementById('result');
  currentValue = parseFloat(result.value);
  operator = selectedOperator;
  result.value = '0';
}

function calculate() {
  const result = document.getElementById('result');
  const secondValue = parseFloat(result.value);
  switch (operator) {
    case '+':
      result.value = currentValue + secondValue;
      break;
    case '-':
      result.value = currentValue - secondValue;
      break;
    case '*':
      result.value = currentValue * secondValue;
      break;
    case '/':
      result.value = currentValue / secondValue;
      break;
    default:
        result.value = 'Error';
        break;
    }
    currentValue = parseFloat(result.value);
    operator = '+';
    }
    
    function clearResult() {
    const result = document.getElementById('result');
    result.value = '0';
    currentValue = 0;
    operator = '+';
    }
    