const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const { log } = require('console')
const { format } = require('path')

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
                'Transferência',
                'Sair',
            ],
        },
    ]).then((answers)=>{

        const action = answers['action']
        console.log(action)

        if( action === "Criar conta" ){

           createAccount()

        }else if( action === "Consultar saldo" ){

            consultSaldo()

        }else if( action === "Depositar" ){

            deposit()

        }else if( action === "Sacar" ){

            saq()

        }else if( action === "Transferência" ){

            transfer()

        }else if( action === "Sair" ){

            console.log(chalk.bgBlue.bold('Obrigado por usar o Accounts,Volte sempre!'))
            process.exit()

        }

    })
    .catch((err)=>console.log(err))
}

//Checando existencia de conta:

function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe,escolha outro nome!'))
        return false
    }
    return true
}

//Criando conta:

function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.bgGreen.black('Defina as opções da sua conta a seguir!'))

    buildAccount()
}

function buildAccount(){
    inquirer.prompt([{
        name:'accountName',
        message:'Digite um nome para sua conta:'
    },
    ]).then((answers)=>{
        const accountName = answers['accountName']

        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }
  
        if(fs.existsSync(`accounts/${accountName}.json`)){

            console.log(chalk.bgRed.black('Esta conta ja existe,escolha outro nome!'))
            
            return buildAccount()
        }
        fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance":0}',
        function(err){
            console.log(err)
        },
        )
        console.log(chalk.green('Parabéns, sua conta foi criada!'))
        operation()
    })
    .catch((err)=>console.log(err))
}

//Consultando saldo:

function consultSaldo(){
    inquirer.prompt([{
        name:'accountName',
        message:'Digite o nome da sua conta:',
    }]).then((answers)=>{
        const accountName = answers['accountName']

        if(!checkAccount(accountName)){
            return consultSaldo()
        }

        const amount = getAccount(accountName)
        const saldo = formatMoed(amount.balance)

        console.log(chalk.bgGreen.black(`Seu saldo é de ${saldo}`))
        return operation()

    }).catch((err)=>console.log(err))
}

//Deposito

function deposit(){

    inquirer.prompt([{
        name:'accountName',
        message:'Digite o nome da sua conta:'
    }]).then((answers)=>{
        const accountName = answers['accountName']

        //Verificando se existe conta:
        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([{
            name:'amount',
            message:'Quanto deseja depositar',
        }]).then((answers)=>{
            const amount = answers['amount']

        //Adicionando saldo:
        addAmount(accountName,amount)
        operation()

        })
        .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
}

function addAmount(accountName,amount){
    const account = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.bold.black('Ocorreu um erro inesperado,tente novamente!'))
        return deposit()
    }
    account.balance = parseFloat(amount) + parseFloat(account.balance)

    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(account),
    function (err){
        console.log(err)
    },
    )
    console.log(chalk.green(`Foi depositado o valor de ${formatMoed(parseFloat(amount))} na sua conta!`))
}

//Puxando o arquivo json e transformando em objeto
function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
        encoding:'utf-8',
        flag:'r'
    })
    return JSON.parse(accountJSON) //JSON.parse()pega uma string JSON e a transforma em um objeto JavaScript.
}

//formatando em moeda brasileira
function formatMoed(amount){
    const saldo = amount.toLocaleString('pt-br',{style:'currency',currency:'BRL'})
    return saldo


}

//Sacar:

function saq(){
    inquirer.prompt([{
        name:'accountName',
        message:'Digite o nome da sua conta:'
    }]).then((answers)=>{
        const accountName = answers['accountName']
        if(!checkAccount(accountName)){
            return saq()
        }
        amountSaq(accountName)

        

    })
    .catch((err)=>console.log(err))
}

function remove(accountName,amount){
    const account = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.bold.black('Ocorreu um erro inesperado,tente novamente!'))
        return saq()
    }

    if( amount > account.balance ){
        const saldo = formatMoed(account.balance)

        console.log(chalk.bgRed.bold.black(`Ocorreu um erro, seu saldo não é suficiente, você possui guardado ${saldo}, tente novamente!`))
        return amountSaq(accountName,amount)
    }

    const saq = formatMoed(amount)
    account.balance =  parseFloat(account.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(account),
    function (err){
        console.log(err)
    },
    )

    setTimeout(()=>{
        console.log(chalk.green(`Foi sacado o valor de ${saq} na sua conta!`))
    },2000)

    setTimeout(()=>{
        return operation()
    },2009)
    
}

function amountSaq(accountName){

    inquirer.prompt([{
        name:'amount',
        message:'Quanto deseja sacar:'

    }]).then((answers)=>{

        const amount = parseFloat(answers['amount'])

        console.log(chalk.bgWhite(`Saque solicitado no valor de ${(formatMoed(amount))}`))
        remove(accountName,amount)
        
        

    }).catch((err)=>console.log(err))
}

//transferência:

function transfer(){
    inquirer.prompt([{
        name:'accountName',
        message:'Digite o nome da sua conta:'
    }]).then((answers)=>{
        const accountName = answers['accountName']

        if(!checkAccount(accountName)){
            return transfer()
        }

        transferGo(accountName,);
        


    })
    .catch((err)=>console.log(err))
}

function transferGo(accountName){

    inquirer.prompt([{
        name:'accountNameGo',
        message:'Digite o nome da conta que você deseja transferir:'
    }]).then((answers)=>{

        const accountNameGo = answers['accountNameGo']
        const accountTransfer = getAccount(accountName) //account transfer
        const accountReceive = getAccount(accountNameGo) //account receive

        if(!checkAccount(accountNameGo)){
            return transferGo(accountName)
        }

        amountTransfer(accountName,accountNameGo,accountTransfer,accountReceive)

    })
    .catch((err)=>console.log(err))

}

function amountTransfer(accountName,accountNameGo,accountTransfer,accountReceive){

    inquirer.prompt([{
        name:'amount',
        message:'Digite quanto você deseja transferir:'
    }]).then((answers)=>{

        const amount = answers['amount']

        if(!amount){

            console.log(chalk.bgRed.bold.black('Ocorreu um erro inesperado,tente novamente!'))
            return amountTransfer()
        }

        if( amount > accountTransfer.balance ){
            const saldo = formatMoed(accountTransfer.balance)
    
            console.log(chalk.bgRed.bold.black(`Ocorreu um erro, seu saldo não é suficiente, você possui guardado ${saldo}, tente novamente!`))

            return amountTransfer(accountName,accountNameGo,accountTransfer,accountReceive)
        }

        accountTransfer.balance = parseFloat(accountTransfer.balance) - parseFloat(amount)
        accountReceive.balance = parseFloat(accountReceive.balance) + parseFloat(amount)

        fs.writeFileSync(`accounts/${accountName}.json`,
            JSON.stringify(accountTransfer),
            function (err){
            console.log(err)
        },
        )

        fs.writeFileSync(`accounts/${accountNameGo}.json`,
            JSON.stringify(accountReceive),
            function (err){
            console.log(err)
        },
        )

        console.log(chalk.bgGreen.black(`Foi realizada uma transferência de ${formatMoed(parseFloat(amount))} de ${accountName} para ${accountNameGo}.` ))

        return operation()


    })
    .catch((err)=>console.log(err))
}

