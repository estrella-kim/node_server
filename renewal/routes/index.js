var express = require('express');
var exphbs = require('express-handlebars');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'me',
    password : 'secret'
});
connection.connect();

connection.query('SELECT 1+1 AS solution', function(err, results, fields) {
    if(err) throw err;
    console.log('The solution is :', results[0].solution);
})
connection.end();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

module.exports = router;
