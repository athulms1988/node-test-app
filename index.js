"use strict";
const express = require("express");
const app = express();
const port = 80;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/test', async (req, res) => {
  res.send("Ok");
});

app.listen(port, () =>
  console.log(`API Server Running On Port -> ${port}!`)
);