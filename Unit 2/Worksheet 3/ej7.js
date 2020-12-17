function esPalindromo(cadena) {
    let palindromo = true;
    let i = 0;
    cadena = cadena.replace(/\s+/g, "").toLowerCase();

    while (palindromo && i <= cadena.length/2) {
        if (cadena.charAt(i) != cadena.charAt(cadena.length-1-i)) {
            palindromo = false;
        }
        ++i;
    }
    return palindromo;
}

let cadena = "Alli va ramon y no maravilla";
document.write(esPalindromo(cadena));