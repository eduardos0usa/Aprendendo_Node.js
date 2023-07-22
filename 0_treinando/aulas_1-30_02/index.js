const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
})
function pergName(callback){

    readline.question("Qual o seu nome?",(nome)=>{

    callback(nome)

 })
}

pergName((nome) => {

    console.log(nome)

    pergIdade((idade)=>{
    console.log(idade)

    pergCpf((cpf)=>{
    console.log(cpf)
    
    pergTel((tel)=>{

        console.log(tel)

    pergCep((cep)=>{
        console.log(cep)
    readline.close()
    
})

})

})

})
    
})

function pergIdade(retorno){
    
    readline.question("Qual a sua idade?",(idade)=>{

        retorno(idade)
    })
}



function pergCpf(volta){

    readline.question("Qual o seu cpf?",(cpf)=>{
        
        volta(cpf)

    })

}

function pergTel(callback){

    readline.question("Digite seu telefone:",(tel)=>{
        callback(tel)
    })
}

function pergCep(callback){

    readline.question("Qual o seun cep:",(cep)=>{
        callback(cep)
    })
}






