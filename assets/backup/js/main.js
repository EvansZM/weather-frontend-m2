// Función general para navegar a una ruta
function irA(ruta) {
    window.location.href = ruta;
}

// Volver al home desde páginas dentro de /detalles
function irHome() {
    irA("../index.html");
}

// Volver al home desde la raíz
function irHomeRaiz() {
    irA("./index.html");
}

// Ir a detalle desde el home
function irDetalle(ciudad) {
    irA(`./detalles/${ciudad}.html`);
}

// Ir a acerca desde páginas dentro de /detalles
function irAcerca() {
    irA("./acerca.html");
}

// Ir a acerca desde la raíz
function irAcercaRaiz() {
    irA("./detalles/acerca.html");
}