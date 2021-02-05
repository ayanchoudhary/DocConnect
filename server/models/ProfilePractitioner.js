const mongoose = require("mongoose");

const ProfilePractitionerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  prescriptioncost: {
    type: Number,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
});

module.exports = ProfilePractitioner = mongoose.model(
  "profile practitioner",
  ProfilePractitionerSchema
);
