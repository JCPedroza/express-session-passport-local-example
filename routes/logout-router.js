const { Router } = require('express')

const logoutControl = require('../controllers/logout-control')

const logoutRouter = new Router()

logoutRouter
  .route('/')
  .get(logoutControl.get)
  .post(logoutControl.post)

module.exports = logoutRouter
