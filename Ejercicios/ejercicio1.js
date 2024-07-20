let a = parseInt(prompt("Ingrese la primera variable"));
let b = parseInt(prompt("Ingrese la segunda variable"));
let c = parseInt(prompt("Ingrese la tercera variable"));

if (a >b && a > c) {    
    console.log("La variable mayor es a = " +a);
} else if (b > a && b > c) {
    console.log("La variable mayor es b = " +b);
} else {
    console.log("La variable mayor es C = " +c);
}