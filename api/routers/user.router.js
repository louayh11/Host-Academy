const express = require("express");
const Userouter = express.Router();
const authenticateUser = require("../middlewares/authenticateUser");

const {
  GetUserUnfinishedCourses,
  SubscribeToCourse,
  GenerateCertificate,
  GetUserSubscribedCourses,
  GetUsers,
  GetAllUsers,
  getUserRole,
  GetCertificatesForUser,
  getUserProgress,
} = require("../Controllers/userController");

Userouter.post("/subscribe", SubscribeToCourse);
Userouter.post("/generate-certificate", GenerateCertificate);
Userouter.get("/certificates/user/:userId", GetCertificatesForUser);
Userouter.get("/user/:userId/subscribed-courses", GetUserSubscribedCourses);
Userouter.get("/user/:userId/unfinished-courses", GetUserUnfinishedCourses);
Userouter.get("/users", GetUsers);
Userouter.get("/All/users", GetAllUsers);
Userouter.get("/get-user-role/:uid", getUserRole);
Userouter.post("/progress", getUserProgress);

module.exports = Userouter;
