// 1. Your task: From the array below:
//     Keep only even numbers. Square each selected number. Calculate the sum of the squared numbers.
//      .filter() .map() .reduce()

const numbers = [1, 2, 3, 4, 5, 6];

const array = numbers.filter((num) => num % 2 === 0);
const squared = array.map((num) => num * num);
const result = squared.reduce((acc, num) => acc + num, 0);

console.log(result);
