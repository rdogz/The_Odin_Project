// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
const p = document.createElement("p");
const h3 = document.createElement("h3");

const div = document.createElement("div");

const divP = document.createElement("p");
const divH1 = document.createElement("h1");

div.appendChild(divH1);
div.appendChild(divP);

content.classList.add("content");
content.textContent = "This is the glorious text-content!";

p.classList.add("content");
p.style.color = "red";
p.textContent = "Hey I'm red!";

h3.classList.add("content");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

div.classList.add("content");
div.setAttribute("style", "border: solid black; background-color: pink;");
div.setAttribute("id", "newDiv");
divH1.textContent = "I'm in a div";
divP.textContent = "ME TOO!";


content.classList.add("content");
content.textContent = "This is the glorious text-content!";


container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);

