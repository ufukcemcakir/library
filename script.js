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
    event.preventDefault(); // Prevent form from submitting normally

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;

    // Create a new Book object
    const newBook = new Book(title, author, pages, read);

    // Add the new book to the library array
    myLibrary.push(newBook);

    // Clear the form
    document.getElementById('book-form').reset();

    // Update the display
    displayLibrary();

    console.log("Book added to library:", newBook.info());
}

function displayLibrary() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
            <p>${book.info()}</p>
            <button onclick="removeBook(${index})">Remove</button>
        `;
        libraryContainer.appendChild(bookElement);
    });
}



// Add event listener to the form
document.getElementById('book-form').addEventListener('submit', addBookToLibrary);

// Initial display
displayLibrary();