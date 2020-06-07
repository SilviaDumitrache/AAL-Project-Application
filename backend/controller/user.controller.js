var User = require('../model/user');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

//functia pt crearea Token-ului
function createToken(user){
    //nu trebuie sa pastram in token informatii sensitive, cum ar fi parola
    return jwt.sign({ id: user.id, email: user.email}, config.jwtSecret, {
        //token-ul expira in 20 de secunde
        expiresIn: 20 });
        //86400 = 1 zi
}

exports.loginUser = (Request, Response) => {
    if (!Request.body.email || !Request.body.password) {
        return Response.status(400).json({'msg': 'Introduceti email si parola'});
    }

    User.findOne({ email:Request.body.email }, (err, user) => {
        if (err) {
            return Response.status(400).json({'msg':err});
        }

        if (!user) {
            return Response.status(400).json({'msg': 'Acest utilizator nu exista'});
        }

        user.comparePass(Request.body.password, (err,isMatch) =>{
            //daca login-ul e cu succes, se creaza tokenul pt user
            if (isMatch && !err) {
                return Response.status(200).json({
                    token: createToken(user)        
                });
            } else{
                return Response.status(400).json({
                    'msg': 'Email-ul si parola nu corespund'
                });
            }
        })
    })

};