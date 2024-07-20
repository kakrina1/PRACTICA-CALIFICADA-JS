//Dada una lista de tres jugadores con sus respectivas puntuaciones (jugador1,
//jugador2, jugador3), determina quién de ellos tiene la puntuación más alta.

let jugador1=parseInt(prompt("Ingrese puntaje del jugador 1"))
let jugador2=parseInt(prompt("Ingrese puntaje del jugador 2"))
let jugador3=parseInt(prompt("Ingrese puntaje del jugador 3"))

if (jugador1>jugador2 && jugador1>jugador3) {
    console.log("El jugador 1 tiene la puntuacioón mas alta")
} else if (jugador2>jugador3 && jugador2>jugador1) {
    console.log("El jugador 2 tiene la puntuación más alta")
} else {
    console.log("El jugador 3 tiene la puntuación más alta")
}