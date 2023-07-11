const firstInput = document.getElementById('number1');
const secondInput = document.getElementById('number2');
let results = document.getElementById('results');
let errorMessage = document.getElementById('errorMessage');
const buttonPlus = document.querySelector('buttonPlus');
const buttonMinus = document.querySelector('buttonMinus');
const buttonMultiply = document.querySelector('buttonMultiply');
const buttonDivide = document.querySelector('buttonDivide');

function clickOnButtonPlus() {
    const summation = Number(firstInput.value) + Number(secondInput.value);
    results.textContent = summation;
}

function clickOnButtonMinus() {
    const subtraction = Number(firstInput.value) - Number(secondInput.value);
    results.textContent = subtraction;
}

function clickOnButtonMultiply() {
    const multiplication = Number(firstInput.value) * Number(secondInput.value);
    results.textContent = multiplication;
}

function clickOnButtonDivide() {
    errorMessage.textContent = "";
    if (Number(secondInput.value) == 0) {
        errorMessage.textContent += 'На ноль делить нельзя';
        results.textContent = "";
    }
    else {
        const division = Number(firstInput.value) / Number(secondInput.value);
        results.textContent = division.toFixed(1);
        errorMessage.textContent = "";
    }
}

function clearAll() {
    firstInput.value = '';
    secondInput.value = '';
    results.textContent = '';
    errorMessage.textContent = "";
}