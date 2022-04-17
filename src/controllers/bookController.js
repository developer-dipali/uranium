const read = require("body-parser/lib/read")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let data = req.body
    let authorIdValue = await authorModel.findOne({ _id: data.authorId })
    let publisherIdValue = await publisherModel.findOne({ _id: data.publisherId })
    //validatin AuthorId   
    let authorIdValidation =  function () {        
        if (data.hasOwnProperty('authorId')) {                 
            if (authorIdValue !== null) {
                let c = authorIdValue._id.toString()
                if (data.authorId == c) {
                    return true
                }              
            }
            else if(authorIdValue==null) {
                return "authorId is not match"
            }
        }
        else { return "authorId is not found" }
    }
// validating publisherId
    let publisherIdValidation =  function () {        
        if (data.hasOwnProperty('publisherId')) {                 
            if (publisherIdValue !== null) {
                let c = publisherIdValue._id.toString()
                if (data.publisherId == c) {
                    return true
                }              
            }
            else if(publisherIdValue==null) {
                return "publisherId is not match"
            }
        }
        else { return "Publisher Id is not found" }
    }
// after validation creating book
    if(authorIdValidation()===true && publisherIdValidation()===true){
        let newBook = await bookModel.create(data)
        res.send({NewBook:newBook})
    }
    else if(authorIdValidation()!==true){
        res.send({msg:authorIdValidation()})
    } 
    else if(publisherIdValidation() !==true)  {
        res.send({msg: publisherIdValidation()})
    }
}

// =====>
const getBooksData = async function (req, res) {
    let books = await bookModel.find().populate(['authorId', 'publisherId'])
    res.send({ data: books })
}
// =====>
const updateHardCoverStatus = async function (req, res) {
    let data = req.body
    let findPublisherId = await publisherModel.find({ publisherName: data.publisherName })
    let publisherIdFromDB = findPublisherId[0]._id
    let update = await bookModel.updateMany({ publisherId: publisherIdFromDB }, { $set: { isHardCover: data.isHardCover } }, { new: true })
    res.send({ msg: update })
}
// =====>
const updateBookPriceAsPerRatings = async function (req, res) {
    let data = req.body
    let findAuthorByRating = await authorModel.find({ rating: { $gt: data.rating } }).select({ _id: 1 })

    for (let i = 0; i < findAuthorByRating.length; i++) {
        var updatedBook = await bookModel.updateMany({ authorId: findAuthorByRating[i] }, { $inc: { "price": data.updatePriceBy } }, { new: true })
    }

    res.send({ updatedBook })
}

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateHardCoverStatus = updateHardCoverStatus
module.exports.updateBookPriceAsPerRatings = updateBookPriceAsPerRatings

// =============================================================================================//
// const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")

// const createNewBook = async function (req, res) {

//     let book = req.body
//     let validation =book.findOne({ _id: data.authorId })
//     if(validation==null) 
//      res.send("auther id required")

//     elseif(validation != ObjectId) 
//         res.send("auther is not present")

//     elseif(validation == ObjectId)
//    let bookCreated = await bookModel.create(book)
//     res.send({ data: bookCreated })
// }


// const getBooksData = async function (req, res) {
//     let books = await bookModel.find()
//     res.send({ data: books })
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('newAuthor')

//     res.send({ data: specificBook })

// }

// module.exports.createNewBook = createNewBook
// module.exports.getBooksData = getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
