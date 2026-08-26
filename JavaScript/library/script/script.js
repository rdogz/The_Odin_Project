/**/
/**/
/**/

const myLibrary = [];
const domLibrary = document.querySelector(".library");
const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formTitle = document.querySelector('[name="form-book-title"]').value;
    const formAuthor = document.querySelector('[name="form-book-author"]').value;
    const formPages = document.querySelector('[name="form-book-pages"]').value;
    const formRead = document.querySelector('[name="form-book-read"]').checked;

    console.log(formTitle);
    console.log(formAuthor);
    console.log(formPages);
    console.log(formRead);

    addBookToLibrary(formTitle, formAuthor, formPages, formRead);
    updateDOM(myLibrary, myLibrary.length-1);
});

/* Book object */
function Book() {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id;
    this.title;
    this.author;
    this.pages; 
    this.read = false; 

    Book.prototype.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    }

    Book.prototype.toggleRead = function(library, idToUpdate) {
       const bookToUpdate = library.find(book => book.id === idToUpdate);

        if (bookToUpdate) {
            bookToUpdate.read = !bookToUpdate.read;
        }
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

function updateDOM(library, index) {
    let newBook = document.createElement("div");
    let newTitle = document.createElement("h1");
    let newAuthor = document.createElement("p");
    let newPages = document.createElement("p");
    let newRead = document.createElement("button");
    let newButton = document.createElement("button");

    newButton.innerText = "X";
    newTitle.innerText = library[index].title;
    newAuthor.innerText = `Author: ${library[index].author}`;
    newPages.innerText = `Pages: ${library[index].pages}`;

    if (library[index].read) {
        newRead.style.backgroundColor = "green";
        newRead.innerText = "Book finished";
    } else {
        newRead.style.backgroundColor = "red";
        newRead.innerText = "Book not yet finished";
    }

    newButton.addEventListener("click", (event) => {
        const bookId = event.target.closest(".book").id;
        const book = document.getElementById(bookId);

        book.remove();
    });


    newRead.addEventListener("click", (event) => {
        const bookId = event.target.closest(".book").id;
        const book = library.find((Book) => Book.id == bookId);

        if (book) {
            book.toggleRead(library, bookId);

            if (book.read) {
                newRead.style.backgroundColor = "green";
                newRead.innerText = "Book finished";
            } else {
                newRead.style.backgroundColor = "red";
                newRead.innerText = "Book not yet finished";
            }
        }
    });

    newBook.classList.add("book");
    newBook.setAttribute("id", library[index].id);

    newBook.appendChild(newButton);
    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newRead);

    domLibrary.appendChild(newBook);
}
