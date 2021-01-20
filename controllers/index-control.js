function get (req, res, nxt) {
  const title = 'Index'
  const username = req.user.username
  const locals = { title, username }
  res.render('index', locals)
}

module.exports = {
  get
}
