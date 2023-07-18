var lamp = document.getElementById('lampada')

// verifica o status da lampada, se está quebrada ou não
function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1 //a função indexOf faz a busca de uma string'
}
 
function ligar (){
    if(!estaQuebrada()){
        lamp.src = 'ligada.svg'
    }
   
}

function desligar () {
    if(!estaQuebrada()){
        lamp.src = 'desligada.svg'
    }
}

// function quebrar() {
//     lamp.src = 'quebrada.svg'
// }

lamp.addEventListener(click, quebrar) //adiciona os eventos de clique e a função através da DOM
function quebrar() {
    lamp.src = 'quebrada.svg'
}