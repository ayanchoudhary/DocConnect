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

router.post("/appointment", async (req, res) => {
  try {
    const onetime = req.body.onetime;
    const recurring = req.body.recurring;
    let oneTimeActivities = [];
    let recurringActivities = [];
    for (let i=0; i < onetime.length; i++) {
      const result = await OneTimeActivity.findById({ _id: onetime[i] });
      oneTimeActivities.push(result);
    }
    for (let i=0; i < recurring.length; i++) {
      const result = await RecurringActivity.findById({ _id: recurring[i] });
      recurringActivities.push(result);
    }
    res.json({
      "oneTimeActivities": oneTimeActivities,
      "recurringActivities": recurringActivities
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

module.exports = router;
