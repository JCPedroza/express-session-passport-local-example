function get (req, res, nxt) {
  const username = req.user.username
  const locals = { username }
  res.render('index', locals)
}

module.exports = {
  get
}
