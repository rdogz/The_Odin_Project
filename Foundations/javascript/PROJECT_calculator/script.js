// display limit 14 characters
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numbersButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll(".operation");
const equalsButton = document.querySelector("#equals");


let a = "";
let b = "";
let operator = "";

/* DOM MANIPULATION STUFF */
clearButton.addEventListener("click", () => {
        display.textContent = "";
        clearVars();
    }
);

deleteButton.addEventListener("click", () => {
    if (b !== "") {
        b = b.slice(0, -1);
        if (b === ""){
            renderOperator(operator);
            return;
        }
        display.textContent = display.textContent.slice(0, -1);
    } else if (operator !== "") {
        operator = "";
        updateDisplay(a);
    } else if (a !== "") {
        a = a.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
});

numbersButton.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        if (operator === "") {
            if (value === "." && a.includes(".")){
                return;
            }
            if (a.length < 14) {
                a = `${a}${value}`;
                console.log(a);
                updateDisplay(a);
            } else {
                alert("Can't enter more than 14 digits!");
            }
        } else {
            if (value === "." && b.includes(".")){
                return;
            }
            if (b.length < 14) {
                b = `${b}${value}`;
                console.log(b);
                updateDisplay(b);
            } else {
                alert("Can't enter more than 14 digits!");
            }        
        }
    })
})

operationButton.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === "" && a != "") {
            operator = button.value;
            renderOperator(operator);
        } else if (operator !== "" && a !== "" && b !== ""){
            a = operate(operator, Number(a), Number(b));
            operator = button.value;
            b = "";
            updateDisplay(a);
        } else if (operator !== "" && a !== "" && b === "") {
            operator = button.value;
            renderOperator(operator);
        }
    })
})

equalsButton.addEventListener("click", () => {
    if (a !== "" && b !== "" && operator !== "") {
        updateDisplay(operate(operator, Number(a), Number(b)));
        clearVars();
    } 
})

function updateDisplay(input) {
    let inputToString = String(input);

    if (inputToString.includes(".") && inputToString.length > 14) {
        inputToString = inputToString.slice(0, 14);
    }
    if (inputToString.length > 14) {
        display.textContent = "Error";
        return;
    }

    display.textContent = inputToString;
}

function clearVars() {
    a = "";
    b = "";
    operator = "";
}

function renderOperator(operator) {
    switch (operator) {
        case "+":
            updateDisplay("+");
            break;
        case "-":
            updateDisplay("-");
            break;
        case "*":
            updateDisplay("x");
            break;
        case "/":
            updateDisplay("÷");
            break;
    }
}

/* MATH STUFF */
function operate(operator, a, b) {
    // TODO
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}


/* OPERATION FUNCTIONS */
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
    if (b === 0) {
        return "NaN";
    }
    return a / b;
}


