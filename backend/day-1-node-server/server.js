import http from "node:http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    res.end(JSON.stringify({ message: "Home" }));
    return;
  }

  if (req.url === "/hello") {
    res.end(JSON.stringify({ message: "Hello" }));
    return;
  }

  res.end(JSON.stringify({ message: "Not found" }));
});

server.listen(5000, () => {
  console.log("http://localhost:5000");
});
