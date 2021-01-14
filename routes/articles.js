const express = require("express");
const router = express.Router()
const Article = require("../models/article");


router.get("/new", (req, res) => {
    res.send(`
    add article
    `);
});

router.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
})

router.post("/", (req, res)=>{
    
})

module.exports = router;