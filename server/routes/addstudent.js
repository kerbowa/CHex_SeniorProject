var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:3000";

router.post('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  
  console.log(`Add student input = ${req.body.name}, ${req.body.email}`);

  db.run(`INSERT INTO STUDENT (NAME, EMAIL) VALUES ('${req.body.name}', '${req.body.email}')`, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) added ${this.changes}`);
  });
  db.close();
});

module.exports = router;