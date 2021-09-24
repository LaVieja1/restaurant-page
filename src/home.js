function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const placeImage = document.createElement("img");
    placeImage.src = "/dist/img/home1.jpg";
    placeImage.alt = "Restaurante";

    home.appendChild(createParagraph("El mejor restaurante del país"));
    home.appendChild(createParagraph("Cocinando con pasión desde 2002"));
    home.appendChild(placeImage);
    home.appendChild(createParagraph("Pedi online o visitanos!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;