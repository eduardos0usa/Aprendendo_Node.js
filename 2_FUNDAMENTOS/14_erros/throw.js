const x =  "10"

//checar se é um número 
if( !Number.isNaN(x) ){
    throw new Error("O valor não é um número")
}
console.log('continuando o codigo...')