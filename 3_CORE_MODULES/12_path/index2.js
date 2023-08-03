const fs = require('fs')
const path = require('path')
const port = 3000
const http = require('http')
    const x = path.join(__dirname,"arquivoTeste",'arquivo.txt')

    const server = http.createServer((req,res)=>{
        fs.readFile(x,(err,data)=>{
            res.write(data)
            res.end()
        })
    })
    server.listen(port,()=>{
        console.log('Servidor rodando na porta '+port)
    })
    
    console.log(x)
