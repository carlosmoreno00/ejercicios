var resultado = 0;
for (var i =1; i < 11; i++) {
    document.write("<h3>Tabla de multiplicar del " + i + " </h3>");
    for (var j = 0; j < 11; j++) {
        resultado = i * j;
        document.write(i + " * " + j + " = " + resultado + "<br>");
    }
}