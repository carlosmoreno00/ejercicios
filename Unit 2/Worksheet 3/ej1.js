function inverteCadena(cad_arg) {
    let cadenaInvertida = "";
    for (let i = cad_arg.length-1; i >= 0; i--) {
        cadenaInvertida += cad_arg[i];
    }
    return cadenaInvertida;
}

function inviertePalabras(cad_arg) {
    let cadenaDividida = cad_arg.split(" ");
    let resultado = "";
    for (const palabra of cadenaDividida) {
        for (let i = palabra.length-1; i >= 0; i--) {
            resultado += palabra[i];
        }
        resultado += " ";
    }
    return resultado;
}

function encuentraPalabraMasLarga(cad_arg) {
    let cadenaDividida = cad_arg.split(" ");
    let resultado = 0;
    for (const palabra of cadenaDividida) {
        if (palabra.length > resultado){
            resultado = palabra.length;
        }
    }
    return resultado;
}

function filtraPalabrasMasLargas(cad_arg, i) {
    let cadenaDividida = cad_arg.split(" ");
    let resultado = 0;
    for (const palabra of cadenaDividida) {
        if (palabra.length > i){
            resultado ++;
        }
    }
    return resultado;
}