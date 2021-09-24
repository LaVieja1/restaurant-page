function crearHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const placeImage = document.createElement("img");
    placeImage.src = "/dist/img/home1.jpg";
    placeImage.alt = "Restaurante";

    home.appendChild(crearParrafo("El mejor restaurante del país"));
    home.appendChild(crearParrafo("Cocinando con pasión desde 2002"));
    home.appendChild(placeImage);
    home.appendChild(crearParrafo("Pedi online o visitanos!"));

    return home;
}

function crearParrafo(text) {
    const parrafo = document.createElement("p");
    parrafo.textContent = text;
    return parrafo;
}

function cargarHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(crearHome());
}

export default cargarHome;