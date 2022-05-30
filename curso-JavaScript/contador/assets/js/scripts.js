var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
const adicionar = document.querySelector('adicionar')

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber
}

