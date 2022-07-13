//Declaration of variables
let a = 0;
let b = 0;
let output;
let input;
let operator;

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

function divide(a, b) {
    return a / b;
}

function clear {
    input = 0;
    a = 0;
    b = 0;
    output = 0;
}

//Function to convert input to float, in order to be used in operations.
function inputConverter() {
    if (a != undefined) {
        b = parseFloat(input);
    } else {
        a = parseFloat(input);
    }
}

// Operate function. Takes input from html page and calls an 
// operator function.
function operate(a, b) {
    if (a == undefined && b == undefined) {
        output = 0;
        document.getElementById("calculatorDisplay").innerHTML = output;
    } else if (a != undefined && b == undefined) {
        b = input;
    }

    if (operator === 'add') {
        output = add(a, b);
        document.getElementById("calculatorDisplay").innerHTML = output;
        return output;
    } else if (operator === 'subtract') {
        output = subtract(a, b);
        document.getElementById("calculatorDisplay").innerHTML = output;
        return output;
    } else if (operator === 'multiply') {
        output = multiply(a, b);
        document.getElementById("calculatorDisplay").innerHTML = output;
        return output;
    } else if (operator === 'divide') {
        output = divide(a, b);
        document.getElementById("calculatorDisplay").innerHTML = output;
        return output;
    }
}

//Functions to append numbers to calculator display
function number1() {
    const textnode = document.createTextNode('1');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('1');
}

function number2() {
    const textnode = document.createTextNode('2');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('2');

}

function number3() {
    const textnode = document.createTextNode('3');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('3');

}

function number4() {
    const textnode = document.createTextNode('4');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('4');

}

function number5() {
    const textnode = document.createTextNode('5');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('5');

}

function number6() {
    const textnode = document.createTextNode('6');
    calculatorDisplay.appendChild(textnode);
    let input = input.concat('6');

}

function number7() {
    const textnode = document.createTextNode('7');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('7');

}

function number8() {
    const textnode = document.createTextNode('8');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('8');

}

function number9() {
    const textnode = document.createTextNode('9');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('9');

}

function number0() {
    const textnode = document.createTextNode('0');
    calculatorDisplay.appendChild(textnode);
    input = input.concat('0');

}

//functions to add operators to display
function operatorAddition() {
    operator = 'add';
    const textnode = document.createTextNode('+');
    calculatorDisplay.appendChild(textnode);
    a = input;
    input = 0;
}

function operatorSubtraction() {
    operator = 'subtract';
    const textnode = document.createTextNode('-');
    calculatorDisplay.appendChild(textnode);
    a = input;
    input = 0;
}

function operatorMultiplication() {
    operator = 'multiply';
    const textnode = document.createTextNode('*');
    calculatorDisplay.appendChild(textnode);
    a = input;
    input = 0;
}

function operatorDivision() {
    operator = 'divide';
    const textnode = document.createTextNode('/');
    calculatorDisplay.appendChild(textnode);
    a = input;
    input = 0;
}


//Event listeners for button inputs and display





