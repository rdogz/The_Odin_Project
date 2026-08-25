/**/
/**/
/**/

const myLibrary = [];
const domLibrary = document.querySelector(".library");


/* Book object */
function Book() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id;
    this.title;
    this.author;
    this.pages; 
    this.read; 

    function info() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    }
}

function addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead) {
  // take params, create a book then store it in the array
    const inputBook = new Book();

    inputBook.id = crypto.randomUUID();
    inputBook.title = inputTitle;
    inputBook.author = inputAuthor;
    inputBook.pages = inputPages;
    inputBook.read = inputRead;

    myLibrary.push(inputBook);
}

function updateDOM(library) {
    for (let i = 0; i < library.length; i++) {
        let newBook = document.createElement("div");
        let newTitle = document.createElement("h1");
        let newAuthor = document.createElement("p");
        let newPages = document.createElement("p");
        let newRead = document.createElement("p");

        newTitle.innerText = library[i].title;
        newAuthor.innerText = `Author: ${library[i].author}`;
        newPages.innerText = `Pages: ${library[i].pages}`;

        if (library[i].read) {
            newRead.style.backgroundColor = "green"
            newRead.innerText = "Book finished";
        } else{
            newRead.style.backgroundColor = "red"
            newRead.innerText = "book not yet finished";
        }

        newBook.classList.add("book");

        domLibrary.appendChild(newBook);
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newRead);
    }
}
