const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');



//DB object
const config = require('./config/database');

//Mongobd config
mongoose.set('useCreateIndex', true);

//Conectare cu DB
mongoose.connect(config.database, {useNewUrlParser:true})
.then(()=> {
    console.log('Conexiune la DB cu success ' + config.database);
}).catch(err => {
    console.log(err);
});


//Initializare aplicatie
const app = express();

//Definirea Port-ului
const PORT = process.env.PORT || 5000;

//Definire middleware
app.use(cors());

//setam folderul static
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (Request, Response) => {
    return Response.json({
        message: "Node js auth system"
    });
});

//middleware function : verifica tipul utilizatorului
//middleware functions au req res si next
const checkUserType = function(Request, Response, next){
    const userType = Request.originalUrl.split('/')[2];
    
    
    //passport authentication strategy
    require('./config/passport')(userType, passport);

    next();
};

app.use(checkUserType);



//User routes
const users = require('./routes/user-routes');
app.use('/api/users', users);

//admin routes
const admin = require('./routes/admin-routes');
app.use('/api/admin', admin);

const io = require

app.listen(PORT, () => {
    console.log(`Serverul a pornit pe portul ${PORT}`);
});