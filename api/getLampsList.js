const { database } = require("./database")
const jwt = require("jsonwebtoken")
const secret = require("../secret")

const getLampsList = (req, res) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    res.status(401).json({ message: "There is no token" })
  }
  const token = authHeader

  const owner = jwt.verify(token,secret.jwtSecret).name

  database.getLampsList(owner).then((models) => {
    res.status(200).json( models )
  })
}

module.exports = { getLampsList }