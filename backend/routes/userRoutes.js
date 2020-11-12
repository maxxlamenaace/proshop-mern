const express = require("express");
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/login", authUser);
router.route("/register").post(registerUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;