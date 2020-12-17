var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
function aleatorio(min, max){
    var numero = Math.floor(Math.random() * (max - min +1) + min);
    return numero;
}
function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);
    if (eleccionUsuario == 0) {
        if (opciones[eleccionMaquina] == 1)
            alert("¡Has perdido! La maquina eligio papel y tu piedra");
        else {
            if (opciones[eleccionMaquina] == 2)
                alert("¡Has ganado! La maquina eligio tijera y tu piedra");
            else {
                if (opciones[eleccionMaquina] == 0)
                    alert("¡Empate! Ambos eligieron piedra");
            }
        }
    }
    if (eleccionUsuario == 1) { 
        if (opciones[eleccionMaquina] == 2)
            alert("¡Has perdido! La maquina eligio tijera y tu papel");
        else {
            if (opciones[eleccionMaquina] == 0)
                alert("¡Has ganado! La maquina eligio piedra y tu papel");
            else {
                if (opciones[eleccionMaquina] == 1)
                alert("¡Empate! Ambos eligieron papel"); 
            }
        }
    }
    if (eleccionUsuario == 2) { 
        if (opciones[eleccionMaquina] == 1)
        alert("¡Has ganado! La maquina eligio papel y tu tijera");
        else {
            if (opciones[eleccionMaquina] == 0)
            alert("¡Has perdido! La maquina eligio piedra y tu tijera"); 
            else {
                if (opciones[eleccionMaquina] == 2) 
                alert("¡Empate! Ambos eligieron tijera");
            }
        }
    }
    document.getElementById('efecto').style.display = "";   
}
function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}