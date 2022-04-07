const express = require('express');
const any = require('../logger/logger.js')
const helper = require('../util/helper')
const router = express.Router();
const formmatter = require('../validator/formmatter.js');
const lodash = require('lodash');

router.get('/test-me', function (req, res) {

    res.send('my 1st ever api')
    any.welcome()

});
router.get('/test-me2', function (req, res) {
    helper.date();
    helper.month();
    helper.batch()
    res.send('date and month')
});
router.get('/test-me3', function (req, res) {
    res.send('trim the string')
    formmatter.output();
    formmatter.output2();
    formmatter.output3();

});router.get('/hello',function(req,res){
    const month = [" january","february","march","april","may","june","july","agust","september","october","november","december"]
    res.send('THIS IS MY FOURTH API')
    console.log(lodash.chunk(month,4))

    const odd = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(odd))

    const arr1 = [1,2,3,62,6,8];
    const arr2 = [1,2,5,7,62,7];
    const arr3 = [2,4,7,3,8,9];
    const arr4 = [2,61,8,4,10];
    const arr5 = [4,6,3,8,11,10]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))


    const obj =[
     ['NAME','DIPALI'],
    ['CITY','KALYAN'],
    ['DISTRICT','THANE'],
    ['HOBBY','RANGOLI']
    ]
    
    let a = lodash.fromPairs(obj);
    console.log(a)

});
module.exports=router;