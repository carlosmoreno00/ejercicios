window.addEventListener("load", () => {
    document.getElementById("subirMasArchivos").addEventListener("click", añadirNuevoInput);
});

function añadirNuevoInput() {
    let input = document.createElement("input");
    input.type = "file";

    document.getElementById("inputs").appendChild(input);
    document.getElementById("inputs").appendChild(document.createElement("br"));
}