var cpf = document.getElementById("cpf");
var bot = document.getElementById("botao");
var senha = document.getElementById("senha")
cpfon = []
senhaon = []

cpf.addEventListener('keypress',()=>{
 var cpflength = cpf.value.length
    if(cpflength === 3 || cpflength === 7){
        cpf.value += "."
    }else if(cpflength === 11){
        cpf.value += "-"
    }
})

function apenasNumeros(event) {
    const tecla = event.key;
    const codigoTecla = event.keyCode || event.which;
  
    // Verifica se a tecla digitada é um número (0-9) ou uma tecla de controle
    if ((codigoTecla >= 48 && codigoTecla <= 57) || codigoTecla === 8 || codigoTecla === 9 || codigoTecla === 13 || codigoTecla === 46) {
      return true
    } else {
      return false
    }
  }

bot.addEventListener("click",()=>{
if(cpf.value.length >= 14 && senha.value.length >= 8){

      cpfon.push(cpf.value)
      console.log(cpfon)
      senhaon.push(senha.value)
      console.log(senhaon)
    
}
})
bot.addEventListener("keyup",()=>{
  if(cpf.value.length < 14 && senha.value.length < 8){
    bot   //https://www.youtube.com/watch?v=LCdccLIoiGc
  }
})


