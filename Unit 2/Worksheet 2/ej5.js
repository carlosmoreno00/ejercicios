var a = prompt("Escribe el coeficiente cuadratico");
var b = prompt("Escribe el coeficiente lineal");
var c = prompt("Escribe el termino independiente");
var x = (-b+(Math.sqrt((Math.pow(b,2))-(4*a*c))))/(2*a);
var y = (-b-(Math.sqrt((Math.pow(b,2))-(4*a*c))))/(2*a);
document.write("Las soluciones son " + x + " y " + y);