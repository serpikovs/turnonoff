const {database} = require("./database")

const setLampState = (req, res) => {
    console.log(req.body)

    database.setLampState(req.body.adress, req.body.state)
    
  }
  
  module.exports = { setLampState }