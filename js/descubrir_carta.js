// Importación de módulos
import { Cargar_acierto } from "./Cargar_acierto.js";
import { Actualizar_vidas } from "./Actualizar_vidas.js";
import { Cargar_puntos } from "./Puntos.js";
import { vidas } from "./Actualizar_vidas.js";
import { iniciar_cronometro } from "./Cargar_cronometro.js";

// Selección de todas las cartas del juego
let todas_las_cartad = document.querySelectorAll(".carta_trasera");

// Contador para el número de cartas encontradas
let contador_de_cartas = 0;

// Estado del cronómetro (0: inactivo, 1: activo)
let estado_del_cronometro = 0;

// Event listener para cada carta del juego
todas_las_cartad.forEach((cada_div) => {
    cada_div.addEventListener("click", () => {

        // Incremento del estado del cronómetro cuando se hace clic en una carta
        estado_del_cronometro++;

        // Si es la primera carta que se voltea, se inicia el cronómetro
        if(estado_del_cronometro == 1){
            iniciar_cronometro(0, 60); // Inicia el cronómetro con un tiempo máximo de 60 segundos
        }

        // Verificar si hay menos de 2 cartas descubiertas
        let cartas_descubiertas = document.querySelectorAll(".activar");
        if (cartas_descubiertas.length < 2){
            cada_div.classList.add("activar");
            cartas_descubiertas = document.querySelectorAll(".activar");

            // Si se han volteado 2 cartas
            if (cartas_descubiertas.length == 2){

                let carta_1 = cartas_descubiertas[0].textContent;
                let carta_2 = cartas_descubiertas[1].textContent;

                // Si las cartas coinciden
                if (carta_1 == carta_2) {

                    contador_de_cartas++; // Incrementar el contador de cartas encontradas

                    // Si se han encontrado todas las cartas
                    if(contador_de_cartas == todas_las_cartad.length / 2){
                        Cargar_puntos(vidas.length); // Calcular y cargar los puntos (basado en la cantidad de vidas restantes)
                    }

                    // Después de un segundo, ocultar las cartas coincidentes y cargar la animación de acierto
                    setTimeout(() => {
                        cartas_descubiertas.forEach((carta) => {
                            carta.innerHTML = " "
                            carta.classList.remove("activar");
                            carta.classList.add("ocultar");
                        })
                        Cargar_acierto(carta_1); // Cargar la animación de acierto para las cartas coincidentes
                    }, 1000);

                } else {
                    // Si las cartas no coinciden, restar una vida y revertir las cartas
                    Actualizar_vidas(false); // Actualizar el número de vidas (restando una vida)
                    console.log("Falso");
                    setTimeout(() => {
                        cartas_descubiertas.forEach((cada_carta_descubierta) => {
                            cada_carta_descubierta.classList.remove("activar");
                        })
                    }, 1000);
                }
            }
        }
    });
});

// Verificar si el cronómetro está activo
if (estado_del_cronometro){
    console.log("Activa");
}

