/**
 *
 * @param {Element} element
 */
export default function fadeInOut(element, time = 1, display = "block") {
  const hasFade = element.classList.contains("fade");
  const isFaded = element.classList.contains("faded");

  if (isFaded) {
    element.classList.remove("faded");
    return;
  }

  hasFade ? fadeIn(element, time, display) : fadeOut(element, time, display);
  element.classList.toggle("fade");
}

function fadeIn(element, time, display = "block") {
  processa(element, time, 0, 100, display);
}

function fadeOut(element, time, display = "block") {
  processa(element, time, 100, 0, display);
}

function processa(element, time, initial, end, display = "block") {
  let increment = 0;
  if (initial == 0) {
    increment = 2;
    element.style.display = display;
  } else {
    increment = -2;
  }

  let opc = initial;

  let intervalo = setInterval(function() {
    if (opc == end) {
      if (end == 0) {
        element.style.display = "none";
      }
      clearInterval(intervalo);
    } else {
      opc += increment;
      element.style.opacity = opc / 100;
      element.style.filter = "alpha(opacity=" + opc + ")";
    }
  }, time * 10);
}
