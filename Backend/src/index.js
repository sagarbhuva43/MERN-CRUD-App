const express = require("express");
const app = express();

const tutorialscontroller = require("./controller/tutorials.controller");

app.use(express.json());

app.use("/tutorials", tutorialscontroller);

module.exports = app;
