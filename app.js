const express = require('express')
const app = express()
const helmet = require("helmet")
const ejs = require('ejs')
const db = require('./model/db')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/public', express.static(__dirname+'/public'))


app.use(helmet())

app.use(express.json())
app.use(express.urlencoded())

const mainRouter = require('./router/controller')
app.use('/', mainRouter)

app.listen(3000, function(req, res){
    db.seq.sync({force:false})
    console.log("서버")
})
