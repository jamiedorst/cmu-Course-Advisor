'use strict';

// Base Code

// TODO: Unsure what this is doing
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


const cors = require('cors')
const express = require('express');
require('dotenv').config();

const connectDB = require('./db')

//Connect to database
connectDB()

// Setup express app
const app = express();
const port = process.env.PORT || 5000;


require('./routes/router.js')(app);
require('./services/passport')(passport);

app.use(cors())
app.use(express.json())
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



// TODO: Unsure what this is doing
//const server = require('http').Server(app);

// const io = require('socket.io')(server);
// const tools = require('./custom_modules/tools.js');

// app.use(
//   bodyParser.urlencoded({
//   extended: false
// }));

//app.use(bodyParser.json());
//app.use(express.static(__dirname + '/src'));

//TODO: Unsure what this is doing
// app.use(session({
//   secret: 'oasissupersecretpass',
//   saveUninitialized: false,
//   resave: false,
//   cookie: {
//     maxAge: 3600000
//   }
// }));

// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());









