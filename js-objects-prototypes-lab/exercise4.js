//Exercise 5: Dynamic Property Access
const book = {
title: 'JavaScript: The Good Parts',
author: 'Douglas Crockford',
year: 2008,
isbn: '978-0596517748'
};

function displayProperty(obj, propertyName) {
    console.log(obj[propertyName]);
}

function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}

displayProperty(book, 'title');
updateProperty(book, 'year', 2024);
displayProperty(book, 'year');


//Shows how to access and update object properties using a variable name instead of dot notation.
//It displays a book title, updates the year, and then displays the updated value.