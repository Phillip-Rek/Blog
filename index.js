const express = require("express");
const app = express();
const perthite = require("../perthite/index");
const pool = require("./models/article").pool;
const pug = require("pug");

require("dotenv").config();

const articlesRouter = require("./routes/articles.js");

const PORT = process.env.PORT || 3000;


app.engine("html", perthite.engine);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: false }));
app.use("/articles", articlesRouter);
app.set("static", __dirname + "/public");

app.get("/", (req, res) => {
    const sql = "SELECT * FROM articles";
    pool.query(sql, (err, rows, fields) => {
        if (err) console.log("cannot select from database " + err);
        else res.render("index", { articles: rows });
    })
})

app.listen(PORT, function(e) {
    return e || console.log("server started on port " + PORT);
});