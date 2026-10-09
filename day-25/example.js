//create a new array containing only numbers greater than 5, then multiply each selected number by 2.
// Combine .filter() & .map()

//   const numbers = [2, 7, 4, 9, 3, 8];

// const arr = numbers.filter((num) => num > 5)
// const result = arr.map((a) => a * 2)
//   console.log(result);

//Take the first three fruits from the array and combine them into a single string separated by " - "
// Combine .slice() and .join()

// const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

// const selectedFruits = fruits.slice(0, 3);
// const result = selectedFruits.join(" - ");

// console.log(result);

// Your task: Select all numbers greater than 5, then calculate their total.
// Task 3: Combine .filter() + .reduce()

//    const numbers = [2, 7, 4, 9, 3, 8];
//    const greaterNumbers = numbers.filter((num) => num > 5);
//    const result = greaterNumbers.reduce((acc, num) => acc + num ,0);

//    console.log(result);

// Your task: Multiply every number by 2, then calculate the sum of the resulting numbers.
// Task 4: Combine .map() + .reduce()

// const numbers = [1, 2, 3, 4];

// const array = numbers.map((num) => num * 2);
// const result = array.reduce((acc, num) => acc + num, 0);
// console.log(result);

// Your task: Select only numbers greater than 10, then sort them from smallest to largest
// Combine .filter() + .sort()

// const numbers = [15, 4, 20, 8, 12, 3, 18];

// const array = numbers.filter((num) => num > 10);
// const result = array.sort((a, b) => a - b);

// console.log(result);

// Your task: Convert every name to uppercase, then combine the names into one string separated by " | ".
// Combine .map() + .join()

// const names = ["akshu", "rahul", "priya"];

// const array = names.map((name) => name.toUpperCase());
// const result = array.join(" | ");

// console.log(result);

// Your task: Split the sentence into words, then keep only words with more than 4 characters.
// Combine .split() + .filter()

const sentence = "javascript makes learning fun and practical";

const words = sentence.split(" ");
const result = words.filter((word) => word.length > 4);

console.log(result);
