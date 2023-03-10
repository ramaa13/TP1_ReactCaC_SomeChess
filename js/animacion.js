let animado = document.querySelectorAll(".animado");

function posicionScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animado.length; i++) {
    let alturaElemento = animado[i].offsetTop;
    if (alturaElemento/2 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.remove("transicionIzq");
      animado[i].classList.add("transicionDer");
    } else {
      animado[i].style.opacity = 0;
      animado[i].classList.remove("transicionDer");
      animado[i].classList.add("transicionIzq");
    }
  }
}
window.addEventListener("scroll", posicionScroll);
