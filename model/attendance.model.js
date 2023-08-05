const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  weeklyRecords: {
    type: [{}],
    required: true,
  },

  monthlyRecords: {
    type: [[{}]],
    required: true,
  },
});

const attendanceCollection = mongoose.model(
  "attencedanceCollection",
  attendanceSchema
);

module.exports = attendanceCollection;
