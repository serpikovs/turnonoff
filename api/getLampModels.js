const { database } = require("./database")

const getLampModels = (req, res) => {
  database.getLampModels().then((models) => res.status(200).json({ models }))
}

module.exports = { getLampModels }
