let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages" +
        ", " +
        this.read +
        "."
    );
  };
}

function addBookToLibrary() {
  let title = window.prompt("Title");
  let author = window.prompt("Author");
  let pages = window.prompt("No Of Pages");
  let read = window.prompt("Read or Not Read Yet");

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayTable();
}

function displayTable() {
  let table = document.getElementById("myTable");
  table.innerHTML = "";

  for (let index = 0; index < myLibrary.length; index++) {
    let row = table.insertRow(-1);

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);

    c1.innerText = myLibrary[index].title;
    c2.innerText = myLibrary[index].author;
    c3.innerText = myLibrary[index].pages;
    c4.innerText = myLibrary[index].read;
  }
}
