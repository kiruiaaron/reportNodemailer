require('dotenv').config()

const email_config=

{

    host: 'Outlook',

    port: 567,

    secure: false,

    requireTLS: true,

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PWD

    }

}

module.exports = email_config;