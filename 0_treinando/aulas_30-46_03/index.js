const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name

    if( !name ){
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,
                {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
        })
    }else{
        const contentName = `Nome: ${name}`
        fs.writeFile('arquivo.txt',contentName,(err)=>{ 
            if(err){
                console.log('Erro:',err)
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




//fs.writeFile:
/* Parâmetros: Este método aceita quatro parâmetros conforme mencionado acima e descrito abaixo:

arquivo: É uma string, Buffer, URL ou inteiro de descrição de arquivo que indica o caminho do arquivo onde deve ser escrito. Usar um descritor de arquivo fará com que ele se comporte de maneira semelhante ao método fs.write().
data: É uma string, Buffer, TypedArray ou DataView que será gravada no arquivo.
options: É uma string ou objeto que pode ser usado para especificar parâmetros opcionais que afetarão a saída. Possui três parâmetros opcionais:
codificação: é um valor de string que especifica a codificação do arquivo. O valor padrão é 'utf8'.
modo: é um valor inteiro que especifica o modo do arquivo. O valor padrão é 0o666.
sinalizador: é um valor de string que especifica o sinalizador usado ao gravar no arquivo. O valor padrão é 'w'.
callback: É a função que seria chamada quando o método fosse executado.
err: É um erro que seria lançado se a operação falhar. */