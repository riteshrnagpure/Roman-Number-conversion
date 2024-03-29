const express = require("express");
const app = express();
const baseUrl = "/project/roman-number";
const conversionController = require("./controller/conversionController");
const port = process.env.PORT || 8000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(`${baseUrl}/ping`, (req, res) => {
  res.send("Pong");
});

app.get(`${baseUrl}/conversion/:input`, (req, res) => {
  conversionController.convertNumber(req, res);
});

const server = app.listen(port, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
