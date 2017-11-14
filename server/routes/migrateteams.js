var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  console.log('ok');

  db.serialize(function() {
    db.all('UPDATE TEAM SET COURSE = "Retired" WHERE COURSE = "191"',
      function(err, result) {
        if (err) throw err;
      });

    db.all('UPDATE TEAM SET COURSE = "191" WHERE COURSE = "190"',
      function(err, result) {
        if (err) throw err;
      });

    res.sendStatus(200);
  })

  db.close();
});

module.exports = router;
