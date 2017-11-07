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
  if (req.body.param3 != null) {
    var advisorId = req.body.param3.advisor_id;
  }
  // client
  if (req.body.param4 != null) {
    var clientId = req.body.param4.client_id;
  }
  // studentOne
  if (req.body.param5 != null) {
    var studentOne = req.body.param5.student_id;
  }
  // studentTwo
  if (req.body.param6 != null) {
    var studentTwo = req.body.param6.student_id;
  }
  // studentThree
  if (req.body.param7 != null) {
    var studentThree = req.body.param7.student_id;
  }
  // studentFour
  if (req.body.param8 != null) {
    var studentFour = req.body.param8.student_id;
  }
  // studentFive
  if (req.body.param9 != null) {
    var studentFive = req.body.param9.student_id;
  }
  // studentSix
  if (req.body.param10 != null) {
    var studentSix = req.body.param10.student_id;
  }



  db.serialize(function() {
    db.run('INSERT INTO TEAM (NAME, COURSE, TB_GENERATED, ADVISOR_ID, CLIENT_ID) VALUES (?, ?, ?, ?, ?)',
    [teamName, course, 0, advisorId, clientId], function(err, result) {
      if (err) throw err;
    });

    var newTeam = {};

    // get record of newly created team
    db.all('SELECT * FROM TEAM WHERE ID = (SELECT MAX(ID) FROM TEAM)', function (err, rows) {
      if(err) {
        throw err;
      }
      else {
        newTeam = rows[0].ID;
        console.log(newTeam);
      }
    });

    // update student TEAM_ID fields to newly created team
    db.run('UPDATE STUDENT SET TEAM_ID = ? WHERE STUDENT_ID = ?', [newTeam, studentOne], function(err, result) {
      if (err) throw err;
    });

  })

  console.log();
  db.close();
});

module.exports = router;
