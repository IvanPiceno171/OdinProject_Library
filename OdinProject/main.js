let html = document.querySelector(".container");
const titleInput = document.querySelector("#title");
const showBooks = document.getElementById("readBooksBtn");
const form = document.querySelector(".formHTML");
const letterRegEx = /^[a-zA-Z ]{2,30}$/



let myLibrary = [];

// function Book() {
//   // the constructor...
// }

// class constructor
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const book1 = new Book("Book One", "John Doe", "2020");
const book2 = new Book("Book Two", "Jane Doe", "1920");

function addBookToLibrary(newBook) {
    // do stuff here
    myLibrary.push(newBook);
}

addBookToLibrary(book1);
addBookToLibrary(book2);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!titleInput.value.match(letterRegEx) && !form.author.value.match(letterRegEx)){
        alert('book not entered')
    }
    else{

        let value = new Book(titleInput.value, form.author.value);
        // console.log(value);
        addBookToLibrary(value);
    }
});
function addCards() {

    myLibrary.forEach((key) => {
       html.innerHTML += `
                <div class = "rendered">
                <ul>
                <li class='renderedLi'>${key.title}</li>
                        <li class='renderedLi'>${key.author}</li>
                        <li class='renderedLi'>${key.year}</li>
                        </ul>
                        </div>  `;
    });
}

showBooks.addEventListener("click", () => {
    addCards()
//    console.log('hello')
});
