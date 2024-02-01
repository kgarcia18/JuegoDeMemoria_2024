// CARTAS
let cards1 =["☢️","✅","▶️","🎲","📔" ,"📗" ,"💼" ,"🪔" ,"🗒️" ,"🪶" ,"🧺" ,"💊" ]
let cards2 =["☢️","✅","▶️","🎲","📔" ,"📗" ,"💼" ,"🪔" ,"🗒️" ,"🪶" ,"🧺" ,"💊" ]

let todas_las_tarjtas = cards1.concat(cards2);

function repartir_cartas(){
    let tablero = document.querySelector("#root"); //distancia

    todas_las_tarjtas.forEach((cada_carta)=> {  //foreach en cada carta
        let cart = document.createElement("div"); //Crear cada elemento
        cart.innerHTML =`<div class="carta"> ${cada_carta}</div>`;//incertando el div

        tablero.appendChild(cart);
    })

}

repartir_cartas();