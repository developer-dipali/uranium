
const batchModel = require("../models/batchModel")
const developerModel = require("../models/developerModel")

// =====>
const developersdata = async function (req, res) {
    let developer = req.body
    let createdeveloper = await developerModel.create(developer)
    res.send({ data: createdeveloper })
}
// =====>
const scholarshipDeveloper = async function (req, res) {
    let developers = await developerModel.find({ gender: "female", percentage: { $gte: 70 } }).select({ name: 1, _id: 0 })
    res.send({ msg: developers })
}

// =====================================================//
const developers = async function (req, res) {
    let data=req.query.percentage
    const batchname = req.query.program
     let reqBatch=await batchModel.find({name:batchname}).select({_id:1,name:1})
    let dev = await developerModel.find({ percentage: { $gte:data }, program:reqBatch.name}).populate("batchId")
    res.send({ msg: dev })
}
    //     let findDeveloper=await developerModel.find({}) 





    //=======================================================//




    module.exports.developersdata = developersdata
    module.exports.scholarshipDeveloper = scholarshipDeveloper
    module.exports.developers = developers
