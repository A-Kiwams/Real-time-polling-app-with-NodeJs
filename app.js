const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser middleware
app.use(bodyParser.jason());
app.use(bodyParser.urlencoded({extended: true}));

// enable cors
app.use(cors());