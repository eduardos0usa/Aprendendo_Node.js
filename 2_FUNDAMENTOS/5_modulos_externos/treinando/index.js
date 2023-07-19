const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

let profissao = args['profissao']
let idade = args['idade']
let nome = args['nome'] // Tem que ser em string.

console.log(`Seu Nome é ${nome} tem ${idade} anos e é ${profissao}`)

