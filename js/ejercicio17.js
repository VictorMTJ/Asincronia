// Crea una función asincrónica que realice una llamada a un archivo local en formato json y 
// luego manipule los datos recibidos para mostrar información específica. 

// Función asincrónica para obtener y manipular datos de un archivo JSON local
async function obtenerYManipularDatos() {
    try {
        // Realizamos la solicitud al archivo JSON local
        const respuesta = await fetch("data.json");

        // Verificamos si la respuesta es válida
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // Manipulación de datos: Filtrar nombres que comiencen con "A"
        const nombresConA = datos.filter(item => item.nombre && item.nombre.startsWith("A"));

        // Mostrar los nombres filtrados en un alert
        alert("Nombres que comienzan con A:\n" + nombresConA.map(item => item.nombre).join("\n"));

    } catch (error) {
        // Capturamos errores y mostramos en un alert
        alert("Error: " + error.message);
    }
}

// Llamamos a la función asincrónica
obtenerYManipularDatos();
