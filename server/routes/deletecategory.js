var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  var ID = req.body.categoryID;

  db.run('DELETE FROM CONTENT_CATEGORY WHERE ID = ?', ID, function(err, result) {
    if (err) throw err;
    db.run('DELETE FROM CONTENT WHERE CATEGORY_ID = ?', ID, function(err, result) {
      db.close();
      res.sendStatus(200);
    });
  });
});

module.exports = router;
