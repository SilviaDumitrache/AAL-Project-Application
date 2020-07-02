const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt; 
const User = require('../models/User');
const Admin = require('../models/Admin');
const config = require('../config/database');

//autentificare user cu JWT Strategy
module.exports = (userType, passport) => {
    let opts = {};
    //extragem tokenul din header
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {


        if (userType == 'admin'){
            Admin.getAdminById(jwt_payload.data._id, (err, user)=> {
                if (err) return done(err, false); //user nu e autentificat
                if (user) return done (null, user); //user autentificat
                return done(null, false); 
            });
        }
        if (userType == 'user') {
        User.getUserById(jwt_payload.data._id, (err, user)=> {
            if (err) return done(err, false); //user nu e autentificat
            if (user) return done (null, user); //user autentificat
            return done(null, false); 

        });
        }
    }));
}