const LocalStrategy = require("passport-local").Strategy;
const userService = require("../../modules/user/user.service");
const passwordService = require("../../modules/auth/password.service");

function init(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        // Login
        // check if email exists
        const user = await userService.findByEmail(email);
        if (!user) {
          return done(null, false, { message: "No user with this email" });
        }

        passwordService
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              return done(null, user, { message: "Logged in succesfully" });
            }
            return done(null, false, { message: "Wrong username or password" });
          })
          .catch((err) => {
            return done(null, false, { message: "Something went wrong" });
          });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    userService.getById(id).then((user, err) => {
      done(err, user);
    });
  });
}

module.exports = init;
