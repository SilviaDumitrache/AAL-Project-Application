console.log("------Starting the backend-------")

const express = require('express');
const app = express();
const medRouter = require("./route/med.route");

app.use("/", medRouter);

app.listen(3000, ()=> {
    console.log("listening on 3000");
  });