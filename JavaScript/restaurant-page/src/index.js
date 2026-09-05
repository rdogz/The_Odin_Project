import { loadHome } from "./load-home.js";
import { loadMenu } from "./load-menu.js";
import { loadContact } from "./load-contact.js";

const contentDiv = document.querySelector("#content");


loadHome();

function switchTabs() {
    const homeButton = document.querySelector("#home")
    const menuButton = document.querySelector("#menu")
    const contactButton = document.querySelector("#contact")

    homeButton.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        loadHome();
    })

    menuButton.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        loadMenu();
    })

    contactButton.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        loadContact();
    })
}

switchTabs();

export { contentDiv };
