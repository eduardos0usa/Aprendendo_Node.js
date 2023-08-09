const express = require('express')
const app = express()
const port = 3000 

const path = require('path')
const users = require('./users')


//ler o body
app.use(express.urlencoded({
    extended:true,/* A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
    Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.
    
    A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha: */
})
)
app.use(express.json()) //toda requisição do body é transformada em um objeto

//arquivos estaticos
app.use(express.static('public'))


const basePath = path.join(__dirname,'templates')

app.use('/users',users)

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req,res,next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}` )
})

