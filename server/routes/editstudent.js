var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:3000";

router.post('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  console.log(`Student id=${req.body.id} name=${req.body.name}`);

  db.run('UPDATE STUDENT SET NAME=?, EMAIL=? WHERE rowid=?', 
    req.body.name, req.body.email, req.body.id, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated ${this.changes}`);
  });
  db.close();
});

module.exports = router;