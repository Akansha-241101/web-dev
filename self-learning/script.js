// setTimeout(() => {
//   console.log("5 secs completed");
// }, 5000);

// Destructuring object

const student = {
  name: "Akansha",
  age: 24,
  favMessage: "I Love You",
  functionOne: () => {
    console.log("I am function one");
  },
};

const colors = ["red", "green", "blue"];

// without object destructuring
// const studentName = student.name;
// const studentAge = student.age;
// const studentFavMessage = student.favMessage;
// const functionOne = student.functionOne;

// with object destructuring
const { name, age, favMessage, functionOne } = student;

// without aray destructuring
// const colorOne = colors[0];
// const colorTwo = colors[1];
// const colorThree = colors[2];

// with array destructuring
const [sdadas, sdjbaskd, asdkjankd] = colors;
