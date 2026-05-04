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
    for (const producto of carrito) {
        const subtotal = producto.precioUnitario * producto.cantidadComprada;
        console.log(`Producto: ${producto.nombreProducto} (x${producto.cantidadComprada})`);
        console.log(`Subtotal: $${subtotal}`);
    }
}

/**
 * REQUERIMIENTO 3: Función de Cálculo Total
 * Instrucciones: Usar una variable acumuladora.
 */
function calcularTotalCompra(carrito) {
    let totalAcumulado = 0; // Variable acumuladora
    for (const producto of carrito) {
        const subtotal = producto.precioUnitario * producto.cantidadComprada;
        totalAcumulado += subtotal;
    }
    return totalAcumulado;
}

/**
 * REQUERIMIENTO 4: Ejecución de Funciones
 * Instrucciones: Agregar al HTML los productos, subtotales y total final.
**/
function mostrarResultadosEnHTML(carrito) {
    // Seleccionar el contenedor donde se mostrarán los productos y subtotales
    const boleta = document.querySelector("#lista-productos");
    boleta.innerHTML = ""; // Limpiar contenido previo
    // Recorrer el carrito y crear elementos HTML para cada producto
    for (const producto of carrito) {
        // Crear elementos para mostrar el nombre del producto, cantidad y subtotal
        const spanNombreProducto = document.createElement("span");
        const spanSubtotal = document.createElement("span");
        // Calcular el subtotal para el producto actual
        const subtotal = producto.precioUnitario * producto.cantidadComprada;
        // Asignar el texto a los elementos creados
        spanNombreProducto.textContent = `${producto.nombreProducto} (x${producto.cantidadComprada})`;
        spanSubtotal.textContent = `Subtotal: $${subtotal}`;

        // Crear un contenedor para cada producto y agregar los elementos de nombre y subtotal
        const divProductoListado = document.createElement("div");
        // Agregar una clase para estilos
        divProductoListado.className = "item-compra";
        // Agregar los elementos al contenedor del producto
        divProductoListado.appendChild(spanNombreProducto);
        divProductoListado.appendChild(spanSubtotal);
        // Agregar el contenedor del producto a la boleta
        boleta.appendChild(divProductoListado);
    }      
}

function mostrarTotalFinalEnHTML(total) {
    // Seleccionar el elemento donde se mostrará el total final
    const totalFinalElemento = document.querySelector("#total-final");
    // Asignar el texto con el total final a pagar
    totalFinalElemento.textContent = `$${total}`;
}


// Ejecución de funciones
visualizarBoleta(carritoCompras);
const totalFinal = calcularTotalCompra(carritoCompras);
console.log(`Total Final a Pagar: $${totalFinal}`);
// Mostrar resultados en HTML
mostrarResultadosEnHTML(carritoCompras);
mostrarTotalFinalEnHTML(totalFinal);