// . Después de realizar una llamada a un archivo local en formato json, utiliza el método then() 
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, 
// mostrar solo los nombres que comiencen con "A"). 

// Realizamos la llamada al archivo JSON local
fetch("data.json")
    .then(respuesta => {
        // Verificamos si la respuesta es válida
        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
        }
        return respuesta.json(); // Convertimos la respuesta a JSON
    })
    .then(datos => {
        // Filtramos los elementos cuyo nombre comienza con "A"
        const filtrados = datos.filter(item => item.nombre && item.nombre.startsWith("A"));

        // Mostramos los resultados en un alert
        alert("Elementos filtrados:\n" + JSON.stringify(filtrados, null, 2));
    })
    .catch(error => {
        // Capturamos errores y los mostramos
        alert("Error: " + error.message);
    });
