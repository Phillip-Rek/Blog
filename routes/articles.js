const express = require("express");
const router = express.Router();
const models = require("../models");
const pool = models.pool;
const Articles = require("../models/articles")
const pug = require("pug");

router.get("/new", (req, res) => {
    const file = pug.compileFile("./views/new-article.pug");
    res.send(file())
});

router.get("/", (req, res) => {
    res.redirect("/");
})

router.get("/edit/:id", (req, res) => {
    const file = pug.compileFile("./views/edit-article.pug");
    const cb = (articles) => {
        const article = articles[0];
        res.send(file({ article }))
    }
    new Articles().getOne(req.params.id, cb)
})

router.get("/edit/save/:id", (req, res) => {
    new Articles().edit()
    console.log(req.params + req.body)
})

router.post("/", (req, res) => {
    if (!req.body) return;
    const articles = new Articles();
    try {
        articles.create(req, () => {
            res.redirect("/")
        })
    } catch (e) {
        console.log("cannot add into the database")
    }
})

module.exports = router;