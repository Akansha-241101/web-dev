
// ------------ array methods -----------------

// .filter() .map() .slice() .split() .join()
// .forEach() .reduce() .sort()

// .map() returns a new array
// .forEach() returns undefined

// -------- .map() example -----------

// const arr = [1, 2, 3, 4]
// const newArr = arr.map((num) => num % 2 === 0 ? num * 0 : num);
// console.log(newArr);

// --------- .forEach() example -----------

// const arr = [1, 2, 3, 4]
// const newArr = [];
// arr.forEach((num) => newArr.push(num));
// console.log(newArr);

// ---------- .reduce() example 1 ----------

// const numbers = [2, 5, 1]; // 8
// const sum = numbers.reduce((resultOfPrevIteration, num) => resultOfPrevIteration + num, 0)
// const sum = numbers.reduce((acc, num) => acc + num, 0); // acc = accumulator

// console.log(sum);

// ----------- .reduce() example 2 ---------

// const numbers = [2, 3, 4, 5];

// const result = numbers.reduce((acc, num) => acc * num, 1);
// console.log(result);

// const cart = [
//   {
//     name: "Dog",
//     price: 500,
//     quantity: 2,
//   },
//   {
//     name: "Cat",
//     price: 300,
//     quantity: 3,
//   },
//   {
//     name: "Khargosh",
//     price: 20.5,
//     quantity: 1,
//   },
//   {
//     name: "Chooza",
//     price: 20,
//     quantity: 1,
//   }
// ];

// const cartTotal = cart.reduce((acc, pet) => acc + pet.price * pet.quantity, 0);
// console.log(cartTotal);

// ----------- .sort() example 1 ---------

// const numbers = [1, 7, 3, 8];

// const sortedNumbers = numbers.sort((a, b) => a - b)
// console.log(sortedNumbers);

// ----------- .sort() example 2 -------------

// const cart = [
//   {
//     name: "Cat",
//     price: 300,
//     quantity: 3,
//   },
//   {
//     name: "Dog",
//     price: 500,
//     quantity: 1,
//   },
//   {
//     name: "Khargosh",
//     price: 200,
//     quantity: 3,
//   },
//   {
//     name: "Chooza",
//     price: 20,
//     quantity: 500,
//   },
// ];

// const sortedCart = cart.sort((a, b) => {
//   return b.price * b.quantity - a.price * a.quantity;
// })

// console.log(sortedCart);