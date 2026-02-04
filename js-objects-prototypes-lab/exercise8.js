//Exercise 9: Library Management System (Challenge)
const library = {
name: 'City Library',
books: [],

addBook(title, author, isbn) {
    const book = { title, author, isbn };
    this.books.push(book);
},

findBookByTitle(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
    return book;
    } 
    else {
    return "Book was not found"; 
    }
},

listAllBooks() {
    this.books.forEach(book => console.log(book.title));
},

searchByAuthor(author) {
    const results = this.books.filter(book => book.author === author);
    if (results.length === 0) {
    console.log("No books found");
    return [];
    } 
    else {
    return results;
    }
}
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];

universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
};

universityLibrary.addBook('Algorithms', 'Akeylah', '001');
universityLibrary.addBook('The Pragmatic Programmer', 'David Thomas', '002');
universityLibrary.addCourseBook('Coding 101', 'Total Beginners', 'Al Sweigart', '003');

console.log('All books:');
universityLibrary.listAllBooks();

console.log('\nFind book:', universityLibrary.findBookByTitle('Total Beginners'));
console.log('\nFind book:', universityLibrary.findBookByTitle('CMPS2212'));

console.log(
  '\nBooks by Akeylah:',
  universityLibrary.searchByAuthor('Akeylah')
);



/* 
addBook(title, author, isbn)
creates a new book object using the given details.
It then adds the book to the library’s books array.

findBookByTitle(title)
searches the books array for a book with a matching title.
If found, it returns the book; otherwise, it returns a “Book was not found” message.

listAllBooks()
loops through all books in the library.
It prints the title of each book to the console.

searchByAuthor(author)
finds all books written by a specific author.
If no books are found, it prints a message and returns an empty list.

addCourseBook(courseName, title, author, isbn)
adds a course name to the university library’s course list.
It also adds the book to the library using the inherited addBook() method. */