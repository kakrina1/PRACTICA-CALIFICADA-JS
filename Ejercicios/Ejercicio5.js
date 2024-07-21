let numA = 1020;
let numB = 7430;
let numC = 240;
let numD = 4140;

 if(numA > numB && numA > numC && numA > numD){
    console.log(`El numero Mayor es : ${numA}`);
}else if(numB > numA && numB > numC && numB > numD){
    console.log(`El numero Mayor es : ${numB}`)
}else if(numC > numA && numC > numB && numC > numD){
    console.log(`El numero Mayor es : ${numC}`)
}else if(numD > numA && numD > numB && numD > numC){
    console.log(`El numero Mayor es : ${numD}`)
}

//OTRO METODO

let maxNum = Math.max(numA,numB,numC,numD)
console.log(`metodo ""max"" El numero Mayor es: ${maxNum}`)
