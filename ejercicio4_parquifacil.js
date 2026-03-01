const prompt = require("prompt-sync")();


let totalVehiculos = 0;
let totalIngresos = 0;
let totalHorasGlobal = 0;


let contMotos = 0;
let contCarros = 0;
let contCamionetas = 0;


let continuar = true;

console.log("=== BIENVENIDO A PARQUIFÁCIL ARMENIA ===");


while (continuar) {

    console.log("1. Registrar Vehículo");
    console.log("2. Cerrar jornada");

    let opcionMenu = prompt("Seleccione una opción:  ");
    let horasPermanencia = 0;
    let tarifaHora = 0;
    let nombreTipo = "";
    let subtotal = 0;
    let descuento = 0;

    if (opcionMenu === "1") {
        let tipoVehiculo = prompt("TIPO DE VEHÍCULO: 1= Moto, 2= Carro, 3= Camioneta. Ingrese el número correspondiente: ");
        horasPermanencia = parseInt(prompt("Horas estacionado:"));

        if (tipoVehiculo === "1") {
            tarifaHora = 2000;
            nombreTipo = "Moto";
            contMotos++;
        } else if (tipoVehiculo === "2") {
            tarifaHora = 4000;
            nombreTipo = "Carro";
            contCarros++;
        } else if (tipoVehiculo === "3") {
            tarifaHora = 6000;
            nombreTipo = "Camioneta";
            contCamionetas++;
        } else {
            console.log("Error: Tipo de vehículo inválido.");
            continue;
        }

        subtotal = tarifaHora * horasPermanencia;
        descuento = 0;
    }

    if (horasPermanencia > 8) {
        descuento = subtotal * 0.20;
    }

    let totalPagar = subtotal - descuento;

        let tipoTarifa = (horasPermanencia > 8) ? "Tarifa DÍA COMPLETO (20% descuento)" : "Tarifa POR HORAS";


        console.log("--- DETALLE DE REGISTRO ---");
        console.log("Tipo de vehículo: " + nombreTipo);
        console.log("Horas permanencia: " + horasPermanencia);
        console.log("Subtotal: $" + subtotal + " - " + tipoTarifa);
        console.log("Descuento aplicado: $" + descuento);
        console.log("Total a pagar: $" + totalPagar);
        console.log("----------------------------------------");
    }
