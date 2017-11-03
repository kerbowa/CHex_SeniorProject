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
  var studentOne = req.body.param5.name;
  // studentTwo
  var studentTwo = req.body.param6.name;
  // studentThree
  var studentThree = req.body.param7.name;
  // studentFour
  var studentFour = req.body.param8.name;
  // studentFive
  var studentFive = req.body.param9.name;
  // studentSix
  var studentSix = req.body.param10.name;

  // update team faculty advisor and client


  // update students


  console.log();
  db.close();
});

module.exports = router;
