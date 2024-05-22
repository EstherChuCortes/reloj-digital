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