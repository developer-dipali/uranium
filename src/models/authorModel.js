const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    authorName:{type: String,required:true},
    age:Number,
    address:String,
    rating :Number

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema);


//===============================================================================//






// const mongoose = require('mongoose');

// const newAuthorSchema = new mongoose.Schema({

//     author_name: String,
//     age: Number,
//     address: String,
//     rating: Number

// }, { timestamps: true });

// module.exports = mongoose.model('newAuthor', newAuthorSchema)



// const authorSchema = new mongoose.Schema( {
//     author_id: String,
//     author_name: String,
//     age:Number,
//     address:String

// }, { timestamps: true });

// module.exports = mongoose.model('Author', authorSchema)
