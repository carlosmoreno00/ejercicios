function factorial(numero) {
    if (numero == 1)
        return 1;
    else
        return numero * factorial(numero-1);
}
for (let i = 1; i<=10 ; i++) {
    document.write('El factorial de ' + i + ' es ' + factorial(i) + '<br>');
}