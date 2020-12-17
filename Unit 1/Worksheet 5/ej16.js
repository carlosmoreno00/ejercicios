var numero = parseInt(prompt("Escribe un numero"));
switch (true) {
    case (numero%2 == 0):
    {
        document.write("Es par");
        break;
    }
    case (numero%3 == 0):
    {
        document.write("Es multiplo de 3");
        break;
    }
    case (numero%5 == 0):
    {
        document.write("Es multiplo de 5");
        break;
    }
}