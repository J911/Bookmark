const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

const api = require('./api/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const session = require('express-session');

app.use(session({
 secret: '!@#SECURE@#$',
 resave: false,
 saveUninitialized: true
}));

app.use('/v1', api);

app.listen(3000);
  