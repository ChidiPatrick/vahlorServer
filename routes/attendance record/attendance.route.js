const express = require("express");

const {
  createAttendanceCollection,
  addAttendanceRecord,
} = require("./attendance.controller");

const attendanceRoute = express.Router();

attendanceRoute.post("/createAttendanceCollection", createAttendanceCollection);
attendanceRoute.post("/addAttendanceRecord", addAttendanceRecord);
attendanceRoute.get("getUser");

module.exports = attendanceRoute;
