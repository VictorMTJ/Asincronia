// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego 
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto. 

// Creamos tres Promises con diferentes tiempos de resolución
const promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 resuelta"), 1000));
const promesa2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2 resuelta"), 2000));
const promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 resuelta"), 3000));

// Usamos Promise.all() para esperar a que todas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
    .then(resultados => {
        // Mostramos un mensaje cuando todas las Promises se resuelven
        alert("Todas las promesas se resolvieron:\n" + resultados.join("\n"));
    })
    .catch(error => {
        // Capturamos errores si alguna promesa falla
        alert("Error en alguna promesa: " + error);
    });
