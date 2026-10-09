// 1.Task: Keep only even numbers. Square each selected number. Calculate the sum of the squared numbers.
//      .filter() .map() .reduce()

// const numbers = [1, 2, 3, 4, 5, 6];

// const array = numbers.filter((num) => num % 2 === 0);
// const squared = array.map((num) => num * num);
// const result = squared.reduce((acc, num) => acc + num, 0);

// console.log(result);

// 2.Task: Keep numbers greater than 100. Sort them from smallest to largest. Select the first three numbers.
//       .filter() .sort() .slice()

// const numbers = [120, 40, 300, 180, 90, 250, 110];

// const greaterNumbers = numbers.filter((num) => num > 100);
// const sorted = greaterNumbers.sort((a, b) => a - b);
// const result = sorted.slice(0, 3);

// console.log(result);

// 3.Task: Multiply every number by 2. Sort the results from largest to smallest. Select the top three numbers.
//          .map() .sort() .slice()

// const numbers = [3, 9, 4, 7, 2, 10];

// const greaterNumbers = numbers.map((num) => num *2);
// const sorted = greaterNumbers.sort((a, b) => b - a);
// const result = sorted.slice(0, 3);

// console.log(result);

// 4.Task: To keep only words with more than 3 characters, convert the remaining words to uppercase, and join them into a single string separated by spaces.
//      .filter() .map() .join()

// const sentence = "I love coding and building apps";

//  const array = sentence.split(" ");
// const words = array.filter((word) => word.length > 3);
// const wordarray = words.map((word) => word.toUpperCase());
// const result = wordarray.join(" ");

// console.log(result);

// 5.Task: Keep prices that are ₹200 or more. Apply a 10% discount to each selected price. Calculate the total of the discounted prices.
//      .filter() .map() .reduce()

// const prices = [100, 250, 400, 150, 300];

// const selectedPrices = prices.filter((price) => price >= 200);
// const discountPrices = selectedPrices.map((price) => price * 0.9);
// const result = discountPrices.reduce((acc, num) => acc + num, 0);

// console.log(result);

// 6.Task: Keep marks greater than or equal to 50. Add 10 bonus marks to each passing score. Sort the final scores from highest to lowest.
//         .map() .filter() .sort()

const marks = [35, 80, 45, 60, 90, 25, 70];

const array = marks.map((mark) => mark + 10);
const changedArray = array.filter((mark) => mark >= 50);
const result = changedArray.sort((a, b) => b - a);

console.log(result);
