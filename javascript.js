//Declaration of keypad variables
let a;
let b;
let output;
let input;

//Basic Mathmatical functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// Operate function. Takes input from html page and calls an 
// operator function.
function operate() {

}

//Event listeners for buttons
document.getElementById('1').addEventListener('click', function(){ input = input.concat(1); });
document.getElementById('2').addEventListener('click', function(){ input = input.concat(2); });
document.getElementById('3').addEventListener('click', function(){ input = input.concat(3); });
document.getElementById('4').addEventListener('click', function(){ input = input.concat(4); });
document.getElementById('5').addEventListener('click', function(){ input = input.concat(5); });
document.getElementById('6').addEventListener('click', function(){ input = input.concat(6); });
document.getElementById('7').addEventListener('click', function(){ input = input.concat(7); });
document.getElementById('8').addEventListener('click', function(){ input = input.concat(8); });
document.getElementById('9').addEventListener('click', function(){ input = input.concat(9); });
document.getElementById('0').addEventListener('click', function(){ input = input.concat(0); });
