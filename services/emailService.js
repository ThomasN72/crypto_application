const transporter = require("../config/nodemailer")
const logger = require("winston"); 

module.exports = {
  sendEmailInfo: function (req, res) {
    console.log("Begin Sending Email")
    //"http://www.nytimes.com"
    let mailOpts = {
      from: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>`,
      to: process.env.EMAIL_RECEIPENT || "EMAIL_RECEIPENT",
      subject: req.body.subject,
      text: `${req.body.firstName} (${req.body.email}) says: ${req.body.message}`
    };
    transporter.sendMail(mailOpts, (err, response) => {
      if (err) {
        logger.error(`Error sending email. Error: ${err}`);
        console.log('err', err)
        res.json(err);
      } else {
        logger.info(`An email has sent successfully from: ${req.body.email}`);
        console.log("response", response)
        res.json(response);
      }
    });
  },
};