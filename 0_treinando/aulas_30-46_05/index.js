const http =  require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true)
    const bairro = urlInfo.query.bairro

    if( !bairro ){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        const contentBairro = `O nome do bairro é ${bairro}`
        fs.writeFile('arquivo.txt',contentBairro,(err,data)=>{
            res.writeHead(302,{
                location:'/'
            })
            return res.end                    
        })
    } 

})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})