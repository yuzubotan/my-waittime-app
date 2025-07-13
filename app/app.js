const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }))



  
module.exports = app;