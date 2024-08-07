document.addEventListener('DOMContentLoaded', () => {
    // Espera a que el DOM esté completamente cargado antes de ejecutar el código

    // Selecciona los elementos del DOM que serán manipulados
    const btnEncriptar = document.getElementById('btn-encriptar'); // Botón para encriptar el texto
    const btnDesencriptar = document.getElementById('btn-desencriptar'); // Botón para desencriptar el texto
    const btnCopiar = document.getElementById('btn-copiar'); // Botón para copiar el texto resultante
    const inputTexto = document.getElementById('input-texto'); // Área de texto para ingresar el texto
    const resultadoTexto = document.getElementById('resultado-texto'); // Área de texto para mostrar el resultado
    const contenedorSecundario = document.getElementById('contenedor-secundario'); // Contenedor para mostrar el resultado
    const contenedorSecundarioAlternativo = document.getElementById('contenedor-secundario-alternativo'); // Contenedor alternativo para mostrar el resultado en formato de mensaje

    // Función para encriptar el texto según las reglas definidas
    const encriptarTexto = (texto) => {
        return texto
            .replace(/e/g, "enter") // Reemplaza 'e' por 'enter'
            .replace(/i/g, "imes") // Reemplaza 'i' por 'imes'
            .replace(/a/g, "ai") // Reemplaza 'a' por 'ai'
            .replace(/o/g, "ober") // Reemplaza 'o' por 'ober'
            .replace(/u/g, "ufat"); // Reemplaza 'u' por 'ufat'
    };

    // Función para desencriptar el texto según las reglas definidas
    const desencriptarTexto = (texto) => {
        return texto
            .replace(/enter/g, "e") // Reemplaza 'enter' por 'e'
            .replace(/imes/g, "i") // Reemplaza 'imes' por 'i'
            .replace(/ai/g, "a") // Reemplaza 'ai' por 'a'
            .replace(/ober/g, "o") // Reemplaza 'ober' por 'o'
            .replace(/ufat/g, "u"); // Reemplaza 'ufat' por 'u'
    };

    // Función para mostrar el contenedor alternativo y ocultar el principal
    const mostrarSecundarioAlternativo = () => {
        contenedorSecundario.style.display = 'none'; // Oculta el contenedor principal
        contenedorSecundarioAlternativo.style.display = 'block'; // Muestra el contenedor alternativo
    };

    // Función para mostrar el contenedor principal y ocultar el alternativo
    const mostrarSecundario = () => {
        contenedorSecundario.style.display = 'block'; // Muestra el contenedor principal
        contenedorSecundarioAlternativo.style.display = 'none'; // Oculta el contenedor alternativo
    };

    // Añade un evento de clic al botón de encriptar
    btnEncriptar.addEventListener('click', () => {
        const texto = inputTexto.value; // Obtiene el valor del área de texto de entrada
        if (texto) { // Si hay texto en el área de entrada
            resultadoTexto.value = encriptarTexto(texto); // Encripta el texto y lo coloca en el área de resultado
            mostrarSecundarioAlternativo(); // Muestra el contenedor alternativo
            inputTexto.value = ""; // Limpia el área de texto de entrada
        }
    });

    // Añade un evento de clic al botón de desencriptar
    btnDesencriptar.addEventListener('click', () => {
        const texto = inputTexto.value; // Obtiene el valor del área de texto de entrada
        if (texto) { // Si hay texto en el área de entrada
            resultadoTexto.value = desencriptarTexto(texto); // Desencripta el texto y lo coloca en el área de resultado
            mostrarSecundarioAlternativo(); // Muestra el contenedor alternativo
            inputTexto.value = ""; // Limpia el área de texto de entrada
        }
    });

    // Añade un evento de clic al botón de copiar
    btnCopiar.addEventListener('click', () => {
        resultadoTexto.select(); // Selecciona el texto en el área de resultado
        document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
    });

    // Inicialmente, muestra el contenedor principal
    mostrarSecundario();
});
