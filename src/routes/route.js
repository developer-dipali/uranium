const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",mid.mid1,userController.getUserData)

router.put("/users/:userId",mid.mid1,mid.mid2, userController.updateUser)

router.delete("/deletuser/:userId",mid.mid1,mid.mid2,userController.deletUser)


module.exports = router;