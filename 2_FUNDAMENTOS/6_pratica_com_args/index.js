//externo
const minimist = require("minimist");//ajuda a ler argumentos


//interno
const soma = require('./soma').soma //puxei diretamente o modulo interno soma

const args = minimist(process.argv.slice(2))//usei o modulo para pegar argumentos do indice 2 e guardei na variavel

const a = parseInt(args['a'])//declarei que o numero recebido vai ser inteiro
const b = parseInt(args['b'])

soma(a,b)//chamei a função com os parametros dados pela variavel que vai receber o argumento
