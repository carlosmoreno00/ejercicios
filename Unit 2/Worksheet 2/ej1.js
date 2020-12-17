document.write(Math.random());

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
document.write('<br>'+numeroAleatorio(100, 200));

var x = prompt("Escribe un numero");
var y = prompt("Escribe otro numero");
document.write('<br>'+numeroAleatorio(x, y));