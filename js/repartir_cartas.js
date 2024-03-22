//Todas las cartas
import { lista_cartas_nivel } from "./Data_cartas.js";

// Función para construir un nivel del juego
function construir_nivel(nivel){

    // Función para ordenar de forma aleatoria un arreglo
    function ordenarAleatorio(a, b) {
        return Math.random() - 0.5;
    }

    // Duplicar las cartas del nivel y mezclarlas aleatoriamente
    let todas_las_tarjetas = lista_cartas_nivel[nivel].concat(lista_cartas_nivel[nivel]);
    todas_las_tarjetas.sort(ordenarAleatorio);

    // Devolver la lista aleatoria de cartas
    return todas_las_tarjetas;
}

// Asignar el nivel de dificultad para construir el tablero
let nivel = construir_nivel(0); // Cambia el nivel según se desee


// Función para distribuir las cartas en el tablero según el nivel
function repartir_cartas(nivel){

    // Seleccionar el contenedor del tablero
    let tablero = document.querySelector(".tablero");
    tablero.innerHTML = "";

    // Recorrer cada carta en el nivel y agregarla al tablero
    nivel.forEach((cada_carta)=> {
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera");
        carta.innerHTML = `<div class="carta_frontal">${cada_carta}</div>`;
        tablero.appendChild(carta);
    })

}

// Llamar a la función para distribuir las cartas en el tablero con el nivel indicado
repartir_cartas(nivel);

export{repartir_cartas}
export{nivel}
