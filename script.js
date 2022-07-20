const displayScreen = document.querySelector('.display-screen')

let displayValue = "";

function updateDisplayValue(text){
    //Function to update the value in the display screen
    displayScreen.value = text
}

updateDisplayValue(displayValue);

console.log(displayValue)