const router = require("express").Router();
const cryptoAPI = require("../../services/cryptoService")

// routes
router.route("/historical/").get(cryptoAPI.getHistoricalPrices)
router.route("/crypto/").get(cryptoAPI.requestOptions)

module.exports = router;

