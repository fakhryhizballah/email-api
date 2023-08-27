const express = require("express");
const routes = express.Router();

const base = require('../controllers');


const middleware = require('../middlewares');


routes.get('/email/send', base.sendEmail);


module.exports = routes;