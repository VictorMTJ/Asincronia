// Crear una función filter que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array 
// • devuelva el array final con los elementos que pasaron el "filtro".

function filter(array, callback) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) { // Ejecuta el callback y verifica si devuelve true
            resultado.push(array[i]); // Agrega el elemento al nuevo array
        }
    }

    return resultado;
}

// Solicitar al usuario los números
let entrada = prompt("Ingrese números separados por comas:");
let numeros = entrada.split(",").map(num => parseFloat(num.trim())); // Convertir a números

// Aplicar la función filter para filtrar los números mayores a 10
let filtrados = filter(numeros, num => num > 10);

// Mostrar el resultado en un alert
alert("Números mayores a 10: " + filtrados.join(", "));
