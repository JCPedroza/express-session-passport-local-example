const passport = require('passport')

function get (req, res, nxt) {
  const status = req.flash('error')
  const locals = { status }
  res.render('login', locals)
}

const post = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
})

module.exports = {
  get,
  post
}
