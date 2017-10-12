var express = require('express');
var router = express.Router();

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

//Load the docx file as a binary
var template = fs
	.readFileSync(path.resolve(__dirname, 'Sprint-task-board-templte.docx'), 'binary');

function generateTaskBoard(teamName, members) {
}

router.get('/', function(req, res, next) {
	var zip = new JSZip(content);

	var doc = new Docxtemplater();
	doc.loadZip(zip);

	doc.setData({
			first_name: 'John',
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

	fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);

  res.json({
    users: [
      {_id: 1, email: 'The backend is connected'},
      {_id: 2, email: 'Everything is running'},
      {_id: 3, email: 'If you can see this'}
    ]
  })
});

module.exports = router;
