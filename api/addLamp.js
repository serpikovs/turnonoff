const { database } = require("./database")

const addLamp = (req, res) => {
  const newLamp = req.body
  let errors = {}

  if (!newLamp.adress) errors.adress = "wrong adress"
  if (!newLamp.model) errors.model = "wrong model"

  database.getUserByName(newLamp.owner).then((user) => {
    if (!user) errors.owner = "wrong owner"

    if (Object.keys(errors).length == 0)
      database
        .addLamp(newLamp)
        .then((result) => res.status(200).json({ result }))
    else {
      res.status(400).json({ errors })
    }
  })
}

module.exports = { addLamp }
