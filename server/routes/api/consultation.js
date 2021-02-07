const express = require("express");
const router = express.Router();
const Consultation = require("../../models/Consultation");
const Practitioner = require("../../models/ProfilePractitioner");

router.get("/client/ongoing", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const consultations = await Consultation.find({ client: req.query.client, current: true });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/client/previous", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const consultations = await Consultation.find({ client: req.query.client, new: false });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/newConsultation", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const practitioners = await Practitioner.find();
    const practitioner = practitioners[Math.random()%practitioners.length].email;
    const newConsultation = new Consultation({
      client: req.body.client,
      practitioner: practitioner,
      symptoms: req.body.symptoms,
      discomfortStart: req.body.discomfortStart,
    });
    const consultation = await newConsultation.save();
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/renewConsultation", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const newConsultation = new Consultation({
      client: req.body.client,
      practitioner: req.body.practitioner,
      symptoms: req.body.symptoms,
      discomfortStart: req.body.discomfortStart,
    });
    const consultation = await newConsultation.save();
    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/practitioner/ongoing", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const consultations = await Consultation.find({ practitioner: req.query.practitioner, current: true });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/practitioner/previous", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const consultations = await Consultation.find({ practitioner: req.query.practitioner, new: false });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/practitioner/new", async (req, res) => {
  // const practitioner = await Practitioner.findById(req.user.id)
  try {
    const consultations = await Consultation.find({ practitioner: req.query.practitioner, new: true, current: true });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
