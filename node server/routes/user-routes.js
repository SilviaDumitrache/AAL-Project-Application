const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/database');

//inregistrare utilizator nou
router.post('/register', (Request, Response) => {
   let newUser = new User({
       name: Request.body.name,
       username: Request.body.username,
       email: Request.body.email,
       contact: Request.body.contact,
       password: Request.body.password
   });
    
   User.addUser(newUser, (err, user) => {
       if (err){
           let message = "";
           if (err.errors.username) message = "Username deja folosit";
           if (err.errors.email) message = "Email deja folosit";
           return Response.json({
               success: false,
               message
           });
       }else {
           return Response.json({
               success:true,
               message: "Inregistrare utilizator cu success"
           });
       }
   })

});

//logare utilizator deja existent
router.post('/login', (Request, Response) => {
    const username = Request.body.username;
    const password = Request.body.password;
    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if (!user) {
            return Response.json({
                success:false,
                message: "Acest utilizator nu exista."
            });
 
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                //trimitem token
                const token = jwt.sign({
                    type: "user",
                    data: {
                        _id: user._id,
                        name: user.name,
                        username:user.username,
                        email: user.email,
                        contact: user.contact
                    }
                }, config.secret, {
                    expiresIn:604800 //timpul in ms pt 1 saptamana
                
                });
                return Response.json({
                    success: true,
                    token: "JWT" + token
                });
            } else {
                return Response.json({
                    success: true,
                    message: "Parola gresita!"
                });
            }
        })
    })
})

//profil, pentru utilizatorii autentificati
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (Request, Response) => {
    console.log(Request.user);
    return Response.json(
        Request.user
    );
})

module.exports = router;