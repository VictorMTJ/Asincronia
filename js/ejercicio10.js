// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en 
// promesas. 
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse 
// después de ms milisegundos, para que podamos agregarle. then, así:

// Definimos la función delay que recibe un parámetro 'ms' (milisegundos)
function delay(ms) {
    // Retornamos una nueva promesa
    return new Promise(resolve => {
        // Usamos setTimeout para ejecutar la función resolve después de 'ms' milisegundos
        setTimeout(resolve, ms);
    });
}

// Llamamos a la función delay con 3000 milisegundos (3 segundos) y usamos then para mostrar un mensaje
delay(3000).then(() => alert("Se ejecuta después de 3 segundos"));
