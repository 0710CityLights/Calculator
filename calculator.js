const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");


let total = "";
let numA = "";
let numB = "";
let storeOperator = "";
let temp = "";
let isEquals = false;





buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let getInput = this.textContent;

        if (display.textContent.includes("Total:") ) {
            clear();
        }

        else if (/\d/.test(getInput)) {
            console.log(getInput);
            storeOperands(getInput);
          
        }
        else if (getInput == "C") {
            clear();
        }
        else if (getInput == "+" || getInput == "-" || getInput == "*" || getInput == "/") {
            console.log(getInput);
            handleOperator(getInput);
        }
        else if (getInput == "=") {
            if (numA === "" || numB === "" || storeOperator === "") {
                temp = "Error.";
                resultDisplay(temp);
                display.textContent = `Clear the display.`;
            }
            else {
                isEquals = true;
                total = operate(Number(numA), storeOperator, Number(numB));
                storeOperator = "";
                console.log("OP: " + storeOperator);
                console.log(isEquals);
                resultDisplay(total);
                total = "";
            }
            
        }
        
    });
    

});


function handleOperator(input) {

    if (numA != "" && numB != "") {
        display.textContent = "";
        display.textContent = operate(Number(numA), storeOperator, Number(numB));
        numA = operate(Number(numA), storeOperator, Number(numB));
        display.textContent = numA;
        console.log(numA);
        numB = "";
        
    }
    storeOperator = input;
    display.textContent = storeOperator;
    isEquals = false;
    
}

function setDisplay(input) {
    showOp = display.textContent;

}


function storeOperands(input) {

    if (storeOperator == "") {
        numA += input;
        display.textContent = numA;
        console.log(numA);
    }
    else if (storeOperator !== "") { 
        numB += input;
        display.textContent = numB;
        console.log(numB);
    }
    

}

function resultDisplay(input) {
    
    display.textContent = `Total: ${input} `;
    
}


function clear() {
    display.textContent = "";
    displayNum = "";
    numA = "";
    numB = "";
    storeOperator = "";

}

let add = (a, b) => a + b; 

let subtract = (a, b)  => a - b;

let multiply = (a, b) => a * b; 

let divide = (a, b) => a / b; 


function operate (a, operator, b) {

    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        if (b === 0) {
            return "Invalid."
            clear();
        }
        else {
            return divide(a, b);
        }
    }
}