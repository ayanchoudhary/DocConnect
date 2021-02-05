const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OneTimeActivitySchema = new Schema({
  //   practitioner: {
  //     type: Schema.Types.ObjectId,
  //     ref: "profile practitioners",
  //   },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  days: {
    type: [String],
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = OneTimeActivity = mongoose.model(
  "onetimeactivity",
  OneTimeActivitySchema
);
