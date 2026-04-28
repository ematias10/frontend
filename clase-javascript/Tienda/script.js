/**
 * REQUERIMIENTO 1: Estructura de Datos Inicial
 * Cree un arreglo de objetos llamado 'carritoCompras' con 5 productos.
 */
const carritoCompras = [
    // TODO: Completar con 5 objetos
    { nombreProducto: "Monitor Gamer 24", precioUnitario: 155000, cantidadComprada: 1 },
    { nombreProducto: "Teclado Mecánico", precioUnitario: 85000, cantidadComprada: 2 },
    { nombreProducto: "Mouse Inalámbrico", precioUnitario: 25000, cantidadComprada: 4 },
    { nombreProducto: "Audifonos Gaming RGB", precioUnitario: 120000, cantidadComprada: 2 },
    { nombreProducto: "Disco SDD NvMe 3.0 1TB", precioUnitario: 125000, cantidadComprada: 1 }
];

/**
 * REQUERIMIENTO 2: Función de Visualización de Boleta
 * Instrucciones: Recorrer con for...of
 */
function visualizarBoleta(carrito) {
    console.log("--- Detalle de su Compra ---");
    // TODO: Implementar bucle for...of
}

/**
 * REQUERIMIENTO 3: Función de Cálculo Total
 * Instrucciones: Usar una variable acumuladora.
 */
function calcularTotalCompra(carrito) {
    let totalAcumulado = 0; // Variable acumuladora
    
    // TODO: Sumar subtotales al totalAcumulado
    
    return totalAcumulado;
}

// Ejecución de funciones
visualizarBoleta(carritoCompras);
const totalFinal = calcularTotalCompra(carritoCompras);
console.log(`Total Final a Pagar: $${totalFinal}`);