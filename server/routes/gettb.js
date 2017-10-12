var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:3000";

router.get('/', function(req, res, next) {
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('database/chex.db');
  var allTeams = {
    teams: []
  };
   db.all('SELECT NAME, ID FROM TEAM', function(err, teamRows) {
    for (i = 0; i < teamRows.length; i++) {
      var filePath = 'http://' + hostname + '/media/Generated Files/' + teamRows[i].NAME + '-sprint-task-board.docx';
      allTeams.teams.push({"_id" : i,
                           "name" : teamRows[i].NAME,
                           "filepath" : filePath});
     }
    console.log(allTeams);
    res.json(allTeams);
   });
	db.close();
});

module.exports = router;
