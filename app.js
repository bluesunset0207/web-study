const express = require('express')
const app = express()
const helmet = require("helmet")
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/public', express.static(__dirname+'/public'))


app.use(helmet())

const mainRouter = require('./router/controller')
app.use('/', mainRouter)

app.listen(3000, function(req, res){
    console.log("서버")
})
