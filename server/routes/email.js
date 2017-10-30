var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.get('/', function(req, res, next)
{
	/*
	var sqlite3 = require('sqlite3').verbose();
	var db = new sqlite3.Database('database/chex.db');
	*/
	
	//Accound used to send email
	var transporter = nodemailer.createTransport('SMTP',
	{
		service: 'gmail',
		auth:
		{
			user: 'throwaway19238@gmail.com',
			pass: 'Alphabet'
		}
	});

	//Email info
	var mailOptions =
	{
		//Sender
		from: 'throwaway19238@gmail.com',
		
		//Receiver(s)
		to: 'dereknguyen1994@gmail.com',
		
		//Subject line
		subject: req.query.subject,
		
		//Plain text body
		text: req.query.message
	};

	//Sending email
	transporter.sendMail(mailOptions, function(error, info)
	{
		if (error)
			console.log(error);
		else
			console.log('Email sent:' + info.response);
		
		transporter.close();
	};
});

module.exports = router;
