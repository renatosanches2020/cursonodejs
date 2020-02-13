//Implementa express
var express = require('express');
var app = express();
//Implementa ejs (engine de visualização)
app.set('view engine', 'ejs');
//Seta Caminho de views
app.set('views', './app/views');

module.exports = app;