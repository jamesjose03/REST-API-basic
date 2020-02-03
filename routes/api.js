const express = require('express')
const router = express.Router()
const Student = require('../models/students')

//To retrieve the list
router.get('/students', function(req,res){
    res.send({type:'GET'})
})

//To add to the db
router.post('/students', function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student)
    }).catch(next)
})

// To update the db
router.put('/students/:id', function(req,res){
    res.send({type:'PUT'})
})

//To delete value in the db
router.delete('/students/:id', function(req,res){
    Student.findByIdAndRemove({_id: req.params.id}).then(function(student){
        res.send(student)
    })
    //console.log(req.params.id)
    res.send({type:'DELETE'})
})

module.exports = router