// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos 
// obtenidos en la consola. 

// Función para obtener datos de un archivo local JSON
async function obtenerDatos() {
    try {
        // Realizamos la solicitud al archivo JSON local
        const respuesta = await fetch("data.json");

        // Verificamos si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        // Convertimos la respuesta a formato JSON
        const datos = await respuesta.json();

        // Mostramos los datos obtenidos en la consola
        console.log("Datos obtenidos:", datos);
    } catch (error) {
        // Capturamos errores y mostramos en consola
        console.error("Error:", error);
    }
}

// Llamamos a la función para obtener los datos
obtenerDatos();
