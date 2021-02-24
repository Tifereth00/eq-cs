function cambiarCat () {
    let contenedorCard1 = document.getElementById("card1");
    contenedorCard1.style.border = "transparent";
    contenedorCard1.style.gridColumn = "1 / 6";
    contenedorCard1.style.gridRow = "1 / 5";
    contenedorCard1.innerHTML = "Mi experiencia como Content Author"
    let contenedorCard2 = document.getElementById("card2");
    contenedorCard2.style.display = "none";
    let contenedorCard3 = document.getElementById("card3");
    contenedorCard3.style.display = "none";
}

function cambiarClt () {
    let contenedorCard2 = document.getElementById("card2");
    contenedorCard2.style.border = "transparent";
    contenedorCard2.style.gridColumn = "1 / 6";
    contenedorCard2.style.gridRow = "1 / 5";
    contenedorCard2.innerHTML = "Mi experiencia como Content Librarian"
   let contenedorCard1 = document.getElementById("card1");
   contenedorCard1.style.display = "none";
    let contenedorCard3 = document.getElementById("card3");
    contenedorCard3.style.display = "none";
}

function cambiarEdc () {
    let contenedorCard3 = document.getElementById("card3");
    contenedorCard3.style.border = "transparent";
    contenedorCard3.style.gridColumn = "1 / 6";
    contenedorCard3.style.gridRow = "1 / 5";
    contenedorCard3.style.margin = "none";
    contenedorCard3.innerHTML = "Mi experiencia como Ejecutiva de Cuentas"
   let contenedorCard2 = document.getElementById("card2");
   contenedorCard2.style.display = "none";
    let contenedorCard1 = document.getElementById("card1");
    contenedorCard1.style.display = "none";
}


