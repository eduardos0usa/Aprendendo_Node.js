const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name

    if( !name ){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else{
        const contentName = `Usuário:${name} \r\n` //\r\n quebram linha
        fs.appendFile('arquivo.txt',contentName,(err,data)=>{//append = acrescentar
            if(err){
                console.log(`Erro:${err}`)
            }
            res.writeHead(302,{
                location:'/'
            })
            return res.end()
        })
    }

})
server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})