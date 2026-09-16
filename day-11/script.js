//===============================================================================================//
// PRACTICE TASK OF DAY-11 //
//===============================================================================================//

const cars = [
  {
    name: "A4",
    brand: "Audi",
    color: "white",
    price: 45000,
  },
  {
    name: "X5",
    brand: "BMW",
    color: "black",
    price: 60000,
  },
  {
    name: "Camry",
    brand: "Toyota",
    color: "white",
    price: 30000,
  },
  {
    name: "Roma",
    brand: "Ferrari",
    color: "red",
    price: 120000,
  },
  {
    name: "C-Class",
    brand: "Mercedes",
    color: "black",
    price: 55000,
  },
];

// Using .map() to increase the price of every car by 10000. //

const carsNewPrice = cars.map((car) => (car.price = car.price + 10000));
console.log(carsNewPrice);

//Using .filter() to create a new array containing only the cars whose color is "white". //

const filteredCars = cars.filter((car) => car.color == "white");
console.log(filteredCars);

//  TASK COMPLETED //
