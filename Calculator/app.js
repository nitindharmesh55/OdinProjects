
let display = document.querySelector("#display");
let reset = document.querySelector("#reset");
let buttons = document.querySelectorAll("button");

let first_value = "";
let second_value = "";
let operator = '';
let isOperatorClicked = false;

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const value = this.innerText;

    if (!isNaN(value)) {  // number clicked
      if (!isOperatorClicked) {
        first_value += value;
        display.innerText = first_value;
      } else {
        second_value += value;
        display.innerText = first_value + operator + second_value;
      }
    }

    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (first_value === "") return;  // operator can't be first
      operator = value;
      isOperatorClicked = true;
      display.innerText = first_value + operator;
    }

    else if (value === "=") {
      if (first_value !== '' && second_value !== '' && operator !== '') {
        const a = parseFloat(first_value);
        const b = parseFloat(second_value);
        const result = operate(operator, a, b);
        display.innerText = result;
        first_value = result.toString();
        second_value = '';
        operator = '';
        isOperatorClicked = false;
      }
    }
  });
});

reset.addEventListener("click", () => {
  first_value = '';
  second_value = '';
  operator = '';
  isOperatorClicked = false;
  display.innerText = '0';
});

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiple = (a, b) => a * b;
const division = (a, b) => b === 0 ? "Error" : a / b;

function operate(op, a, b) {
  switch (op) {
    case '+': return sum(a, b);
    case '-': return subtract(a, b);
    case '*': return multiple(a, b);
    case '/': return division(a, b);
    default: return null;
  }
}
