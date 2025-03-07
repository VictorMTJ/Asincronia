//  Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa 
// resuelta" cuando se cumpla. 

// Creamos una promesa que se resuelve después de 3 segundos
const miPromesa = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 3000);
});

// Cuando la promesa se resuelve, mostramos el mensaje con alert
miPromesa.then(mensaje => alert(mensaje));
