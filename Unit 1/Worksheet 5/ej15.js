var mes = prompt("Escribe el nombre de un mes");
switch (mes) {
    case 'Febrero':
        document.write(mes + " tiene 28 dias");
        break;
    case 'Abril':
    case 'Junio':
    case 'Agosto':
    case 'Noviembre':
        document.write(mes + " tiene 30 dias");
        break;
    case 'Enero':
    case 'Marzo':
    case 'Mayo':
    case 'Julio':
    case 'Septiembre':
    case 'Octubre':
    case 'Diciembre': 
        document.write(mes + " tiene 31 dias");
        break;
    default:
        document.write("No has introducido un mes valido");
}