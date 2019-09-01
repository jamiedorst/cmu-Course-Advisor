const passportLocal = require('passport-local').Strategy;
const User = require('../models/schema');

module.exports = (passport) => {
  passport.use(new passportLocal({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    User.findOne({
      username: username
    }, (err, user) => {
      if (err) {
        console.log(err);
        return done(err);
      }

      if (!user) {
        return done(null, false, {
          message: 1
        });
      }

      if (!user.comparePassword(password, user.password)) {
        return done(null, false, {
          message: 2
        });
      }

      return done(null, user);
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });
}