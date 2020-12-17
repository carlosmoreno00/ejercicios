window.addEventListener("load", () => {
    document.getElementById("botonAñadir").addEventListener("click", añadirElementoALista);
});

function añadirElementoALista() {
    let elemento = document.createTextNode(document.getElementById("elemento").value);
    let li = document.createElement("li");
    li.appendChild(elemento);
    document.getElementById("lista").appendChild(li);
    document.getElementById("elemento").value = "";
}