const Pacienti = require('../models/User');
const User = require('../models/User');

class PacientiService {
    async getPacientByID(id){
        const pacientCol = await Pacienti.find({ id: id}).limit(1);
        const pacient = productCol[0];

        if (pacient) {
            return new User(User.name)
        }
    }
 }