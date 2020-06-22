const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.profileRd =function(request, response) {
    //daca nu exista ID => 401
    if (!request.payload._id) {
        response.status(401).json({
            "message" : "Neautorizat"
        });
    }else {
        User.findById(request.payload._id)
            .exec(function(err, user){
                response.status(200).json(user);
            });
    }
};

