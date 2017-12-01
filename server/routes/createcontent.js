var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var hostname = "localhost:9000";
var sqlite3 = require('sqlite3').verbose();

router.post('/', function(req, res) {
  var db = new sqlite3.Database('database/chex.db');

  var course = req.body.course;
  var page = req.body.page;
  var title = req.body.title;
  var categoryID = req.body.category;
  var linkText = req.body.linkText;
  var description = req.body.description;
  var url = req.body.url;
  var isTemplate = req.body.isTemplate;
  var isInternal = req.body.isInternal;
  var fileName = req.body.fileName;

  // If we are adding a template, first add the content info to the database then
  // generate the actual file and save it.
  if (isTemplate) {
    db.each('SELECT NAME, ID FROM TEAM WHERE COURSE = ?', course, function(err, teamRow) {
      if (!teamRow) {
        console.log("Could not generate template, there are no teams in the database.");
        db.close();
        return;
      }
      db.close();
      url = 'media/Download/' + teamRow.NAME + '-' + fileName;
      // Add content info to database.
      insertContent(page, course, title, description, linkText, isInternal, url, categoryID);

    }, function() {
      // Generate the docx files.
      generateTemplateForAllTeams(course, fileName);
      db.close();
    });
  } else {
    insertContent(page, course, title, description, linkText, isInternal, url, categoryID);
  }
  res.sendStatus(200);
});

var insertContent = function(page, course, title, description, linkText, isInternal, url, categoryID) {
  var db = new sqlite3.Database('database/chex.db');

  // Get empty category for this page.
  if (categoryID == null) {
    db.get('SELECT ID FROM CONTENT_CATEGORY WHERE NAME="" AND PAGE=? AND COURSE=?', [page, course], function(err, row) {
      if (err) throw err;
      db.run('INSERT INTO CONTENT(TITLE, DESCRIPTION, EXTENSION, IS_TEMPLATE, IS_INTERNAL, HREF, CATEGORY_ID) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, description, linkText, 0, isInternal, url, row.ID], function(err, result) {
        if (err) throw err;
        db.close();
      });
    });
  } else {
    db.run('INSERT INTO CONTENT(TITLE, DESCRIPTION, EXTENSION, IS_TEMPLATE, IS_INTERNAL, HREF, CATEGORY_ID) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, description, linkText, 0, isInternal, url, categoryID], function(err, result) {
      if (err) throw err;
      db.close();
    });
  }
};

var generateTemplate = function(teamName, names, initials, advisorName, clientName, fileName) {
  //Load the docx file as a binary
  var template = fs
    .readFileSync(path.resolve(__dirname, '../media/Download/' + fileName), 'binary');
  var zip = new JSZip(template);

  var doc = new Docxtemplater();
  doc.loadZip(zip);

  doc.setData({
    teamname: teamName,
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
    initial6: initials[5],
    advisor: advisorName,
    client: clientName
  });

  try {
    doc.render()
  } catch (error) {
    var e = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      properties: error.properties,
    }
    console.log(JSON.stringify({
      error: e
    }));
    throw error;
  }

  var buf = doc.getZip()
    .generate({
      type: 'nodebuffer'
    });

  fs.writeFileSync(path.resolve(__dirname, '../media/Download/' + teamName + '-' + fileName), buf);
};

var generateTemplateForAllTeams = function(course, templateName) {
  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database/chex.db');
  // Generate a template for each team in the database.
  db.each('SELECT NAME, ID FROM TEAM WHERE COURSE = ?', course, function(err, teamRow) {
    if (!teamRow) {
      console.log("Could not generate template, there are no teams in the database.");
      db.close();
      return;
    }
    // Find all student for this team and generate a template.
    db.all('SELECT NAME FROM STUDENT WHERE TEAM_ID = ?', teamRow.ID, function(err, studentRows) {
      console.log(teamRow.ID);
      console.log(studentRows);
      if (studentRows.length > 6) {
        console.log("A team cannot have more than 6 members.");
        db.close();
        return;
      }
      var names = Array(6).fill('');
      var initials = Array(6).fill('');
      var advisorName = '';
      var clientName = '';
      for (i = 0; i < studentRows.length; i++) {
        var name = studentRows[i].NAME;
        names[i] = name;
        initials[i] = getInitials(name);
      }

      // Get advisor and client info.
      db.get('SELECT ADVISOR.NAME, CLIENT.NAME' +
        'FROM TEAM' +
        'INNER JOIN ADVISOR ON TEAM.ADVISOR_ID=ADVISOR.ID' +
        'INNER JOIN CLIENT ON TEAM.CLIENT_ID=CLIENT.ID' +
        'WHERE TEAM.ID = ?',
        teamRow.ID,
        function(err, ACrow) {
          if (ACrow.ADVISOR.NAME)
            advisorName = ACrow.ADVISOR.NAME;

          if (ACrow.CLIENT.NAME)
            clientName = ACrow.CLIENT.NAME;
          generateTemplate(teamRow.NAME, names, initials, advisorName, clientName, templateName);
        });
    });
  }, function() {
    db.close();
  });
};

var getInitials = function(name) {
  var tokens = name.split(" ");
  return tokens[0].charAt(0) + tokens[tokens.length - 1].charAt(0);
};

module.exports = router;
