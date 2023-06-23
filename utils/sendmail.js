const nodemailer = require('nodemailer')
require('dotenv').config()

const email_config = require('../config/emailConfig');

const message_options = {
    to:"jonathan.mwaniki@thejitu.com",
    from:"kipoech.aron@thejitu.com",
    subject:"WEEKLY REPORT",
    html:renderedHtml
}

const transporter = nodemailer.createTransport(email_config);

transporter.verify(function(error, success) {
    if (error) {
          console.log(error);
          console.log('server not running');
    } else {
          console.log('Server is ready to take our messages');
    }
  });


async function sendMail(){
    try {
       let results= await transporter.sendMail(message_options);
       console.log(results);
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = sendMail;