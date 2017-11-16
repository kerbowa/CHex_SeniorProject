var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  console.log('ok');

  var course = req.body.course;
  var page = req.body.page;
  var title = req.body.title;
  var categoryID = req.body.category;
  var linkText = req.body.linkText;
  var description = req.body.description;
  var url = req.body.url;

  // Get empty category for this page.
  if (categoryID == null) {
    db.get('SELECT ID FROM CONTENT_CATEGORY WHERE NAME="" AND PAGE=? AND COURSE=?', [page, course], function(err, row) {
      if (err) throw err;
      db.run('INSERT INTO CONTENT(TITLE, DESCRIPTION, EXTENSION, IS_TEMPLATE, IS_INTERNAL, HREF, CATEGORY_ID) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, description, linkText, 0, 0, url, row.ID], function(err, result) {
        if (err) throw err;
        db.close();
        res.sendStatus(200);
      });
    });
  } else {
    db.run('INSERT INTO CONTENT(TITLE, DESCRIPTION, EXTENSION, IS_TEMPLATE, IS_INTERNAL, HREF, CATEGORY_ID) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, description, linkText, 0, 0, url, categoryID], function(err, result) {
      if (err) throw err;
      db.close();
      res.sendStatus(200);
    });
  }
});

module.exports = router;
