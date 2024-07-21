let l1=parseFloat(prompt("Ingrese el largo del paquete 1"));
let a1=parseFloat(prompt("Ingrese el ancho del paquete 1"));
let al1=parseFloat(prompt("Ingrese el alto del paquete 1"));
let v1=l1*a1*al1;

let l2=parseFloat(prompt("Ingrese el largo del paquete 2"));
let a2=parseFloat(prompt("Ingrese el ancho del paquete 2"));
let al2=parseFloat(prompt("Ingrese el alto del paquete 2"));
let v2=l2*a2*al2;

let l3=parseFloat(prompt("Ingrese el largo del paquete 3"));
let a3=parseFloat(prompt("Ingrese el ancho del paquete 3"));
let al3=parseFloat(prompt("Ingrese el alto del paquete 3"));
let v3=l3*a3*al3;

if (v1>v2 && v1>v3){
    console.log("El volumen del paquete 1 es el mayor");
}else if(v2>v1 && v2>v3){
    console.log("El volumen del paquete 2 es el mayor");
}else{
    console.log("El volumen del paquete 3 es el mayor")
}
