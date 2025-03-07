// Usar un proxy para la validación de los valores de propiedades 
// • Cuando declaremos que el atributo es numérico solo perimimos que ingresen 
// números  
// • Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen 
// letras 
// • Cuando declaremos que el atributo es un email, solo permitimos que ingresen 
// correos 
// • Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen 
// fechas 
// • Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como 
// al final de estos y se debe mostrar el error personalizado por consola

// Objeto base con atributos
const datos = {
    edad: 0,
    nombre: "",
    email: "",
    fechaNacimiento: ""
};

// Manejador del Proxy con reglas de validación
const manejador = {
    set(objeto, propiedad, valor) {
        if (typeof valor === "string") {
            valor = valor.trim(); // Eliminar espacios en blanco al inicio y fin
        }

        switch (propiedad) {
            case "edad":
                if (!/^\d+$/.test(valor)) {
                    console.error(`Error: "${propiedad}" debe ser un número.`);
                    return false;
                }
                break;
            case "nombre":
                if (!/^[a-zA-Z]+$/.test(valor)) {
                    console.error(`Error: "${propiedad}" solo puede contener letras.`);
                    return false;
                }
                break;
            case "email":
                if (!/^\S+@\S+\.\S+$/.test(valor)) {
                    console.error(`Error: "${propiedad}" debe ser un email válido.`);
                    return false;
                }
                break;
            case "fechaNacimiento":
                if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
                    console.error(`Error: "${propiedad}" debe ser una fecha en formato YYYY-MM-DD.`);
                    return false;
                }
                break;
            default:
                console.error(`Error: Propiedad "${propiedad}" no permitida.`);
                return false;
        }

        objeto[propiedad] = valor;
        alert(`"${propiedad}" actualizado correctamente a: ${valor}`);
        return true;
    }
};

// Crear el Proxy con validaciones
const datosProxy = new Proxy(datos, manejador);

// ahora Probamos con valores correctos e incorrectos
datosProxy.edad = "25"; // ✅ Correcto
datosProxy.edad = "veinticinco"; // ❌ Error: debe ser un número

datosProxy.nombre = "Victor"; // ✅ Correcto
datosProxy.nombre = "Victor123"; // ❌ Error: solo letras permitidas

datosProxy.email = "correo@example.com"; // ✅ Correcto
datosProxy.email = "correo@mal"; // ❌ Error: formato de email incorrecto

datosProxy.fechaNacimiento = "2000-05-15"; // ✅ Correcto
datosProxy.fechaNacimiento = "15/05/2000"; // ❌ Error: formato incorrecto

datosProxy.email = "  correo@example.com  "; // ✅ Se limpia el espacio automáticamente
