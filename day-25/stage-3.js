// 1.Task: From the array below:
//     Keep only even numbers. Square each selected number. Calculate the sum of the squared numbers.
//      .filter() .map() .reduce()

// const numbers = [1, 2, 3, 4, 5, 6];

// const array = numbers.filter((num) => num % 2 === 0);
// const squared = array.map((num) => num * num);
// const result = squared.reduce((acc, num) => acc + num, 0);

// console.log(result);

// 2.Task: Use three array methods to complete these steps:
// Keep numbers greater than 100. Sort them from smallest to largest. Select the first three numbers.


const numbers = [120, 40, 300, 180, 90, 250, 110];

const greaterNumbers = numbers.filter((num) => num > 100);
const sorted = greaterNumbers.sort((a, b) => a - b);
const result = sorted.slice(0, 3);

console.log(result);
