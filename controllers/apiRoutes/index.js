const router = require("express").Router();
const cryptoAPI = require("../../services/cryptoService")
const email = require("../../services/emailService");

// routes
router.route("/historical/").get(cryptoAPI.getHistoricalPrices)
router.route("/crypto/").get(cryptoAPI.requestOptions)
router.route("/emailInfo").post(email.sendEmailInfo);



module.exports = router;

