// Selecciona todos los elementos en el tablero que representan cartas y los guarda en la variable todas_las_cartad
let todas_las_cartad = document.querySelectorAll(".carta_trasera");

// Itera sobre cada carta en el tablero
todas_las_cartad.forEach((cada_div) => {

    // Añade un event listener para detectar cuando se hace clic en cada carta
    cada_div.addEventListener("click", () => {

        /* CONTROL DE CARTAS DESCUBIERTAS */

        // Selecciona todas las cartas que están descubiertas y las guarda en la variable cartas_descubriertas
        let cartas_descubriertas = document.querySelectorAll(".activar");

        // Obtiene la cantidad total de cartas descubiertas
        let total_descubriertas = cartas_descubriertas.length;

        // Verifica si hay menos de 2 cartas descubiertas
        if (total_descubriertas < 2) {
            
            // Añade la clase "activar" a la carta actual para indicar que está descubierta
            cada_div.classList.add("activar");

            // Actualiza la lista de cartas descubiertas después de añadir una nueva carta descubierta
            cartas_descubriertas = document.querySelectorAll(".activar");

            // Si hay exactamente 1 carta descubierta, realiza una acción después de un tiempo determinado
            if (total_descubriertas == 1) {
                setTimeout(() => {
                    // Itera sobre cada carta descubierta y remueve la clase "activar" después de un segundo
                    cartas_descubriertas.forEach((cada_carta_descubrierta) => {
                        cada_carta_descubrierta.classList.remove("activar");
                    })
                }, 1000); // Espera 1000 milisegundos (1 segundo) antes de ejecutar la acción
            }
        }
    });
});
