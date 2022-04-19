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

//==================================================================================================//



// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/authorController")
// const publisherController=require("../controllers/publisherController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })
// router.post("/creatNewAuthor", authorController.creatNewAuthor )

// router.get("/getAuthorsData", authorController.getAuthorsData)
// // ----------------------------------------------------------------------------

// router.post("/createNewPublisher", publisherController.createNewPublisher)

// router.get("/getPublisherData", publisherController. getPublisherData)

// // -----------------------------------------------------------------

//  router.post("/createNewBook", bookController.createNewBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)




// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;