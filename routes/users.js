var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
  res.render('users', { users: users });
});

module.exports = router;