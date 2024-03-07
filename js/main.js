// Definición de las cartas en dos arrays
let cards1 = ["☢️", "✅", "▶️", "🎲", "📔", "📗", "💼", "🪔", "🗒️", "🪶", "🧺", "💊"];
let cards2 = ["☢️", "✅", "▶️", "🎲", "📔", "📗", "💼", "🪔", "🗒️", "🪶", "🧺", "💊"];

// Combinar las cartas en un solo array
let todas_las_cartas = cards1.concat(cards2);

// Función para repartir las cartas en el tablero
function repartir_Cartas() {
    // Seleccionar el tablero donde se mostrarán las cartas
    let tablero = document.querySelector("#root");

    // Iterar sobre cada carta y crear un elemento HTML para representarla en el tablero
    todas_las_cartas.forEach((cada_Carta) => {
        let carta = document.createElement("div"); // Crear un nuevo div para representar la carta
        carta.classList.add("carta_trasera"); // Añadir la clase "carta_trasera" al div
        carta.innerHTML = `<div class="carta_frontal">${cada_Carta}</div>`; // Agregar el contenido de la carta dentro del div
        tablero.appendChild(carta); // Agregar el div al tablero como un hijo
    });
}

// Llamar a la función para repartir las cartas
repartir_Cartas();

