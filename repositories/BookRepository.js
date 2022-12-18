const Book = require("../models/Book");

class BookRepository {
    findAll() {
        return Book.findAll({ raw: true })
            .then(books => books)
            .catch(err => console.log(err));
    }

    findByPk(id) {
        return Book.findByPk(id)
            .then(book => book)
            // .catch(err => console.log(err));
    }

    create(title, author, isbn) {
        return Book.create({
            title,
            author,
            isbn
        })
            .then(book => true)
            .catch(err => false);
    }

    delete(id) {
        return Book.destroy({ where: {id} })
            .then(book => true)
            .catch(err => false);
    }

    /*edit(id, title, author, isbn) {
        return Book.update({
                title: title,
                author: author,
                isbn: isbn
            },
            {
                where: { _id: id }
            })
            .then(book => true)
            .catch(book => false);
    }*/
}

module.exports = new BookRepository();