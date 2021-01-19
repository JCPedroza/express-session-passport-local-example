require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const passport = require('passport')

const auth = require('./auth/authentication')
const db = require('./models/db')
const registerRouter = require('./routes/register-router')
const loginRouter = require('./routes/login-router')
const indexRouter = require('./routes/index-router')
const logoutRouter = require('./routes/logout-router')

const staticPath = path.join(__dirname, '/public')

const mongooseConnection = db.getConnection()
const mongoStore = new MongoStore({ mongooseConnection })
const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: mongoStore
}

const app = express()
app.set('view engine', 'pug')
app.locals.basedir = staticPath

db.initialize()
auth.initialize()

app.use(session(sessionOptions))
app.use(express.static(staticPath))
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use('/register', auth.checkNotAuthenticated, registerRouter)
app.use('/login', auth.checkNotAuthenticated, loginRouter)
app.use('/', auth.checkAuthenticated, indexRouter)
app.use('/logout', auth.checkAuthenticated, logoutRouter)

module.exports = app
