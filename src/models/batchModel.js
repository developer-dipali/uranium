
const mongoose = require('mongoose');



const batchSchema = new mongoose.Schema( {
    name: String,
    size: Number,
    program :{
       type:String,
       enum: ["Backend", "Frontend"]
   }

    }, { timestamps: true });


module.exports = mongoose.model('batch', batchSchema)






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
