const main = document.querySelector("main");
const bookSection = document.querySelector("section.books");
const form = document.querySelector("form");
const fTitle = document.querySelector("#form-title");
const fAuthor = document.querySelector("#form-author");
const fPages = document.querySelector("#form-pages");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  form.addEventListener("submit", (e) => {
    const newBook = new Book(fTitle.value, fAuthor.value, fPages.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
    e.preventDefault();
  });
}

const libraryDisplay = () => {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const h2 = document.createElement("h2");
    h2.textContent = book.title;
    card.appendChild(h2);
    bookSection.appendChild(card);
  });
};

addBookToLibrary();
libraryDisplay();
