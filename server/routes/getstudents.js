var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  var allStudents = {
    student: []
  };
  db.all('SELECT * FROM STUDENT', function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      allStudents.student.push({"_id" : i,
                               "name" : rows[i].NAME,
                               "email" : rows[i].EMAIL,
                               "team" : rows[i].TEAM_ID});
    }
    //console.log(allStudents);
    res.json(allStudents);
  });
  db.close();
});

module.exports = router;
