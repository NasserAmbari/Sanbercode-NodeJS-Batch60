const express = require("express");
const calculator = require("./latihan3");
const app = express();
const port = 3000;

console.log(calculator.additionNumber(2, 3));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
