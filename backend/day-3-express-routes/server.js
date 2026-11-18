import express from "express";

const app = express();

const cars = [
  { id: 1, name: "BMW" },
  { id: 2, name: "Audi" },
];

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.get("/cars/:id", (req, res) => {
  const car = cars.find((item) => item.id === Number(req.params.id));
  res.json(car || { message: "Not found" });
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
