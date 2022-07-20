const displayScreen = document.querySelector('.display-screen')

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator')


let displayValue = "";

function updateDisplayValue(text){
    //Function to update the value in the display screen
    displayScreen.value = text
}

updateDisplayValue(displayValue);

for ( let i = 0; i < digits.length; i++){
    digits[i].addEventListener('click', (event) => {
        console.log(digits[i].innerHTML);
    })
}

for ( let i = 0; i < operators.length; i++){
    operators[i].addEventListener('click', (event) => {
        console.log(operators[i].innerHTML);
    })
}