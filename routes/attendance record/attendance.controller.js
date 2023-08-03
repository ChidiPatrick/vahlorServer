const attendanceCollection = require("../../model/attendance.model");

const createAttendanceDocument = async (req, res) => {
  await attendanceCollection.create(req.body).then(() => {
    return res.status(200);
  });
};

module.exports = { createAttendanceDocument };
