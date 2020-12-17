var hermanos = prompt("Escribe el numero de hermanos que tienes");
var cantidad = prompt("Escribe una cantidad");
if (hermanos > 2)
    cantidad = cantidad * 85 / 100;
else if (hermanos > 0)
    cantidad = cantidad * 95 / 100;
else
    cantidad = cantidad;
document.write("La cantidad es " + cantidad);