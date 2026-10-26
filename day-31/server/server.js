import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
  }),
);

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
  res.json(cars);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
