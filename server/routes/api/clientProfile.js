const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const _ = require("lodash");

const User = require("../../models/ProfileClient");
const Prescription = require("../../models/Prescription");

router.post(
  "/newClient",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      user = new User({
        name,
        email,
        avatar,
      });

      await user.save();
      res.send("Client registered");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const email = req.params.email;
    const profile = await User.findOne({ email: email })
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/prescription", async (req, res) => {
  try {
    const email = req.query.email;
    const prescriptions = await Prescription.find({ email: email })
    res.json(prescriptions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/prescription", async (req, res) => {
  try {
    if(!req.files) {
        res.send({
            status: false,
            message: 'No file uploaded'
        });
    } else {
        //loop all files
        _.forEach(_.keysIn(req.files.prescriptions), (key) => {
            let photo = req.files.prescriptions[key];
            if (photo.mv == undefined) photo = req.files.prescriptions;

            //move photo to uploads directory
            const url = './uploads/prescriptions/' + photo.name;
            photo.mv(url);

            const newPrescription = new Prescription({
              title: photo.name,
              email: req.body.email,
              url: '/uploads/prescriptions/' + photo.name
            });
            const prescription = newPrescription.save();
        });

        //return response
        res.send({
            status: true,
            message: 'Files are uploaded',
        });
    }
} catch (err) {
    res.status(500).send(err);
}
})

module.exports = router;
