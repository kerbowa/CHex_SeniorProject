var express = require('express');
var router = express.Router();

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

function generateTaskBoard(teamName, names, initials) {
  //Load the docx file as a binary
  var template = fs
    .readFileSync(path.resolve(__dirname, 'Sprint-task-board-template.docx'), 'binary');
  var zip = new JSZip(template);
  
  var doc = new Docxtemplater();
  doc.loadZip(zip);

  doc.setData({
      name1: names[0],
      name2: names[1],
      name3: names[2],
      name4: names[3],
      name5: names[4],
      name6: names[5],
      initial1: initials[0],
      initial2: initials[1],
      initial3: initials[2],
      initial4: initials[3],
      initial5: initials[4],
      initial6: initials[5]
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

function generateTaskBoardsForAllTeams() { 
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  // Generate a task board for each team in the database.
  db.all('SELECT NAME, ID FROM TEAM', function(err, teamRows) {
      if (!teamRows) {
        console.log("Could not generate task boards, there are no teams in the database.");
        db.close();
        return;
      }
      teamRows.forEach((teamRow)=> {
        // Find all student for this team and generate a taskboard.
        db.all('SELECT NAME FROM STUDENT WHERE TEAM_ID = ?', teamRow.ID, function(err, studentRows) {
          if (studentRows.length > 6) {
            console.log("A team cannot have more than 6 members.");
            db.close();
            return;
          }
          var names = [];
          var initials = [];
          for (i = 0; i < studentRows.length; i++) {
            var name = studentRows[i].NAME;
            names[i] = name;
            initials[i] = getInitials(name);
          }
          // Actually generate the taskboard.
          generateTaskBoard(teamRow.NAME, names, initials);
        });
      });
    });
  db.close();
}

function getInitials(name) {
  var tokens = name.split(" ");
  return tokens[0].charAt(0) + tokens[tokens.length-1].charAt(0);
}

router.get('/', function(req, res, next) {
  /*
	generateTaskBoard("Team CHex", ["Daniel Hayes",
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
 */                                 
  generateTaskBoardsForAllTeams();
  res.sendStatus(200);
});

module.exports = router;
