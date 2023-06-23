const express = require("express");
require('dotenv').config();
const sendMail = require('./utils/sendmail')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));


// app.get('/', function(req, res) {
//     res.render('index');
//   });

  const templatePath = path.join(__dirname, 'index.ejs');
ejs.renderFile(templatePath, (error, renderedHtml) => {
  if (error) {
    console.log('Error rendering EJS template:', error);
    return;
  }
  sendMail();
})



const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})





