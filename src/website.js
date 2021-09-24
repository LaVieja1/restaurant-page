import cargarHome from "./home";
import cargarMenu from "./menu";
import cargarContacto from "./contact";

function crearHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restauranteNombre = document.createElement("h1");
    restauranteNombre.classList.add("restaurant-name");
    restauranteNombre.textContent = "Restaurante L";

    header.appendChild(restauranteNombre);
    header.appendChild(crearNav());

    return header;
}

function crearNav() {
    const nav = document.createElement("nav");

    const homeBoton = document.createElement("button");
    homeBoton.classList.add("button-nav");
    homeBoton.textContent = "Inicio";
    homeBoton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBoton);
        cargarHome();
    });

    const menuBoton = document.createElement("button");
    menuBoton.classList.add("button-nav");
    menuBoton.textContent = "Menu";
    menuBoton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBoton);
        cargarMenu();
    });

    const contactoBoton = document.createElement("button");
    contactoBoton.classList.add("button-nav");
    contactoBoton.textContent = "Contacto";
    contactoBoton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactoBoton);
        cargarContacto();
    });

    nav.appendChild(homeBoton);
    nav.appendChild(menuBoton);
    nav.appendChild(contactoBoton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function crearMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function crearFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const link = document.createElement("a");
    link.textContent = "Santiago Cano 2021";
    link.href = "https://github.com/LaVieja1";

    footer.appendChild(link);

    return footer;
}

function iniciarWebsite() {
    const content = document.getElementById("content");

    content.appendChild(crearHeader());
    content.appendChild(crearMain());
    content.appendChild(crearFooter());

    setActiveButton(document.querySelector(".button-nav"));
    cargarHome();
}

export default iniciarWebsite();