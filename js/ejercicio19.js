// . Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza 
// Promise.allSettled() para obtener información sobre el estado de todas las Promises. 

// Creamos tres Promises con diferentes estados
const promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 resuelta"), 1000));
const promesa2 = new Promise((_, reject) => setTimeout(() => reject("Promesa 2 rechazada"), 2000));
const promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 resuelta"), 3000));

// Usamos Promise.allSettled() para esperar todas, sin importar si se resuelven o rechazan
Promise.allSettled([promesa1, promesa2, promesa3])
    .then(resultados => {
        // Formateamos los resultados en un mensaje
        let mensaje = "Resultados de las Promises:\n";
        resultados.forEach((resultado, index) => {
            mensaje += `Promesa ${index + 1}: ${resultado.status} - `;
            mensaje += resultado.status === "fulfilled" ? resultado.value : resultado.reason;
            mensaje += "\n";
        });

        // Mostramos los resultados en un alert
        alert(mensaje);
    });
