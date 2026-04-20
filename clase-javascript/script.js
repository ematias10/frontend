/**
 * REQUERIMIENTO 1: Estructura de Datos Inicial [cite: 24]
 * Cree un arreglo de objetos llamado 'carritoCompras' con 5 productos.
 */
const carritoCompras = [
    // TODO: Completar con 5 objetos (camelCase) [cite: 95]
    { nombreProducto: "Monitor Gamer 24", precioUnitario: 155000, cantidadComprada: 1 },
];

/**
 * REQUERIMIENTO 2: Función de Visualización de Boleta [cite: 33]
 * Instrucciones: Recorrer con for...of y usar Template Literals.
 */
function visualizarBoleta(carrito) {
    console.log("--- Detalle de su Compra ---");
    // TODO: Implementar bucle for...of [cite: 34, 41]
}

/**
 * REQUERIMIENTO 3: Función de Cálculo Total [cite: 47]
 * Instrucciones: Usar una ligadura acumuladora.
 */
function calcularTotalCompra(carrito) {
    let totalAcumulado = 0; // Ligadura acumuladora [cite: 51]
    
    // TODO: Sumar subtotales al totalAcumulado [cite: 53]
    
    return totalAcumulado;
}

// Ejecución de funciones
visualizarBoleta(carritoCompras);
const totalFinal = calcularTotalCompra(carritoCompras);
console.log(`Total Final a Pagar: $${totalFinal}`);