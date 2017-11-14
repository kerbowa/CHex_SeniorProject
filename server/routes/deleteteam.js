var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  var id = req.body.team_id;

  db.serialize(function() {
    db.run('PRAGMA foreign_keys = ON', function(err, result) {
      if (err) throw err;
    });

    db.run('DELETE FROM TEAM WHERE ID = ?', [id], function(err, result) {
      if (err) throw err;
    });

  })

  res.sendStatus(200);
  db.close();
});

module.exports = router;
