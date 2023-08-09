const express = require('express')
const app = express()
const port = 3000 

const path = require('path')

//ler o body
app.use(express.urlencoded({
    extended:true,/* A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
    Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.
    
    A diferença entre elas é que a biblioteca qs permite o aninhamento de objetos (nested objects), que é praticamente como o JSON trabalha: */
})
)
app.use(express.json()) //toda requisição do body é transformada em um objeto


const basePath = path.join(__dirname,'templates')


app.get('/users/add',(req,res)=>{
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save',(req,res)=>{

    console.log(req.body)
    const name = req.body.name
    const idade = req.body.age
    console.log(`O nome do usuario é ${name} e ele tem ${idade}`)
    res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id

    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`App rodando na porta ${port}` )
})

