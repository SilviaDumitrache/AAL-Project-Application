const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');


//Schema pt utilizator
const UserSCH = mongoose.Schema({
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
    }
});

//validatorul are rolul de a valida schema de autentificare pentru utilizator
UserSCH.plugin(uniqueValidator);

const User = module.exports = mongoose.model('User', UserSCH);

//gaseste user dupa id
module.exports.getUserById = function (id, callback){
    User.findById(id, callback);

}

//gaseste user dupa username
module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username:username
    }
    User.findOne(query, callback);
}

//inregistrare user
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) =>
        {
             if (err) return err;
             newUser.password = hash;
             newUser.save(callback);   
        });
    })
}

//compara parolele, cand userul incearca sa se conecteze
module.exports.comparePassword = function(password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });


       


}