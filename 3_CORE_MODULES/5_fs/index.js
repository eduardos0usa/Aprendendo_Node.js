const http = require("http")
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res)=>{
    fs.readFile('mensagem.html',function(err,data){//modulo que ler diretorios
        res.writeHead(200,{'Contenty-Type':'text/html'}) //metodo que ultilizo status code e o header
        res.write(data) //imprimindo os dados

        return res.end()
    })

})

server.listen(port,() => {
    console.log('Servidor rodando na porta: ' + port)
})