const express = require("express");
const routes = express.Router();

const base = require('../controllers');


const middleware = require('../middlewares');


routes.post('/email/send', middleware.login, base.sendEmail);


module.exports = routes;