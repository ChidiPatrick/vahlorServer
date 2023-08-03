const express = require("express");

const createAttendanceDocument = require("./attendance.controller");

const attendanceRoute = express.Router();

attendanceRoute.post("/");
attendanceRoute.get();

module.exports = attendanceRoute;
