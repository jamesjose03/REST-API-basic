const express = require('express')
const router = express.Router()

//To retrieve the list
router.get('/students', function(req,res){
    res.send({type:'GET'})
})

//To add to the db
router.post('/students', function(req,res){
    console.log(req.body)
    res.send({
        type:'POST',
        name: req.body.name,
        rank: req.body.rank
    })
})

// To update the db
router.put('/students/:id', function(req,res){
    res.send({type:'PUT'})
})

//To delete value in the db
router.delete('/students/:id', function(req,res){
    res.send({type:'DELETE'})
})

module.exports = router