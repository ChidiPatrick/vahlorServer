const mongoose = require("mongoose");

/* 
1. Make  post request to add attendance data to the server
2. Retrieve users attendance data




*/

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
