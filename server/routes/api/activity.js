const express = require("express");
const router = express.Router();
const OneTimeActivity = require("../../models/OneTimeActivity");
const RecurringActivity = require("../../models/RecurringActivity");

router.get("/", async (_req, res) => {
  try {
    const oneTimeActivities = await OneTimeActivity.find();
    const recurringActivities = await RecurringActivity.find();
    res.json({
      "oneTimeActivities": oneTimeActivities,
      "recurringActivities": recurringActivities
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
