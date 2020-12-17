function infoCadena(cadena) {
    let minusculas = false;
    let mayusculas = false;
    let i = 0;
    do{
        if(cadena.charAt(i) == cadena.charAt(i).toUpperCase())
            mayusculas = true;
        else
            minusculas = true;
        ++i;
    }while(!(minusculas && mayusculas) && i < cadena.length);
    if (minusculas && mayusculas)
        document.write("La cadena " + cadena + " tiene mezcla de minúsculas y mayúsculas");
    else if (mayusculas)
        document.write("La cadena " + cadena + " está formada por mayúsculas");
    else
        document.write("La cadena " + cadena + " esta formada por minúsculas");
}
let cadena = prompt("Introduzca una cadena");
infoCadena(cadena);