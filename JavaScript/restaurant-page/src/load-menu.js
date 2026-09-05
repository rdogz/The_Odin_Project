/**/
/* One day you will go back here and redo this mosntrosity */
import { contentDiv } from "./index.js"

function loadMenu() {
    const titleDiv = document.createElement("div");
    const titleDivHeading = document.createElement("h1");
    titleDivHeading.innerText = "Menu";
    contentDiv.appendChild(titleDivHeading);

    /* First Item */
    const menuItemDivOne = document.createElement("div");
    const menuItemDivOneName = document.createElement("h1");
    const menuItemDivOnePrice = document.createElement("p");
    const menuItemDivOneDescription = document.createElement("p");
    menuItemDivOneName.innerText = "First Item"
    menuItemDivOnePrice.innerText = "$ 7.99"
    menuItemDivOneDescription.innerText = "This item is awesome, You need it!!"
    menuItemDivOne.appendChild(menuItemDivOneName);
    menuItemDivOne.appendChild(menuItemDivOnePrice);
    menuItemDivOne.appendChild(menuItemDivOneDescription);
    
    /* Second Item */
    const menuItemDivTwo = document.createElement("div");
    const menuItemDivTwoName = document.createElement("h1");
    const menuItemDivTwoPrice = document.createElement("p");
    const menuItemDivTwoDescription = document.createElement("p");
    menuItemDivTwoName.innerText = "Second Item"
    menuItemDivTwoPrice.innerText = "$ 10"
    menuItemDivTwoDescription.innerText = "This item is awesome, You need it!!"
    menuItemDivTwo.appendChild(menuItemDivTwoName);
    menuItemDivTwo.appendChild(menuItemDivTwoPrice);
    menuItemDivTwo.appendChild(menuItemDivTwoDescription);

    contentDiv.appendChild(menuItemDivOne);
    contentDiv.appendChild(menuItemDivTwo);
}

export { loadMenu };
