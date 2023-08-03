const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req,res)=>{
    const q = url.parse(req.url,true)
    const filename = q.pathname.substring(1)//pathname = é uma string contendo o caminho da URL para o local

    if(filename.includes('html')){

        if(fs.existsSync(filename)){
            fs.readFile(filename,(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(data)
                res.end()
            })

        }else{
            if(!fs.existsSync('404.html')){
            var phrase = ("<h1>Pagina nao encontrada!</h1>")
            fs.writeFile('404.html',phrase,(err,data)=>{
                res.writeHead(404,{
                    location:'/'
                })
                return res.end(phrase)
                })
                fs.readFile('404.html',(err,data)=>{
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.write(data)
                    res.end(phrase)
                })
            }else{
                fs.readFile('404.html',(err,data)=>{
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.write(data)
                    res.end(phrase)
                })
            }
        }
    }    
})
server.listen(port,()=>{
    console.log('Servidor rodando na porta ' + port)
})