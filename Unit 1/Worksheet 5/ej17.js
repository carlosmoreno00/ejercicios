var num1 = prompt("Escribe un numero");
var num2 = prompt("Escribe otro numero");
var operacion = prompt("Elige la operacion a realizar(+,-,*,/)");
var resultado;
switch (operacion) {
    case '+':
        resultado = num1 + num2;
        document.write(num1 + " + " + num2 + " = " + resultado);
        break;
    case '-':
        resultado = num1 - num2;
        document.write(num1 + " - " + num2 + " = " + resultado);
        break;
    case '*':
        resultado = num1 * num2;
        document.write(num1 + " * " + num2 + " = " + resultado);
        break;
    case '/':
        resultado = num1 / num2;
        document.write(num1 + " / " + num2 + " = " + resultado);
        break;
    default:
        document.write("No has introducido bien la operacion");
}