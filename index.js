const express = require("express");
const app = express();
const mongoose = require("mongoose");
const perthite = require("perthite");

require("dotenv").config();
const Article = require("./models/article")

const methodOverride = require("method-override");
const articlesRouter = require("./routes/articles.js");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    const msg = err ? "db connectionfailed, " + err : "db connected successfully";
    console.log(msg);
});

app.engine("html", perthite.engine);
app.set("view engine", "html");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/articles", articlesRouter);

app.get("/", async(req, res)=>{
    const articles = await Article.find().sort({ createdAt: "desc" });
    res.render("index", {articles})
})


app.listen(PORT, function (e) {
    return e || console.log("server started on port " + PORT);
});
