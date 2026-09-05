/**/
/* One day you will go back here and redo this mosntrosity */
import { contentDiv } from "./index.js"

function loadHome() {
    const title = document.createElement("h1");
    title.innerText = "Welcome to our restaurant"

    const descriptionDiv = document.createElement("div");
    const descriptionDivTitle = document.createElement("h1");
    const descriptionDivText = document.createElement("p");

    descriptionDivTitle.innerText = "Intro text"
    descriptionDivText.innerText = "You have no idea how awesome this restaurant is!"


    descriptionDiv.appendChild(descriptionDivTitle);
    descriptionDiv.appendChild(descriptionDivText);

    contentDiv.appendChild(descriptionDiv);
}

export { loadHome };
