const express = require('express');

const erroController = require('../controllers/errorController');

const Router = express.Router();

Router.use(erroController);

module.exports = Router;