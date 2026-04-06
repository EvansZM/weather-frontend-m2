# Aurora · Tu clima en Chile 🌦️

Aplicación frontend de clima desarrollada con HTML5, Bootstrap, JavaScript y SASS, como parte del módulo M2-M5.

Aurora permite visualizar información climática de distintas ciudades de Chile, incluyendo temperatura actual, estado del clima y pronóstico semanal, utilizando datos en tiempo real mediante API externa.

---

## 🛠️ Tecnologías utilizadas

* HTML5 semántico
* Bootstrap 5 (CDN)
* JavaScript (ES6+)
* SASS (SCSS)
* API OpenWeatherMap
* Git / GitHub

---

## 🧠 Arquitectura del proyecto

El proyecto evolucionó desde una estructura estática a una arquitectura dinámica basada en:

* 📦 Fuente de datos centralizada (`lugares.js`)
* 🌐 Consumo de API externa (`apiClient.js`)
* ⚙️ Render dinámico en Home (`home.js`)
* 🔍 Render dinámico en Detalle (`detalle.js`)
* 🔗 Navegación controlada (`main.js`)

Esto permite una aplicación escalable, reutilizable y desacoplada.

---

## 🎨 Arquitectura de estilos

Se implementó SASS (SCSS) junto con metodología BEM para una mejor organización.

### Estructura SASS

```
assets/
├── scss/
│   ├── abstracts/
│   ├── base/
│   ├── layout/
│   ├── components/
│   ├── pages/
│   └── main.scss
```

El archivo `main.scss` compila todos los estilos en `main.css`.

---

## 📁 Estructura del proyecto

```
Portafolio_Modulo_2/
├── index.html
├── detalle.html
├── acerca.html
├── assets/
│   ├── css/
│   ├── img/
│   ├── js/
│   │   ├── data/
│   │   │   └── lugares.js
│   │   ├── services/
│   │   │   └── apiClient.js
│   │   ├── home.js
│   │   ├── detalle.js
│   │   └── main.js
├── evidencias/
├── docs-avances/
├── scss/
├── README.md
```

---

## 🔄 Funcionalidades principales

* 📍 Listado dinámico de ciudades
* 🌡️ Consulta de clima en tiempo real
* ☁️ Visualización de estado del clima (API)
* 📊 Cálculo de métricas (mín, máx, promedio)
* 📅 Pronóstico semanal dinámico
* 🔗 Navegación entre vistas mediante URL params
* ⚠️ Manejo de errores en carga de datos
* 📱 Diseño responsive

---

## 🔐 Uso de API externa

Este proyecto utiliza la API de OpenWeatherMap para obtener datos climáticos en tiempo real.

⚠️ Por motivos de seguridad, la API Key no está incluida en el repositorio.

### ▶️ Para ejecutar correctamente:

1. Crear una cuenta en:
   https://openweathermap.org/

2. Generar una API Key

3. Reemplazar en el archivo:

```
assets/js/services/apiClient.js
```

la siguiente línea:

```js
const API_KEY = "TU_API_KEY_AQUI";
```

4. Guardar cambios y recargar la aplicación

---

📌 Nota:
Si no se configura una API Key válida, la aplicación mostrará mensajes de error controlados en la interfaz.

---

## 📸 Evidencia de funcionamiento

El proyecto incluye capturas en la carpeta `evidencias/` donde se muestra:

* Home con datos dinámicos
* Detalle con clima actual y métricas
* Pronóstico semanal funcionando

---

## 🔄 Cambios recientes (Refactor)

* Integración de API real (OpenWeatherMap)
* Eliminación de datos estáticos
* Migración de `comunas.js` a `lugares.js`
* Creación de servicio `apiClient.js`
* Refactor de vistas dinámicas (home y detalle)
* Mejora en manejo de errores
* Reorganización de estructura del proyecto

---

## 🚧 Estado del proyecto

Proyecto finalizado a nivel académico.

Incluye:

* Home dinámico con API
* Detalle dinámico completo
* Página informativa (Acerca de)
* Arquitectura modular y escalable

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

```
git clone https://github.com/EvansZM/weather-frontend-m2.git
```

2. Abrir:

```
index.html
```

---

## 💡 Posibles mejoras futuras

* Implementación de loaders de carga
* Animaciones UI
* Iconos climáticos dinámicos
* Backend para ocultar API Key
* Geolocalización del usuario
* Modo oscuro 🌙

---

## 🔗 Repositorio

GitHub:
https://github.com/EvansZM/weather-frontend-m2

GitHub Pages:
(Se recomienda uso con API Key propia)
