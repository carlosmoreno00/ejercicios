var arrastrando = false;
var imagenEnMovimiento = null;

function main(e) {
    var imagenes = document.querySelectorAll("img");
    imagenes.forEach(imagen => {
        imagen.addEventListener("click", imagenPulsada);
    });
    window.addEventListener("mousemove", muevoRaton);
}

function imagenPulsada(e) {
    arrastrando = !arrastrando;
    imagenEnMovimiento = e.currentTarget;
}

function muevoRaton(e) {
    if (arrastrando) {
        imagenEnMovimiento.style.marginLeft = (e.x - 20) + "px";
        imagenEnMovimiento.style.marginTop = (e.y - 20) + "px";
    }
}