var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  

  // client name
  var clientname = req.body.clientname;
  // client email
  var clientemail = req.body.clientemail;
  // client status
  var clientstatus = req.body.clientstatus;
    // client organization
  var clientorganization = req.body.clientorganization;
    // client description
  var clientdescription = req.body.clientdescription;
    // client href
  var clienthref = req.body.clienthref;
  

  db.run('INSERT INTO CLIENT(NAME, EMAIL, STATUS, ORGANIZATION, DESCRIPTION, HREF) VALUES (?, ?, ?, ?, ?, ?)', [clientname, clientemail, clientstatus, clientorganization, clientdescription, clienthref], function(err, result) {
    if (err) throw err;
  });

  console.log();
  db.close();
});

module.exports = router;
