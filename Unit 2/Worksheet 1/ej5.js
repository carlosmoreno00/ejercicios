var fecha = new Date();
function contador() {
    fecha.getDate(Date);
    console.log(fecha);
    setTimeout(contador,1000);

}
setTimeout(contador,1000);