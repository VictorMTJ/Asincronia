// Crear una función some que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) { // Si alguna llamada devuelve true, retorna true
            return true;
        }
    }
    return false; // Si ninguna llamada devolvió true, retorna false
}

// Solicitar al usuario los números
let entrada = prompt("Ingrese números separados por comas:");
let numeros = entrada.split(",").map(num => parseFloat(num.trim())); // Convertir a números

// Aplicar la función some para verificar si al menos un número es mayor a 10
let resultado = some(numeros, num => num > 10);

// Mostrar el resultado en un alert
alert(resultado ? "Al menos un número es mayor a 10" : "Ningún número es mayor a 10");
