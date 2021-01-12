"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var mongoose = require("mongoose");
require("dotenv").config();

var methodOverride = require("method-override");
var articlesRouter = require("./routes/articles.js");

var PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    var msg = err ? "db connectionfailed, " + err : "db connected successfully";
    console.log(msg);
});

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use("/articles", articlesRouter);

app.listen(PORT, function (e) {
    return e || console.log("server started on port " + PORT);
});
