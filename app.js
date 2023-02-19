var express = require("express");
var app = express();
var fs = require("fs");

app.set("view engine", "ejs");

app.use(express.static("./index.html"));
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send("hello world");
});
