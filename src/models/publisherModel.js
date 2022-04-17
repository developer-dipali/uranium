const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    
    publisherName:{type: String,required:true},
    headQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema);


//=======================================================================================//



// / const mongoose = require('mongoose');

// const newPublisherSchema = new mongoose.Schema({

//     Publisher_name: String,
//     headQuarter : String

// }, { timestamps: true });

// module.exports = mongoose.model('newpublisher', newPublisherSchema)