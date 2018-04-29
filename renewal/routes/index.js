var express = require('express');
var exphbs = require('express-handlebars');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
  res.send('/layouts/main');
});

module.exports = router;
