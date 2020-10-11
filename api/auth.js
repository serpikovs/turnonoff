const jwt = require("jsonwebtoken")
const secret = require("../secret")

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    res.status(401).json({ message: "There is no token" })
  }
  const token = authHeader

  try {
    if (jwt.verify(token, secret.jwtSecret)) {
      console.log("validation ok!")
      next()
    }
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      //res.redirect(401,"")
      res.status(401).json({ message: e })
    }
  }
}
