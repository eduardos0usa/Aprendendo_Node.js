const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

const path = require('path')
const basepath = path.join(__dirname,'templates')
const caminho404 = path.join(__dirname,'templates')

const chekAuth = function(req,res,next){
    req.authStatus = true

    if(req.authStatus){
        console.log('Esta logado, pode continuar!')
        next()
    }else{
        console.log('Não esta logado,faça seu login')
        res.sendFile(`${caminho404}/404.html`)
        next()
    }
}

app.use(chekAuth)

app.get('/',(req,res)=>{
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}`)
})