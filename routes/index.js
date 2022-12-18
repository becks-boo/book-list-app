const express = require("express");
const router = express.Router();
const BookController = require("../controller/bookController");

router.get("/", (req, res) => {
    const bookController = new BookController();
    const books = bookController.findAll();

    books.then(books => {
            res.render("list", {
                books
            });
        })
        .catch(err => console.log(err));
});

module.exports = router;