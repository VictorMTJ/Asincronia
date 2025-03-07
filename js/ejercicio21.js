// Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando 
// try/catch para mostrar un mensaje de error en caso de fallo. 

// Función asincrónica para cargar un archivo JSON y manejar errores
async function cargarJSON() {
    try {
        // Simulación de una llamada a un archivo JSON local
        const respuesta = await fetch("datos.json"); // Reemplazar con la ruta correcta
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`); // Lanza un error si la respuesta no es válida
        }

        const datos = await respuesta.json(); // Convierte la respuesta a JSON
        alert("Datos cargados con éxito:\n" + JSON.stringify(datos, null, 2)); // Muestra los datos formateados

    } catch (error) {
        alert("Error al cargar los datos: " + error.message); // Captura y muestra errores
    }
}

// Llamamos a la función para cargar el JSON
cargarJSON();
