console.log(process.argv)//acesso os argumentos 

const args = process.argv.slice(2)//seleciono apenas oq quero

 console.log(args)//mostro ele 
 
 const nome = args[0].split("=")[1]//peguei o elemento do indice 0 e separei em 2 

 console.log("Esse é o nome " + nome)