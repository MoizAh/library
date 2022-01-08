const main = document.querySelector("main");
const bookSection = document.querySelector("section.books");
const form = document.querySelector("form");
const fTitle = document.querySelector("#form-title");
const fAuthor = document.querySelector("#form-author");
const fPages = document.querySelector("#form-pages");

let myLibrary = [];
let dataValue = 1;

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
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
  myLibrary.forEach((book) => {
    const bookTitle = book.title;
    const bookAuthor = book.author;
    const bookPages = book.pages;
    const card = document.createElement("div");
    card.dataset.bookIndex = dataValue;
    dataValue++;
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
  });
};

addBookToLibrary();
