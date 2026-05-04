// Desafío 1: Secuencia Clic y Alert
const btnCarrito = document.getElementById('btn-carrito');

btnCarrito.addEventListener('mousedown', () => {
    btnCarrito.style.backgroundColor = '#0056b3'; // Color más oscuro
});

btnCarrito.addEventListener('mouseup', () => {
    btnCarrito.style.backgroundColor = '#007bff'; // Color original
});

btnCarrito.addEventListener('click', () => {
    alert('¡Producto agregado al carrito!');
});


// Desafío 2: Rastreo de Movimiento (mousemove)
const imagenProducto = document.getElementById('imagen-producto');
const coordenadasTxt = document.getElementById('coordenadas');

imagenProducto.addEventListener('mousemove', (e) => {
    // Offset relativo a la imagen
    const x = e.offsetX;
    const y = e.offsetY;
    coordenadasTxt.textContent = `Coordenadas: X: ${x}, Y: ${y}`;
});


// Desafío 3: Eventos de Teclado
const inputDescuento = document.getElementById('codigo-descuento');
const mensajeDescuento = document.getElementById('mensaje-descuento');

inputDescuento.addEventListener('keydown', (e) => {
    console.log(`Tecla presionada: ${e.key}`);
});

inputDescuento.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const codigo = inputDescuento.value.toUpperCase();
        if (codigo === 'PROMO2026') {
            mensajeDescuento.textContent = "¡Código aplicado con éxito!";
            mensajeDescuento.style.color = "green";
        } else {
            mensajeDescuento.textContent = "Código inválido.";
            mensajeDescuento.style.color = "red";
        }
    }
});


// Desafío 4 y 5: Submit, preventDefault() y Validación con IA (Regex)
const formRegistro = document.getElementById('form-registro');
const statusForm = document.getElementById('status-formulario');

// Expresión regular generada mediante IA (GitHub Copilot)
// Prompt: "Genera una expresión regular robusta en JavaScript para validar un correo electrónico..."
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

formRegistro.addEventListener('submit', (event) => {
    event.preventDefault(); // Detener recarga

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validar campos vacíos
    if (nombre === "" || email === "") {
        statusForm.textContent = "Error: Todos los campos son obligatorios.";
        statusForm.style.color = "red";
        return;
    }

    // Validar Email con Regex (Desafío 5)
    if (!emailRegex.test(email)) {
        statusForm.textContent = "Error: El formato del correo no es válido.";
        statusForm.style.color = "red";
        return;
    }

    // Si todo es válido
    statusForm.textContent = "¡Gracias por su compra, " + nombre + "!";
    statusForm.style.color = "blue";
    formRegistro.reset();
});
