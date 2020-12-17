function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation',orientacion);
    }
  }

  window.onload = inicio;
  
  function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchstart " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }
  function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchend " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }
  function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touchmove " + evt.touches[0].pageX + " "+evt.touches[0].pageY;
  }

  function click()
  {
    document.getElementById("log").innerHTML = "Click";
  }

  function orientacion(e)
  {
    document.getElementById("log").innerHTML = "Orientación del dispositivo:<br> Alpha: " + evt.alpha.toFixed(0) + "º, Beta: " + evt.beta.toFixed(0) + "º, Gamma: " + evt.gamma.toFixed(0) + "º";
    document.getElementById("canvas").style.transform = "rotate("+ evt.alpha+"deg)";
    
  }