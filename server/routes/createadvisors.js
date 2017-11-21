var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');


  // advisor name
  var advisorname = req.body.advisorname;
  // advisor email
  var advisoremail = req.body.advisoremail;

  db.run('INSERT INTO ADVISOR(NAME, EMAIL) VALUES (?, ?)', [advisorname, advisoremail], function(err, result) {
    if (err) throw err;
  });

  console.log();
  db.close();
});

module.exports = router;