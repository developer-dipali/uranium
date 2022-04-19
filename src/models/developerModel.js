const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    percentage: Number,
    batchId: {
        type: ObjectId,
        ref: "batch"
    }



}, { timestamps: true });

module.exports = mongoose.model(' developer',  developerSchema);


//=======================================================================================//



// / const mongoose = require('mongoose');

// const newPublisherSchema = new mongoose.Schema({

//     Publisher_name: String,
//     headQuarter : String

// }, { timestamps: true });

// module.exports = mongoose.model('newpublisher', newPublisherSchema)