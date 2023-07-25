const http = require('http')


const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true) // url vem decomposta 
    const name = urlInfo.query.name //pega a url e consulta ou solicita ou busca o name

    res.statusCode = 200
    res.setHeader('Contenty-Type','text/html')
    
    if(!name){
        res.end('<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name" /><input type="submit" value="Enviar"></form>') //`<form method="GET">...</form>`: Este é o elemento de formulário HTML. *O formulário foi definido com um método `GET`, o que significa que os dados inseridos pelo usuário serão enviados ao servidor na URL de solicitação. Neste caso, os dados serão enviados como parâmetros de consulta.*
        //`<input type="submit" value="Enviar" />`: Este é um botão de envio (`<input type="submit">`) que permite ao usuário enviar o formulário. Ao clicar neste botão, os dados inseridos no campo de texto serão enviados ao servidor como parâmetros de consulta.
    }else{
        res.end(`<h1>Seja bem vindo ${name} </h1>`)
    }
})

server.listen(port,()=>{
    console.log("Servidor rodando na porta " + port)
})