# Reloj Digital

Este es un simple reloj digital creado con JavaScript que muestra la hora actual en formato de 24 horas con segundos.

## Código
let timerPlace = document.querySelector("#timerField");

function timer() {
  let date = new Date();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  timerField.textContent = `${hours}:${minutes}:${seconds}`;
  requestAnimationFrame(timer);
}

timer();
## Vista previa

<img src="img-reloj.PNG">

<a href="https://github.com/EstherChuCortes/reloj-digital" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=REPO&color=f&style=plastic&logo=github&logo-color=white"/>
  </a>  
  <a href="https://estherchucortes.github.io/reloj-digital/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=cdf998&style=plastic&logo=wordpress&logo-color=white"/>
  </a>
