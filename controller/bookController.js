const BookService = require("../services/bookService");
const Book = require("../models/Book");

module.exports = class BookController {
    findAll() {
        const bookService = new BookService();

        return bookService.findAll();
    }

    findByPk(id) {
        const bookService = new BookService();

        return bookService.findByPk(id);
    }

    create(title, author, isbn) {
        const bookService = new BookService();

        return bookService.create(title, author, isbn);
    }

    delete(id) {
        const bookService = new BookService();

        return bookService.delete(id);
    }

    /*edit(id, title, author, isbn) {
        const bookService = new BookService();

        return bookService.edit(id);
    }*/
}