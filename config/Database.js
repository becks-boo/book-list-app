const { Sequelize } = require("sequelize");

const db = new Sequelize("booklist_schema", "root", "password", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = db;