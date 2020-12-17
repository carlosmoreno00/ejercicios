function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function paresImpares() {
    var pares = Array();
    var impares = Array();
    for (i = 0; i < 100; i++) {
        let valor = lanzamiento(1,1000);
        if (valor%2 == 0)
        pares.push(valor);
    else
        impares.push(valor);
    } 
    return pares.concat(impares);
}