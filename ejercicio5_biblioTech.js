const prompt = require("prompt-sync")();


let cantidadUsuarios = 0;
let cantidadLibrosDevueltos= 0;
let cantidadLibrosRetraso = 0;
let cantidadLibrosPuntuales = 0;
let multasTotalesRecaudadas = 0;

console.log("--- SISTEMA DE DEVOLUCIONES BIBVLIOTECH ARMENIA ---");

cantidadUsuarios = parseInt(prompt("¿Cuántos usuarios realizaran devoluciones hoy?"));

for (let i = 1; i <= cantidadUsuarios; i++) {
    console.log("--- USUARIO " + i + " ---");
    let nombre = prompt("Nombre del usuario: ");


    let cantlibros = 0;
    while (true) {
        cantlibros = parseInt(prompt("¿Cuántos libros va a devolver (Máximo 3)?:"));
        if (cantlibros >= 1 && cantlibros <= 3) {
            break;
        } else {
            console.log("Cantidad no válida. Ingrese un número entre 1 y 3.");
        }
    }
    
    let multatotalUsuario = 0;


    for (let j = 1; j <= cantlibros; j++) {
        console.log(">Libro " + j + " :");
        let diasprestamo = parseInt(prompt(" ¿Cuántos días tuvo el libro prestado? (Máximo 30 días):"));


        let diasRetraso = (diasprestamo > 7) ? (diasprestamo - 7) : 0;
        let multaLibro = 0;

        if (diasRetraso === 0) {
            multaLibro = 0;
            cantidadLibrosPuntuales++;
        } else if (diasRetraso >= 1 && diasRetraso <= 15) {
            multaLibro = diasRetraso * 1500;
            cantidadLibrosRetraso++;
        } else {
            multaLibro = (diasRetraso * 1500) + 10000;
            cantidadLibrosRetraso++;
        }


            let estado = (diasRetraso === 0) ? "Puntual" : "Con Retraso";


            cantidadLibrosDevueltos++;
    
    
            console.log(" Estado: " + estado);
            console.log(" Retraso:" + diasRetraso + " días. Multa: $" + multaLibro);
    
    
            multatotalUsuario += multaLibro;
        }
    
        console.log(`Multa total para ${nombre}: $${multatotalUsuario}`);
        multasTotalesRecaudadas += multatotalUsuario;
        console.log("----------------------------------------");
    }
    
console.log("==================================");
console.log("          RESUMEN DEL DÍA               ");
console.log("==================================");
console.log("Usuarios atendidos: " + cantidadUsuarios);
console.log("Libros devueltos: " + cantidadLibrosDevueltos);
console.log("Libros devueltos a tiempo: " + cantidadLibrosPuntuales);
console.log("Libros devueltos con retraso: " + cantidadLibrosRetraso);
console.log("--------------------------------");
console.log("TOTAL RECAUDADO EN MULTAS: $" + multasTotalesRecaudadas);
console.log("==================================");