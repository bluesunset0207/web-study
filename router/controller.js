const express = require('express')
const router = express.Router()


router.get("/", function(req, res){
    res.render('index', {title:"빡공팟 수료 기원 1주차"})
})

module.exports = router
