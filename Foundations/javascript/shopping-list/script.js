const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function buttonClicked() {
    event.preventDefault()
    
    let userInput = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const newButton = document.createElement("button");

    li.appendChild(span);
    li.appendChild(newButton);

    span.innerText = userInput;
    newButton.innerText = "Delete";

    ul.appendChild(li);

    newButton.addEventListener("click", function () {
        li.remove();
    });
}

button.addEventListener("click", buttonClicked);
