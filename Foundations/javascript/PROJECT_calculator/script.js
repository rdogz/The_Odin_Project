// display limit 14 characters
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const numbersButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll(".operation");


let a = 0;
let b = 0;
let operator = "";

/* DOM MANIPULATION STUFF */
clearButton.addEventListener("click", () => 
    display.textContent = ""
);

deleteButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});

numbersButton.forEach(button => {
    button.addEventListener("click", () => {
        a = button.value;
        addToDisplay(a);
        console.log(a);
    })
})

operationButton.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.value;
        console.log(operator);
    })
})




function operate(a, operator, b) {
    // TODO
}


function addToDisplay(input) {
    if (display.textContent.length < 14) {
        display.textContent += input;
    } else {
        display.textContent = input;
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
    return a / b;
}
