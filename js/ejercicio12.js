// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que 
// diga "Operación completada". Utiliza async/await. 

// Definimos una función asincrónica llamada 'operacionAsincrona'
async function operacionAsincrona() {
    // Esperamos 1 segundo usando delay con await
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Retornamos el mensaje cuando se completa la espera
    return "Operación completada";
}

// Llamamos a la función y mostramos el resultado con alert
operacionAsincrona().then(mensaje => alert(mensaje));
