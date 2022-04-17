const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create(publisher)
    res.send({data: publisherCreated})
}


module.exports.createPublisher=createPublisher;










// const publisherModel = require("../models/publisherModel")

// const createNewPublisher= async function (req, res) {
//     let newpublisher = req.body
//     let newPublisherCreated = await publisherModel.create(newpublisher)
//     res.send({data: newPublisherCreated})
// }

// const getPublisherData= async function (req, res) {
//     let newPublisher = await publisherModel.find()
//     res.send({data: newPublisher})
// }

// module.exports.createNewPublisher= createNewPublisher
// module.exports. getPublisherData=getPublisherData

