console.log("------Starting the backend-------")

// const express = require('express');
// const cors = require("cors");
// const app = express();
// const medRouter = require("./route/med.route");

// app.use("/", medRouter);
// app.use(cors());

// app.get('/', (Request, Response) => {
//     Response.render('index.ejs')
// })

// app.listen(3000, ()=> {
//     console.log("listening on 3002");
//   });

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var config = require('./config/config');
var port = process.env.PORT || 5000;
var cors = require('cors');

var app = express();
app.use(cors());

//get params
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
var passp = require('./passport/passport');
passport.use(passp);

//http://localhost:5000
app.get('/', function(Request, Response){
    return Response.send('Api-ul este la http://localhost:' + port + '/api');
});

var routes = require('./routes.js');
app.use('/api', routes);

mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});

const connection= mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB conexiune stabilita cu success');
});

connection.on('error', (err) => {
    console.log("MongoDB eroare. Verifica daca ruleaza DB" + err);
    process.exit();
});

//pornire server
app.listen(port);
console.log('Something at http://localhost:' + port);