var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

 
  // client name
  if (req.body.param1 != null) {
    var clientname = req.body.param1;
  }
  // client email
  if (req.body.param2 != null) {
    var clientemail = req.body.param2;
  }
  // client status
  if (req.body.param3 != null) {
    var clientstatus = req.body.param3;
  }

    // client id
  if (req.body.param4 != null) {
    var client_id = req.body.param4;
  }

  // client organization
  if (req.body.param5 != null) {
    var corganization = req.body.param5;
  }

  // client description
  if (req.body.param6 != null) {
    var cdescription = req.body.param6;
  }

  // client href
  if (req.body.param7 != null) {
    var chref = req.body.param7;
  }


    db.each('UPDATE CLIENT SET NAME = ? WHERE ID = ?', clientname, client_id, function(err, result) {
    if (err) throw err;
    });

      db.each('UPDATE CLIENT SET EMAIL= ? WHERE ID = ?', clientemail, client_id,  function(err, result) {
    if (err) throw err;
    });

      db.each('UPDATE CLIENT SET STATUS = ? WHERE ID = ?', clientstatus, client_id, function(err, result) {
    if (err) throw err;
     });

       db.each('UPDATE CLIENT SET ORGANIZATION = ? WHERE ID = ?', corganization, client_id, function(err, result) {
    if (err) throw err;
     });

        db.each('UPDATE CLIENT SET DESCRIPTION = ? WHERE ID = ?', cdescription, client_id, function(err, result) {
    if (err) throw err;
     });

         db.each('UPDATE CLIENT SET HREF = ? WHERE ID = ?', chref, client_id, function(err, result) {
    if (err) throw err;
     });


  db.close();
  res.sendStatus(200);
});
module.exports = router;
