/* ==================================
Títulos de cada página */

function title() {
  const site_name = "Some Chess";
  const titles = [
    {
      baseTitle: "Index",
      actualTitle: site_name + " - Inicio",
    },
    {
      baseTitle: "Games",
      actualTitle: site_name + " - Algunas partidas",
    },
    {
      baseTitle: "Study",
      actualTitle: site_name + " - Algo de práctica y teoría",
    },
  ];
  for (let i = 0; i < titles.length; i++) {
    if (document.title === titles[i].baseTitle) {
      document.title = titles[i].actualTitle;
    }
  }
}

/* ==================================
Aplicación de estilo base */

/* -------------
Contenido de Nav
---------------- */
function menu() {
  const nav_elements = [
    { nombre: "Algo de práctica y teoría", url: "./study.html" },
    { nombre: "Algunas partidas", url: "./games.html" },
    { nombre: "Inicio", url: "./index.html" },
  ];

  const listHTML = document.createElement("div");
  listHTML.classList.add("w3-bar");
  listHTML.classList.add("navbar");

  for (let i = 0; i < nav_elements.length; i++) {
    const itemLink = document.createElement("a");
    itemLink.classList.add("w3-bar-item");
    itemLink.classList.add("w3-button");
    itemLink.classList.add("w3-mobile");
    itemLink.classList.add("w3-right");
    itemLink.classList.add("w3-large");
    itemLink.textContent = nav_elements[i].nombre;
    itemLink.href = nav_elements[i].url;
    listHTML.appendChild(itemLink);
  }

  const linkLogo = document.createElement("a");
  linkLogo.href = "./index.html";

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";
  logo.classList.add("logo");
  logo.classList.add("w3-left");
  logo.classList.add("w3-animate-opacity");
  logo.classList.add("w3-hover-opacity");

  const navHTML = document.querySelector("nav");

  linkLogo.appendChild(logo);
  navHTML.appendChild(linkLogo);
  navHTML.appendChild(listHTML);

  const headerHTML = document.querySelector("header");
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
    itemLink.setAttribute("target", "_blank");
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
}

/* ==================================
Contenido de las páginas */

const mainSection = document.querySelector("main");
mainSection.classList.add("w3-container");
mainSection.classList.add("mainSection");

function content() {
  if (document.title === "Index") {
    /* --------------------
    Contenido de index.html
    ----------------------- */

    const chessImg = document.createElement("img");
    chessImg.src = "./img/chess_image.jpg";
    chessImg.classList.add("chessImg");
    chessImg.classList.add("w3-image");
    chessImg.classList.add("w3-animate-opacity");
    mainSection.appendChild(chessImg);

    const sectionTitulo = document.createElement("section");
    sectionTitulo.classList.add("section");
    sectionTitulo.classList.add("w3-round");
    sectionTitulo.classList.add("w3-padding-large");
    sectionTitulo.classList.add("w3-animate-opacity");

    const tituloIndex = document.createElement("h2");
    tituloIndex.innerText = "Movimientos básicos de las piezas";
    tituloIndex.classList.add("w3-center");

    const fuenteIndex = document.createElement("h6");
    fuenteIndex.innerText = "Fuente:";
    fuenteIndex.classList.add("w3-margin-top");
    fuenteIndex.classList.add("w3-center");
    fuenteIndex.setAttribute("style", "font-weight: bold;");

    const linkFuente = document.createElement("a");
    linkFuente.setAttribute("target", "_blank");
    linkFuente.href =
      "https://es.wikipedia.org/wiki/Leyes_del_ajedrez#Movimientos_b%C3%A1sicos";

    const fuenteMovimientos = document.createElement("p");
    fuenteMovimientos.innerText = "Movimientos básicos (Wikipedia)";
    fuenteMovimientos.classList.add("w3-center");
    fuenteMovimientos.setAttribute("style", "font-style: italic;");

    sectionTitulo.appendChild(tituloIndex);
    sectionTitulo.appendChild(fuenteIndex);
    linkFuente.appendChild(fuenteMovimientos);
    sectionTitulo.appendChild(linkFuente);
    mainSection.appendChild(sectionTitulo);

    const someRules = [
      {
        pieza: "Torre",
        img: "./img/torre.png",
        regla:
          "La torre se mueve en direcciones ortogonales, es decir, por las filas (horizontales) y columnas (verticales), no pudiendo moverse por las diagonales. Ella puede moverse tantas casillas como se desee por las columnas y filas, pero solo en una dirección en cada turno.",
      },
      {
        pieza: "Alfil",
        img: "./img/alfil.png",
        regla:
          "El alfil se mueve en direcciones diagonales, es decir, en la dirección de los escaques del mismo color. Se puede mover tantas casillas como desee por las diagonales, pero solo en una dirección (cada turno), existe el alfil de escaques negros y el alfil de escaques blancos, y no pueden cambiar de color durante el juego.",
      },
      {
        pieza: "Reina",
        img: "./img/reina.png",
        regla:
          "La reina puede moverse en horizontal, vertical o diagonal, pero solo en una dirección en cada turno. La dama se desplaza con los movimientos de todas las demás piezas, excepto el caballo, desplazándose cuantos escaques quiera.",
      },
      {
        pieza: "Rey",
        img: "./img/rey.png",
        regla:
          "El rey puede moverse en todas las direcciones un solo escaque cada vez, mientras el movimiento no sea para un escaque amenazado por una pieza adversaria. El rey también puede capturar cualquier pieza adversaria, mientras que no tenga otra pieza defendiéndola. Un movimiento especial es el enroque, en el que el rey mueve dos escaques hacia una de las torres, siempre que se encuentren libres y no estén amenazados por ninguna pieza adversaria. Un rey no puede dar jaque a otro rey.",
      },
      {
        pieza: "Caballo",
        img: "./img/caballo.png",
        regla:
          "El caballo puede moverse a cualquiera de los escaques más próximos que no sean de la misma fila, columna o diagonal. Normalmente se dice que mueve en forma de L, esto es, mueve dos escaques en horizontal o vertical y después un escaque vertical u horizontal, o viceversa. El movimiento siempre termina en un escaque de color diferente al de salida. El caballo puede saltar sobre cualquier pieza suya o del adversario. La captura ocurre cuando una pieza del adversario se encuentra en el escaque de destino del movimiento realizado por el caballo.",
      },
      {
        pieza: "Peón",
        img: "./img/peon.png",
        regla:
          "Un peón se mueve hacia adelante una casilla, si este escaque está vacío. Si el peón todavía no se ha movido, en su primer movimiento también tiene la opción de mover dos escaques hacia adelante, siempre que ambos escaques estén vacíos. Los peones no se pueden mover hacia atrás. Los peones son las únicas piezas que capturan de manera diferente de cómo se mueven. Un peón puede capturar una pieza adversaria en cualquiera de los escaques diagonales en frente del peón (pero no se puede mover a esos escaques si están vacíos). El peón también participa en dos movimientos especiales: captura al paso y promoción.",
      },
    ];
    for (let i = 0; i < someRules.length; i++) {
      const section = document.createElement("section");
      section.classList.add("w3-container");
      section.classList.add("w3-twothird");
      section.classList.add("w3-right");
      section.classList.add("w3-round");
      section.classList.add("section");
      const pContent = document.createElement("p");
      pContent.textContent = someRules[i].regla;
      section.appendChild(pContent);

      const imgSection = document.createElement("img");
      imgSection.src = someRules[i].img;
      imgSection.classList.add("w3-image");
      imgSection.classList.add("w3-left");
      imgSection.classList.add("imgSection");

      const containerSection = document.createElement("div");
      containerSection.classList.add("w3-row");
      containerSection.classList.add("containerSection");
      containerSection.classList.add("animado");

      containerSection.appendChild(imgSection);
      containerSection.appendChild(section);
      mainSection.appendChild(containerSection);
    }
  } else if (document.title === "Games") {
    /* --------------------
    Contenido de games.html
    ----------------------- */

    const someGames = [
      {
        id: "10206883",
        name: "Byrne vs. Fischer - 1956 (Chess.com)",
        url: "https://www.chess.com/terms/game-of-the-century-chess",
      },
      {
        id: "10206869",
        name: "Anderssen vs. Kieseritzky - 1851 (Chess.com)",
        url: "https://www.chess.com/terms/immortal-game-chess",
      },
      {
        id: "10206753",
        name: "Morphy vs. Duke Karl / Count Isouard - 1858 (Chess.com)",
        url: "https://www.chess.com/terms/opera-game-chess",
      },
    ];

    const sectionTitulo = document.createElement("section");
    sectionTitulo.classList.add("section");
    sectionTitulo.classList.add("w3-round");
    sectionTitulo.classList.add("w3-padding-large");
    sectionTitulo.classList.add("w3-margin-top");
    sectionTitulo.classList.add("w3-animate-opacity");

    const tituloGames = document.createElement("h2");
    tituloGames.innerText = "Algunas partidas famosas";
    tituloGames.classList.add("w3-center");
    sectionTitulo.appendChild(tituloGames);

    const fuenteGames = document.createElement("h6");
    fuenteGames.innerText = "Fuentes:";
    fuenteGames.classList.add("w3-margin-top");
    fuenteGames.classList.add("w3-center");
    fuenteGames.setAttribute("style", "font-weight: bold;");
    sectionTitulo.appendChild(fuenteGames);

    for (let i = 0; i < someGames.length; i++) {
      const linkGames = document.createElement("a");
      linkGames.setAttribute("target", "_blank");
      linkGames.href = someGames[i].url;

      const nombreGames = document.createElement("p");
      nombreGames.innerText = someGames[i].name;
      nombreGames.classList.add("w3-center");
      nombreGames.setAttribute("style", "font-style: italic;");

      linkGames.appendChild(nombreGames);
      sectionTitulo.appendChild(linkGames);
    }

    mainSection.appendChild(sectionTitulo);

    for (let i = 0; i < someGames.length; i++) {
      const section = document.createElement("section");
      section.classList.add("w3-container");
      section.classList.add("w3-round");
      section.classList.add("w3-center");
      section.classList.add("w3-twothird");
      section.classList.add("section");
      section.classList.add("w3-row");
      section.classList.add("containerSection");
      section.classList.add("animado");

      const iframeGame = document.createElement("iframe");
      iframeGame.setAttribute("id", someGames[i].id);
      iframeGame.setAttribute("allowtransparency", "true");
      iframeGame.setAttribute("frameborder", "0");
      iframeGame.setAttribute("style", "width:100%;border:none;");
      iframeGame.setAttribute(
        "src",
        "//www.chess.com/emboard?id=" + someGames[i].id
      );

      section.appendChild(iframeGame);
      window.addEventListener("message", (e) => {
        e["data"] &&
          someGames[i].id === e["data"]["id"] &&
          document.getElementById(`${e["data"]["id"]}`) &&
          (document.getElementById(`${e["data"]["id"]}`).style.height = `${
            e["data"]["frameHeight"] + 30
          }px`);
      });

      mainSection.appendChild(section);
    }
  } else if (document.title === "Study") {
    /* --------------------
    Contenido de study.html
    ----------------------- */

    const sectionTitulo = document.createElement("section");
    sectionTitulo.classList.add("section");
    sectionTitulo.classList.add("w3-round");
    sectionTitulo.classList.add("w3-padding-large");
    sectionTitulo.classList.add("w3-margin-top");
    sectionTitulo.classList.add("w3-animate-opacity");

    const tituloStudy = document.createElement("h2");
    tituloStudy.innerText = "Algo de práctica y teoría";
    tituloStudy.classList.add("w3-center");

    const fuenteStudy = document.createElement("h6");
    fuenteStudy.innerText = "Fuentes:";
    fuenteStudy.classList.add("w3-center");
    fuenteStudy.classList.add("w3-margin-top");
    fuenteStudy.setAttribute("style", "font-weight: bold;");

    const linkTactica = document.createElement("a");
    linkTactica.setAttribute("target", "_blank");
    linkTactica.href = "https://www.chess.com/daily-chess-puzzle";

    const urlTactica = document.createElement("p");
    urlTactica.innerText = "Puzzle diario (Chess.com)";
    urlTactica.classList.add("w3-center");
    urlTactica.setAttribute("style", "font-style: italic;");

    const linkRepaso = document.createElement("a");
    linkRepaso.setAttribute("target", "_blank");
    linkRepaso.href =
      "https://www.chess.com/es/terms/hoja-de-repaso-para-principiantes";

    const fuenteRepaso = document.createElement("p");
    fuenteRepaso.innerText = "Hojas de repaso para principiantes (Chess.com)";
    fuenteRepaso.classList.add("w3-center");
    fuenteRepaso.setAttribute("style", "font-style: italic;");

    sectionTitulo.appendChild(tituloStudy);

    sectionTitulo.appendChild(fuenteStudy);
    linkTactica.appendChild(urlTactica);
    sectionTitulo.appendChild(linkTactica);
    linkRepaso.appendChild(fuenteRepaso);
    sectionTitulo.appendChild(linkRepaso);
    mainSection.appendChild(sectionTitulo);

    const section = document.createElement("section");
    section.classList.add("w3-container");
    section.classList.add("w3-round");
    section.classList.add("w3-center");
    section.classList.add("w3-twothird");
    section.classList.add("section");
    section.classList.add("w3-row");
    section.classList.add("containerSection");
    section.classList.add("animado");

    const tituloTactica = document.createElement("h2");
    tituloTactica.innerText = "Ejercicio diario";
    section.appendChild(tituloTactica);

    const iframeGame = document.createElement("iframe");
    iframeGame.setAttribute("frameborder", "0");
    iframeGame.setAttribute("style", "width:100%;height:500px;border:none;");
    iframeGame.setAttribute("src", "https://www.chess.com/daily_puzzle");

    section.appendChild(iframeGame);
    mainSection.appendChild(section);

    const someTips = [
      {
        imgURL:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PabloLafuente/phpEteE0I.png",
      },
      {
        imgURL:
          "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PabloLafuente/phpzYsVgr.png",
      },
    ];
    for (let i = 0; i < someTips.length; i++) {
      const section = document.createElement("section");
      section.classList.add("w3-container");
      section.classList.add("w3-round");
      section.classList.add("w3-center");
      section.classList.add("w3-twothird");
      section.classList.add("section");
      section.classList.add("w3-row");
      section.classList.add("containerSection");
      section.classList.add("animado");

      const imgSection = document.createElement("img");
      imgSection.src = someTips[i].imgURL;
      imgSection.classList.add("w3-image");
      imgSection.classList.add("w3-center");

      section.appendChild(imgSection);
      mainSection.appendChild(section);
    }
  }
}

// Inicialización del sitio
menu();
content();
footer();
title();

/* ==================================
Animaciones */

let animado = document.querySelectorAll(".animado");

function posicionScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (let i = 0; i < animado.length; i++) {
    let alturaElemento = animado[i].offsetTop;
    if (alturaElemento * 0.6 < scrollTop) {
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
