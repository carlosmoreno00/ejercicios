function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function probabilidad() {
    var combinaciones = Array(6).fill(0).map(() => Array(6).fill(0));
    var dado1, dado2;
    for (let i = 0; i < 36000; i++) {
        dado1 = lanzamiento(1,6);
        dado2 = lanzamiento(1,6);
        combinaciones[dado1-1][dado2-1]++;
    }
    return combinaciones;
}