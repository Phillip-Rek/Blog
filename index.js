const express = require("express");
const app = express();
//const Articles = require("./models/articles");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    req.send("<h1>hello world</h1>")
})

app.listen(PORT, function(e) {
    return e || console.log("server started on port " + PORT);
});