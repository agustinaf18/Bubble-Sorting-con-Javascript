/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // // agrego evento a form
  // let form = document.querySelector("form");
  // form.addEventListener("click", ramdomCard);

  let newarr = [];

  function randomCard() {
    const palos = ["♥", "♣", "♠", "♦"];

    // Trabajamos con number

    const number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    let indexnumber = Math.floor(Math.random() * number.length);
    let indexPalo = Math.floor(Math.random() * palos.length);

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
      <div class="card-body">
          <div class="top text-danger" id="top">${palos[indexPalo]}</div>
          <div class="number text-danger" id="number">${number[indexnumber]}</div>
          <div class="bottom text-danger" id="bottom">${palos[indexPalo]}</div>
      </div>
  </div>`;
      newarr.push({
        numero: number[indexnumber],
        palo: palos[indexPalo]
      });
    } else {
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
      <div class="card-body">
          <div class="top mx-auto" id="top">${palos[indexPalo]}</div>
          <div class="number mx-auto" id="number">${number[indexnumber]}</div>
          <div class="bottom mx-auto" id="bottom">${palos[indexPalo]}</div>
      </div>
  </div>`;
      newarr.push({
        numero: number[indexnumber],
        palo: palos[indexPalo]
      });
    }
    return newarr;
    //   Traigo mi div para construir el loop

    // Trabajamos con bottom
  }
  // console.log(bubbleSort(newarr));
  function cartasEnOrden() {
    document.getElementById("card").innerHTML = "";
    for (let i = 0; i <= newarr.length - 1; i++) {
      let paloss = newarr[i].palo;
      let numeross = newarr[i].numero;

      if (paloss == "♥" || paloss == "♦") {
        document.getElementById(
          "card"
        ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="top text-danger mx-auto" id="top">${paloss}</div>
        <div class="number text-danger mx-auto" id="number">${numeross}</div>
        <div class="bottom text-danger mx-auto" id="bottom">${paloss}</div>
    </div>
</div>`;
      } else {
        document.getElementById(
          "card"
        ).innerHTML += `<div class="card m-auto" style="width: 18rem;">
    <div class="card-body">
        <div class="top mx-auto" id="top">${paloss}</div>
        <div class="number mx-auto" id="number">${numeross}</div>
        <div class="bottom mx-auto" id="bottom">${paloss}</div>
    </div>
</div>`;
      }
    }
    newarr = [];
  }
  // Acá termina la función de generar cartas
  let todascartas = [];

  function variascartas(input) {
    document.getElementById("card").innerHTML = "";
    for (let i = 1; i <= input; i++) {
      let newCard = randomCard();
      todascartas.push(newCard);
    }
  }

  function letrasAnumeross() {
    for (let i = 0; i <= newarr.length - 1; i++) {
      if (newarr[i].numero === "A") {
        newarr[i].numero = 14;
      }
      if (newarr[i].numero === "K") {
        newarr[i].numero = 13;
      }
      if (newarr[i].numero === "Q") {
        newarr[i].numero = 12;
      }
      if (newarr[i].numero === "J") {
        newarr[i].numero = 11;
      }
    }
  }

  document.getElementById("barajarcartas").addEventListener("click", () => {
    let tomarvalor = document.getElementById("input");
    variascartas(tomarvalor.value);
  });
  document.getElementById("ordenarcartas").addEventListener("click", () => {
    letrasAnumeross();
    bubbleSort(newarr);
    numerossALetras();
    cartasEnOrden();
  });

  const bubbleSort = arr => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    return arr;
  };

  function numerossALetras() {
    for (let i = 0; i <= newarr.length - 1; i++) {
      if (newarr[i].numero === 14) {
        newarr[i].numero = "A";
      }
      if (newarr[i].numero === 13) {
        newarr[i].numero = "K";
      }
      if (newarr[i].numero === 12) {
        newarr[i].numero = "Q";
      }
      if (newarr[i].numero === 11) {
        newarr[i].numero = "J";
      }
    }
  }
};
