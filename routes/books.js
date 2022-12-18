const express = require("express");
const router = express.Router();
const db = require("../config/Database");
const BookController = require("../controller/bookController");

// Add a book
router.post("/", (req, res) => {
    const bookController = new BookController();
    let { title, author, isbn } = req.body;
    const response = bookController.create(title, author, isbn);

    return res.redirect(response ? "/" : "/");
});

// Delete a book
router.post("/delete/:id", async (req, res) => {
    const bookController = new BookController();
    const response = bookController.delete(req.params.id);

    return res.redirect(response ? "/" : "/");
});

// Get a book by id
router.get("/show/:id", (req, res) => {
    const bookController = new BookController();
    const bookEntity = bookController.findByPk(req.params.id);

    bookEntity.then(book => {
            res.render("show", {
                book: book
            });
        })
        .catch(err => res.status(404));
});

// Edit a book
router.get("/edit/:id", (req, res) => {
    const bookController = new BookController();
    const bookEntity = bookController.findByPk(req.params.id);

    bookEntity.then(book => {
        res.render("edit", {
            book: book
        });
    })
        .catch(err => res.status(404));
});

router.post("/update/:id", (req, res) => {
    const id = req.params.id;
    const bookController = new BookController();
    const bookEntity = bookController.findByPk(id);
    const newData = {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    }

    bookEntity.then(book => {
            book.update(newData, { where: { _id: id }})
        })
        .then(book => res.redirect("/"))
        .catch(err => res.status(404));
});

module.exports = router;