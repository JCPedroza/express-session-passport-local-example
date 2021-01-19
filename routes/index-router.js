const { Router } = require('express')

const indexControl = require('../controllers/index-control')

const indexRouter = new Router()

indexRouter.get('/', indexControl.get)

module.exports = indexRouter
