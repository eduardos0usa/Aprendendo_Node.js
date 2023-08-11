const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engnine','handlebars')

app.get('/',(req,res)=>{
    res.render('home',{ layout: false })
})

app.listen(3000,(req,res)=>{
    console.log('App funcionando!')
})