var express = require('express');
var router = express.Router();
var Store = require('../services/file-store');
var store = new Store();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  var fruits = store.readDataFile();
  res.json(fruits);
});

router.post('/add', function(req, res, next) {
  const fruit = req.body;
  var fruits = store.readDataFile();
  fruits.push(fruit);
  store.saveDataFile(fruits);
  res.json(fruits);
});

module.exports = router;
