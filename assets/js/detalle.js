// Importamos el arreglo de comunas desde el archivo de datos.
// Aquí vive toda la información que antes estaba repartida en varios HTML.
import { comunas } from "./data/comunas.js";

// ===============================
// OBTENER ELEMENTOS DEL DOM
// ===============================

// Breadcrumb de la ciudad actual.
const breadcrumbCiudad = document.getElementById("breadcrumb-ciudad");

// Nombre principal de la ciudad.
const nombreCiudad = document.getElementById("nombre-ciudad");

// Descripción breve que aparece arriba.
const descripcionCiudad = document.getElementById("descripcion-ciudad");

// Badge del estado actual del clima.
const estadoClima = document.getElementById("estado-clima");

// Temperatura actual mostrada en el resumen rápido.
const temperaturaActual = document.getElementById("temperatura-actual");

// Texto descriptivo de la sección "Sobre la ciudad".
const infoTexto = document.getElementById("info-texto");

// Contenedor de las cards de información rápida.
const infoCards = document.getElementById("info-cards");

// Imagen principal de la ciudad.
const imagenCiudad = document.getElementById("imagen-ciudad");

// Descripción de condiciones actuales.
const descripcionClima = document.getElementById("descripcion-clima");

// Contenedor de las métricas del clima actual.
const metricasClima = document.getElementById("metricas-clima");

// Contenedor del pronóstico semanal.
const pronostico = document.getElementById("pronostico");

// ===============================
// FUNCIONES AUXILIARES
// ===============================

// Esta función obtiene el parámetro "ciudad" desde la URL.
// Ejemplo: detalle.html?ciudad=santiago
function obtenerSlugDesdeURL() {
    // URLSearchParams permite leer fácilmente los parámetros de la URL.
    const params = new URLSearchParams(window.location.search);

    // Retornamos el valor del parámetro "ciudad".
    return params.get("ciudad");
}

// Esta función busca una comuna dentro del arreglo usando su slug.
function obtenerComunaPorSlug(slug) {
    // find recorre el arreglo y retorna la primera coincidencia.
    return comunas.find((comuna) => comuna.slug === slug);
}

// Esta función devuelve la clase visual del badge
// según el estado del clima que reciba.
function obtenerClaseBadge(estado) {
    // Normalizamos el texto a minúsculas para comparar mejor.
    const estadoNormalizado = estado.toLowerCase();

    // Estados soleados o despejados.
    if (
        estadoNormalizado.includes("soleado") ||
        estadoNormalizado.includes("despejado")
    ) {
        return "text-bg-warning";
    }

    // Estados nublados.
    if (estadoNormalizado.includes("nublado")) {
        return "text-bg-secondary";
    }

    // Estados con lluvia, llovizna o chubascos.
    if (
        estadoNormalizado.includes("lluvia") ||
        estadoNormalizado.includes("llovizna") ||
        estadoNormalizado.includes("chubascos")
    ) {
        return "text-bg-success";
    }

    // Estados de viento o brisa.
    if (
        estadoNormalizado.includes("viento") ||
        estadoNormalizado.includes("brisa")
    ) {
        return "text-bg-info";
    }

    // Si no coincide con nada, usamos una clase azul por defecto.
    return "text-bg-primary";
}

// Esta función calcula estadísticas semanales a partir del pronóstico.
// Aquí cumplimos una parte importante de la rúbrica porque
// las estadísticas se calculan dinámicamente con JS.
function calcularEstadisticas(pronosticoSemanal) {
    // Inicializamos la temperatura máxima con el primer día.
    let maximaSemana = pronosticoSemanal[0].max;

    // Inicializamos la temperatura mínima con el primer día.
    let minimaSemana = pronosticoSemanal[0].min;

    // Variable para acumular temperaturas y luego sacar promedio.
    let sumaTemperaturas = 0;

    // Objeto para contar cuántos días hay de cada tipo de clima.
    const conteoEstados = {};

    // Recorremos cada día del pronóstico.
    for (const dia of pronosticoSemanal) {
        // Si la máxima del día actual es mayor que la guardada,
        // actualizamos la máxima semanal.
        if (dia.max > maximaSemana) {
            maximaSemana = dia.max;
        }

        // Si la mínima del día actual es menor que la guardada,
        // actualizamos la mínima semanal.
        if (dia.min < minimaSemana) {
            minimaSemana = dia.min;
        }

        // Sumamos la media del día usando min y max.
        // Esto nos da un promedio semanal más equilibrado.
        sumaTemperaturas += (dia.max + dia.min) / 2;

        // Si el estado todavía no existe en el objeto,
        // lo inicializamos en cero.
        if (!conteoEstados[dia.estado]) {
            conteoEstados[dia.estado] = 0;
        }

        // Incrementamos el contador del estado correspondiente.
        conteoEstados[dia.estado]++;
    }

    // Calculamos el promedio semanal redondeado.
    const promedioSemana = Math.round(sumaTemperaturas / pronosticoSemanal.length);

    // Obtenemos el estado más repetido de la semana.
    let estadoPredominante = "";
    let mayorCantidad = 0;

    // Recorremos las claves del objeto de conteo.
    for (const estado in conteoEstados) {
        // Si este estado tiene más días que el máximo actual,
        // se convierte en el nuevo predominante.
        if (conteoEstados[estado] > mayorCantidad) {
            mayorCantidad = conteoEstados[estado];
            estadoPredominante = estado;
        }
    }

    // Generamos un resumen textual dinámico según los datos.
    const resumen = generarResumenSemanal(
        promedioSemana,
        estadoPredominante,
        conteoEstados
    );

    // Devolvemos todo agrupado en un objeto.
    return {
        minimaSemana,
        maximaSemana,
        promedioSemana,
        conteoEstados,
        estadoPredominante,
        resumen,
    };
}

// Esta función genera una frase resumen según el promedio
// y el tipo de clima predominante.
function generarResumenSemanal(promedioSemana, estadoPredominante, conteoEstados) {
    // Normalizamos el estado predominante.
    const estado = estadoPredominante.toLowerCase();

    // Si predominan estados soleados o despejados.
    if (estado.includes("soleado") || estado.includes("despejado")) {
        return "Semana mayormente soleada, con temperaturas agradables y buenas condiciones para actividades al aire libre.";
    }

    // Si predominan lluvias o similares.
    if (
        estado.includes("lluvia") ||
        estado.includes("llovizna") ||
        estado.includes("chubascos")
    ) {
        // Si además el promedio es bajo, hacemos el mensaje más específico.
        if (promedioSemana <= 12) {
            return "Semana fría y húmeda, con presencia frecuente de lluvias.";
        }

        return "Semana inestable, con varios días de precipitaciones.";
    }

    // Si predominan nubes.
    if (estado.includes("nublado")) {
        return "Semana mayormente nublada, con temperaturas moderadas y ambiente estable.";
    }

    // Si predominan viento o brisa.
    if (estado.includes("viento") || estado.includes("brisa")) {
        return "Semana marcada por vientos o brisas, con variaciones suaves de temperatura.";
    }

    // Mensaje por defecto si no cae en ningún caso.
    return "Semana con condiciones variables y cambios en el comportamiento del clima.";
}

// ===============================
// FUNCIONES DE RENDERIZADO
// ===============================

// Esta función renderiza la cabecera principal del detalle.
function renderizarCabecera(comuna) {
    // Actualizamos el breadcrumb.
    breadcrumbCiudad.textContent = comuna.nombre;

    // Actualizamos el título principal.
    nombreCiudad.textContent = comuna.nombre;

    // Actualizamos la descripción breve.
    descripcionCiudad.textContent = `Consulta las condiciones climáticas actuales y el pronóstico estimado para los próximos días en la ciudad de ${comuna.nombre}.`;

    // Actualizamos el texto del badge con icono + estado.
    estadoClima.textContent = `${comuna.climaActual.icono} ${comuna.climaActual.estado}`;

    // Reemplazamos la clase anterior del badge por la nueva según el clima.
    estadoClima.className = `badge ${obtenerClaseBadge(comuna.climaActual.estado)} fs-6`;

    // Actualizamos la temperatura actual.
    temperaturaActual.textContent = `${comuna.climaActual.temperatura}°C`;

    // Actualizamos el título del documento en la pestaña.
    document.title = `Aurora · Clima en ${comuna.nombre}`;
}

// Esta función renderiza la sección "Sobre la ciudad".
function renderizarInfoCiudad(comuna) {
    // Escribimos el texto principal de la ciudad.
    infoTexto.textContent = comuna.info.descripcion;

    // Creamos las 4 cards de información rápida.
    infoCards.innerHTML = `
        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-1">Región</h3>
                    <p class="mb-0 fw-semibold">${comuna.region}</p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-1">Altitud</h3>
                    <p class="mb-0 fw-semibold">${comuna.info.altitud}</p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-1">Población</h3>
                    <p class="mb-0 fw-semibold">${comuna.info.poblacion}</p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6 col-lg-3">
            <div class="card place-detail__info-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-1">Clima</h3>
                    <p class="mb-0 fw-semibold">${comuna.info.clima}</p>
                </div>
            </div>
        </article>
    `;
}

// Esta función renderiza la parte de clima actual.
function renderizarClimaActual(comuna, estadisticas) {
    // Asignamos la imagen de la ciudad.
    imagenCiudad.src = `./${comuna.imagen}`;

    // Agregamos un texto alternativo descriptivo.
    imagenCiudad.alt = `Vista de ${comuna.nombre}`;

    // Escribimos la descripción de las condiciones actuales.
    descripcionClima.textContent = comuna.climaActual.descripcion;

    // Creamos las métricas del clima actual + estadísticas semanales.
    metricasClima.innerHTML = `
        <article class="col-12 col-sm-6">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Temperatura</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                        ${comuna.climaActual.temperatura}°C
                    </p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Humedad</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                        ${comuna.climaActual.humedad}%
                    </p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Viento</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                        ${comuna.climaActual.viento} km/h
                    </p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Sensación térmica</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                        ${comuna.climaActual.sensacion}°C
                    </p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Mínima semanal</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                        ${estadisticas.minimaSemana}°C
                    </p>
                </div>
            </div>
        </article>

        <article class="col-12 col-sm-6">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Máxima semanal</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-0">
                        ${estadisticas.maximaSemana}°C
                    </p>
                </div>
            </div>
        </article>

        <article class="col-12">
            <div class="card place-detail__metric-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h6 text-muted mb-2">Promedio semanal</h3>
                    <p class="place-detail__metric-value display-6 fw-bold mb-2">
                        ${estadisticas.promedioSemana}°C
                    </p>
                    <p class="mb-0">${estadisticas.resumen}</p>
                </div>
            </div>
        </article>
    `;
}

// Esta función renderiza las cards del pronóstico semanal.
function renderizarPronostico(comuna, estadisticas) {
    // Recorremos el arreglo del pronóstico y generamos una card por cada día.
    const tarjetasPronostico = comuna.pronosticoSemanal
        .map((dia) => {
            // Obtenemos la clase del badge según el estado del día.
            const claseBadge = obtenerClaseBadge(dia.estado);

            // Si el estado es parcialmente nublado,
            // mantenemos la clase especial que ya usabas.
            const badgeHTML =
                dia.estado.toLowerCase().includes("parcialmente nublado")
                    ? `<span class="place-detail__badge mb-2">${dia.estado}</span>`
                    : `<span class="badge ${claseBadge} mb-2">${dia.estado}</span>`;

            // Retornamos el HTML de la card del día.
            return `
                <article class="col-12 col-sm-6 col-lg-4 col-xl-3">
                    <div class="card place-detail__forecast-card h-100 shadow-sm">
                        <div class="card-body">
                            <h3 class="h5 card-title">${dia.dia}</h3>
                            <p class="fs-3 mb-2">${dia.icono}</p>
                            ${badgeHTML}
                            <p class="mb-1"><strong>Máx:</strong> ${dia.max}°C</p>
                            <p class="mb-0"><strong>Mín:</strong> ${dia.min}°C</p>
                        </div>
                    </div>
                </article>
            `;
        })
        .join("");

    // Generamos el resumen de conteo por estado.
    const resumenEstados = Object.entries(estadisticas.conteoEstados)
        .map(([estado, cantidad]) => `<li><strong>${estado}:</strong> ${cantidad} día(s)</li>`)
        .join("");

    // Pintamos primero las cards del pronóstico
    // y luego una card extra con estadísticas de la semana.
    pronostico.innerHTML = `
        ${tarjetasPronostico}

        <article class="col-12">
            <div class="card place-detail__forecast-card h-100 shadow-sm">
                <div class="card-body">
                    <h3 class="h5 card-title mb-3">Estadísticas de la semana</h3>
                    <p class="mb-2"><strong>Temperatura mínima:</strong> ${estadisticas.minimaSemana}°C</p>
                    <p class="mb-2"><strong>Temperatura máxima:</strong> ${estadisticas.maximaSemana}°C</p>
                    <p class="mb-3"><strong>Temperatura promedio:</strong> ${estadisticas.promedioSemana}°C</p>

                    <h4 class="h6 fw-bold mb-2">Cantidad de días por tipo de clima</h4>
                    <ul class="mb-3">
                        ${resumenEstados}
                    </ul>

                    <p class="mb-0"><strong>Resumen:</strong> ${estadisticas.resumen}</p>
                </div>
            </div>
        </article>
    `;
}

// Esta función muestra un mensaje simple si la ciudad no existe.
function renderizarError() {
    // Reemplazamos el contenido principal por un mensaje amigable.
    document.querySelector("main").innerHTML = `
        <div class="container py-5">
            <div class="place-detail__box p-4 text-center">
                <h1 class="place-detail__title display-6 fw-bold mb-3">Ciudad no encontrada</h1>
                <p class="place-detail__description mb-4">
                    No pudimos cargar el detalle solicitado. Vuelve al inicio y selecciona una ciudad válida.
                </p>
                <button class="btn btn-primary" onclick="irHome()">Volver al home</button>
            </div>
        </div>
    `;
}

// ===============================
// FUNCIÓN PRINCIPAL
// ===============================

// Esta función ejecuta toda la lógica del detalle.
function inicializarDetalle() {
    // Leemos el slug desde la URL.
    const slug = obtenerSlugDesdeURL();

    // Buscamos la comuna correspondiente.
    const comuna = obtenerComunaPorSlug(slug);

    // Si no existe, mostramos error y detenemos la ejecución.
    if (!comuna) {
        renderizarError();
        return;
    }

    // Calculamos estadísticas a partir del pronóstico semanal.
    const estadisticas = calcularEstadisticas(comuna.pronosticoSemanal);

    // Renderizamos todas las secciones del detalle.
    renderizarCabecera(comuna);
    renderizarInfoCiudad(comuna);
    renderizarClimaActual(comuna, estadisticas);
    renderizarPronostico(comuna, estadisticas);
}

// Ejecutamos la función principal al cargar el módulo.
inicializarDetalle();