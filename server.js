var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('zoo', ['animals']);

var PORT = process.env.PORT || 3000;


app.get('/dog', function(req, res) {
  db.animals.find({name: "Dog"}, function(err, results) {
    res.json(results);
  });
})

app.get('/panda', function(req, res) {
  db.animals.find({name: "Panda"}, function(err, results) {
    res.json(results);
  });
})

app.get('/fox', function(req, res) {
  db.animals.find({name: "Fox"}, function(err, results) {
    res.json(results);
  });
})

app.get('/fish', function(req, res) {
  db.animals.find({name: "fish"}, function(err, results) {
    res.json(results);
  });
})

app.get('/bird', function(req, res) {
  db.animals.find({name: "bird"}, function(err, results) {
    res.json(results);
  });
})

app.get('/hamster', function(req, res) {
  db.animals.find({name: "hamster"}, function(err, results) {
    res.json(results);
  });
})

app.get('/mouse', function(req, res) {
  db.animals.find({name: "mouse"}, function(err, results) {
    res.json(results);
  });
})

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
})