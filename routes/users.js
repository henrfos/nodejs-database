var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
const sql = require('mysql2');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var pool = require('../db/dbConfig')

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM Users', (err, data) => {
    res.render('users', { users: data });
  })
});

router.post('/', jsonParser, function(req, res, next) {
  let toAddArray = req.body.users;
  const query = 'INSERT INTO Users(FirstName, LastName) VALUES ' + toAddArray.map(user => '(' + "'" + user.FirstName + "'" + ',' + "'" + user.LastName + "'" + ')').toString();
  console.log(query);
  pool.query(query, (err, result) => {
    console.dir(result);
    res.end()
  })
});

module.exports = router;