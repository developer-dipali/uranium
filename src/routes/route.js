const express = require('express');
const res = require('express/lib/response');
const logger = require('./logger');
const router = express.Router();

//problem1
router.get('/movies', function (req, res) {

    let array = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    let count = req.query.count

    res.send(array)
})



//problem2&3
router.get('/movies/:indexNumber', function (req, res) {
    const arr = ["rang de basanti", "the shining", "lord of the rings", "bartman begins"]

    const id = req.params.indexNumber;
    if (id < arr.length) {
        res.send(arr[id])
    } else {
        res.send('enter valid id')
    }


});

//problem4

router.get('/films', function (req, res) {
    const arr4 = [
        {
            id: 1,
            name: "the shining"
        },

        {
            id: 2,
            name: "Incendies"
        },

        {
            id: 3,
            name: "Rang de Basanti"
        },

        {
            id: 4,
            name: "Finding Nemo"
        },
    ]
    res.send(arr4)

});


// PROBLEM 5


router.get('/films/:filmId', function (req, res) {
    const fNames = [{
        'id': 1,
        'name': 'The Shining'
    }, {
        'id': 2,
        'name': 'Incendies'
    }, {
        'id': 3,
        'name': 'Rang de Basanti'
    }, {
        'id': 4,
        'name': 'Finding Nemo'
    }]

    let a;
    let n = req.params.filmId
    for (let i = 0; i < fNames.length; i++) {
        if (n > fNames[i].id) {
            a = (" no movie list it his id")
        }

        if (n == fNames[i].id) {
            a = fNames[i]
        }
    }
    res.send(a)

});

module.exports = router;
// adding this comment for no reason





//problem5

// router.get('/films/:filmId ', function (req, res) {

// const arr5 = [
//     {
//         id: 1,
//         name: "the shining"
//     },

//     {
//         id: 2,
//         name: "Incendies"
//     },

//     {
//         id: 3,
//         name: "Rang de Basanti"
//     },

//     {
//         id: 4,
//         name: "Finding Nemo"
//     },
// ]
/* const id = req.params.filmId
if (id < arr5.length) {
    let output = arr5[id].id + " " + arr5[id].name;
    res.send(output)
}
else {
    res.send("No movie exists with this id")
}

// router.get('/findmissingnumber', function (req, res) {
//     const arr = [1,2,3,4,5,7,8]
//     for(i=0;i<arr.length;i++){
//          let sumOfArray=0;
//          sumOfArray = sumOfArray+arr[i] }
//          let sumOfNumber = (arr[(arr.length)-1])*(arr[(arr.length)-1]+1)/2;
//          let missingNumber=sumOfNumber-sumOfArray;
//         res.send('missing number is:'+ missingNumber)
*/