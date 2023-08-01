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
            return res.end()
        })
    }else{
        const contentName = `O nome é ${name}`
        
        fs.writeFile('arquivo.txt',contentName,(err,data)=>{
            res.writeHead(302,{
                location:"/"
            })
        })
    }

})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})