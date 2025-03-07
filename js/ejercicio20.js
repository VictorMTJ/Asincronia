// Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una 
// lista de elementos uno por uno. 

// Simulación de una función asincrónica que procesa cada elemento después de 1 segundo
async function procesarElemento(elemento) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Elemento procesado: ${elemento}`);
        }, 1000);
    });
}

// Función asincrónica que recorre una lista y procesa cada elemento uno por uno
async function procesarLista(lista) {
    let resultados = "";
    
    for (let i = 0; i < lista.length; i++) {
        const resultado = await procesarElemento(lista[i]);
        resultados += resultado + "\n";  // Acumulamos los resultados en un mensaje
    }

    alert("Procesamiento completado:\n" + resultados);
}

// Lista de elementos a procesar (se pueden pedir por prompt si se desea)
const elementos = ["A", "B", "C", "D", "E"];

// Llamamos a la función para procesar la lista
procesarLista(elementos);
