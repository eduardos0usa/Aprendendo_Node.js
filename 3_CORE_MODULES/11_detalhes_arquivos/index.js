const fs = require('fs')

fs.stat('novoarquivo.txt',(err,stats)=>{
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile())//é um ?
    console.log(stats.isDirectory())//é um diretorio?
    console.log(stats.isSymbolicLink())//é um link?
    console.log(stats.ctime)//data de criação?
    console.log(stats.size)//tamanho do arquivo
})