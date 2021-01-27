"use strict";

var audio = document.getElementById("audio");
var seconds = 0; //número de segundos a contar
let ciclo = 0;
var countdownTimer = 0;

const startSession25 = () => {
  ciclo++;
  document.querySelector(".inform").innerHTML = `Estás en el ciclo ${ciclo}`;
  seconds = 25 * 60;
  setInterval(secondPassed, 1000);
};
const startSession5 = () => {
  document.querySelector(
    ".inform"
  ).innerHTML = `Estás en el descanso del ciclo ${ciclo}`;
  seconds = 5 * 60;
  countdownTimer = setInterval(secondPassed, 1000);
};
const startSession30 = () => {
  document.querySelector(".inform").innerHTML = `Estás en el descanso grande`;
  seconds = 30 * 60;
  setInterval(secondPassed, 1000);
};

function secondPassed() {
  console.log("function");
  var minutes = Math.trunc(seconds / 60); //calcula el número de minutos
  var remainingSeconds = seconds % 60; //calcula los segundos restantes
  //si los segundos usan sólo un dígito, añadimos un cero a la izq
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.querySelector(".seconds").innerHTML =
    minutes + ":" + remainingSeconds;
  if (seconds == 1) {
    clearInterval(countdownTimer);
    audio.play();
    alert("Se acabó el tiempo");
  } else {
    seconds--;
  }
}
