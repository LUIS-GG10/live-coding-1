// Escribe tu código aquí.

/*
Ivan & Ceci

Proceso mental definido
nombre de variables entendibles

AREAS DE OPORTUNIDAD
Orientacion al detalle 
*/


const arrayFiltrado = []
function compareString(initialString, arrayString) {
  arrayString.forEach(element => {
    if (element.length > initialString.length) {

      arrayFiltrado.push(element)
      console.log("funciona")
    }
    });
  return arrayFiltrado
}



function renderString(array) {
  array.forEach(element => {
    const lista = document.getElementById("lista")
    const elementoLista = document.createElement("li")
    elementoLista.innerText = element
    lista.appendChild(elementoLista)
    console.log("funciona")
  });
}

const arrayPrueba = ["lu", "ivan", "ceci"]
document.addEventListener("DOMContentLoaded", renderString(compareString("lu", arrayPrueba)));