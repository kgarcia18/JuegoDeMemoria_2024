// Arreglo que representa las vidas del jugador
export let vidas = ["🩷", "🩷", "🩷", "🩷", "🩷", "🩷"];

// Elemento del DOM donde se mostrarán las vidas
let div_vidas = document.querySelector(".vidas");

// Función para actualizar y mostrar las vidas en la interfaz
export function Actualizar_vidas(resultado){

    // Limpiar el contenido actual del contenedor de vidas
    div_vidas.innerHTML = "";

    // Verificar el resultado del juego
    if(resultado){
        // Si el resultado es verdadero (acierto), se muestran todas las vidas
        vidas.forEach((cada_vida) => {
            let div = document.createElement("div");
            div.innerHTML = cada_vida;
            div_vidas.appendChild(div);
        });
    } else {
        // Si el resultado es falso (error), se pierde una vida eliminando la última del arreglo
        vidas.pop();

        // Se muestran las vidas restantes
        vidas.forEach((cada_vida) => {
            let div = document.createElement("div");
            div.innerHTML = cada_vida;
            div_vidas.appendChild(div);
        });
    }
}

// Llamar a la función para mostrar las vidas al inicio del juego (todas las vidas)
Actualizar_vidas(true);

