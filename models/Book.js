// Book Class: Represents a Book
const {Sequelize} = require("sequelize");
const db = require("../config/Database");

const Book = db.define("book", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn: {
        type: Sequelize.INTEGER,
        defaultValue: false
    }
});

module.exports = Book;
