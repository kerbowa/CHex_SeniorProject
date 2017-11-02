var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  var id = req.body.advisor_id,
      name = req.body.name,
      email = req.body.email;

  db.all('DELETE FROM ADVISOR WHERE ID = ?', [id], function(err, result) {
    if (err) throw err;
    console.log("Deleted Record: " + id + name + email);
  });

  res.end();
  db.close();
});

module.exports = router;
