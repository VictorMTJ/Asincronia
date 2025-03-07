// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y 
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados 
// y mostrar el resultado final. 

// Función que crea una promesa que se resuelve después de 1 segundo con un número dado
function promesaNumero(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num), 1000);
    });
}

// Encadenamos las tres promesas sumando sus valores
promesaNumero(5)
    .then(num1 => promesaNumero(10).then(num2 => num1 + num2))
    .then(suma1 => promesaNumero(15).then(num3 => suma1 + num3))
    .then(resultadoFinal => alert(`La suma total es: ${resultadoFinal}`));
