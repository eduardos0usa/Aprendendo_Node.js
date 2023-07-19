const chalk = require("chalk") //modulo que estiliza a mensagem no terminal

const nota = 7

if (nota >= 7){
    console.log(chalk.green("Parabéns!!! Você está APROVADO!"))
}else{
    console.log(chalk.bgRed.black("Você está REPROVADO!"))
}

