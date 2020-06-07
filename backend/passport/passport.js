// Folosim JsonWebToken pentru a securiza parti din API
// Clientul Ionic trimite token-ul catre server
// Serverul trebuie sa extraga tokenul trimis de client (din header) si sa verifice 

// const passport = require("passport")

//daca este valid, userul e valid, etc
// Aceste lucruri sunt indeplinite de passport passport json WebToken

var User = require('../model/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var config = require('../config/config');

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
}

module.exports = new JwtStrategy(opts, function (jwt_payload, done) {
    User.findById(jwt_payload.id, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done (null, user);
        } else {
            return done(null,false);
        }
    });
});
