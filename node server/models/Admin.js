const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');

//Schema pt utilizatorul admin
const AdminSCH = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    job_profile:{
        type: String,
        required: true
    }
});

//validatorul are rolul de a valida schema de autentificare pentru utilizator
AdminSCH.plugin(uniqueValidator);

const Admin = module.exports = mongoose.model('Admin', AdminSCH);

//gaseste Adm dupa id
module.exports.getAdminById = function (id, callback){
    Admin.findById(id, callback);

}

//gaseste Adm dupa Admname
module.exports.getAdminByUsername = function (username, callback) {
    const query = {
        username: username
    }
    Admin.findOne(query, callback);
}

//inregistrare Admin
module.exports.addAdmin = function(newAdmin, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) =>
        {
             if (err) throw err;
             newAdmin.password = hash;
             newAdmin.save(callback);   
        });
    })
}

//compara parolele, cand Admul incearca sa se conecteze
module.exports.comparePassword = function(password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}