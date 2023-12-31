const express = require('express')
const router = express.Router()
const db = require('../model/db')

router.get("/", function(req, res){
    res.render('index', {title:"빡공팟 수료 기원 1주차"})
})



router.get("/data/create", function(req, res){
    let user_id = parseInt(Math.random() * 1000)
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200})
    })
})

router.get("/data/read", function(req, res){
    db.users.findAll().then(function(result){
        res.send({success:200, data:result})
    })
})

router.post("/data/update", function(req, res){
    let target_id = req.body.target_id;
    db.users.update({user_id:9999}, {where:{user_id:target_id}}).then(function(result){
        res.send({success:200})
    })
})

router.post("/data/delete", function(req, res){
    let target_id = req.body.target_id;
    db.users.destroy({where:{user_id:target_id}}).then(function(result){
        res.send({success:200})
    })
})

module.exports = router
