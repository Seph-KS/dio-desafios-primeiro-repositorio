function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Os números pares são:', evenNums);
}

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return console.log(`o maior número é ${max}`);
}

function sum(x, y, z) {
    return console.log(`a soma entre ${x}, ${y} e ${z} é ${x + y + z}.`);
} 

const soma = (a, b) => a + b


console.log("Hello world!");

let array = [1, 2, 4, 5, 7, 8];
const numbers = [1, 2, 3];

returnEvenValues(array);
findMax(1, 2, 3, 6, 90, 1);
sum(...numbers);
console.log(soma(7, 5))