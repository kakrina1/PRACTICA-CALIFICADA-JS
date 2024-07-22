edad = parseInt(prompt("Ingrese su edad: "));

if (edad < 13) {
    console.log("Usted es un niño.");
} else if (edad >= 13 && edad < 18) {
    console.log("Usted es un adolescente.");
} else if (edad >= 18 && edad < 65) {
    console.log("Usted es un adulto.");
} else { console.log("es un anciano."); }
