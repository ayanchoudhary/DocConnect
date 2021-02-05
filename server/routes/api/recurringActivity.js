const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const RecurringActivity = require("../../models/RecurringActivity");
const Practitioner = require("../../models/ProfilePractitioner");

router.post("/newActivity2", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const newActivity = new RecurringActivity({
      title: req.body.title,
      description: req.body.description,
      dates: req.body.dates,
      time: req.body.time,
    });
    const activity = await newActivity.save();
    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
