var examen1 = prompt("Introduce la nota del examen 1");
var examen2 = prompt("Introduce la nota del examen 2");
var trabajo1 = prompt("Introduce la nota del trabajo 1");
var trabajo2 = prompt("Introduce la nota del trabajo 2");
var mediaExamenes = (examen1 + examen2) / 2;
var mediaTrabajos = (trabajo1 + trabajo2) / 2;
var mediaTotal = mediaExamenes * 0.75 + mediaTrabajos * 0.25;
if (examen1 < 4.5 || examen2 < 4.5 || trabajo1 < 4.5 || trabajo2 < 4.5)
    document.write("Has suspendido");
else if (mediaTotal < 5)
    document.write("Has suspendido");
else
    document.write("Has aprobado");