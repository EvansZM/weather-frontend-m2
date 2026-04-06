// assets/js/services/apiClient.js

// 🔑 IMPORTANTE: Reemplaza esto con tu API KEY real
const API_KEY = "TU_API_KEY";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// 🌤️ Clima actual
export async function obtenerClimaActual(lat, lon) {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    );

    // 🔥 Validamos si la respuesta es correcta
    if (!res.ok) {
      throw new Error(`Error API clima actual: ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error al obtener clima actual:", error);

    // 🔥 Importante: relanzamos el error para que home.js lo capture
    throw error;
  }
}

// 📅 Pronóstico semanal (datos cada 3 horas)
export async function obtenerPronostico(lat, lon) {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    );

    // 🔥 Validamos respuesta
    if (!res.ok) {
      throw new Error(`Error API pronóstico: ${res.status}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("Error al obtener pronóstico:", error);

    // 🔥 Esto es clave para el detalle.js después
    throw error;
  }
}