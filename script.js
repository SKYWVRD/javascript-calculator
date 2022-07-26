const displayScreen = document.querySelector('.display-screen')

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator')
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');


let displayValue = "";
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let clearForNext = false;
let pauseCalcs = false;
let usedDecimal = false;
let total = null;

function updateDisplayValue(){
    //Function to update the value in the display screen
    if(displayValue < 0){
        displayValue = `${Math.abs(total)}-`
    }
    displayScreen.value = displayValue;
}

function insertToDisplay(value){
    displayValue += value;
}

function clearMemory(){
    clearOperands();
    currentOperator = null;
    total = 0;
    clearDisplay();
}

function clearOperands(){
    firstOperand = null;
    secondOperand = null;
    usedDecimal = false;
}

function clearDisplay(){
    displayValue = "";
    updateDisplayValue();
}

function backspace(){
    displayValue = displayValue.slice(0, -1);
    updateDisplayValue();
}

function storeFirst(operand){
    firstOperand = operand;
}

function operate(a, b, operator){

    switch (operator){
        case '\u00f7':
            if(!b)
                total = "The hell you doing man";
            else
                total = a/b;
                total = total.toFixed(12);
            break;
        case '\u002b':
            total = a+b;
            break;
        case '\u00D7':
            total = a*b;
            break;
        case '\u2212':
            total = a-b;
            break;
            
        case '\u003D':
            total = total;

    }


    clearOperands();
    displayValue = total;
    updateDisplayValue();
    pauseCalcs = true;

}

updateDisplayValue(displayValue);

for ( let i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', (event) => {
        screenValue = digits[i].innerHTML;
        pauseCalcs = false;
        if(clearForNext){
            clearDisplay();
            clearForNext = false;
        }
        if(screenValue == '.'){
            if (!usedDecimal)
                usedDecimal = true;
                insertToDisplay(screenValue);

        } else {
            insertToDisplay(screenValue);
        }

        
        updateDisplayValue();
    })
}

for ( let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', (event) => {
       
        if(!pauseCalcs){
            if(total)
            firstOperand = total;

            if(!firstOperand){
                firstOperand = displayScreen.value;
            }
            else if ( !secondOperand ){
                secondOperand = displayScreen.value;
            }

            if (firstOperand && secondOperand){
                firstOperand = Number(firstOperand);
                secondOperand = Number(secondOperand);
                console.log(firstOperand);
                console.log(secondOperand);
                operate(firstOperand, secondOperand, currentOperator);
            }
        }
        
        currentOperator = operators[i].innerHTML;
        clearForNext = true;
    })
}

clearButton.addEventListener('click', () => clearMemory());
backspaceButton.addEventListener('click', () => backspace());