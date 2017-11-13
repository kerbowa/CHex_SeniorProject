var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var hostname = "localhost:9000";

router.post('/', function(req, res) {
  var course = req.body.course;
  var page = req.body.page;

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');

  // Return a list of categories which contain a list of
  // content for that category.
  var allContent = {
    categories: []
  };

  var getContentForCategory = function(z, categoryRows) {
    return new Promise(function(resolve, reject) {
      db.each('SELECT * FROM CONTENT WHERE CATEGORY_ID = ?',
        categoryRows[z].ID,
        function(err, contentRow) {
          if (err) {
            reject();
            return;
          }
          allContent.categories[z].content.push({
            "ID": contentRow.ID,
            "title": contentRow.TITLE,
            "description": contentRow.DESCRIPTION,
            "extension": contentRow.EXTENSION,
            "isTemplate": contentRow.IS_TEMPLATE,
            "isInternal": contentRow.IS_INTERNAL,
            "href": contentRow.HREF
          });
        },
        // Complete adding all content for each ceateory.
        function() {
          resolve();
        });
    });
  };

  db.all('SELECT * FROM CONTENT_CATEGORY WHERE COURSE = ? AND PAGE = ?',
    course, page,
    function(err, categoryRows) {
      // Only return result after we have added content from all cateories.
      var categoryPromises = [];
      // First add all categories.
      for (var i = 0; i < categoryRows.length; i++) {
        // Add category to list.
        allContent.categories.push({
          "_id": i,
          "ID": categoryRows[i].ID,
          "name": categoryRows[i].NAME,
          "content": []
        });
      }

      // Now add content to those categories.
      for (var z = 0; z < categoryRows.length; z++) {
        // Get content for this category.
        categoryPromises.push(getContentForCategory(z, categoryRows));
      }

      Promise.all(categoryPromises).then(function() {
        db.close();
        res.json(allContent);
      });
    }); // End categories query
});

module.exports = router;
