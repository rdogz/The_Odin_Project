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
        homeButton.style.backgroundColor = "red";
        loadHome();
    })

    menuButton.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        menuButton.style.backgroundColor = "red";
        loadMenu();
    })

    contactButton.addEventListener("click", () => {
        contentDiv.innerHTML = "";
        menuButton.style.backgroundColor = "red";
        loadContact();
    })
}

switchTabs();

export { contentDiv };
