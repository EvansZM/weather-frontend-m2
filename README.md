# Aurora · Tu clima en Chile 🌦️

Aplicación frontend de clima desarrollada con HTML5, Bootstrap y JavaScript, como parte del módulo M2.

Aurora permite visualizar información climática de distintas ciudades de Chile, incluyendo temperatura actual, estado del clima y pronóstico semanal, utilizando renderizado dinámico desde una fuente de datos centralizada.

---

## 🛠️ Tecnologías utilizadas

* HTML5 semántico
* Bootstrap 5 (CDN)
* JavaScript (ES6+)
* SASS (SCSS)
* Git / GitHub

---

## 🧠 Arquitectura del proyecto

El proyecto fue refactorizado desde una estructura estática a una arquitectura dinámica basada en:

* 📦 Fuente de datos centralizada (`comunas.js`)
* ⚙️ Render dinámico en Home (`home.js`)
* 🔍 Render dinámico en Detalle (`detalle.js`)
* 🔗 Navegación controlada (`main.js`)

Esto permite mayor escalabilidad y reutilización de datos sin duplicación de código.

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
│   │   └── main.css
│   ├── js/
│   │   ├── data/
│   │   │   └── comunas.js
│   │   ├── detalle.js
│   │   ├── home.js
│   │   └── main.js
│   ├── scss/
│   └── img/
├── backup/
├── README.md
```

---

## 🔄 Funcionalidades principales

* 📍 Listado dinámico de ciudades
* 🌡️ Visualización de temperatura actual
* 📊 Cálculo de temperatura mínima, máxima y promedio
* 📅 Pronóstico semanal dinámico
* 🔗 Navegación entre vistas sin duplicación de HTML
* 📱 Diseño responsive

---

## 🔄 Cambios recientes (Refactor)

* Migración de datos estáticos a estructura dinámica
* Eliminación de múltiples archivos de detalle
* Creación de una única vista `detalle.html`
* Implementación de render dinámico con JavaScript
* Centralización de datos en `comunas.js`
* Mejora de arquitectura SASS + BEM

---

## 🚧 Estado del proyecto

Proyecto finalizado a nivel académico.

Incluye:

* Home dinámico
* Detalle dinámico
* Página informativa (Acerca de)
* Arquitectura escalable

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

```
git clone https://github.com/EvansZM/weather-frontend-m2.git
```

2. Abrir el proyecto:

```
index.html
```

---

## 💡 Posibles mejoras futuras

* Integración con API real de clima
* Loader de carga
* Manejo de errores (ciudad no encontrada)
* Animaciones UI
* Persistencia de datos

---

## 🔗 Repositorio

GitHub:
https://github.com/EvansZM/weather-frontend-m2

GitHub Pages:
https://evanszm.github.io/weather-frontend-m2/
