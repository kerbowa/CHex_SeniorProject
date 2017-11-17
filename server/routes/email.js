var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

router.post('/', function(req, res) {
	//Account used to send email
	var transporter = nodemailer.createTransport({
		service: 'hotmail',
		auth: {
			user: 'chextest@outlook.com',
			pass: 'compsci190'
		}
	});

	var emailInfo = req.body;

	//Loops through recipients to send an email to each one
	emailInfo.Recipient.forEach(function(value) {
		//Email info
		var mailOptions = {
			//Sender
			from: 'chextest@outlook.com',

			//Receiver(s)
			to: value,

			//Subject line
			subject: emailInfo.Subject,

			//Plain text body
			text: emailInfo.Textbody
		};
		console.log('Created mailOptions');
		console.log('From: ' + mailOptions.from);
		console.log('To: ' + mailOptions.to);
		console.log('Subject: ' + mailOptions.subject);
		console.log('Message: ' + mailOptions.text);

		//Sending email
		transporter.sendMail(mailOptions, function(error, info) {
			if (error)
			{
				console.log(error);
				res.json({
					Status: false,
					message: 'Email has failed.'
				})
			}
			else
			{
				console.log('Email sent:' + info.response);
				res.json({
					Status: true,
					message: 'Email has been sent.'
				})
			}

			transporter.close();
		});
	});
});

module.exports = router;
