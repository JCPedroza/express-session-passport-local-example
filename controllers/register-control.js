const { hash } = require('bcrypt')

const User = require('../models/user-model')

function get (req, res, nxt) {
  const title = 'Register'
  const locals = { title }
  res.render('register', locals)
}

async function post (req, res, nxt) {
  try {
    const user = {
      username: req.body.username,
      password: await hash(req.body.password, 10),
      email: req.body.email
    }
    await User.create(user)
    res.redirect('/')
  } catch (err) {
    nxt(err)
  }
}

module.exports = {
  get,
  post
}
