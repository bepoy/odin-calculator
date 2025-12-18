let num1 ='';
let num2 ='';
let operator='';
let result ='';
let numpad = document.querySelector('.button-container');
let display = document.querySelector('.screen');

function add(num1, num2){    return num1 + num2;
}

function subtract(num1, num2){    return num1 - num2;
}

function multiply(num1, num2){    return num1 * num2;
}

function divide(num1, num2){    if (num2 === 0) {
       return display.innerText = 'Someone skipped math class';
        
    }
    return num1 / num2;
}

display.innerText = '0';

// create buttons for display 
function createButtons(){
otherButtons = ['Clear', '=','+','-','x','÷'];
 let j=0;

for (let i = 0; i <16; i++) {
   
    let newButton = document.createElement('div');
    newButton.className = 'button';
    if(i < 10){
        newButton.id = i;
        newButton.innerText = i;

    }
    else if(i>=10){
        newButton.id = otherButtons[j];
        newButton.innerText = otherButtons[j];
        newButton.style.backgroundColor = '#f5a18cff';
        j++;
    }

    numpad.appendChild(newButton);


};
};

createButtons();
let buttons = document.querySelectorAll('.button');
let clear = document.getElementById('Clear');
let equal = document.getElementById('=');
let addButton = document.getElementById('+');
let subtractButton = document.getElementById('-');
let multiplyButton = document.getElementById('x');
let divideButton = document.getElementById('÷');

// handle number button clicks and display update
buttons.forEach((button) => {
if (button.id >=0 && button.id <=9){
    button.addEventListener('click', () => {
        display.innerText = '';
        if (operator === ''){
            num1 += button.id;
            
            display.innerText = num1;
        }
        else{
            num2 += button.id;
            display.innerText = num2;
        }
    });
}});

clear.addEventListener('click', () => {
    num1 ='';
    num2 ='';
    operator='';
    display.innerText = '0';
});


function doubleOperation(){
    if(operator !== '' && num2 !== ''){
        result = operate(num1, num2, operator);
        display.innerText = result;
        num1 = result;
        num2 = '';
        operator = '';
        return result;
    }

}

addButton.addEventListener('click', () => {
    if( doubleOperation()){
        operator = '+';
        return;
    }
    operator = '+';
});

subtractButton.addEventListener('click', () => {
    if( doubleOperation()){
        operator = '-';
        return;
    }
    operator = '-';
});

multiplyButton.addEventListener('click', () => {
    if ( doubleOperation()){
        operator = 'x';
        return;
    }
    operator = 'x';
});

divideButton.addEventListener('click', () => {
    if ( doubleOperation()){
        operator = '÷';
        return;
    }
    operator = '÷';
});


function operate(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === '+'){
        return add(num1, num2);
    }
    else if (operator === '-'){
        return subtract(num1, num2);
    }
    else if (operator === 'x'){
        return multiply(num1, num2);
    }
    else if (operator === '÷'){
        return divide(num1, num2);
    }
}

equal.addEventListener('click', () => {
    if (num1 === '' || num2 === '' || operator === ''){
        return;}

    result = operate(num1, num2, operator);
    display.innerText = result;
    num1 = result;
    num2 = '';
    operator = '';
});
