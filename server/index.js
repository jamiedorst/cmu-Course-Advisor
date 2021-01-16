'use strict';

import db from '/db/index.js'

// Base Code
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

// TODO: Unsure what this is doing
const passport = require('passport');
const session = require('express-session');
const db = require('./db')

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

// TODO: In starter code but unsure if this is needed. 
var cors = require('cors')
app.use(cors()) 

require('./routes/router.js')(app);
require('./services/passport')(passport);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db()

server.listen(port, () => {
  console.log('Example app listening on port 5000!');
});









