// Variables used:
// Float: 'firstVal' to hold 'first' operand
// String: 'currentVal' to hold 'second' operand
// String: 'opType' for 'operator'
// Boolean: 'startNew' indicates if the last button was "equals". This 
//          is needed to determine what to do if the next button is a 
//          a number (if it was "equals", then we will start reset
//          currentVal to "0")
// 'display' is the DOM element to display the currentVal & result

console.log("page loaded.");

let display = document.querySelector("#display");
let firstVal = 0;
let currentVal = "0";
let opType = "";
let startNew = false;

// 'press' function is called when pressing number or '.' button is pressed. 
//          concatenates button innerText to current
function press(value) {
    if (startNew) { // last button pressed was "Equals"
        currentVal = "0";
        startNew = false
    }
    if (currentVal === "0" && value != ".") { // remove leading zero
        currentVal = String(value); 
    } else {
        currentVal = currentVal + value; // concatenate new number
    }   
    display.innerHTML = currentVal;
}


// "setOP" function stores operator when pressed
function setOP(operator) {
    if (opType != "") { // if there is already an opType, then operator button acts as "equals" also
        calculate();
    }
    opType = operator;
    firstVal = parseFloat (currentVal);
    currentVal = "0";
    startNew = true;
}

// 'clr' function sets 'currentVal' to "0"
function clr(){
    currentVal = "0";
    display.innerHTML = currentVal;
}

// 'calculate' function performs pending calculation 
//          then, sets startNew to 'true' (to reset currentVal on next 
//          number button pressed)
//
function calculate(){
    if (!startNew) { //ensure that last key was a number, not an operator
        let result = 0;
        if (opType == "+") { //addition
            result = firstVal + parseFloat(currentVal);
            startNew = true;
        } else if (opType == "-") { //subtraction
            result = firstVal - parseFloat(currentVal);
            startNew = true;
        } else if (opType == "/") { // division
            result = firstVal / parseFloat(currentVal);
            startNew = true;
        } else if (opType == "*") { // multiplication
            result = firstVal * parseFloat(currentVal);
            startNew = true;
        } else { // opType not set to anything
            result = parseFloat(currentVal);
        }
        result = Math.round(result*1000000000)/1000000000; // make sure that 'result'git fits in display
        firstVal = result;
        currentVal = String(result);
        opType = "";
        display.innerHTML = currentVal;
    }
}

