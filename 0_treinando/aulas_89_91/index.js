const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.use(express.urlencoded({ //parsear o url pela biblioteca qs
    extended:true
}))
app.use(express.json()) // transforma toda requisição em objeto

const basePath = path.join(__dirname,'templates') //caminho ate templates

app.get('/users/add',(req,res)=>{
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save',(req,res)=>{ //foi projetado para solicitar que o servidor web aceite os dados anexados no corpo da mensagem de requisição para armazenamento
    console.log(req.body)
    res.sendFile(`${basePath}/userform.html`)
})

app.get('/users/:id',(req,res)=>{ //solicita que o recurso de destino transfira uma representação de seu estado
    const id = req.params.id

    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,(req,res)=>{
    console.log(`App rodando na porta ${port}`)
})