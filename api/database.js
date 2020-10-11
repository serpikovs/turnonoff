const mysql = require("mysql2/promise")
const secret = require("../secret")

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "lamponoff",
  password: secret.mySqlPassword,
  charset: "utf8",
})

const database = {
  getUsers() {
    return mySqlConnection
      .then((connection) => connection.execute("SELECT * FROM users"))
      .then((data) =>
        data[0].map((row) => {
          return { id: row.id, name: row.name }
        })
      )
  },
  getUserByName(name) {
    return mySqlConnection
      .then((connection) =>
        connection.execute("SELECT * FROM users WHERE name= ? ", [name || ""])
      )
      .then(
        (data) =>
          data[0].map((row) => {
            return {
              id: row.id,
              name: row.name,
              password: row.password,
              role: row.role,
            }
          })[0]
      )
  },

  getLampModels() {
    return mySqlConnection
      .then((connection) => connection.execute("SELECT * FROM lampModels"))
      .then((data) =>
        data[0].map((row) => {
          return { id: row.id, name: row.name }
        })
      )
  },

  getLampsList(owner) {
    return mySqlConnection
      .then((connection) =>
        connection.execute("SELECT * FROM lamps WHERE owner = ?", [owner])
      )
      .then((data) =>
        data[0].map((row) => {
          return {
            model: row.model,
            adress: row.adress,
            owner: row.owner,
            state: row.state,
          }
        })
      )
  },

  addLamp(newLamp) {
    return mySqlConnection
      .then((connection) =>
        connection.execute(
          "REPLACE INTO lamps (model,adress,owner,state) VALUES ( ? , ? , ? , ?)",
          [newLamp.model, newLamp.adress, newLamp.owner, newLamp.defaultState],
          (err, result, fields) => {}
        )
      )
      .catch((e) => console.log(e))
  },

  setLampState(adress, state) {
    return mySqlConnection
      .then((connection) =>
        connection.execute(
          "UPDATE lamps SET state=? WHERE adress=?",
          [state, adress],
          (err, result, fields) => {
            console.log(fields)
          }
        )
      )
      .then((result) => console.log(result))
      .catch((e) => console.log(e))
  },
}

module.exports = { database }
