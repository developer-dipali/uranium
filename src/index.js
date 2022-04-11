const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

mongoose.connect("mongodb+srv://functionUpUranium-2:JECVxS0v96bKoG0a@cluster0.j1yrl.mongodb.net/dipali-DB?retryWrites=true&w=majority",
{
    useNewUrlParser : true 
})
.then(  () => console.log("MongoDB is Connected"))
.catch(err => console.log(err))







app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
