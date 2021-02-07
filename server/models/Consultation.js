const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultationSchema = new Schema({
  //   practitioner: {
  //     type: Schema.Types.ObjectId,
  //     ref: "profile practitioners",
  //   },
  client: {
    type: String,
    required: true
  },
  practitioner: {
    type: String,
    required: true,
  },
  disease: {
    type: String
  },
  symptoms: {
    type: [String]
  },
  discomfortStart: {
    type: String,
  },
  onetime: {
    type: [Schema.Types.ObjectId],
    ref: "onetimeactivity",
  },
  recurring: {
    type: [Schema.Types.ObjectId],
    ref: "recurringactivity",
  },
  current: {
    type: Boolean,
    required: true,
    default: true,
  },
  new: {
    type: Boolean,
    required: true,
    default: true,
  }
});

module.exports = OneTimeActivity = mongoose.model(
  "consultation",
  ConsultationSchema
);
