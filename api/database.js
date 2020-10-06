const mysql = require("mysql2")
const secret = require("../secret")

const mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "lamponoff",
  password: secret.mySqlPassword,
})

class Database {
  constructor() {}

  static getUsers() {
    return this.runQuery("SELECT * FROM users")
  }

  static getUserByName(name) {
      
    return this.runQuery("SELECT * FROM users WHERE name='" + name + "'").then(
      (result) => {
        return {
          id: result[0].id,
          name: result[0].name,
          password: result[0].password,
        }
      }
    )
  }

  static runQuery(query) {
    return new Promise((resolve, reject) => {
      mySqlConnection.query(query, (err, results, fields) => {
        if (!err) resolve(results)
        else reject(err)
      })
    })
  }
}

module.exports = Database
