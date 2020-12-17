var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var n6 = 0;
function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 6000; i++) {
    var resultado = lanzamiento(1,6);
    if (resultado == 1) 
        n1++;
    else if (resultado == 2)
        n2++;
    else if (resultado == 3)
        n3++;
    else if (resultado == 4)
        n4++;
    else if (resultado == 5)
        n5++;
    else
        n6++;
}
document.write('El número 1 ha salido ' + n1 + '<br>');
document.write('El número 2 ha salido ' + n2 + '<br>');
document.write('El número 3 ha salido ' + n3 + '<br>');
document.write('El número 4 ha salido ' + n4 + '<br>');
document.write('El número 5 ha salido ' + n5 + '<br>');
document.write('El número 6 ha salido ' + n6);