const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')

const app = express()

mongoose.connect('mongodb://localhost/studentportal')
mongoose.Promise = global.Promise

app.use(bodyParser.json())

app.use('/api',routes)

app.use(function(err,req,res,next){
    res.status(422).send({error: err.message})
})
// res for response, req for request
app.get('/',function(req,res){
    console.log('GET REQUEST')
    res.send({'name': 'James'})
})

app.listen(process.env.port||4000, function() {
    console.log('listening for requests')
})