// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo, 
// comenzando desde desde y terminando con hasta.  
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas: 
// • Usando setInterval. 
// • Usando setTimeout anidado.


// UsosetInterval
// function imprimirNumeros(desde, hasta) {
//     let numeroActual = desde;

//     let intervalo = setInterval(() => {
//         console.log(numeroActual);
//         if (numeroActual === hasta) {
//             clearInterval(intervalo); // Detiene la ejecución cuando alcanza el límite
//         }
//         numeroActual++;
//     }, 1000);
// }

// imprimirNumeros(1, 5);

// Uso de setTimeoutanidado
function imprimirNumeros(desde, hasta) {
    let numeroActual = desde;

    function imprimir() {
        console.log(numeroActual);
        if (numeroActual < hasta) {
            numeroActual++;
            setTimeout(imprimir, 1000); // Llamada recursiva para repetir el proceso
        }
    }

    imprimir();
}

imprimirNumeros(1, 5);
