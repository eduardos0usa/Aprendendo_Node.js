const http = require("http")
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res)=>{
    fs.readFile('mensagem.html',function(err,data){//modulo que ler diretorios
        res.writeHead(200,{'Contenty-Type':'text/html'}) //A função writeHead é responsável por escrever o cabeçalho da resposta http. No exemplo da opinião do instrutor, a resposta terá um status code 200, ou seja, deu tudo certo. O segundo parâmetro é opcional e pode conter informações úteis como o tipo de dado retornado.
        res.write(data) //imprimindo os dados

        return res.end()
    })

})

server.listen(port,() => {
    console.log('Servidor rodando na porta: ' + port)
})