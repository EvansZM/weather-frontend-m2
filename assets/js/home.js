// Importamos el arreglo de lugares desde el nuevo archivo de datos.
// Aquí solo vienen los datos locales, como nombre, imagen, región y coordenadas.
import { lugares } from "./data/lugares.js";

// Importamos la función que consulta el clima actual en OpenWeather.
// Esta función recibe latitud y longitud, y devuelve los datos del clima.
import { obtenerClimaActual } from "./services/apiClient.js";

// Buscamos el contenedor donde se renderizarán las cards del home.
// Este elemento debe existir en index.html con el id "contenedor-comunas".
const contenedorComunas = document.getElementById("contenedor-comunas");

// Buscamos el contenedor donde mostraremos mensajes de estado,
// como "Cargando..." o errores generales del home.
const estadoHome = document.getElementById("estado-home");

// Esta función recibe el estado del clima actual
// y devuelve la clase de Bootstrap que se usará en el badge.
function obtenerClaseBadge(estado = "") {
    // Convertimos el estado a minúsculas para comparar sin errores.
    const estadoNormalizado = estado.toLowerCase();

    // Si el estado contiene palabras relacionadas con sol o cielo despejado,
    // devolvemos la clase amarilla.
    if (
        estadoNormalizado.includes("soleado") ||
        estadoNormalizado.includes("despejado") ||
        estadoNormalizado.includes("clear")
    ) {
        return "text-bg-warning";
    }

    // Si el estado contiene palabras relacionadas con nubes,
    // devolvemos la clase gris.
    if (
        estadoNormalizado.includes("nublado") ||
        estadoNormalizado.includes("cloud")
    ) {
        return "text-bg-secondary";
    }

    // Si el estado contiene palabras relacionadas con lluvia,
    // devolvemos la clase verde.
    if (
        estadoNormalizado.includes("lluvia") ||
        estadoNormalizado.includes("llovizna") ||
        estadoNormalizado.includes("chubascos") ||
        estadoNormalizado.includes("rain") ||
        estadoNormalizado.includes("drizzle")
    ) {
        return "text-bg-success";
    }

    // Si el estado contiene palabras relacionadas con viento,
    // devolvemos la clase celeste.
    if (
        estadoNormalizado.includes("viento") ||
        estadoNormalizado.includes("brisa") ||
        estadoNormalizado.includes("wind")
    ) {
        return "text-bg-info";
    }

    // Si no coincide con ningún caso anterior,
    // devolvemos una clase por defecto.
    return "text-bg-primary";
}

// Esta función crea el HTML de una card usando:
// - los datos locales del lugar
// - los datos dinámicos del clima obtenidos desde la API
function crearCardLugar(lugar, clima) {
    // Obtenemos la descripción del clima desde la API.
    // Si no existe, usamos un texto por defecto.
    const estado = clima?.weather?.[0]?.description || "No disponible";

    // Obtenemos la temperatura desde la API.
    // Si no existe, usamos "--" para evitar errores visuales.
    const temperatura = clima?.main?.temp !== undefined
        ? Math.round(clima.main.temp)
        : "--";

    // Calculamos la clase del badge según el estado del clima.
    const claseBadge = obtenerClaseBadge(estado);

    // Retornamos el HTML completo de la card.
    return `
        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-card h-100">
                <img
                    src="./${lugar.imagen}"
                    class="card-img-top place-card__image"
                    alt="Vista de ${lugar.nombre}"
                >

                <div class="card-body place-card__body">
                    <h2 class="h5 card-title place-card__title mb-1">${lugar.nombre}</h2>

                    <p class="place-card__text mb-2">
                        <span class="fw-bold">${temperatura}°C</span>
                        <span class="badge ${claseBadge} ms-1 text-capitalize">${estado}</span>
                    </p>

                    <button
                        onclick="irDetalle('${lugar.slug}')"
                        class="btn btn-primary btn-lg w-100 place-card__button"
                    >
                        Ver detalle
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Esta función se encarga de renderizar una card de error
// si falla la obtención del clima de algún lugar.
function crearCardError(lugar) {
    // Retornamos una card simple manteniendo el diseño de la app.
    return `
        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-card h-100">
                <img
                    src="./${lugar.imagen}"
                    class="card-img-top place-card__image"
                    alt="Vista de ${lugar.nombre}"
                >

                <div class="card-body place-card__body">
                    <h2 class="h5 card-title place-card__title mb-1">${lugar.nombre}</h2>

                    <p class="place-card__text mb-2">
                        <span class="fw-bold">--°C</span>
                        <span class="badge text-bg-danger ms-1">Error al cargar</span>
                    </p>

                    <button
                        onclick="irDetalle('${lugar.slug}')"
                        class="btn btn-primary btn-lg w-100 place-card__button"
                    >
                        Ver detalle
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Esta función principal recorre el arreglo de lugares,
// consulta la API para cada uno y luego renderiza todas las cards.
async function renderizarLugares() {
    // Si el contenedor principal no existe, salimos para evitar errores.
    if (!contenedorComunas) {
        return;
    }

    // Limpiamos el contenedor de cards antes de comenzar el render.
    contenedorComunas.innerHTML = "";

    // Si existe el contenedor de estado, mostramos mensaje de carga.
    if (estadoHome) {
        estadoHome.textContent = "Cargando clima de las ciudades...";
        estadoHome.className = "mb-3 text-center";
    }

    try {
        // Recorremos todos los lugares y hacemos una consulta a la API por cada uno.
        // Promise.all permite esperar a que todas las promesas terminen.
        const tarjetasHTML = await Promise.all(
            lugares.map(async (lugar) => {
                try {
                    // Consultamos el clima actual usando latitud y longitud del lugar.
                    const clima = await obtenerClimaActual(lugar.lat, lugar.lon);

                    // Retornamos la card normal si la API respondió correctamente.
                    return crearCardLugar(lugar, clima);
                } catch (error) {
                    // Si falla una ciudad específica, mostramos una card de error
                    // sin romper todo el home.
                    console.error(`Error al cargar clima de ${lugar.nombre}:`, error);
                    return crearCardError(lugar);
                }
            })
        );

        // Insertamos todas las cards dentro del contenedor.
        contenedorComunas.innerHTML = tarjetasHTML.join("");

        // Limpiamos el mensaje de carga cuando termina todo correctamente.
        if (estadoHome) {
            estadoHome.textContent = "";
        }
    } catch (error) {
        // Si ocurre un error más general, mostramos el mensaje global.
        console.error("Error general al renderizar el home:", error);

        // Vaciamos el grid por seguridad.
        contenedorComunas.innerHTML = "";

        // Mostramos el error en el contenedor de estado si existe.
        if (estadoHome) {
            estadoHome.textContent = "No fue posible cargar la información del clima.";
            estadoHome.className = "mb-3 text-center text-danger";
        }
    }
}

// Ejecutamos la función principal para renderizar las ciudades
// apenas cargue el script.
renderizarLugares();