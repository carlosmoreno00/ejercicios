console.log("El documento tiene " + document.images.length + " imagenes");
console.log("La primera imagen es " + document.images[0]);
console.log("El documento tiene " + document.links.length + " enlaces");
function cambiarTitulo() {
    var nuevoTitulo = prompt("Introduce un nuevo titulo");
    document.getElementById('titulo').innerHTML = nuevoTitulo;
}
cambiarTitulo();