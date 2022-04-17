
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorId: {
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisherId:{
        type:ObjectId,
        ref:"newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)






//=================================================================================================//
// const mongoose = require('mongoose');

// const ObjectId = mongoose.Schema.Types.ObjectId

// const newBookSchema = new mongoose.Schema( {    
    
//     newAuthor: {
//         type: ObjectId,
//         ref: "newAuthor"
        
//     },
//     newPublisher: {
//         type: ObjectId,
//         ref: "newPublisher"
//     },
//     name: String,
//     price: Number,
//     ratings: Number,


// }, { timestamps: true });


// module.exports = mongoose.model('newBook',newBookSchema)
