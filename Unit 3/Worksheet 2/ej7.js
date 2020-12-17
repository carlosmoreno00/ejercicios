function ponerCeros(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = 0;
    }
    return array;
}

function añadirUno(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] += 1;
    }
    return array;
}

function separarEspacios(array) {
    return array.join(" ");
}