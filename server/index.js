const path = require("path");
const express = require("express");
const apiRouter = require("./api_router");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { connectDB } = require("./connectDB");
require('dotenv').config();

require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// routes
app.use("/api/v1", cors(), apiRouter);

connectDB()
  .then(() => {
    app.listen(process.env.port, function () {
      console.log("listening to port", process.env.port);
    });
  })
  .catch((error) => console.log("Error occured connecting to db", error));
