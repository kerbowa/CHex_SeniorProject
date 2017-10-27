var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  var allAdvisors = {
    advisor: []
  };
  db.all('SELECT * FROM ADVISOR', function(err, rows) {
    for (i = 0; i < rows.length; i++) {
      allAdvisors.advisor.push({"_id" : i,
                               "advisor_id": rows[i].ID,
                               "name" : rows[i].NAME,
                               "email" : rows[i].EMAIL});
    }
    //console.log(allAdvisors);
    res.json(allAdvisors);
  });
  db.close();
});

module.exports = router;
