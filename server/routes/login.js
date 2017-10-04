var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  db.each("SELECT * FROM STUDENT", function(err, row) {
    console.log(row.NAME);
  });
  res.jason({
    'msg': 'success!'
  });

  db.close();
});


module.exports = router;
