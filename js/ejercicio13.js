// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir 
// "Error: Promise rechazada". 

// Creamos una promesa que se rechaza después de 2 segundos
const promesaRechazada = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Error: Promise rechazada");
    }, 2000);
});

// Manejamos el rechazo con catch para mostrar el mensaje con alert
promesaRechazada.catch(error => alert(error));
