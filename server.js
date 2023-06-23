const express = require("express");
require('dotenv').config();
const sendMail = require('./utils/sendmail')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.post("/sendmail", (req, res) => {
  sendMail();
  res.send("send email success");
});

// app.get('/', function(req, res) {
//     res.render('index');
//   });




const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})





