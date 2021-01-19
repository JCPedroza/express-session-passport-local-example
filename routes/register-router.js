const { Router } = require('express')

const registerControl = require('../controllers/register-control')

const registerRouter = new Router()

registerRouter
  .route('/')
  .get(registerControl.get)
  .post(registerControl.post)

module.exports = registerRouter
