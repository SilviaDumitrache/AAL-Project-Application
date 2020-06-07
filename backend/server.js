console.log("------Starting the backend-------")

const express = require('express');
const cors = require("cors");
const app = express();
const medRouter = require("./route/med.route");

app.use("/", medRouter);
app.use(cors());

app.get('/', (Request, Response) => {
    Response.render('index.ejs')
})

app.listen(3000, ()=> {
    console.log("listening on 3002");
  });