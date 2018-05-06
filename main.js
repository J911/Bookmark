const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const cookieSession = require('./src/cookie-session');
require('dotenv').config();

const PORT =  process.env.PORT || 3000;

const app = express();

const router = require('./src/routes')

app.use(cookieSession);
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', router);

app.listen(PORT);
  