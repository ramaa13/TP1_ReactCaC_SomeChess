/* 
TODO:
- Contenido de cada página:
    - Index
    - Games
    - Study
- Switch Español-Inglés aprovechando el punto anterior
- Navbar
- Footbar
- Transiciones visuales?
*/

// Títulos de cada página:

function title_refresh() {
  const site_name = "Some Chess";
  if (document.title === "Index") {
    if (document.documentElement.lang == "en") {
      document.title = site_name + " - Index";
    } else {
      document.title = site_name + " - Inicio";
    }
  } else if (document.title === "Games") {
    if (document.documentElement.lang == "en") {
      document.title = site_name + " - Some matchs";
    } else {
      document.title = site_name + " - Algunas partidas";
    }
  } else if (document.title === "Study") {
    if (document.documentElement.lang == "en") {
      document.title = site_name + " - Some theory and tactic";
    } else {
      document.title = site_name + " - Algo de teoría y táctica";
    }
  }
}

// Idioma
if (
  document.documentElement.lang != "en" &&
  document.documentElement.lang != "es"
) {
  document.documentElement.setAttribute("lang", "en");
}

function english_lang(option) {
  if (option === true) {
    document.documentElement.setAttribute("lang", "en");
  } else {
    document.documentElement.setAttribute("lang", "es");
  }
}

// Inicialización del sitio
title_refresh();
