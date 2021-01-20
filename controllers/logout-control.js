function get (req, res, nxt) {
  const title = 'Logout'
  const username = req.user.username
  const locals = { title, username }
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
