const express = require("express");

const {
  signup_get,
  signup_post,
  login_get,
  login_post,
  logout_get,
  profile_get
} = require("../controllers/authController");

const router = express.Router();

router.route("/");

// GET AND POST
router.route("/signup").post(signup_post).get(signup_get);

// GET AND POST
router.route("/login").post(login_post).get(login_get);

// LOGOUT ROUTE
router.route("/logout").get(logout_get);

//PROFILE ROUTE
router.route("/profile").get(profile_get);

module.exports = router;
