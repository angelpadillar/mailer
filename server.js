require('dotenv').config();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const log = console.log;

//step 1 transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/'
}));

//step 2 
let mailOptions = {
    from: 'angelpadillaleonel@gmail.com',
    to: 'lucithegod@gmail.com',
    subject: 'Testing and testing',
    text: 'It works!! -Sent from server.js with process env',
    attachments: [
        { filename: 'login_bg.JPG', path: './login_bg.JPG' }
    ],
    template: 'index'
};

//step 3 
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error occurs at sendMail function', err);
    } else {
        console.log('Email successfuly sent!');
    }
});