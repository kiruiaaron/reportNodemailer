require('dotenv').config();
const nodemailer = require('nodemailer');
const ejs = require('ejs');

const email_config = require('../config/emailConfig');

const transporter = nodemailer.createTransport(email_config);

transporter.verify(function(error, success) {
    if (error) {
          console.log(error);
          console.log('server not running');
    } else {
          console.log('Server is ready to take our messages');
    }
  });

  const  sendMail = (subject) => {
    ejs.renderFile('../views/index.ejs', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const message_options = {
            to:process.env.Email_Receiver,
            from:process.env.Email_USER,
            subject:subject,
            html:data,
          attachments: [
            {
              filename: 'REPORT ON WEEKLY PROGRESS WEEK 8.docx',
              path: '/src/REPORT ON WEEKLY PROGRESS WEEK 8.docx',
              cid: 'REPORT'
            }
          ]
        };
  
        transporter.sendMail(message_options, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log('Message sent: %s', info.messageId);
          }
        });
      }
    });
};

module.exports = sendMail;