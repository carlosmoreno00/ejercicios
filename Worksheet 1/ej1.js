window.addEventListener("load", main);

function main() {
    let respuesta = document.getElementById("respuestas");
    let numeroEnlaces = document.getElementsByTagName("a").length;
    let direccionPenultimoEnlace = document.getElementsByTagName("a")[numeroEnlaces - 2].href;
    let numeroEnlacesAGoogle = document.querySelectorAll("a[href=\"https://google.com\"]").length;
    let numeroEnlacesTercerParrafo = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
    respuesta.innerText = `Número de enlaces en la página: ${numeroEnlaces}.
    Dirección a la que enlaza el penúltimo enlace: ${direccionPenultimoEnlace}.
    Número de enlaces que enlazan a google: ${numeroEnlacesAGoogle}.
    Número de enlaces en el tercer párrafo ${numeroEnlacesTercerParrafo}`;
}