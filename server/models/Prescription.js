const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
  //   practitioner: {
  //     type: Schema.Types.ObjectId,
  //     ref: "profile practitioners",
  //   },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

module.exports = OneTimeActivity = mongoose.model(
  "prescription",
  PrescriptionSchema
);
