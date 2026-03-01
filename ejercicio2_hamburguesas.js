const prompt = require("prompt-sync")();

let totalCuenta= 0;
let totalCombosPedidos = 0;
let cantCombo1 = 0; cantCombo2 = 0; cantCombo3 = 0; 
let opcion;

console.log("=== BIENVENIDO A BURGUER PALACE ===");


do {
    console.log("MENU DE COMBOS:");
    console.log("1. Clásica (Hamburguesa sencilla + Papas + Gaseosa) - $15.000");
    console.log("2. Doble Poder (Hamburguesa doble + Papas grandes + Gaseosa) - $22.000");
    console.log("3. Mega Fest (Hamburguesa triple + papas + malteada + postre)- $35.000");
    console.log("4. Finalizar pedido");


    opcion = parseInt(prompt("Seleccione una opción (1-4):"));


    let precio = 0; 
    let nombreCombo= "";


    if (opcion === 1){
        precio = 15000
        nombreCombo = "Clásica";
    } else if (opcion === 2){
        precio = 22000
        nombreCombo = "Doble Poder";
    } else if (opcion === 3) {
        precio = 35000
        nombreCombo = "Mega Fest";
    } else if (opcion === 4) {
        console.log("Procesando cuenta...");
    } else {
        console.log("ERROR: opción no válida. Intente de nuevo.");
    }

    if (opcion >= 1 && opcion <= 3) {
        let cantidad = parseInt(prompt("¿Cuántos combos de tipo " + nombreCombo + " desea?"));

        if (cantidad > 0) {
            let subtotal = precio * cantidad;
            totalCuenta = totalCuenta + subtotal;
            totalCombosPedidos = totalCombosPedidos + cantidad;


            if (opcion === 1) cantCombo1 += cantidad;
            if (opcion === 2) cantCombo2 += cantidad;
            if (opcion === 3) cantCombo3 += cantidad;


            console.log("Pedido agregado:" + cantidad + " " + nombreCombo);
            console.log("Subtotal de este item: $" + subtotal);
            console.log("Total acumulado: $" + totalCuenta);
    } else {
    console.log("Cantidad no válida.");
    }
}


} while (opcion !== 4);


console.log("=======================================");
console.log("          RESUMEN DE COMPRA               ")
console.log("=======================================");
console.log("Combos Clásica: " + cantCombo1);
console.log("Combos Doble Poder: " + cantCombo2);
console.log("Combos Mega Fest: " + cantCombo3);
console.log("----------------------------------------");
console.log("TOTAL A PAGAR:" + totalCuenta);
console.log("=======================================");