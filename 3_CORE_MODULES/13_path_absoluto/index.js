const path = require('path')

//path absoluto 
//mostra todo o caminho ate o arquivo desejado
console.log(path.resolve('teste.txt'))

//formar path 
const midFolder = 'relatorios'
const fileName = 'eduardo.txt'

const finalPath = path.join('/','arquivos',midFolder,fileName) //junta todos os elementos formando um caminho

console.log(finalPath)