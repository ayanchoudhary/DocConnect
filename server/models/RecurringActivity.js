const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecurringActivitySchema = new Schema({
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
  dates: {
    type: [String],
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = RecurringActivity = mongoose.model(
  "recurringactivity",
  RecurringActivitySchema
);
