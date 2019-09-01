const express = require('express');
const passport = require('passport');
const path = require('path');
const url = require('url');

const router = express.Router();
const User = require('../models/schema.js');
const axios = require('axios');

function createError(path, status, error) {
  return url.format({
    pathname: path,
    query: {
      status: status,
      error: error
    }
  });
}

module.exports = app => {
  app.post('/api/login', (req, res, done) => {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return done(err);
      } else if (!user) {
        res.redirect(createError('/login', 500, info.message));
      } else {
        req.login(user, errLogin => {
          if (errLogin) {
            return done(errLogin);
          }
          return res.redirect('/api/app');
        });
      }
    })(req, res, done);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  function loggedIn(req, res, done) {
    if(req.user) {
      done();
    } else {
      res.redirect('/login');
    }
  }

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

  app.post('/api/register', (req, res) => {
    // passwords do not match
    if (req.body.password !== req.body.passwordConf) {
      return res.redirect(createError('/registration', 400, 1));
    }

    // one or more required fields are not present
    if (!req.body.password || !req.body.username || !req.body.passwordConf) {
      return res.redirect(createError('/registration', 400, 2));
    }

    // check login
    User.findOne({
      username: req.body.username
    }, (err, user) => {
      if (err) {
        return res.redirect(createError('/registration', 400, 3));
      } else {
        if (user) {
          // user already exists
          return res.redirect(createError('/registration', 400, 4));
        } else {
          var record = new User();
          record.email = req.body.email ?
            req.body.email :
            "none",
            record.username = req.body.username,
            record.password = record.hashPassword(req.body.password)

          record.save((err, newuser) => {
            // error saving user
            if (err) {
              return res.redirect(createError('/registration', 400, 5));
            } else {
              // sign in as user
              return res.redirect('/login');
            }
          })
        }
      }
    });
  });

  app.get('/api/app', loggedIn,(req, res) => {
    res.sendFile(path.join(__dirname +'/../src/html/index2.html'));
  });

};
