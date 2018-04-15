const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const cookieSession = require('./src/cookie-session');
require('dotenv').config();

const conn = require('./src/mysql');

const PORT =  process.env.PORT || 3000;

const app = express();

const api = require('./src').api;

app.use(cookieSession);
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', api);

app.listen(PORT);
  