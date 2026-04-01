# Aurora · Tu clima en Chile 🌦️

Proyecto frontend (MVP) de una aplicación de clima desarrollado con HTML5 semántico, Bootstrap y JavaScript (jQuery), como parte del módulo M2.

La aplicación presenta un listado de ciudades de Chile con información climática estática y permite navegar a una vista de detalle con pronóstico semanal.

---

## 🛠️ Tecnologías utilizadas

* HTML5 semántico
* Bootstrap 5 (CDN)
* JavaScript
* jQuery
* SASS (SCSS)
* Git / GitHub

---

## 🎨 Arquitectura de estilos

El proyecto fue refactorizado desde CSS tradicional a una arquitectura basada en **SASS (SCSS)**, permitiendo una mejor organización, reutilización de estilos y escalabilidad.

Se implementó la metodología **BEM (Block Element Modifier)** para estructurar las clases CSS de forma clara y mantenible.

### Estructura SASS

assets/
├── scss/
│   ├── abstracts/ (variables, mixins)
│   ├── base/ (reset, tipografías)
│   ├── layout/ (header, footer)
│   ├── components/ (cards, botones)
│   ├── pages/ (home, detalle, acerca)
│   └── main.scss

El archivo `main.scss` compila todos los parciales en un único archivo CSS final.

---

## 📁 Estructura del proyecto

weather-frontend-m2/
├── index.html
├── acerca.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── scss/
│   ├── js/
│   │   └── main.js
│   └── img/
├── detalles/
├── README.md

---

## 🔄 Cambios recientes

* Migración de CSS tradicional a SASS (SCSS)
* Eliminación de uso de `!important`
* Implementación de variables y mixins reutilizables
* Refactorización de templates HTML a metodología BEM
* Unificación del sistema de estilos en `main.css`

---

## 🚧 Estado del proyecto

El proyecto se encuentra en desarrollo.

Actualmente cuenta con:

* Vista principal con múltiples ciudades
* Vistas de detalle refactorizadas con nueva arquitectura
* Sistema de estilos escalable basado en SASS

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio desde GitHub.
2. Abrir el archivo `index.html` en un navegador web moderno.

> Nota: Si se realizan cambios en SASS, es necesario compilar a CSS antes de visualizar los cambios.

---

## 🔗 Repositorio

Repositorio público:
https://github.com/EvansZM/weather-frontend-m2

Github Page:
https://evanszm.github.io/weather-frontend-m2/
