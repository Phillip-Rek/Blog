const express = require("express");
const app = express();
//const Articles = require("./models/articles");

app.get("/", (req, res) => {
    req.send("<h1>hello world</h1>")
})

app.listen(PORT, function(e) {
    return e || console.log("server started on port " + PORT);
});