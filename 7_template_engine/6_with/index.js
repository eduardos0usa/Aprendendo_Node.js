const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashbord',(req,res)=>{
    const items = ["Item a","Item b","Item c","Item d"]
    res.render('dashbord',{items})
})

app.get('/post',(req,res)=>{
    const post = {
        title:'Aprender...',
        category:'Javascript',
        body:'Este artigo vai te ajudar...'
    }
    res.render('blogpost',{post})
})

app.get('/',(req,res)=>{
    const user = {
        name:"Eduardo",
        surname:"Sousa",
    }
    const auth = true
    const approved = false

    res.render('home',{ user : user,auth,approved })
})

app.listen(3000,()=>{
    console.log('App funcionando!')
})