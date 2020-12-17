var rutasImagenes = [];
for (let i = 1; i <= 3; i++) {
    rutasImagenes[i] = "imagen" + i + ".jpg";
}
var imagenActual = 1;

var imagen = document.createElement("img");
imagen.src = rutasImagenes[imagenActual];
imagen.style.height = "60vh";

window.addEventListener("load", () => {
    document.getElementById("siguiente").addEventListener("click", imagenSiguiente);
    document.getElementById("anterior").addEventListener("click", imagenAnterior);
    document.getElementById("visor").appendChild(imagen);
});

function imagenSiguiente() {
    imagenActual++;
    if (imagenActual == rutasImagenes.length) {
        imagenActual = 1;
    }
    imagen.src = rutasImagenes[imagenActual];
}

function imagenAnterior() {
    imagenActual--;
    if (imagenActual == 0) {
        imagenActual = rutasImagenes.length - 1;
    }
    imagen.src = rutasImagenes[imagenActual];
}