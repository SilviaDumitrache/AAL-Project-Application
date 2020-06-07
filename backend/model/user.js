var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSCH = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
});

//functia este apelata inainte ca obiectul sa fie salvat in DB. 
// Parolele nu se stocheaza in clear text in DB
UserSCH.pre('save', function(next) {
    var user = this;

    // verifica daca parola a fost mofificata. Daca nu a fost modificata returneaza next
    if (!user.isModified('password')) return next();

    // daca parola a fost modificata, folosim genSalt 
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // parola modificata e setata in noul hash
        user.password = hash;
        next();
    });
    });
});

//userul se logheaza => se compara parolele 
// candidatePass = parola in clear text, pe care userul a introdus-o
//this.password este parola "hashed"
UserSCH.methods.comparePass = function (candidatePass, cb) {
    // bcrypt compara parolele sa vada daca se potrivesc
    bcrypt.compare(candidatePass, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module. exports = mongoose.model('User', UserSCH);