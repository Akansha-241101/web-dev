//create a new array containing only numbers greater than 5, then multiply each selected number by 2.

  const numbers = [2, 7, 4, 9, 3, 8];

const arr = numbers.filter((num) => num > 5)
const result = arr.map((a) => a * 2)
  console.log(result);

