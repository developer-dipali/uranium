const batchModel= require("../models/batchModel")




const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}

module.exports.createBatch= createBatch






// const AuthorModel= require("../models/authorModel")

// const creatNewAuthor= async function (req, res) {
//     let authorNew = req.body
//     let newAuthorCreated = await AuthorModel.create(authorNew)
//     res.send({data: newAuthorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authorsNew = await AuthorModel.find()
//     res.send({data: authorsNew})
// }

// module.exports.creatNewAuthor= creatNewAuthor
// module.exports.getAuthorsData= getAuthorsData



// const AuthorModel= require("../models/authorModel")

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData