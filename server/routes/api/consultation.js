const express = require("express");
const router = express.Router();
const Consultation = require("../../models/Consultation");
const Practitioner = require("../../models/ProfilePractitioner");

router.get("/client/ongoing", async (req, res) => {
  try {
    const consultations = await Consultation.find({ client: req.query.client, current: true, new: false });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/client/previous", async (req, res) => {
  try {
    const consultations = await Consultation.find({ client: req.query.client, new: false, current: false });
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/newConsultation", async (req, res) => {
  try {
    const practitioners = await Practitioner.find();
    const practitioner = practitioners[Math.floor(Math.random() * practitioners.length)];
    console.log(practitioner)
    const newConsultation = new Consultation({
      client: req.body.client,
      practitioner: practitioner.email,
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
  try {
    const newConsultation = new Consultation({
      client: req.body.client,
      practitioner: req.body.practitioner,
      symptoms: req.body.symptoms,
      discomfortStart: req.body.discomfortStart,
      remarks: req.body.remarks,
    });
    const consultation = await newConsultation.save();
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/practitioner/ongoing", async (req, res) => {
  try {
    const consultations = await Consultation.find(
      { practitioner: req.query.practitioner, current: true, new: false }
    );
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/practitioner/previous", async (req, res) => {
  try {
    const consultations = await Consultation.find(
      { practitioner: req.query.practitioner, new: false, current: false }
    );
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/practitioner/new", async (req, res) => {
  try {
    const consultations = await Consultation.find(
      { practitioner: req.query.practitioner, new: true, current: true }
    );
    res.json({ consultations: consultations });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.put("/accept", async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate({ _id: req.body.id }, { new: false });
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.put("/add/activity", async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      { _id: req.body.id },
      { onetime: req.body.onetime, recurring: req.body.recurring });
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.put("/terminate", async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      { _id: req.body.id },
      { current: false });
    res.json(consultation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.delete("/reject", async (req, res) => {
  try {
    await Consultation.findByIdAndDelete({ _id: req.query.id });
    res.json("success");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
