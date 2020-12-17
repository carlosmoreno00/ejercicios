import {Book, Booklist} from './clases.js';

window.onload = function() {
    var lista = new Booklist();
    const boton = document.querySelector('button');
    function addBook() {
        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
        var genre = document.getElementById("genre").value;
        lista.add(new Book(title, author, genre));
        rellenarTabla(lista);
    }
    boton.addEventListener("click", addBook);
    function finishBook() {
        lista.finishCurrentBook();
        rellenarTabla(lista);
    }
    document.getElementById("readingList").addEventListener("click", finishBook);
}

function rellenarTabla(librosTotales) {
    document.getElementById("readingList").innerHTML = "";
    librosTotales.listaLibros.forEach((libro) => {
        var leido;
        if (!libro.read)
            leido="Not read";
        else {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            leido = "Read " + libro.readDate.toLocaleDateString('en-EN', options);
        }
        var bookEntry = `<div class="row"><div class="cell">${libro.title}</div>
        <div class="cell">${libro.author}</div><div class="cell">${libro.genre}</div>
        <div class="cell">${leido}</div><div class="cell"><button>Eliminar</button></div></div>`;
    })
    document.getElementById("booksRead").innerHTML = librosTotales.numberBooksRead;
}