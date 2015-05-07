var jade = require('jade');
var juice = require('juice');
var nodemailer = require('nodemailer');

transporter = nodemailer.createTransport({
	auth: {
		user: 'mailer@omnilingo.ru',
		pass: 'cer3000',
	},
	host: 'smtp.yandex.ru',
	port: '465',
	secure: true
});


var opts = {
	from: 'mailer@omnilingo.ru',
	to: ['desade4me@gmail.com'],
	subject: 'Рассылка',
	html: juice(jade.renderFile(__dirname + '/templ/mail.jade')),
	attachments: [
		{
			filename: 'image.png',
			path: __dirname + '/images/body/god.png',
			cid: 'body_image'
		},
		{
			filename: 'social_twitter.png',
			path: __dirname + '/images/design/twitter.png',
			cid: 'social_twitter'
		},
		{
			filename: 'social_facebook.png',
			path: __dirname + '/images/design/facebook.png',
			cid: 'social_facebook'
		}
	]
}


transporter.sendMail(opts, function(err, info) {
	console.log('ok');
});