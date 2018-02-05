const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'ejs');

var profile = require('./profile');
app.use('/', profile);

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'yingcathyfan@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);

app.listen(8080, () =>{
    console.log('Listening at http://localhost:8080');
})
