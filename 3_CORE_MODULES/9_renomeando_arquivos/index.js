const fs = require('fs')

const arqAntigo = 'arquivoAntigo.txt'
const arqNovo = 'arquivoNovo.txt'

fs.rename(arqAntigo,arqNovo,(err)=>{
    if(err){
        console.log(err)
        return
    }
   console.log('Arquivo renomeado!')
})