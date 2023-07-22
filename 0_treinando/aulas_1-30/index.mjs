import soma from "./modulo_interno.mjs";
import chalk from "chalk";
import inquirer from "inquirer";

inquirer.prompt([
    {
        name: 'n1',
        message: chalk.bgWhite.black('Qual a primeira nota?')
    },
    {
        name: 'n2',
        message: chalk.bgWhite.black('Qual a segunda nota?')
    },
    {
        name: 'n3',
        message: chalk.bgWhite.black('Qual a terceira nota?')
    }
]).then((resposta) => {
    var somatorio = soma(resposta.n1, resposta.n2, resposta.n3);
    var media = somatorio / 3;

    console.log(chalk.bgGreen("Essa é a soma das notas: " + somatorio));
    console.log(chalk.bgGreen("Essa é a media das notas: " + media));

    inquirer.prompt({
        name: 'p1',
        message: chalk.bgWhite('Voce foi aprovado? (Sim/Não)')
    }).then((resposta) => {
        if (resposta.p1.toLowerCase() === "sim") {
            console.log(chalk.bgGreen('Parabennnnnnsssss!!!!'));
        } else {
            console.log(chalk.bgRed('Que pena!'));
        }
    });
}).catch(err => console.log(err));

