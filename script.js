var num1 = '';
var num2 = '';
var operator = '';
const regExForOperators = /([+/*-])+/;
var result = '';

let clearButton = document.getElementById('clear').addEventListener('click', clearDisplay);
document.querySelector('.equal').addEventListener('click', displayResult);

document.querySelectorAll('.numbers', '.operators').forEach((element => element.addEventListener('click', buttonHandler)));

document.querySelectorAll('.operators').forEach((element => element.addEventListener('click', buttonHandler)));

function buttonHandler(event) {
    const inputValue = event.target.value;
    if (inputValue.match(regExForOperators)) {
        if (num1) {
            operator = inputValue;
        }
    } else if (num1 && operator) {
        num2 += inputValue;
    } else {
        num1 += inputValue;
    }
    displayInfo();
}

const display = document.querySelector('.display');

function displayInfo() {
    display.innerHTML = "";
    const info = document.createElement('p');
    info.classList.add('displayNumbers');
    info.innerText = `${num1} ${operator} ${num2}`;
    display.appendChild(info);
}

function numsToNumbers(num1, num2) {
    num1Number = parseInt(num1, 10);
    num2Number = parseInt(num2, 10);
}

function displayResult() {
    numsToNumbers(num1, num2)
    result = operate(num1Number, num2Number);
    let resultElement = document.querySelector('.displayNumbers');
    resultElement.innerText = `${result.toFixed(2)}`;
    num1Number = '';
    num2Number = '';
    num1 = result.toString().toFixed(2);
    operator = '';
    num2 = '';
}

function operate() {
    switch (operator) {
        case '+':
            return add(num1Number, num2Number);
        case '-':
            return subtract(num1Number, num2Number);
        case '*':
            return multiply(num1Number, num2Number);
        case '/':
            return divide(num1Number, num2Number);
        default:
            return 'error';

    }
}

function add(num1Number, num2Number) {
    return num1Number + num2Number;
}

function subtract(num1Number, num2Number) {
    return num1Number - num2Number;
}

function multiply(num1Number, num2Number) {
    return num1Number * num2Number;
}

function divide(num1Number, num2Number) {
    if (0 != num2Number)
        return num1Number / num2Number;
    else
        return 'Cannot divide by zero!';
}

function clearDisplay() {
    display.innerHTML = "";
    num1 = '';
    operator = '';
    num2 = '';
    result = '';
    num1Number = '';
    num2Number = '';
}