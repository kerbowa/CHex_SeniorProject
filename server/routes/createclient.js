var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  
// client ID
  var client_id = req.body.param1.client_id;
  // client name
  var clientname = req.body.param2.clientname;
  // client email
  var clientemail = req.body.param3.clientemail;
  // client status
  var clientstatus = req.body.param4.clientstatus;
  

  db.all('INSERT INTO CLIENT(ID, NAME, EMAIL, STATUS) VALUES (?, ?, ?, ?)', [client_id, clientname, clientemail, clientstatus], function(err, result) {
    if (err) throw err;
  });

  console.log();
  db.close();
});

module.exports = router;
