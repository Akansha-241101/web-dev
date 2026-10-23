import express from "express";

const app = express();

app.get("/cars", (req, res) => {
  const cars = [
    {
      id: 1,
      name: "BMW",
      color: "Black",
    },
    {
      id: 2,
      name: "Audi",
      color: "White",
    },
    {
      id: 3,
      name: "Tesla",
      color: "Red",
    },
    {
      id: 4,
      name: "Mercedes",
      color: "Silver",
    },
    {
      id: 5,
      name: "Toyota",
      color: "Blue",
    },
  ];
  console.log(JSON.stringify(cars));
  res.json(cars);
});

app.get("/tukuuu", (req, res) => {
  res.send("<p>Hi Tuku</p>");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
