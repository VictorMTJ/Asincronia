// Crear una función every que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • devuelva true si todas las llamadas al callback devolvieron true

// function every(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (!callback(array[i])) { // Si alguna llamada devuelve false, retorna false
//             return false;
//         }
//     }
//     return true; // Si todas las llamadas devolvieron true, retorna true
// }

// Solicitar al usuario los números
let entrada = prompt("Ingrese números separados por comas:");
let numeros = entrada.split(",").map(num => parseFloat(num.trim())); // Convertir a números

// Aplicar la función every para verificar si todos los números son mayores a 10
let resultado = every(numeros, num => num > 10);

// Mostrar el resultado en un alert
alert(resultado ? "Todos los números son mayores a 10" : "Al menos un número es menor o igual a 10");


//BAJO ERROR, RETRABAJAR
