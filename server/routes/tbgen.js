var express = require('express');
var router = express.Router();

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

function generateTaskBoard(teamName, members) {
  //Load the docx file as a binary
  var template = fs
    .readFileSync(path.resolve(__dirname, 'Sprint-task-board-templte.docx'), 'binary');
  var zip = new JSZip(template);
  
  var doc = new Docxtemplater();
  doc.loadZip(zip);

  doc.setData({
      first_name1: members[0],
      first_name2: members[2],
      first_name3: members[4],
      first_name4: members[6],
      first_name5: members[8],
      first_name6: members[10],
      initial1: members[1],
      initial2: members[3],
      initial3: members[5],
      initial4: members[7],
      initial5: members[9],
      initial6: members[11]
  });

  try {
      doc.render()
  }
  catch (error) {
      var e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties,
      }
      console.log(JSON.stringify({error: e}));
      throw error;
  }

  var buf = doc.getZip()
               .generate({type: 'nodebuffer'});

  fs.writeFileSync(path.resolve(__dirname, teamName + '-sprint-task-board.docx'), buf);
}

router.get('/', function(req, res, next) {
	generateTaskBoard("Test Team", ["Daniel Hayes",
                                  "DH",
                                  "Vi M Le",
                                  "VL",
                                  "Ali Haider Iqbal",
                                  "AI",
                                  "Jammy Loeur",
                                  "JL",
                                  "Austin Kerbow",
                                  "AK",
                                  "Derek Hien Nguyen",
                                  "DN"]);
  res.sendStatus(200);
});

module.exports = router;
