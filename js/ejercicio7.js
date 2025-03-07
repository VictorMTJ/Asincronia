// Crear una función find que acepte un array y un callback y que: 
// • por cada elemento del array ejecute el callback pasándole dicho elemento como 
// argumento 
// • devuelva el elemento pasado como argumento del primer callback que devuelva true 
// • sí ningún callback devuelve true, devuelva undefined


// Definimos una función asincrónica llamada 'find' que acepta un array y un callback
const find = async (array, callback) => {
    // Iteramos sobre cada elemento del array usando un bucle for...of
    for (const item of array) {
        // Ejecutamos el callback pasándole el elemento actual y esperamos su resultado con await
        if (await callback(item)) {
            // Si el callback devuelve true, retornamos el elemento actual
            return item;
        }
    }
    // Si ningún elemento cumple la condición del callback, retornamos undefined
    return undefined;
};

// Función principal para ejecutar el programa
(async () => {
    // Solicitamos al usuario que ingrese una lista de números separados por comas
    let input = prompt("Ingrese una lista de números separados por comas:");
    
    // Convertimos la entrada del usuario en un array de números
    let numbers = input.split(",").map(num => parseInt(num.trim()));

    // Solicitamos al usuario el criterio de búsqueda
    let condition = prompt("Ingrese la condición de búsqueda: \n1 - Buscar el primer número par\n2 - Buscar el primer número mayor a 10");

    // Definimos el callback en función de la elección del usuario
    let callback;
    if (condition === "1") {
        callback = async (num) => num % 2 === 0;
    } else if (condition === "2") {
        callback = async (num) => num > 10;
    } else {
        alert("Opción inválida. Recargue la página e intente de nuevo.");
        return;
    }

    // Llamamos a la función 'find' pasando el array y el callback seleccionado
    const result = await find(numbers, callback);

    // Mostramos el resultado con alert
    alert(`El primer número encontrado según la condición es: ${result !== undefined ? result : "Ninguno cumple la condición"}`);
})();
