module.exports = async (req, res, next) => {
  const token = req.cookies && req.cookies.token;
  if (token) {
    return next();
  }
  return res.send('pls login')
}