function crearContacto() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const numeroTelefono = document.createElement('p');
    numeroTelefono.textContent = '54 011 3426 9532';

    const direccion = document.createElement('p');
    direccion.textContent = 'Mariano Acosta 153, Monte Grande, Buenos Aires';

    const direccionFoto = document.createElement('img');
    direccionFoto.src = './dist/img/direccion.png';
    direccionFoto.alt = 'Restaurante L direccion Google Maps';

    contact.appendChild(numeroTelefono);
    contact.appendChild(direccion);
    contact.appendChild(direccionFoto);

    return contact;
}

function cargarContacto() {
    const main = document.getElementById("main");
    main.textContent = '';
    main.appendChild(crearContacto());
}

export default cargarContacto;