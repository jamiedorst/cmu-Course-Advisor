'use strict';
// Base Code
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

// TODO: Unsure what this is doing
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');


// Setup express app
const app = express();

// TODO: Unsure what this is doing
const server = require('http').Server(app);
// const io = require('socket.io')(server);

// const tools = require('./custom_modules/tools.js');
const port = 5000;

app.use(
  bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));

//TODO: Unsure what this is doing
app.use(session({
  secret: 'oasissupersecretpass',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 3600000
  }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require('./routes/router.js')(app);
require('./services/passport')(passport);

mongoose.connect('mongodb://localhost:27017/oasis', {
  useNewUrlParser: true
});

mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

// console.log(process.env.PROD);
server.listen(port, () => {
  console.log('Example app listening on port 5000!');
});






