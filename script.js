const display = document.getElementById('display');
let expression = '';

function append(value) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    expression = '';
  }
  expression += value;
  display.innerText = expression;
}

function clearDisplay() {
  expression = '';
  display.innerText = '0';
}

function calculate() {
  try {
    const result = eval(expression
      .replace(/÷/g, '/')
      .replace(/×/g, '*')
      .replace(/−/g, '-')
    );
    display.innerText = result;
    expression = result.toString();
  } catch {
    display.innerText = 'Error';
    expression = '';
  }
}
