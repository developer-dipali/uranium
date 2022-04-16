const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({

    author_id: {
        type: Number,
        require: true
    },
    author_name: String,
    age: Number,
    address: String
}

    , { timestamps: true });
module.exports = mongoose.model('Author', authorsSchema) //Authors

// {

//     author_id:1,
//     author_name:"Chetan Bhagat",
//     age:25,
//     address:"New delhi"
// } ,
