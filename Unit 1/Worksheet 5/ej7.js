var numero = prompt("Escribe un numero");
if (numero > 100) {
    numero = numero * 85 / 100;
    document.write("El numero descontando es " + numero);
}