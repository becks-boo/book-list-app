const BookRepository = require("../repositories/BookRepository");

module.exports = class BookService {
    findAll() {
        return BookRepository.findAll();
    }

    findByPk(id) {
        return BookRepository.findByPk(id);
    }

    create(title, author, isbn) {
        // TODO: Condition if book exist do something, else create
        return BookRepository.create(title, author, isbn);
    }

    delete(id) {
        return BookRepository.delete(id);
    }

    /*edit(id, title, author, isbn) {
        return BookRepository.edit(id);
    }*/
}