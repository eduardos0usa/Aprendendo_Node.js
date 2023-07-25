const http = require('http')

const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200 // statuscode 200 = ok
    res.setHeader('Contenty-Type','text/html') //Mudar o header habilitando o server a enviar html
    res.end('<h1>Hello word</h1>') //Enviar html
})

server.listen(port,()=>{
    console.log('Servidor rodando na porta ' + port)
})