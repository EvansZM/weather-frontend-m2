// Función general para navegar a cualquier ruta del proyecto.
// Recibe una cadena de texto con la URL o ruta del archivo al que queremos ir.
function irA(ruta) {
    // Cambia la ubicación actual del navegador por la ruta recibida.
    window.location.href = ruta;
}

// Función para volver al home principal del proyecto.
// Se usa cuando queremos regresar a index.html.
function irHome() {
    // Navega al archivo index.html que está en la raíz del proyecto.
    irA("./index.html");
}

// Función para ir al detalle dinámico de una comuna o ciudad.
// Recibe el slug, por ejemplo: "santiago", "vina-del-mar", "valparaiso".
function irDetalle(slug) {
    // Navega a detalle.html y envía el slug por la URL usando query params.
    // Ejemplo final: ./detalle.html?ciudad=santiago
    irA(`./detalle.html?ciudad=${slug}`);
}

// Función para ir a la página "Acerca de".
// Queda pensada para trabajar con acerca.html en la raíz del proyecto.
function irAcerca() {
    // Navega al archivo acerca.html.
    irA("./acerca.html");
}