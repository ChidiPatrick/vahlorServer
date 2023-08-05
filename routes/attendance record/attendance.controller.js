const attendanceCollection = require("../../model/attendance.model");

async function createAttendanceCollection(req, res) {
  await attendanceCollection.createCollection().then(() => res.status(200));
}

//// Add attendance record ////
async function addAttendanceRecord(req, res) {
  try {
    const attendanceDoc = await attendanceCollection.findOneAndUpdate(
      { weeklyRecords },
      req.body,
      {
        new: true,
      }
    );
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(attendanceDoc);
}

module.exports = { createAttendanceCollection, addAttendanceRecord };
