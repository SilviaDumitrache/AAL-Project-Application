const Med = require("../model/Med");
const medCtrl = {};
const meds = [];

meds.push(new Med("M1", 2, 1));
meds.push(new Med("M2", 1, 2));
meds.push(new Med("M3", 2, 3));

medCtrl.med = (Request, Response) => {
    Response.send(meds);
};

medCtrl.medById = (Request,Response) => {
    console.log(Request.params.id);

    Response.send(meds.find(p => p.id === parseInt(Request.params.id)));
};

module.exports = medCtrl;