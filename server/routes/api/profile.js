const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/newPractitioner",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Practitioner Profile Route");
  }
);

module.exports = router;
