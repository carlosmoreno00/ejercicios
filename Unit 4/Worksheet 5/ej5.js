function inicio() {
    document.getElementById("nombre").addEventListener("focusout", comprobarNombreYApellidos);
    document.getElementById("apellidos").addEventListener("focusout", comprobarNombreYApellidos);
    document.getElementById("DNI").addEventListener("focusout", comprobarDNI);
    document.getElementById("telefono").addEventListener("focusout", comprobarTelefono);
    document.getElementById("email").addEventListener("focusout", comprobarEmail);
    document.getElementById("usuario").addEventListener("focusout", comprobarUsuario);
}

window.onload = inicio;


function comprobarNombreYApellidos(e) {
    let expresion = /\d/;
    if (expresion.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity("No puede haber números");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

function comprobarDNI(e) {
    let expresion = /^\d{8}[A-Za-z]$/;
    let DNI = e.currentTarget.value;
    if (expresion.test(DNI) && DNI.slice(-1) == letraDNI(DNI)) {
        e.currentTarget.setCustomValidity("");
    } else {
        e.currentTarget.setCustomValidity("Introduzca un DNI Válido");
    }
}

function comprobarTelefono(e) {
    let expresion = /^[6-9]\d{8}$/;
    if (!expresion.test(e.currentTarget.value.replace(/\s+/g, ""))) {
        e.currentTarget.setCustomValidity("Introduzca un número válido.");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

function comprobarEmail(e) {
    let expresion = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!expresion.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity("Introduzca un email válido");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

function comprobarUsuario(e) {
    let expresion = /^(?=.*[A-Za-zÑñ])(?=.*\d)(?=.*[,;.:'"«»()[\]{}¿?¡!-])[A-Za-zÑñ\d,;.:'"«»()[\]{}¿?¡!\-@^_+|~`<>/$%*#&]{8,}$/;
    if (!expresion.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity("Introduzca un usuario de al menos 8 caracteres, un número y un signo de puntuacion");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

function letraDNI(DNI) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let posicion = DNI.slice(0, -1) % 23;
    return letras.charAt(posicion);
}