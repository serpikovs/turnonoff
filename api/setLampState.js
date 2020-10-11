const { database } = require("./database")

const setLampState = (req, res) => {
  database.setLampState(req.body.adress, req.body.state)
}

module.exports = { setLampState }
