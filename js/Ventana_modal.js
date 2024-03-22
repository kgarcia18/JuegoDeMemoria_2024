let div_ventana_modal = document.querySelector(".ventana_modal");
function Cargar_ventana_modal(){

  let boton1 = document.createElement('button');
  boton1.textContent = 'Restaurar';
  boton1.classList.add('boton1');
  div_ventana_modal.appendChild(boton1);

  let boton2 = document.createElement('button');
  boton2.textContent = 'Restaurar';
  boton2.classList.add('boton2');
  div_ventana_modal.appendChild(boton2);

  let boton3= document.createElement('button');
  boton3.textContent = 'Restaurar';
  boton3.classList.add('boton3');
  div_ventana_modal.appendChild(boton3);

}
Cargar_ventana_modal();
export{Cargar_ventana_modal}
