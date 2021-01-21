const express = require("express");
const app = express();
const Articles = require("./models/articles");
const pug = require("pug");
const settings = require("./settings");

require("dotenv").config();

const articlesRouter = require("./routes/articles.js");

let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"))
    //app.engine("pug", pug);
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));
app.use("/articles", articlesRouter);
app.set("static", __dirname + "/public");

app.get("/", (req, res) => {
    const callback = (articles) => {
        const file = pug.compileFile("./views/index.pug");
        res.send(file({ articles, domain: settings.DOMAIN }))
    }
    new Articles().getAll(callback);
})

app.listen(PORT, function(e) {
    return e || console.log("server started on port " + PORT);
});