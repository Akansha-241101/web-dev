import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
