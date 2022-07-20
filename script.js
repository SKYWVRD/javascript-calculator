const displayScreen = document.querySelector('.display-screen')

const zeroButton = document.querySelector('#zero');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const equalsButton = document.querySelector('#equals');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtact');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');


let displayValue = "";

function updateDisplayValue(text){
    //Function to update the value in the display screen
    displayScreen.value = text
}

updateDisplayValue(displayValue);

zeroButton.addEventListener('click', ()=>{
    updateDisplayValue('0');
})