const User = require("../models/User");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 4 * 60 * 60;

const handleErrors = (err) => {
  let errors = {
    email: "",
    username: "",
    password: "",
  };

  if (err.message === "incorrect email or username") {
    errors.email = "That email or username is not registered";
  }
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // Duplicate Error code
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  // Validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const signup_get = (req, res) => {
  res.render("signup");
};

const login_get = (req, res) => {
  res.render("login");
};

const profile_get = (req, res) => {
  const user = res.locals.user;
  res.render("profile", { user });
};

const signup_post = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(404).json({ errors });
  }
};

const login_post = async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const user = await User.login(identifier, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: maxAge });
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
  profile_get,
};
