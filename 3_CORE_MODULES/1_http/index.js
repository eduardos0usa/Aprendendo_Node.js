const http = require("http") //chamo o modulo 

const port = 3000 // defino a porta

const server = http.createServer((req,res)=>{// req:requisição res:resposta
    res.write('Hello Http') //escrevo uma resposta para o usuario
    res.end()//finalizo a resposta
})

server.listen(port,()=>{ //escutar a porta
    console.log("Servidor rodando na porta:" + port)
})