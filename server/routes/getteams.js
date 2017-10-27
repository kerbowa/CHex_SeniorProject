var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  var allTeams = {
    team: []
  };
  db.all('SELECT * FROM TEAM', function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      allTeams.team.push({"_id" : i,
                               "team_id": rows[i].ID,
                               "name" : rows[i].NAME,
                               "course" : rows[i].COURSE,
                               "advisor": rows[i].ADVISOR_ID,
                               "client": rows[i].CLIENT_ID});
    }
    //console.log(allTeams);
    res.json(allTeams);
  });
  db.close();
});

module.exports = router;
