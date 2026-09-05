function renderInitialPage() {
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const contentText = document.createElement("p");

    title.innerText = "Restaurant";
    contentText.innerText = "this website will be so cool one day!"

    content.appendChild(title);
    content.appendChild(contentText);
}


export { renderInitialPage };
