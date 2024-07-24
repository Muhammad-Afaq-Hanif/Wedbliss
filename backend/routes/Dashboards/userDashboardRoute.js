const express = require("express");

const router = express.Router();

const userDashboardController = require("../../controllers/Dashboards/userDashboardController");

router.route("/vendors");

module.exports = router;
