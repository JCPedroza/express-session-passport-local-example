function get (req, res, nxt) {
  const username = req.user.username
  const locals = { username }
  res.render('logout', locals)
}

function post (req, res, nxt) {
  req.logout()
  res.redirect('/login')
}

module.exports = {
  get,
  post
}
