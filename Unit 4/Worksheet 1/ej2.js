const texto = document.querySelector('div');
function mover(raton) {
    console.log('X: ' + raton.offsetX + ' Y: ' + raton.offsetY);
}
texto.addEventListener('mousemove', mover);