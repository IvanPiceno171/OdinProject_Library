let html = document.querySelector(".container");
const titleInput = document.querySelector("#title");
const addBtn = document.getElementById("addBooksBtn");
const form = document.querySelector(".formHTML");
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

// addBookToLibrary(book1);
// addBookToLibrary(book2);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = new Book(titleInput.value, form.author.value);
    // console.log(value);
    if(titleInput.value ){
        alert('bad')
    }
    addBookToLibrary(value);
});
function addCards() {
    myLibrary.forEach((key) => {
        // html.innerHTML = '';
        let newHtml = "";
        newHtml += `
                <div class = "rendered">
                <ul>
                <li class='renderedLi'>${key.title}</li>
                        <li class='renderedLi'>${key.author}</li>
                        <li class='renderedLi'>${key.year}</li>
                        </ul>
                        </div>  `;

        html.innerHTML += newHtml;
    });
}

addBtn.addEventListener("click", () => {
    addCards()
//    console.log('hello')
});
