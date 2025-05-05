let myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

Book.prototype.toggleRead = function () {
  this.read = this.read === "Read" ? "Not Read" : "Read";
};

function addBookToLibrary(t, a, p, r) {
  let title = t;
  let author = a;
  let pages = p;
  let read = r === "on" ? "Read" : "Not Read";
  let id = crypto.randomUUID();

  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
  displayTable();
}

function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  displayTable();
}

function displayTable() {
  let table = document.getElementById("myTable");
  table.innerHTML = "";

  let formDiv = document.getElementById("form-container");
  formDiv.innerHTML = "";

  for (let index = 0; index < myLibrary.length; index++) {
    let row = table.insertRow(-1);

    row.setAttribute("data-id", myLibrary[index].id);

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);

    c1.innerText = myLibrary[index].title;
    c2.innerText = myLibrary[index].author;
    c3.innerText = myLibrary[index].pages;
    c4.innerText = myLibrary[index].read;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
      const bookId = row.getAttribute("data-id");
      deleteBook(bookId);
    });

    c5.appendChild(deleteBtn);

    let toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Toggle Read";
    toggleBtn.addEventListener("click", function () {
      myLibrary[index].toggleRead();
      displayTable();
    });
    c6.appendChild(toggleBtn);
  }
}

function createForm() {
  const form = document.createElement("form");
  form.id = "myForm";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  const title = document.createElement("input");
  title.type = "text";
  title.name = "title";

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Author:";
  const author = document.createElement("input");
  author.type = "text";
  author.name = "author";

  const pagesLabel = document.createElement("label");
  pagesLabel.textContent = "No Of Pages:";
  const pages = document.createElement("input");
  pages.type = "number";
  pages.name = "pages";

  const readLabel = document.createElement("label");
  readLabel.textContent = "Read or Not read:";
  const read = document.createElement("input");
  read.type = "checkbox";
  read.name = "read";
  readLabel.textContent = "Read:";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";

  form.appendChild(titleLabel);
  form.appendChild(title);
  form.appendChild(document.createElement("br"));
  form.appendChild(authorLabel);
  form.appendChild(author);
  form.appendChild(document.createElement("br"));
  form.appendChild(pagesLabel);
  form.appendChild(pages);
  form.appendChild(document.createElement("br"));
  form.appendChild(readLabel);
  form.appendChild(read);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitButton);

  const formContainer = document.getElementById("form-container");
  formContainer.appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    form.reset();
  });
}
