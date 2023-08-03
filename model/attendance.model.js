const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Date,
  },
  weeklyRecords: {
    type: [Map],
    required: true,
  },
  monthlyRecords: {
    type: [Map],
    required: true,
  },
});

const attendanceCollection = mongoose.model(
  "attencedanceCollection",
  attendanceSchema
);

module.exports = attendanceCollection;
