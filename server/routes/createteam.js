var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  // team id

  // team name
  var teamName = req.body.param2.name;
  // course
  var course = req.body.param5.name;

  // tb generated

  // advisor
  var advisorId = req.body.param3.advisor_id;
  // client
  var clientId = req.body.param4.client_id;

  db.all('INSERT INTO TEAM (ID, NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID) VALUES (7, ?, ?, ?, ?, ?)', [teamName, course, 0, advisorId, clientId], function(err, result) {
    if (err) throw err;
  });

  console.log();
  db.close();
});

module.exports = router;
