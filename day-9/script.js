// let name = "";
// name = "Farhan";
// console.log(name);

// import {name, age} from "../day-8/variables.js"

// console.log(name, age);

// ARROW FUNCTION //

// const login = () => {
//     console.log('loged in');
// }

// login()

// const sum = (a, b) => {
//     console.log(a + b);
// }

// sum(5, 6)

// FUNCTION EXAMPLE (farhan) //

// let dinnerCompleted = false;

// const checkDinnerStatus = () => {
//   if (dinnerCompleted) {
//     return "Come lets play BGMi";
//   } else {
//     return "have your dinner first";
//   }
// };

// const dinner = checkDinnerStatus();
// console.log(dinner);

// OBJECTS EXAMPLE //

// let scooty = {
//   name: "activa",
//   model: "6G",
//   color: "gray",
// };

// console.log(scooty.name, scooty.color, scooty.model);

// SPREAD OPERATOR //

//  const scooty = {
//   name: "activa",
//   model: "6G",
//   color: "gray",
// };

// const scootyCopy = {...scooty};

// console.log(scootyCopy);

// FUNCTION Example //

//Example 1//

// const calculateMarks = (maths, science) => {
//   return maths + science;
// };

// const totalMarks = calculateMarks(45, 40);

// const checkResult = () => {
//   if (totalMarks >= 80) {
//     console.log("Excellent result");
//   } else {
//     console.log("Keep practicing");
//   }
// };

// checkResult();

// //Example 2//

// const calculateBattery = (startBattery, usedBattery) => {
//   return startBattery - usedBattery;
// };

// const remainingBattery = calculateBattery(100, 65);

// const checkBattery = () => {
//   if (remainingBattery <= 80) {
//     console.log("Battery is low");
//   } else {
//     console.log("Battery is sufficient");
//   }
// };

// checkBattery();

// .MAP FUNCTION EXAMPLE //

// 10 marks to be added as practical marks for each item;

const marks = [67, 36, 82, 74, 55];

// we have to use marks.map() and make sure we store the final array in a new variable because .map returns a new array
// const newMarks = marks.map(() => {}) this way

// code example

const newMarks = marks.map((number) => number + 10);

console.log(newMarks);

// example 1//

const prices = [100, 200, 300, 400];

const newPrices = prices.map((price) => price - 10);

console.log(newPrices);

//example 2//

const price = [100, 200, 300];

const newPrice = price.map((price) => price + price * 0.1);

console.log(newPrice);

// example 3//

const personAge = [23, 34, 27, 18, 40];

const ageAfter5year = personAge.map((age) => age + 5);

console.log(ageAfter5year);

//DONE//
