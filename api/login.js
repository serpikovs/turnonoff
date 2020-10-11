const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { database } = require("./database")
const secret = require("../secret")

const login = (req, res) => {
  const tokenLifeTimeSec = 600
  const { name, password } = req.body

  database
    .getUserByName(name)
    .then((user) => {
      const isValid = bcrypt.compareSync(password, user.password)
      const role = user.role

      if (isValid) {
        const token = jwt.sign(
          { name: name, exp: Math.floor(Date.now() / 1000) + tokenLifeTimeSec },
          secret.jwtSecret
        )
        res.status(200).json({ token, role })
      } else {
        res.status(401).json({ message: "login failed" })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(401).json({ message: "No user" })
    })
}

module.exports = { login }
