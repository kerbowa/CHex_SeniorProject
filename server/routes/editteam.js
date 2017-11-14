var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  // team name
  var teamName = req.body.param1.name;
  // course
  var course = req.body.param2.name;
  // tb generated
  // advisor
  var advisorId = req.body.param3.advisor_id;
  // client
  var clientId = req.body.param4.client_id;
  // studentOne
  var student = req.body.param5;
  // update team faculty advisor and client


  // update students


  console.log(teamName);
  console.log(course);
  console.log(advisorId);
  console.log(clientId);
  console.log(student);
  db.close();
});

module.exports = router;
