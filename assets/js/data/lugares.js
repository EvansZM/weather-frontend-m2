// Datos base de las ciudades/comunas que usará la app.
// Aquí solo dejamos información local que NO viene desde la API.
// El clima actual y el pronóstico semanal se obtendrán con OpenWeather.

export const lugares = [
  {
    id: 1,
    slug: "antofagasta",
    nombre: "Antofagasta",
    region: "Antofagasta",
    imagen: "assets/img/antofagasta.webp",
    lat: -23.6509,
    lon: -70.3975,
    info: {
      descripcion:
        "Antofagasta es una ciudad costera del norte de Chile ubicada frente al océano Pacífico y rodeada por el desierto de Atacama. Es un importante centro minero, portuario y económico del país.",
      altitud: "40 m",
      poblacion: "~400 mil",
      clima: "Desértico costero",
    },
  },
  {
    id: 2,
    slug: "arica",
    nombre: "Arica",
    region: "Arica y Parinacota",
    imagen: "assets/img/arica.webp",
    lat: -18.4783,
    lon: -70.3126,
    info: {
      descripcion:
        'Arica es una ciudad costera ubicada en el extremo norte de Chile, conocida como la "Ciudad de la eterna primavera" debido a su clima templado y estable durante todo el año.',
      altitud: "15 m",
      poblacion: "~220 mil",
      clima: "Desértico costero",
    },
  },
  {
    id: 3,
    slug: "concepcion",
    nombre: "Concepción",
    region: "Biobío",
    imagen: "assets/img/concepcion.webp",
    lat: -36.8201,
    lon: -73.0444,
    info: {
      descripcion:
        "Concepción es una de las principales ciudades del sur de Chile y un importante centro universitario, cultural e industrial del país. Se encuentra cerca del océano Pacífico y posee un clima templado con abundantes precipitaciones durante el año.",
      altitud: "12 m",
      poblacion: "~230 mil",
      clima: "Templado lluvioso",
    },
  },
  {
    id: 4,
    slug: "iquique",
    nombre: "Iquique",
    region: "Tarapacá",
    imagen: "assets/img/iquique.webp",
    lat: -20.2307,
    lon: -70.1357,
    info: {
      descripcion:
        "Iquique es una ciudad costera del norte de Chile, famosa por sus playas, su puerto histórico y el contraste entre el océano Pacífico y el desierto de Atacama.",
      altitud: "52 m",
      poblacion: "~220 mil",
      clima: "Desértico costero",
    },
  },
  {
    id: 5,
    slug: "la-serena",
    nombre: "La Serena",
    region: "Coquimbo",
    imagen: "assets/img/la-serena.webp",
    lat: -29.9027,
    lon: -71.2519,
    info: {
      descripcion:
        "La Serena es una ciudad costera del norte chico de Chile, reconocida por sus extensas playas, arquitectura tradicional y cielos despejados durante gran parte del año.",
      altitud: "28 m",
      poblacion: "~250 mil",
      clima: "Semiárido costero",
    },
  },
  {
    id: 6,
    slug: "puerto-montt",
    nombre: "Puerto Montt",
    region: "Los Lagos",
    imagen: "assets/img/puerto-montt.webp",
    lat: -41.4693,
    lon: -72.9424,
    info: {
      descripcion:
        "Puerto Montt es una ciudad portuaria del sur de Chile, puerta de entrada a la Patagonia y a la zona austral. Destaca por su borde costero, cercanía a volcanes, fiordos y un clima fresco con abundantes lluvias.",
      altitud: "14 m",
      poblacion: "~250 mil",
      clima: "Templado oceánico lluvioso",
    },
  },
  {
    id: 7,
    slug: "punta-arenas",
    nombre: "Punta Arenas",
    region: "Magallanes",
    imagen: "assets/img/punta-arenas.webp",
    lat: -53.1638,
    lon: -70.9171,
    info: {
      descripcion:
        "Punta Arenas es una de las ciudades más australes de Chile y un importante centro urbano de la Patagonia. Se caracteriza por sus bajas temperaturas, fuertes vientos y condiciones climáticas cambiantes a lo largo del año.",
      altitud: "34 m",
      poblacion: "~145 mil",
      clima: "Frío oceánico",
    },
  },
  {
    id: 8,
    slug: "santiago",
    nombre: "Santiago",
    region: "Región Metropolitana",
    imagen: "assets/img/santiago.webp",
    lat: -33.4489,
    lon: -70.6693,
    info: {
      descripcion:
        "Santiago es la capital de Chile y se ubica en el valle central del país, rodeada por la Cordillera de los Andes. Es el principal centro urbano, cultural y económico del país.",
      altitud: "520 m",
      poblacion: "~6 millones",
      clima: "Mediterráneo",
    },
  },
  {
    id: 9,
    slug: "temuco",
    nombre: "Temuco",
    region: "La Araucanía",
    imagen: "assets/img/temuco.webp",
    lat: -38.7359,
    lon: -72.5904,
    info: {
      descripcion:
        "Temuco es una ciudad del sur de Chile reconocida por su entorno natural, su cercanía a paisajes lacustres y volcánicos, y su clima templado lluvioso, con inviernos húmedos y temperaturas moderadas durante gran parte del año.",
      altitud: "114 m",
      poblacion: "~300 mil",
      clima: "Templado lluvioso",
    },
  },
  {
    id: 10,
    slug: "valdivia",
    nombre: "Valdivia",
    region: "Los Ríos",
    imagen: "assets/img/valdivia.webp",
    lat: -39.8196,
    lon: -73.2452,
    info: {
      descripcion:
        "Valdivia es una ciudad del sur de Chile famosa por sus ríos, humedales, vegetación abundante y clima templado lluvioso. Es una de las ciudades más húmedas del país y destaca por su entorno natural y vida fluvial.",
      altitud: "19 m",
      poblacion: "~180 mil",
      clima: "Templado lluvioso",
    },
  },
  {
    id: 11,
    slug: "valparaiso",
    nombre: "Valparaíso",
    region: "Valparaíso",
    imagen: "assets/img/valparaiso.webp",
    lat: -33.0472,
    lon: -71.6127,
    info: {
      descripcion:
        "Valparaíso es una ciudad costera reconocida por sus cerros, ascensores, vida cultural y su histórico puerto. Su paisaje urbano y marítimo la convierten en uno de los destinos más emblemáticos de Chile.",
      altitud: "50 m",
      poblacion: "~300 mil",
      clima: "Costero templado",
    },
  },
  {
    id: 12,
    slug: "vina-del-mar",
    nombre: "Viña del Mar",
    region: "Valparaíso",
    imagen: "assets/img/vina-del-mar.webp",
    lat: -33.0153,
    lon: -71.5500,
    info: {
      descripcion:
        "Viña del Mar es una ciudad costera reconocida por sus playas, jardines, vida turística y su entorno urbano junto al mar. Es uno de los principales destinos del litoral central chileno.",
      altitud: "15 m",
      poblacion: "~330 mil",
      clima: "Templado costero",
    },
  },
];