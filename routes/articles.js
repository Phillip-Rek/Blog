const express = require("express");
const router = express.Router();
const server = require("../index");
const pool = server.pool;

router.get("/new", (req, res) => {
    res.render("new-article", {})
});

router.get("/", (req, res) => {
    res.redirect("/");
})

router.post("/", (req, res) => {
    const sql = "INSERT INTO articles (title, description, markdown, slug) VALUES ?"
    const vals = [
        req.body.title,
        req.body.description,
        req.body.markdown,
        req.body.slug
    ]
    console.log(vals)
    pool.query(sql, vals, (err, res) => {
        if (err) console.log("cannot mysql query " + err)
    })
})

module.exports = router;