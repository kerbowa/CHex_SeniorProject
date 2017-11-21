var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

 
  // advisor name
  if (req.body.param1 != null) {
    var advisorname = req.body.param1;
  }
  // advisor email
  if (req.body.param2 != null) {
    var advisoremail = req.body.param2;
  }
  // advisor id
  if (req.body.param3 != null) {
    var advisor_id = req.body.param3;
  }

    db.each('UPDATE ADVISOR SET NAME = ? WHERE ID = ?', advisorname, advisor_id, function(err, result) {
    if (err) throw err;
    });

      db.each('UPDATE ADVISOR SET EMAIL= ? WHERE ID = ?', advisoremail, advisor_id,  function(err, result) {
    if (err) throw err;
    });


  db.close();
  res.sendStatus(200);
});
module.exports = router;
