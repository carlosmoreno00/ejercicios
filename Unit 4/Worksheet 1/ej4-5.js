function main() {
    let tabla = "";
    tabla += "<table style=\"border-collapse: collapse; border: 1px solid black;\">";
    for (let i = 0; i < 100; i++) {
        tabla += "<tr>";
        for (let j = 0; j < 100; j++) {
            tabla += "<td height=\"2\" width=\"2\"></td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("tabla").innerHTML += "<br><button id=\"botonBorrar\">Borrar todo</button>";
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.addEventListener("mousemove", pintarCelda);
    });
    document.getElementById("botonBorrar").addEventListener("click", borrarTodo);
}

function pintarCelda(e) {
    if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    } else if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    } else if (e.buttons == 1) {
        e.target.style.backgroundColor = "white";
    }
}

function borrarTodo() {
    var celdas = document.querySelectorAll("td");
    for (let celda of celdas) {
        celda.style.backgroundColor = "white";
    }
}