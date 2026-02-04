//Exercise 1:Function Declaration
function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 10)); 
console.log(calculateArea(7, 3)); 
console.log(calculateArea(4, 4)); 


//Exercise 2: Function Expressions
const calculatePerimeter = function(length, width){
    return  (2 * length + 2 * width);
};

console.log(calculatePerimeter(5, 10)); 
console.log(calculatePerimeter(7, 3)); 
console.log(calculatePerimeter(4, 4)); 


//Exercise 1: Defines a function that calculates the area of a rectangle by multiplying its length and width.
/*Exercise 2: This code stores a function inside a variable that calculates the perimeter of a rectangle.
The function adds all sides together and logs the result for different inputs.*/