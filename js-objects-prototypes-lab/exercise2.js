//Exercise 3:Array Methods with Arrow Functions
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => {
  return num * num;
});

const evens = numbers.filter(num => {
  return num % 2 === 0;
});

const sum = numbers.reduce((total, num) => {
 return total + num
}, 0);

console.log('Squared: ', squared);
console.log('Even numbers: ', evens);
console.log('Sum: ', sum);


//Use map() to square each number in the array, filter() to get only even numbers, and reduce() to add all numbers together.
