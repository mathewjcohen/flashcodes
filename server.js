// this snippet should be in: >ProjectDir/server.js
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(session({secret: "thisisasecret", resave: false, saveUninitialized: true}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // for sending json
app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');
routes_setter(app)

app.listen(8002);