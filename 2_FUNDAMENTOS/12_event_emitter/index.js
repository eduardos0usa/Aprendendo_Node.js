const EventEmitter = require("events") //chama a classe
const eventEmitter = new EventEmitter() //istanciar a classe EventEmitter que vem deste módulo || palavra new gera uma instancia
function soma(a,b){
    var somaa = Number(a) + Number(b)
    console.log(somaa)
}

eventEmitter.on('start',()=>{ //.on() adiciona evento
    soma(8,5)
})

eventEmitter.emit('start')// .emit() emite o evento
  

//---------------------------------------------------

/* const Emitter = {
    events:{}, //criei um objeto onde vai ser guardado os eventos 

    on(event,cb){  //metodo que vai adicionar os eventos no events
    Emitter.events[event] = Emitter.events[event] || [] //cria um array ou verifica se ja existe no events
    Emitter.events[event].push(cb)//adiciona o cb no array
},
    emit(event){
    if(event in Emitter.events === false){
        return;
    }
    Emitter.events[event].forEach((e)=>{
        e()
    })
}
}
Emitter.on('click',()=>console.log("cliquei"))
Emitter.on('click',()=>console.log("cliquei 2"))
Emitter.on('click',()=>console.log("cliquei 3"))
Emitter.emit('click')
 */