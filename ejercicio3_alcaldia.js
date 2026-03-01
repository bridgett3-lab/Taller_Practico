const prompt = require("prompt-sync")();



const SalarioMinimo = 1300000;


let totalPersonas = 0;
let beneficiarios60_80 = 0;
let beneficiariosMas80 = 0;
let noAplican = 0;
let presupuestoTotal = 0;



console.log("=== ALCALDÍA DE ARMENIA - SUBSIDIO AL ADULTO MAYOR ===");


totalPersonas = parseInt(prompt("¿Cuántas personas desea registrar hoy?"));


for (let i = 1; i <= totalPersonas; i++) {
    console.log("--- REGISTRO DE PERSONA " + i + " ---");


    let nombreCompleto = prompt("Nombre completo:");
    let edad = parseInt(prompt("Edad de " + nombreCompleto+ ":"));

    let subsidio = 0;
    let porcentaje = 0;


    let categoria = (edad > 80) ? "adulto mayor senior" : (edad >= 60) ? "adulto mayor" : "no aplica";

    if (categoria === "adulto mayor senior") {
        porcentaje = 0.15;
        subsidio = SalarioMinimo * porcentaje;
        beneficiariosMas80++;
    } else if (categoria === "adulto mayor") {
        porcentaje = 0.12;
        subsidio = SalarioMinimo * porcentaje;
        beneficiarios60_80++;
    } else {
        console.log("La persona no aplica para el subsidio.");
        noAplican++;
    }

    if (edad >= 60) {
        console.log("Categoría: " + categoria);
        console.log("Porcentaje aplicado:" + porcentaje + "%");
        console.log("Valor del subsidio: $" + subsidio);
        console.log("----------------------------------------");

        presupuestoTotal += subsidio;
    } else {
        console.log(nombreCompleto + "no aplica al programa por tener menos de 60 años.");
        console.log("----------------------------------------");
    }



    console.log("======================================");
    console.log("          RESUMEN DEL DÍA               ");
    console.log("======================================");
    console.log("Total personas registradas: " + totalPersonas);
    console.log("Beneficiarios entre 60 y 80 años: " + beneficiarios60_80);
    console.log("Beneficiarios mayores de 80 años: " + beneficiariosMas80);
    console.log("Personas que no aplican: " + noAplican);
    console.log("----------------------------------------");
    console.log("Presupuesto total requerido para subsidios: $" + presupuestoTotal);
    console.log("======================================");
}   
