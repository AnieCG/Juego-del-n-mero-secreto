let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    }else if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor')

    }
    intentos++;
    limpiarCaja();

    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value='';
   // let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value='';
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al 10'); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarJuego (){
//limpiar la caja
    limpiarCaja();
//indicar mensaje de intervalo de numeros
//generar número aleatorio
//Inicializar el número de intentos
    condicionesIniciales()
//Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
function generarNumeroSecreto(){
    return Math.floor(Math.random()*10) + 1;
}

condicionesIniciales();