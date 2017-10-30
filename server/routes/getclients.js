var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  var allClients = {
    client: []
  };
  db.all('SELECT * FROM CLIENT', function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      allClients.client.push({"_id" : i,
                               "client_id": rows[i].ID,
                               "name" : rows[i].NAME,
                               "email" : rows[i].EMAIL,
                               "status": rows[i].STATUS});
    }
    //console.log(allClients);
    res.json(allClients);
  });
  db.close();
});

module.exports = router;
