function aleatorio(){
    return(Math.floor(Math.random() * 3 + 1 ));
}
var cambia_imagen = new Array();
cambia_imagen[0] = "imagen0.jpg";
cambia_imagen[1] = "imagen1.jpg";
cambia_imagen[2] = "imagen2.jpg";
function cambiar(){
    document.getElementById("ia").src = cambia_imagen[aleatorio()-1];
}