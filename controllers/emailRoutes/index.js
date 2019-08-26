const router = require("express").Router();
const emailInfo = require("./emailInfo");

// routes
router.use("/sendemail", emailInfo);

module.exports = router;
