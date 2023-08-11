const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashbord',(req,res)=>{
    res.render('dashbord')
})

app.get('/',(req,res)=>{
    const user = {
        name:"Eduardo",
        surname:"Sousa",
    }
    const auth = true

    res.render('home',{ user : user,auth })
})

app.listen(3000,()=>{
    console.log('App funcionando!')
})