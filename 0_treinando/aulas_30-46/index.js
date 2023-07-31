const http = require('http')

const fs = require('fs')


const port = 3000

const server = http.createServer((req,res)=>{

    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name
    const idade = urlInfo.query.idade
    const cpf = String(urlInfo.query.cpf)

    if(!name || !idade || !cpf){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,
                {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
        })
    }else{
        const fileContent = `Nome: ${name}, Idade: ${idade}, CPF: ${cpf}\n`;
        fs.writeFile('arquivo.txt', fileContent, (err) => {
            if (err) {
                console.error('Erro:', err);
            }
            res.writeHead(302, { //1- status code 2- tipo de dado retornado
                Location: '/'
            });
            return res.end();
        })
    }

})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})