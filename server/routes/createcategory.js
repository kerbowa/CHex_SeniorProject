var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  var name = req.body.name;
  var course = req.body.course;
  var page = req.body.page;

  db.all('INSERT INTO CONTENT_CATEGORY(NAME, COURSE, PAGE) VALUES (?, ?, ?)', [name, course, page], function(err, result) {
    if (err) throw err;
    db.close();
    res.sendStatus(200);
  });
});

module.exports = router;
