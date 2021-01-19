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

router.get("/read/:id", (req, res) => {
    const file = pug.compileFile("./views/read-article.pug");
    const cb = (articles) => {
        const article = articles[0];
        res.send(file({ article }))
    }
    new Articles().getOne(req.params.id, cb)
})

router.get("/delete/:id", (req, res) => {
    function cb() { res.redirect("/") }
    new Articles().remove({ id: req.params.id }, cb)
})

router.post("/edit/save/:id", (req, res) => {
    function cb() { res.redirect("/") }
    new Articles()
        .update({
                title: req.body.title,
                desc: req.body.description,
                markd: req.body.markdown,
                id: req.params.id
            },
            cb
        )
})

router.post("/", (req, res) => {
    if (!req.body) return;
    const articles = new Articles();

    if (!req.body.title ||
        !req.body.description ||
        !req.body.markdown
    ) { return res.redirect("/") }

    try {
        articles.create(req, () => {
            res.redirect("/")
        })
    } catch (e) {
        console.log("cannot add into the database")
        res.redirect("/")
    }
})

module.exports = router;