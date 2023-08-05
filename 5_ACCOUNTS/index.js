const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

operation()

function operation(){

    inquirer.prompt([
        {
            type:'list',
            name:'action',
            message:'O que voce deseja fazer?',
            choices:[
                'Criar conta',
                'Consultar saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ],
        },
    ]).then((answers)=>{

        const action = answers['action']
        console.log(action)

        if( action === "Criar conta" ){

            console.log('Criou conta ')

        }else if( action === "Consultar saldo" ){

            console.log('Consultou ')

        }else if( action === "Depositar" ){

            console.log('Depositou ')

        }else if( action === "Sacar" ){

            console.log('Sacou')

        }else if( action === "Sair" ){

            console.log('Saiu')

        }

    })
    .catch((err)=>console.log(err))
}