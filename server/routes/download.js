var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

router.post('/', function(req, res) {
  var filePath = path.resolve(__dirname, '../media/' + req.body.path);
  var fileName = req.body.filename;
  console.log(filePath);
  console.log(fileName);
  res.json({
    files: [
      { path: filePath, filename: fileName }
    ]
  });
});

module.exports = router;
