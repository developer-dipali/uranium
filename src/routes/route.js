const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const Weathercontroller=require("../controllers/weatherControtroller")
const memeController = require("../controllers/memeController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)


//assingment Que 1>>// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
// router.get("cowin/getByDistrictId",CowinController.getByDistrictId)
router.get("/cowin/getDistrictSessions", CowinController.getDistrictSessions)
router.get("/cowin/getSortedCities", Weathercontroller.getSortedCities)
router.post("/createMeme", memeController.createMeme)


//router.get("/getSortedCities",weathercontroller.getSortedCities)


module.exports = router;