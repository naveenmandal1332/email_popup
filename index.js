const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

//email popup:
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.ORGANIZATION_EMAIL,
        pass: process.env.PASSWORD,
    }
});

const mailOptions = {
    from: process.env.ORGANIZATION_EMAIL,
    to: process.env.USER_EMAIL,
    subject: "Alert!",
    text: "Someone login with your gmail Please makes sure it was you else you can report"
}

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    }
    else{
        console.log("email has been sent", info.response);
    }
});


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})