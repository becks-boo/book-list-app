const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;

const indexRouter = require("./routes/index");
const bookRouter = require("./routes/books");

const Book = require("./models/Book");

// Database
const db = require("./config/Database");

// Test DB
db.authenticate()
    .then(() => console.log("Database connected"))
    .then(() => db.sync({ alter: true }))
    .catch(err => console.log("Error: " + err));

const app = express();

// Handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Book-List app listening on port ${PORT}`);
});

// Book routes
app.use("/", indexRouter);
app.use("/book", bookRouter);