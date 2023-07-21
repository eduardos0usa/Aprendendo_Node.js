const readline = require("readline").createInterface({ //metodo
    input: process.stdin,//linha 2 e 3 são argumentos
    output: process.stdout,

})//configuração para entrada e saida de dados!
const chalk = require("chalk")

    readline.question(chalk.bgWhite.black("Qual a sua média?"),(media)=>{

        if(media >= 7){
            console.log(chalk.green(`Aprovado!Com a média ${media}`))
        }else{
            console.log(chalk.bgRed(`Reprovado!Com a média ${media}`))
        }
        
        readline.close() //parar a execução 
    })
   
