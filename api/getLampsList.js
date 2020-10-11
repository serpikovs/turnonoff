const { database } = require("./database")

const getLampsList = (req, res) => {
  database.getLampsList().then((models) => res.status(200).json( models ))
}

module.exports = { getLampsList }