const { Router } = require('express')

const loginControl = require('../controllers/login-control')

const loginRouter = new Router()

loginRouter
  .route('/')
  .get(loginControl.get)
  .post(loginControl.post)

module.exports = loginRouter
