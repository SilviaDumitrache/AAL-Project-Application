const express = require("express");
const medCtrl = require("../controller/med.controller");

const router = express.Router();
router.get("/med", medCtrl.med);
router.get("/med/:id", medCtrl.medById);

module.exports=router;