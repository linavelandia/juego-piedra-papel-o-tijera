//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
function aleatorio( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
//funcion para mirar que se eligio
function eleccion (jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "piedra 👊"
    }else if(jugada == 2){
        resultado = "papel ✋"
    }else if(jugada == 3){
        resultado = "tijera ✌️"
    }else{
        alert("elige bien🤣")
    }
    return resultado
}

let jugador = 0
let triunfos = 0
let perdidas = 0
let pc = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1, 3)
    jugador = prompt("Elije 1:Piedra 2:Papel 3:Tijera")

    alert("pc elige: " + eleccion(pc))
    alert("tu elegiste: " + eleccion(jugador))

    if (pc == jugador){
        alert("EMPATE")
    }else if(jugador == 1 && pc == 3 ){
        alert("ganasteee")
        triunfos = triunfos + 1
    }else if(jugador == 2 && pc == 1 ){
        alert("ganasteee")
        triunfos = triunfos + 1
    }else if(jugador == 3 && pc == 1 ){
        alert("ganasteee")
        triunfos = triunfos + 1
    }else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("ganaste:" + triunfos + "perdiste: " + perdidas)

