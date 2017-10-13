var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:3000";

router.get('/', function(req, res, next) {
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('database/chex.db');

  db.all('SELECT NAME, ID, TB_GENERATED FROM TEAM', function(err, teamRows) {
   for (i = 0; i < teamRows.length; i++) {
     var filePath = path.resolve(__dirname, '../media/Generated Files/' + teamRows[i].NAME + '-sprint-task-board.docx');
     if (fs.existsSync(filePath)) {
       fs.unlinkSync(filePath);
     }
     db.run('UPDATE TEAM SET TB_GENERATED = 0 WHERE ID = ?', teamRows[i].ID, function(err) {});
   }
   res.sendStatus(200);
  });
	db.close();
});

module.exports = router;
