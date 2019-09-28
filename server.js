const express = require("express");
const app = express();
const baseUrl = "/project/roman-number";
const conversionController = require("./controller/conversionController");

app.get(`${baseUrl}/ping`, (req, res) => {
  res.send("Pong");
});

app.get(`${baseUrl}/conversion/:input`, (req, res) => {
  conversionController.convertNumber(req, res);
});

const server = app.listen(8000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
