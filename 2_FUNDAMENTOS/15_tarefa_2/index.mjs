import inquirer from "inquirer";
import chalk from "chalk";

inquirer.prompt([{
    name:'p1',
    message:'Qual o seu nome?'
},
{
    name:'p2',
    message:'Qual a sua idade?'
}
]).then((questions)=>{
    if(questions.p2 >= 18 ){
        console.log(chalk.bgYellow.black(`${questions.p1} é maior de 18 anos!`))
    }else{
        try{
            p2 < 18
        }catch(err){
            console.log(chalk.bgYellow.black(`${questions.p1} é menor de 18 anos!`) )
        }
    }
}).catch((err)=>console.log(chalk.bgYellow.black(err)))
   
        