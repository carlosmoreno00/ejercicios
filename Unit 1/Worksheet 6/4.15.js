var num_adivinar = prompt("Introduzca un numero para adivinar");
var num = prompt("Introduzca un numero");
while (num_adivinar != num) {
    if (num_adivinar>num) 
        alert("El numero es mayor que " + num);
    else
        alert("El numero es menor que " + num);
    num = prompt("Introduzca otro numero");
}
alert("<h1>Has acertado el numero</h1>");