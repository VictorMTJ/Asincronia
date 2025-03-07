// Crear una función map que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • obtenga el resultado 
// • lo pushee a un nuevo array
// devuelva el array final con el resultado de cada una de las llamadas al callback.

function map(array, callback) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i])); // Ejecuta el callback y almacena el resultado
    }

    return resultado;
}

// Solicitar al usuario los números
let entrada = prompt("Ingrese números separados por comas:");
let numeros = entrada.split(",").map(num => parseFloat(num.trim())); // Convertir a números

// Aplicar la función map con un callback de duplicación
let duplicados = map(numeros, num => num * 2);

// Mostrar el resultado en un alert
alert("El resultado es: " + duplicados.join(", "));
