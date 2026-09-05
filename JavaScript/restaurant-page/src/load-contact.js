import { contentDiv } from "./index.js"

function loadContact() {
    const titleDiv = document.createElement("div");
    const titleDivHeading = document.createElement("h1");
    titleDivHeading.innerText = "Contact Us";
    contentDiv.appendChild(titleDivHeading);

    /* First Item */
    const mamaBear = document.createElement("div");
    const mamaBearName = document.createElement("h1");
    const mamaBearRole = document.createElement("p");
    const mamaBearNumber = document.createElement("p");
    const mamaBearMail = document.createElement("p");

    mamaBearName.innerText = "Mama Bear";
    mamaBearRole.innerText = "Chef";
    mamaBearNumber.innerText = "555-555-5554";
    mamaBearMail.innerText = "mamabear@notFake.com";
    
    mamaBear.appendChild(mamaBearName);
    mamaBear.appendChild(mamaBearRole);
    mamaBear.appendChild(mamaBearNumber);
    mamaBear.appendChild(mamaBearMail);

    contentDiv.appendChild(mamaBear);
}

export { loadContact };
