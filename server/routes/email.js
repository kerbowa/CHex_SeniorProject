var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.post('/', function(req, res) {
	/*
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('database/chex.db');
	*/
	console.log('In email.js');

	//Accound used to send email
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'throwaway19238@gmail.com',
			pass: 'Alphabet'
		}
	});
	console.log('Created Transporter');

	//Email info
	var mailOptions = {
		//Sender
		from: 'throwaway19238@gmail.com',
		
		//Receiver(s)
		to: 'cowking000@yahoo.com' + 'dereknguyen1994@gmail.com',
		
		//Subject line
		subject: req.body.subject,
		
		//Plain text body
		text: req.body.textbody
	};
	console.log('Created mailOptions');
	console.log('Subject: ' + req.body.subject);
	console.log('Message: ' + req.body.textbody);

	//Sending email
	transporter.sendMail(mailOptions, function(error, info) {
		if (error)
			console.log(error);
		else
			console.log('Email sent:' + info.response);
		
		transporter.close();
	});
	console.log('Sent Mail');
});

module.exports = router;
