/* 
TODO:
- Contenido de cada página:
    - Index
    - Games
    - Study
- Navbar
- Footbar
- Transiciones visuales?
*/

/* ==================================
Animaciones */
let animado = document.querySelectorAll(".animado");

function posicionScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animado.length; i++) {
    let alturaElemento = animado[i].offsetTop;
    if (alturaElemento / 2 < scrollTop) {
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

/* ==================================
Títulos de cada página */

function title() {
  const site_name = "Some Chess";
  if (document.title === "Index") {
    document.title = site_name + " - Inicio";
  } else if (document.title === "Games") {
    document.title = site_name + " - Algunas partidas";
  } else if (document.title === "Study") {
    document.title = site_name + " - Algo de teoría y táctica";
  }
}

/* ==================================
Aplicación de estilo base */

/* -------------
Contenido de Nav
---------------- */
function menu() {
  const nav_elements = [
    { nombre: "Algo de teoría y táctica", url: "./study.html" },
    { nombre: "Algunas partidas", url: "./games.html" },
    { nombre: "Inicio", url: "./index.html" },
  ];

  let listHTML = document.createElement("div");
  listHTML.classList.add("w3-bar");
  listHTML.classList.add("navbar");

  for (let i = 0; i < nav_elements.length; i++) {
    itemLink = document.createElement("a");
    itemLink.classList.add("w3-bar-item");
    itemLink.classList.add("w3-button");
    itemLink.classList.add("w3-right");
    itemLink.textContent = nav_elements[i].nombre;
    itemLink.href = nav_elements[i].url;
    listHTML.appendChild(itemLink);
  }

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.classList.add("logo");
  logo.classList.add("w3-bar-item");
  logo.classList.add("w3-left");

  const navHTML = document.querySelector("nav");
  navHTML.appendChild(logo);
  navHTML.appendChild(listHTML);

  const headerHTML = document.querySelector("header");
  headerHTML.classList.add("w3-top");
}

/* ----------------
Contenido de Footer
------------------- */

function footer() {
  const footer_elements = [
    { class: ["fa", "fa-envelope"], url: "mailto:usuario@ejemplo.com" },
    { class: ["fa", "fa-user-circle"], url: "https://github.com/ramaa13/" },
    { class: ["fab", "fa-twitter"], url: "https://twitter.com/" },
  ];

  let listFooter = document.createElement("div");
  listFooter.classList.add("w3-bar");
  listFooter.classList.add("footer");

  for (let i = 0; i < footer_elements.length; i++) {
    itemLink = document.createElement("a");
    iconItem = document.createElement("i");
    for (let j = 0; j < footer_elements[j].class.length; j++) {
      iconItem.classList.add(footer_elements[i].class[j]);
    }

    itemLink.appendChild(iconItem);
    itemLink.href = footer_elements[i].url;
    itemLink.classList.add("w3-bar-item");
    listFooter.appendChild(itemLink);
  }

  const footerHTML = document.querySelector("footer");
  footerHTML.appendChild(listFooter);
  footerHTML.classList.add("w3-bottom");
}

/* ==================================
Contenido de las páginas */

function content() {
  if (document.title === "Index") {
    /* --------------------
    Contenido de index.html
    ----------------------- */
  } else if (document.title === "Games") {
    /* --------------------
    Contenido de games.html
    ----------------------- */
  } else if (document.title === "Study") {
    /* --------------------
    Contenido de study.html
    ----------------------- */
  }
}

// Inicialización del sitio
menu();
content();
footer();
title();
