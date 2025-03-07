// Crear un objeto proxy usando la clase Proxy 

// Objeto original
const usuario = {
    nombre: "Victor",
    edad: 25
};

// Manejador del Proxy
const manejador = {
    get(objeto, propiedad) {
        if (propiedad in objeto) {
            return objeto[propiedad]; // Devuelve la propiedad si existe
        } else {
            return `La propiedad "${propiedad}" no existe.`; // Mensaje si la propiedad no existe
        }
    },
    set(objeto, propiedad, valor) {
        if (propiedad === "edad" && typeof valor !== "number") {
            alert("Error: La edad debe ser un número.");
            return false; // Evita asignaciones incorrectas
        }
        objeto[propiedad] = valor;
        alert(`Propiedad "${propiedad}" actualizada a: ${valor}`);
        return true; // Confirma la asignación
    }
};

// Crear el Proxy
const usuarioProxy = new Proxy(usuario, manejador);

// Pruebas con el Proxy
alert(usuarioProxy.nombre); // Victor
alert(usuarioProxy.apellido); // La propiedad "apellido" no existe.

usuarioProxy.edad = 30; // Actualiza correctamente
usuarioProxy.edad = "treinta"; // Error: La edad debe ser un número.
