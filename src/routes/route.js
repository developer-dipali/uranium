const express = require('express');
const router = express.Router();

const batchController= require("../controllers/batchController")
const developerController= require("../controllers/developerController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbatch", batchController.createBatch  )
router.post("/createdevelopers",developerController.developersdata)
router.get("/scholarshipDeveloper",developerController.scholarshipDeveloper)
router.get("/developers",developerController.developers)



module.exports = router;

