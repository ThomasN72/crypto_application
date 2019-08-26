const router = require("express").Router();
const email = require("../../services/emailService");

router.route("/")
  .post(email.sendEmailInfo);

module.exports = router;
