var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multer  = require('multer');
var hostname = "localhost:9000";
var XLSX = require('xlsx');

// File upload for bulk add students
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'media/Uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'students.xlsx')
    }
});
var upload = multer({ storage: storage });

router.post('/', upload.single('file'), function(req, res) {
  console.log('Begin parse...');
  try {
    var workbook = XLSX.readFile('media/Uploads/students.xlsx');
  }
  catch(err) {
    console.log(err);
  }
  var sheet1 = workbook.SheetNames[0];
  var worksheet = workbook.Sheets[sheet1];
  var jsonStudents = XLSX.utils.sheet_to_json(workbook.Sheets[sheet1]);
  console.log(jsonStudents);
  console.log('End parse.');

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db')
  jsonStudents.forEach(function(element) {
    console.log('Insert: ' + element.Student + ' ' + element.Email);
  
    db.run(`INSERT INTO STUDENT (NAME, EMAIL) VALUES ('${element.Student}', '${element.Email}')`, function(err) {
    if (err) {
      return console.error(err.message);
    }
      console.log(`Row(s) added ${this.changes}`);
    });
  });
  db.close();
  //console.log(`final Row(s) added ${this.changes}`);
});

module.exports = router;
