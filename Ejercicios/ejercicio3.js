let a=parseInt(prompt("Ingrese el primer número"));
let b=parseInt(prompt("Ingrese el segundo número"));
let c=prompt("Ingrese un operador (+,-,*,/)");

if(c==="+"){
    console.log(a+b);
}else if(c==="-"){
    console.log(a-b);
}else if(c==="*"){
    console.log(a*b);
}else if(c==="/"){
    console.log(a/b);
}else{
    console.log("Operador no valido");
}