// Function one need to append to the display:
let display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;         // display.value= display.value+input
}

// Function two needs to clear the display :
function clearDisplay(){
    display.value = "";
}

// Function 3 to calculate the total:
function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}