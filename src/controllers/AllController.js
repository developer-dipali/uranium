const { count } = require("console")
const BookModel = require("../models/bookModel.js")
const AuthorModel = require("../models/authorsModel.js")

const createBook = async function (req, res) {
    let bookdata = req.body
    let allBooks = await BookModel.create(bookdata)
    res.send({ msg: allBooks })
}


const createauthor = async function (req, res) {
    let Adata = req.body
   let authorData = await AuthorModel.create(Adata)
    res.send({ msg: authorData })
}


const allBooks = async function (req,res){
    const authorDetails = await AuthorModel.find({author_name : "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await BookModel.find({author_id : id}).select({name:1})
    res.send({msg : booksName})
}


const updateBookPrice=async function(req,res){
  const bookDetails=await BookModel.find({name:"Two states"})
  const id=bookDetails[0].author_id
  const authorN=await AuthorModel.find({ author_id:id}).select({ author_name:1,_id:0})
 const bkName= bookDetails[0].name
  const updateBookPrice=await BookModel.findOneAndUpdate({  name:bkName},{price:100},{  new:true}).select({ price:1 ,_id:0})
  res.send({ msg:authorN,updateBookPrice})
}


const authorsName = async function (req,res){
    const booksId = await BookModel.find({price: {$gte : 50, $lte : 100}}).select({author_id : 1, _id:0})
    const id = booksId.map(inr => inr.auhtor_id)
    let temp = []
    for(let i = 0; i<id.length ; i++){
        let x = id[i]
        const author = await AuthorModel.find({auhtor_id: x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({msg: authorName})
}



module.exports.createBook = createBook
module.exports.createauthor = createauthor
module.exports.allBooks=allBooks
module.exports.updateBookPrice=updateBookPrice
module.exports.authorsName=authorsName




// const = async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )

//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE





// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
