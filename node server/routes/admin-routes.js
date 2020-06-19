const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const config = require('../config/database');

const User = require('../models/User');

//inregistrare utilizator nou
router.post('/register', (Request, Response) => {
   let newAdmin = new Admin({
       name: Request.body.name,
       username: Request.body.username,
       email: Request.body.email,
       contact: Request.body.contact,
       password: Request.body.password,
       job_profile:Request.body.job_profile
   });
    
   Admin.addAdmin(newAdmin, (err, user) => {
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
               message: "Inregistrare utilizator admin cu success"
           });
       }
   })

});

//logare utilizator deja existent
router.post('/login', (Request, Response) => {
    const username = Request.body.username;
    const password = Request.body.password;

    Admin.getAdminByUsername(username, (err, admin) => {
        if(err) throw err;
        if (!admin) {
            return Response.json({
                success:false,
                message: "Acest admin nu exista."
            });
 
        }
        Admin.comparePassword(password, admin.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                //trimitem token
                const token = jwt.sign({
                    type: "admin",
                    data: {
                        _id: admin._id,
                        username: admin.username,                     
                        name: Admin.name,
                        email: admin.email,
                        contact: admin.contact,
                        job_profile: admin.job_profile
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
                    success: false,
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