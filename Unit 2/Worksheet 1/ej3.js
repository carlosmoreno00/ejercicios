var cont = 60; 
function contador() {
    console.log(cont);
    cont--;
    if (cont > 0)
        setTimeout(contador,1000);
}
setTimeout(contador,1000);