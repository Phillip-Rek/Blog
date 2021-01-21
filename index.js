const express = require("express");
const app = express();
//const Articles = require("./models/articles");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>")
})

app.listen(port, function(e) {});