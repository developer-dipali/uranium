const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers.js")
const mw = require("../middlewares/commonMiddlewares")

router.post("/createProduct", controller.createProduct)

router.post("/createUser", mw.mid1, controller.createUser)

router.post("/createOrder", mw.mid1, controller.createOrder)

module.exports = router