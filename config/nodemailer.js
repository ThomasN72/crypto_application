const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.EMAIL_HOST || "EMAIL_HOST",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_USER || "EMAIL_USER",
    pass: process.env.EMAIL_PASS || "EMAIL_PASS"
  }
});

module.exports = transporter;
