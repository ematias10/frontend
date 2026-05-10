/* ============================================================
   script.js — Eventos en JavaScript (uso de querySelector)
   Secciones:
     1. Eventos de mouse y teclado
     2. Contador interactivo
     3. Formulario con validación
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// UTILIDADES
// ─────────────────────────────────────────────────────────────

const listaLog = document.querySelector('#lista-log');

/**
 * Agrega una entrada al registro visual de eventos.
 * @param {string} tipo  - Nombre del evento (ej: "click")
 * @param {string} detalle - Descripción adicional
 */
function registrarEvento(tipo, detalle) {
  const MAX_ENTRADAS = 30;
  const li = document.createElement('li');
  li.innerHTML = `<span class="tipo">[${tipo}]</span>${detalle}`;
  listaLog.prepend(li);

  // Limitar entradas para no saturar el log
  while (listaLog.children.length > MAX_ENTRADAS) {
    listaLog.removeChild(listaLog.lastChild);
  }
}

// ─────────────────────────────────────────────────────────────
// SECCIÓN 1 — EVENTOS DE MOUSE
// ─────────────────────────────────────────────────────────────

// --- Botón click simple ---
const btnClick = document.querySelector('#btn-click');
btnClick.addEventListener('click', () => {
  registrarEvento('click', `Se hizo click en el botón "${btnClick.textContent.trim()}"`);
  btnClick.textContent = btnClick.textContent === 'Haz click aquí'
    ? '¡Hiciste click! 🎉'
    : 'Haz click aquí';
});

// --- Botón doble click ---
const btnDoble = document.querySelector('#btn-dobleclick');
btnDoble.addEventListener('dblclick', () => {
  registrarEvento('dblclick', 'Se realizó un doble click');
  btnDoble.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
});

// --- Caja hover (mouseenter / mouseleave) ---
const cajaHover = document.querySelector('#caja-hover');

cajaHover.addEventListener('mouseenter', () => {
  cajaHover.classList.add('activa');
  cajaHover.textContent = '¡Mouse dentro! 🖱️';
  registrarEvento('mouseenter', 'El mouse entró a la caja');
});

cajaHover.addEventListener('mouseleave', () => {
  cajaHover.classList.remove('activa');
  cajaHover.textContent = 'Pasa el mouse por aquí';
  registrarEvento('mouseleave', 'El mouse salió de la caja');
});

// --- Imagen: click y contextmenu ---
const imgEvento = document.querySelector('#img-evento');

imgEvento.addEventListener('click', () => {
  registrarEvento('click', 'Se hizo click en la imagen');
  // Cambia la imagen por otra aleatoria de Picsum
  const seed = Math.floor(Math.random() * 500);
  imgEvento.src = `https://picsum.photos/seed/${seed}/200/120`;
});

imgEvento.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  registrarEvento('contextmenu', 'Se hizo click derecho en la imagen');
});

imgEvento.addEventListener('mousemove', (e) => {
  // Solo registra cada 80px de movimiento para no saturar el log
  if (Math.random() < 0.03) {
    registrarEvento('mousemove', `Posición: X=${e.offsetX}, Y=${e.offsetY}`);
  }
});

// ─────────────────────────────────────────────────────────────
// SECCIÓN 1 — EVENTOS DE TECLADO
// ─────────────────────────────────────────────────────────────

const inputTeclado = document.querySelector('#input-teclado');
const infoTecla    = document.querySelector('#info-tecla');

inputTeclado.addEventListener('keydown', (e) => {
  infoTecla.textContent = `keydown → Tecla: "${e.key}"  |  Código: ${e.code}  |  Ctrl: ${e.ctrlKey}  |  Shift: ${e.shiftKey}`;
  registrarEvento('keydown', `Tecla presionada: "${e.key}" (${e.code})`);
});

inputTeclado.addEventListener('keyup', (e) => {
  registrarEvento('keyup', `Tecla soltada: "${e.key}"`);
});

inputTeclado.addEventListener('input', () => {
  registrarEvento('input', `Contenido actual: "${inputTeclado.value}"`);
});

inputTeclado.addEventListener('focus', () => {
  registrarEvento('focus', 'El input recibió el foco');
});

inputTeclado.addEventListener('blur', () => {
  registrarEvento('blur', 'El input perdió el foco');
  infoTecla.textContent = 'Presiona una tecla en el input';
});

// ─────────────────────────────────────────────────────────────
// SECCIÓN 2 — CONTADOR
// ─────────────────────────────────────────────────────────────

let contador = 0;
const displayContador  = document.querySelector('#display-contador');
const mensajeContador  = document.querySelector('#mensaje-contador');
const btnIncrementar   = document.querySelector('#btn-incrementar');
const btnDecrementar   = document.querySelector('#btn-decrementar');
const btnReiniciar     = document.querySelector('#btn-reiniciar');

/**
 * Actualiza el display del contador y aplica clases de color.
 */
function actualizarContador() {
  displayContador.textContent = contador;
  displayContador.classList.remove('positivo', 'negativo', 'cero');

  if (contador > 0) {
    displayContador.classList.add('positivo');
    mensajeContador.textContent = `El valor es positivo (+${contador})`;
  } else if (contador < 0) {
    displayContador.classList.add('negativo');
    mensajeContador.textContent = `El valor es negativo (${contador})`;
  } else {
    displayContador.classList.add('cero');
    mensajeContador.textContent = 'El contador está en cero';
  }
}

btnIncrementar.addEventListener('click', () => {
  contador++;
  actualizarContador();
});

btnDecrementar.addEventListener('click', () => {
  contador--;
  actualizarContador();
});

btnReiniciar.addEventListener('click', () => {
  contador = 0;
  actualizarContador();
  mensajeContador.textContent = 'Contador reiniciado a cero';
});

// Estado inicial
actualizarContador();

// ─────────────────────────────────────────────────────────────
// SECCIÓN 3 — FORMULARIO
// ─────────────────────────────────────────────────────────────

const formulario          = document.querySelector('#formulario-registro');
const inputNombre         = document.querySelector('#nombre');
const inputRut            = document.querySelector('#rut');
const inputEdad           = document.querySelector('#edad');
const resultadoFormulario = document.querySelector('#resultado-formulario');

// --- Formateo automático del RUT mientras se escribe ---
inputRut.addEventListener('input', () => {
  let valor = inputRut.value.replace(/[^0-9kK]/g, ''); // Solo dígitos y K

  if (valor.length > 1) {
    const cuerpo = valor.slice(0, -1);
    const dv     = valor.slice(-1).toUpperCase();
    // Formato: 12.345.678-9
    const cuerpoFormateado = cuerpo
      .split('')
      .reverse()
      .join('')
      .replace(/(\d{3})(?=\d)/g, '$1.')
      .split('')
      .reverse()
      .join('');
    inputRut.value = `${cuerpoFormateado}-${dv}`;
  }
});

// ─── Funciones de validación ───────────────────────────────

function limpiarError(input, errorId) {
  input.classList.remove('invalido');
  document.querySelector(`#${errorId}`).textContent = '';
}

function mostrarError(input, errorId, mensaje) {
  input.classList.add('invalido');
  document.querySelector(`#${errorId}`).textContent = mensaje;
}

/**
 * Valida el nombre: solo letras y espacios, mínimo 3 caracteres.
 */
function validarNombre() {
  const valor = inputNombre.value.trim();
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]{3,}$/;

  if (!valor) {
    mostrarError(inputNombre, 'error-nombre', 'El nombre es obligatorio.');
    return false;
  }
  if (!regex.test(valor)) {
    mostrarError(inputNombre, 'error-nombre', 'Solo letras y espacios, mínimo 3 caracteres.');
    return false;
  }
  limpiarError(inputNombre, 'error-nombre');
  return true;
}

/**
 * Valida el RUT chileno usando dígito verificador.
 */
function validarRut() {
  const valor = inputRut.value.trim().replace(/\./g, '').replace(/-/g, '');

  if (!valor) {
    mostrarError(inputRut, 'error-rut', 'El RUT es obligatorio.');
    return false;
  }

  const cuerpo = valor.slice(0, -1);
  const dv     = valor.slice(-1).toUpperCase();

  if (cuerpo.length < 7 || isNaN(Number(cuerpo))) {
    mostrarError(inputRut, 'error-rut', 'Formato de RUT inválido.');
    return false;
  }

  if (calcularDV(Number(cuerpo)) !== dv) {
    mostrarError(inputRut, 'error-rut', 'El dígito verificador no es correcto.');
    return false;
  }

  limpiarError(inputRut, 'error-rut');
  return true;
}

/**
 * Calcula el dígito verificador de un RUT chileno.
 * @param {number} rut - Parte numérica del RUT sin DV
 * @returns {string} Dígito verificador
 */
function calcularDV(rut) {
  let suma     = 0;
  let multiplo = 2;

  for (let i = rut; i > 0; i = Math.floor(i / 10)) {
    suma += (i % 10) * multiplo;
    multiplo = multiplo < 7 ? multiplo + 1 : 2;
  }

  const resultado = 11 - (suma % 11);
  if (resultado === 11) return '0';
  if (resultado === 10) return 'K';
  return String(resultado);
}

/**
 * Valida la edad: número entero entre 1 y 120.
 */
function validarEdad() {
  const valor = inputEdad.value.trim();
  const edad  = Number(valor);

  if (!valor) {
    mostrarError(inputEdad, 'error-edad', 'La edad es obligatoria.');
    return false;
  }
  if (!Number.isInteger(edad) || edad < 1 || edad > 120) {
    mostrarError(inputEdad, 'error-edad', 'Ingresa una edad válida entre 1 y 120.');
    return false;
  }
  limpiarError(inputEdad, 'error-edad');
  return true;
}

// --- Validación en tiempo real ---
inputNombre.addEventListener('blur', validarNombre);
inputRut.addEventListener('blur', validarRut);
inputEdad.addEventListener('blur', validarEdad);

// --- Envío del formulario ---
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombreOk = validarNombre();
  const rutOk    = validarRut();
  const edadOk   = validarEdad();

  if (!nombreOk || !rutOk || !edadOk) {
    resultadoFormulario.classList.add('oculto');
    return;
  }

  // Mostrar resumen
  resultadoFormulario.classList.remove('oculto');
  resultadoFormulario.innerHTML = `
    <h3>✅ Formulario enviado correctamente</h3>
    <p>Nombre: <span>${inputNombre.value.trim()}</span></p>
    <p>RUT: <span>${inputRut.value.trim()}</span></p>
    <p>Edad: <span>${inputEdad.value.trim()} años</span></p>
  `;

  formulario.reset();
  // limpiar clases de error usando querySelectorAll
  document.querySelectorAll('#nombre, #rut, #edad').forEach(i => i.classList.remove('invalido'));
});
