// ========================================
// 1. IMPORT / EXPORT
// ========================================

// import { name, age } from "./variables.js";

// const greet = () => {
//   console.log(`Hi ${name} ${age}`);
// };

// greet();


// ========================================
// 2. OBJECTS
// ========================================

// let personOne = {
//   name: "Akansha",
//   age: 24,
// };

// // Mutating an object
// console.log(personOne.age = 23);


// ========================================
// 3. SPREAD OPERATOR
// ========================================

// let person = {
//   name: "Akansha",
//   age: 24,
// };

// // Creating a copy of an object
// let personCopy = { ...person };

// console.log(personCopy);


// ========================================
// 4. ARRAYS & ARRAY METHODS
// ========================================

// const numbers = [6, 2, 10, 7];

// // filter()
// const filteredNumbers = numbers.filter((number) => number > 5);

// console.log(filteredNumbers);


// ========================================
// 5. MAP()
// ========================================

// const numbers = [2, 3, 5];

// const multipliedByTwo = numbers.map((number) => number * 2);

// console.log(multipliedByTwo);


// ========================================
// 6. OBJECT DESTRUCTURING
// ========================================

// const person = {
//   name: "Akansha",
//   age: 24,
// };

// // Without destructuring
// const name = person.name;
// const age = person.age;

// // With destructuring
// const { name, age } = person;

// console.log(name);


// ========================================
// 7. IF / ELSE
// ========================================

// let age = 24;

// if (age > 18) {
//   console.log("eligible for driving");
// } else {
//   console.log("not eligible for driving");
// }


// ========================================
// 8. TERNARY OPERATOR
// ========================================

// let age = 24;

// age > 18
//   ? console.log("eligible for driving")
//   : console.log("not eligible for driving");


// ========================================
// 9. IF / ELSE INSIDE A FUNCTION
// ========================================

// let age = 24;

// function checkEligibility() {
//   if (age > 18) {
//     return "eligible for driving";
//   } else {
//     return "not eligible for driving";
//   }
// }

// const result = checkEligibility();

// console.log(result);