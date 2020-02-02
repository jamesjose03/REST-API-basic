const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/api')

const app = express()

app.use(bodyParser.json())

app.use('/api',routes)
// res for response, req for request
app.get('/',function(req,res){
    console.log('GET REQUEST')
    res.send({'name': 'James'})
})

app.listen(process.env.port||4000, function() {
    console.log('listening for requests')
})