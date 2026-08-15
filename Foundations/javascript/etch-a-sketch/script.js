console.log("hello");
/////////////////////////////////////////////
const button = document.querySelector("button");
const container = document.querySelector(".container");
const divColumn = document.createElement("div");
const divRow = document.createElement("div");

let gridSize = 0;

button.addEventListener("click", () => {
    // We need to remove the older content inside the container
    container.innerHTML = "";

    gridSize = prompt("How many squares per side would you like?");

    let percentage = 100 / gridSize;

    for (let i = 0; i < gridSize; i++) {
        let divRow = document.createElement("div");

        divRow.style.width = "100%"
        divRow.style.height = `${percentage}%`
        container.appendChild(divRow);

        for (let j = 0; j < gridSize; j++) {
            let divColumn = document.createElement("div");
            divColumn.style.width = `${percentage}%`
            divColumn.style.height = "100%"
            divRow.appendChild(divColumn);
        } 
    }
});

