const main = document.querySelector("main");
const bookSection = document.querySelector("section.books");
const form = document.querySelector("form");
const fTitle = document.querySelector("#form-title");
const fAuthor = document.querySelector("#form-author");
const fPages = document.querySelector("#form-pages");

let myLibrary = [];
let dataValue = 0;

function Book(title, author, pages, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;
}

function addBookToLibrary() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = new Book(fTitle.value, fAuthor.value, fPages.value);
    myLibrary.push(newBook);
    bookSection.innerHTML = "";
    displayBook();
    console.log(myLibrary);
    form.reset();
  });
}

const displayBook = () => {
  myLibrary.forEach((book, index) => {
    const bookTitle = book.title;
    const bookAuthor = book.author;
    const bookPages = book.pages;
    book.id = "Book" + index;
    const card = document.createElement("div");
    // card.dataset.index = "Book" + index;
    card.classList.add("card");
    const h2 = document.createElement("h2");
    h2.textContent = bookTitle;
    card.appendChild(h2);
    const h3 = document.createElement("h3");
    h3.textContent = bookAuthor;
    card.appendChild(h3);
    const h4 = document.createElement("h4");
    h4.textContent = bookPages;
    card.appendChild(h4);
    bookSection.appendChild(card);
    const button = document.createElement("button");
    button.textContent = "Delete";
    card.appendChild(button);
    button.addEventListener("click", () => {
      if (book.id) {
        card.remove("[data-index" + book.id + "]");
      }
      myLibrary = myLibrary.filter((card) => {
        return card.id !== book.id;
      });
    });
  });
};

addBookToLibrary();

// let bookIndex = card.getAttribute("data-index");
// console.log(bookIndex);
// let removeBook = myLibrary.splice(bIndex, 1);
// removeBook;
// bookSection.remove("[data-index" + bookIndex + "]");
