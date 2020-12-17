class Booklist {
    constructor() {
        this.listaLibros = [];
        this.currentBookIndex = 0;
    }
    add(book) {
        this.listaLibros.push(book);
    }
    finishCurrentBook() {
        this.listaLibros[this.currentBookIndex].read = true;
        this.listaLibros[this.currentBookIndex].readDate = new Date();
        if (this.currentBookIndex<this.listaLibros.length-1)
            this.currentBookIndex++;
    }
    get currentBook() {
        return this.listaLibros[this.currentBookIndex];
    }
    get booksRead() {
        return this.listaLibros.filter((libro) => libro.read).length;
    }
    get librosNoLeidos() {
        return this.listaLibros.length  - this.booksRead;
    }

}

class Book {
    constructor(t, g, a) {
        this.title = t;
        this.genre = g;
        this.author = a;
        this.read = false;
        this.readDate = null;
    }
}

export {Book, Booklist};