/* eslint-disable */

import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function barajar() {
    const listaCartas = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const listaPalo = ["corazon", "rombo", "espada", "trebol"];

    // Selección de carta aleatoria
    let cartaRandom = Math.floor(Math.random() * listaCartas.length);
    let cartaMuestra = listaCartas[cartaRandom];

    let paloRandom = Math.floor(Math.random() * listaPalo.length);
    let paloMuestra = listaPalo[paloRandom];

    return { carta: cartaMuestra, palo: paloMuestra };
  }

  function ordenarCartas(cartas) {
    const n = cartas.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (cartas[j].carta < cartas[minIndex].carta) {
          minIndex = j;
        }
      }
      // Intercambiar el elemento mínimo encontrado con el primer elemento
      if (minIndex !== i) {
        [cartas[i], cartas[minIndex]] = [cartas[minIndex], cartas[i]];
      }
    }
    return cartas;
  }

  document.getElementById("barajar-btn").addEventListener("click", function() {
    const numeroCartas = parseInt(document.getElementById("numCards").value);

    if (isNaN(numeroCartas) || numeroCartas < 1) {
      alert("Por favor, ingresa un número válido de cartas.");
      return;
    }

    const cartasGeneradas = [];
    for (let i = 0; i < numeroCartas; i++) {
      cartasGeneradas.push(barajar()); // Generar cartas aleatorias
    }

    // Ordenar las cartas
    const cartasOrdenadas = ordenarCartas(cartasGeneradas);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar cartas anteriores

    // Mostrar cartas ordenadas
    cartasOrdenadas.forEach(({ carta, palo }) => {
      const cartaElemento = document.createElement("div");
      cartaElemento.className = "contenedor-carta";

      // Establecemos el color de las cartas
      let color = palo === "corazon" || palo === "rombo" ? "red" : "black";

      // Asignamos los símbolos de los palos
      let simbolo;
      switch (palo) {
        case "corazon":
          simbolo = "♥";
          break;
        case "rombo":
          simbolo = "♦";
          break;
        case "espada":
          simbolo = "♠";
          break;
        case "trebol":
          simbolo = "♣";
          break;
      }

      // Asignamos el contenido de la carta
      cartaElemento.innerHTML = `  
          <h2 style="color: ${color};">${simbolo}</h2>  
          <h2 style="color: ${color};">${carta}</h2>  
          <h2 style="color: ${color};">${simbolo}</h2>  
        `;

      resultado.appendChild(cartaElemento); // Agrega la carta al resultado
    });
  });
};
