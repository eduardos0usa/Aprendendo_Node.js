const url = require('url')//chamei o modulo 
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira' //endereço da url
const parsedUrl = new url.URL(address) //url decomposta

//acessando as propriedades da url
console.log(parsedUrl.host)//endereço do site
console.log(parsedUrl.pathname)//pagina que ele ta
console.log(parsedUrl.search)//oque ele ta pesquisando na pagina
console.log(parsedUrl.searchParams)//pesquisando
console.log(parsedUrl.searchParams.get('produtos'))// oque ele buscou