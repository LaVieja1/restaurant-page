function crearMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        crearMenuItem(
            "Milanesa Napolitana",
            "Milanesa de peceto, Tomate, Jamón, Oregano, Queso, Papas fritas"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Empanada",
            "Jamon y queso, Humita, Carne Suave, Pollo, Verdura"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Asado",
            "A la parrila, chinchulin, vacio, chorizo, cerdo"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Pizza",
            "Muzzarella, Napolitana, Huevo, Tomate, Peperoni"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Fideos",
            "Spaghetti, Tirabuzones y Moño, con distintas salsas para elegir"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Pollo",
            "A la parilla, horno o plancha"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Sopa",
            "Con verduras a elección, con cabello de angel o sopa de letras"
        )
    );
    menu.appendChild(
        crearMenuItem(
            "Sushi",
            "Sabor a elección"
        )
    );

    return menu;
}

function crearMenuItem(nombre, descripcion) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const comidaNombre = document.createElement("h2");
    comidaNombre.textContent = nombre;

    const comidaDescripcion = document.createElement("p");
    comidaDescripcion.textContent = descripcion;

    const comidaImagen = document.createElement("img");
    comidaImagen.src = `img/menu/${nombre}.jpg`;
    comidaImagen.alt = `${nombre}`;

    menuItem.appendChild(comidaImagen);
    menuItem.appendChild(comidaNombre);
    menuItem.appendChild(comidaDescripcion);

    return menuItem;
}

function cargarMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(crearMenu());
}

export default cargarMenu;