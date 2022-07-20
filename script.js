const displayScreen = document.querySelector('.display-screen')

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator')
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');


let displayValue = "";

function updateDisplayValue(){
    //Function to update the value in the display screen
    displayScreen.value = displayValue;
}

function insertToDisplay(value){
    displayValue += value;
}

function clearDisplay(){
    displayValue = "";
    updateDisplayValue();
}

function backspace(){
    displayValue = displayValue.slice(0, -1);
    updateDisplayValue()
}

updateDisplayValue(displayValue);

for ( let i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', (event) => {
        insertToDisplay(digits[i].innerHTML);
        updateDisplayValue();
    })
}

for ( let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', (event) => {
        console.log(operators[i].innerHTML);
    })
}

clearButton.addEventListener('click', () => clearDisplay());
backspaceButton.addEventListener('click', () => backspace());