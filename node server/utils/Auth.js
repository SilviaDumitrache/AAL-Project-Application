const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { secret } = require("../config/database")
 
//inregistrare user, admin, super-admin
const userRegister = async (userDets, role, Response) => {
   try {
     //validare user
     let usernameNotTaken = await validateUsername(userDets.username);
     if (!usernameNotTaken){
         return Response.status(400).json({
             message: 'Username-ul deja exista in baza de date.',
             success: false
         });
     }
 
     //validare email
     let emailNotRegistered = await validateEmail(userDets.email);
     if (!emailNotRegistered){
         return Response.status(400).json({
             message: 'Email-ul a fost deja folosit.',
             success: false
         });
     }
 
     //daca validarile sunt facute cu success => inregistrare
     
     //hash pass
     const password = await bcrypt.hash(userDets.password, 12); //12=rounds if false
 
     //creare user nou
     const newUser = new User({
         ...userDets,
         password,
         role
     });
 
     //dupa ce am creat userul il salvam in bd
     await newUser.save();
     return Response.json.status(201).json({
         message: "Inregistrare cu succes. Mergeti la login",
         success: true
 
     });
   } catch (err) {
    return Response.json.status(500).json({
        message: "Inregistrarea nu s-a putut face.",
        success: false
    });
}
};

//daca userul exista in BD atunci returneaza false
const validateUsername = async username => {
    let user = await User.findOne({ username });
    return user ? false : true;
};

//daca emailul exista deja in BD atunci returneaza false
const validateEmail = async email => {
    let user = await User.findOne({ email });
    return user ? false : true;
};

module.exports = {
    userRegister
};