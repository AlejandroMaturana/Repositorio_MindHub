// Ejercicio_E3M3 archivo JavaScript - Manuel González Lozano

// Datos iniciales
let montoCuenta = parseFloat(prompt("Ingrese el monto total de la cuenta:")); // parseFloat() Convierte a número de punto flotante
let porcentajePropina = parseFloat(prompt("Ingrese el porcentaje de propina que desea dejar:")); 

// Función para calcular la propina
function calcularPropina(monto, porcentaje) {
    return monto * (porcentaje / 100);
}

// Datos calculados
let montoPropina = calcularPropina(montoCuenta, porcentajePropina); // Calculamos la propina
let totalAPagar = montoCuenta + montoPropina; // Calculamos el total a pagar

// Imprimir resultados
console.log("--- Resumen de la Cuenta ---");
console.log(`Monto de la cuenta: $${montoCuenta}`);
console.log(`Propina (${porcentajePropina}%): $${Math.round(montoPropina)}`);
console.log(`Total a pagar: $${totalAPagar.toFixed(0)}`);