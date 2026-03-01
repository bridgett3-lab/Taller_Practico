const prompt = require("prompt-sync")();


console.log("Lavandería Express - Alquiler de Lavadoras");


let CantidadClientes = parseInt(prompt("¿Cuantos clientes desea registrar hoy?"));

let acumuladorIngresos= 0;
let contadorDescuentos = 0;
const costoPorHora= 5000;

for (let i = 1; i <= CantidadClientes; i++) {

    console.log("CLIENTE " + i + " ---");

    let nombreCliente = prompt("Nombre del cliente:");
    let horasAlquiler = parseInt(prompt(`Horas de alquiler para ${nombreCliente}:`));

    let costoTotal = horasAlquiler * costoPorHora;
    let descuento= 0;

    if (horasAlquiler > 12) {
        descuento = costoTotal * 0.30;
        contadorDescuentos++;
    }
        else {
        descuento = 0;
    }

    let totalPagar = costoTotal - descuento;

    let mensajeDescuento = (horasAlquiler > 12) ? "CON DESCUENTO" : "SIN DESCUENTO";

    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Horas alquiladas: ${horasAlquiler}`);
    console.log(`Subtotal: ${costoTotal} - ${mensajeDescuento}`);
    console.log(`Descuento (30%): $${descuento} - ${mensajeDescuento}`);
    console.log(`Total a pagar: ${totalPagar}`);
    console.log("----------------------------------------");


    acumuladorIngresos += totalPagar;


    console.log(`=== RESUMEN DEL DÍA ===`);
    console.log(`Clientes atentidos: ${CantidadClientes}`);
    console.log(`Ingreso total: $${acumuladorIngresos} `);
    console.log(`Clientes que recibieron descuento: ${contadorDescuentos}`);
    
}