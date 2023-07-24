import inquirer from 'inquirer'

inquirer.prompt([{
    name:'p1',
    message:'Qual foi a primeira nota?'
},
{
name:'p2',
message:'Qual a segunda nota?'
},
]).then((answers)=>{ // Quando se tem uma promisse tem dois metodos utilizaveis .then() se estiver certo vem pra ca ||.catch() para imprimir um erro 
     console.log(answers) //cria um objeto com as respostas
    const media = ((parseInt(answers.p1) + parseInt(answers.p2))/2)

    console.log(`Essa é a média ${media}`)
})
.catch(err => console.log(err))