const os = require('os') //podemos extrair informações do sistema operacional

console.log(os.cpus())//quantos cpus tem no servidor

console.log(os.freemem()) //quanto de memoria livre tem na maquina

console.log(os.homedir())//qual o diretorio  principal

console.log(os.type()) //qual o tipo de sistema operacional da maquina
