const express = require("express");
const routes = express.Router();
const AuthController = require('./../../controllers/v1/AuthController');
const AuthValdiator = require('./../../validations/v1/AuthValidator');

const {authenticate} = AuthController;
const {validateAuthLogin} = AuthValdiator;

routes.get("/o/token",validateAuthLogin, authenticate);

module.exports = routes;
