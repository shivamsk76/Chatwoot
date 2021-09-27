const express = require("express");
const cors = require("cors");

// const dbConfig = require('./config/config')

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(cors({ origin: "*" }));

app.post("/chatapi", (req, res) => {
  console.log(req.body);
  res.send(200);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("App is running on port " + port);
});
