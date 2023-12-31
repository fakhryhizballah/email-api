"use strict";
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const morgantyp = process.env.MORGAN_TYPE || 'dev';
app.use(express.json());
app.use(morgan(morgantyp));

const routes = require('./routes');
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('running on port', PORT);
});