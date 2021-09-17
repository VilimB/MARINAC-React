require("dotenv").config();
var express = require("express");
const nodemailer = require("nodemailer");
var router = express.Router();

const {
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_PASSWORD,
  DB_DATABASE,
  GMAIL_USER,
  GMAIL_PASSWORD,
} = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
});

router.post("/send", function (req, res, next) {
  const { fullname, phone, email, message } = req.body;
  console.log(req.body);
  res.json({ message: "success" });
  transporter.sendMail({
    to: GMAIL_USER,
    subject: "New mail from MARINAC website",
    html:
      '<div style="width: 400px;text-align: center;font-weight: bold;background-color: aliceblue;min-height: 150px;padding: 20px;border: 4px solid lightsteelblue;border-radius: 10px;font-size: 18px;">' + 'Ime i prezime: ' + fullname + '<br/>' + 'Email: ' + email + '<br/>' + 'Broj mobitela: ' + phone + '<br/>' + 'Poruka: ' + message + '<br/>' + '</div>',
  });
});

module.exports = router;
