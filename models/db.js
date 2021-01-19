const { connect, connection } = require('mongoose')

const DBURL = process.env.DBURL
const logMsg = `\n  >> DB connected to ${DBURL}\n`
const logFun = () => console.log(logMsg)

const mongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}

function initialize () {
  connect(DBURL, mongoOptions, logFun)
}

function getConnection () {
  return connection
}

module.exports = {
  initialize,
  getConnection
}
