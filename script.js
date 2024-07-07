const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    document.getElementById('book-form').reset();

    displayLibrary();

    console.log("Book added to library:", newBook.info());
}

function displayLibrary() {
    let libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <p>${book.info()}</p>
            <button onclick="changeReading(${index})">Change Reading Status</button>
            <button onclick="removeBook(${index})">Remove the Book</button>
        `;
        libraryContainer.appendChild(bookElement);
    });
}

function removeBook(index, div){
myLibrary.splice(index,1);
displayLibrary();
}

function changeReading(index){
    myLibrary[index].read = !myLibrary[index].read;
    displayLibrary();
}

document.getElementById('book-form').addEventListener('submit', addBookToLibrary);

displayLibrary();