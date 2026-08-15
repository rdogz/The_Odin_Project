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

    gridSize = prompt("How many squares per side would you like? (max: 100)");

    if (gridSize > 100 || gridSize <= 0){
        return;
    }

    let percentage = 100 / gridSize;

    for (let i = 0; i < gridSize; i++) {
        let divRow = document.createElement("div");

        divRow.style.width = "100%"
        divRow.style.height = `${percentage}%`
        container.appendChild(divRow);

        for (let j = 0; j < gridSize; j++) {
            let divColumn = document.createElement("div");
            divColumn.style.width = `${percentage}%`;
            divColumn.style.height = "100%";
            divRow.appendChild(divColumn);
            divColumn.addEventListener("mouseover", () => {
                divColumn.style.opacity = Number(divColumn.style.opacity) + 0.1;
                divColumn.style.backgroundColor = rgbGenerator();
            });
        } 
    }
});

function rgbGenerator() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
