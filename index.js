const express = require('express')

const app = express()
// res for response, req for request
app.get('/',function(req,res){
    console.log('GET REQUEST')
    res.send({'name': 'James'})
})

app.listen(process.env.port||4000, function() {
    console.log('listening for requests')
})