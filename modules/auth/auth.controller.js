const express = require("express");
const router = express.Router();

const userService = require("../user/user.service");
const passwordService = require("./password.service");
const passport = require("passport");

router.get("/login", async (req, res) => {
  res.render("auth/login");
});
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  // Validate request
  if (!email || !password) {
    req.flash("error", "All fields are required");
    return res.redirect("/login");
  }
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      req.flash("error", info.message);
      return next(err);
    }
    if (!user) {
      req.flash("error", info.message);
      return res.redirect("/auth/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        req.flash("error", info.message);
        return next(err);
      }

      return res.redirect("/");
    });
  })(req, res, next);
});

router.get("/register", async (req, res) => {
  return res.render("auth/register");
});
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password: await passwordService.hash(password),
  };
  console.log(
    "🚀 ~ file: auth.controller.js ~ line 18 ~ router.post ~ user",
    user
  );

  await userService.create(user);
  res.send("User created");
});

module.exports = router;
