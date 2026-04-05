// Importamos el arreglo de comunas desde el archivo de datos.
// Aquí está toda la información que antes estaba escrita a mano en el HTML.
import { comunas } from "./data/comunas.js";

// Buscamos el contenedor del home donde vamos a renderizar las cards.
// Este elemento debe existir en index.html con el id "contenedor-comunas".
const contenedorComunas = document.getElementById("contenedor-comunas");

// Esta función recibe el estado del clima actual de una comuna
// y devuelve la clase de Bootstrap que usaremos en el badge.
function obtenerClaseBadge(estado) {
    // Convertimos el texto a minúsculas para comparar sin errores.
    const estadoNormalizado = estado.toLowerCase();

    // Si el estado contiene "soleado" o "despejado",
    // devolvemos el badge amarillo.
    if (estadoNormalizado.includes("soleado") || estadoNormalizado.includes("despejado")) {
        return "text-bg-warning";
    }

    // Si el estado contiene "nublado",
    // devolvemos el badge gris.
    if (estadoNormalizado.includes("nublado")) {
        return "text-bg-secondary";
    }

    // Si el estado contiene "lluvia", "llovizna" o "chubascos",
    // devolvemos el badge verde.
    if (
        estadoNormalizado.includes("lluvia") ||
        estadoNormalizado.includes("llovizna") ||
        estadoNormalizado.includes("chubascos")
    ) {
        return "text-bg-success";
    }

    // Si el estado contiene "viento" o "brisa",
    // devolvemos el badge celeste.
    if (
        estadoNormalizado.includes("viento") ||
        estadoNormalizado.includes("brisa")
    ) {
        return "text-bg-info";
    }

    // Si el estado no coincide con ninguno de los casos anteriores,
    // devolvemos una clase por defecto.
    return "text-bg-primary";
}

// Esta función recibe una comuna y devuelve el HTML de su card.
// Así evitamos repetir código dentro del render.
function crearCardComuna(comuna) {
    // Guardamos en una variable la clase que usará el badge
    // según el clima actual de la comuna.
    const claseBadge = obtenerClaseBadge(comuna.climaActual.estado);

    // Retornamos el HTML completo de la card.
    return `
        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-card h-100">
                <img
                    src="./${comuna.imagen}"
                    class="card-img-top place-card__image"
                    alt="Vista de ${comuna.nombre}"
                >

                <div class="card-body place-card__body">
                    <h2 class="h5 card-title place-card__title mb-1">${comuna.nombre}</h2>

                    <p class="place-card__text mb-2">
                        <span class="fw-bold">${comuna.climaActual.temperatura}°C</span>
                        <span class="badge ${claseBadge} ms-1">${comuna.climaActual.estado}</span>
                    </p>

                    <button
                        onclick="irDetalle('${comuna.slug}')"
                        class="btn btn-primary btn-lg w-100 place-card__button"
                    >
                        Ver detalle
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Esta función se encarga de recorrer el arreglo de comunas
// y renderizar todas las cards dentro del contenedor del home.
function renderizarComunas() {
    // Si el contenedor no existe, detenemos la función
    // para evitar errores en consola.
    if (!contenedorComunas) {
        return;
    }

    // Recorremos el arreglo de comunas, convertimos cada comuna en una card,
    // y luego unimos todas las cards en un solo string HTML.
    const tarjetasHTML = comunas.map(crearCardComuna).join("");

    // Insertamos todas las tarjetas dentro del contenedor del home.
    contenedorComunas.innerHTML = tarjetasHTML;
}

// Ejecutamos la función principal para que las comunas
// se rendericen apenas cargue el script.
renderizarComunas();