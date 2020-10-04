class Database {
  constructor() {}

  getUsers() {
    return [
      { id: 1, name: "Пользователь 1" },
      { id: 2, name: "Пользователь 2" },
      { id: 3, name: "Пользователь 3" },
    ]
  }
}


/*
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "lamponoff",
    password: "ServerMySql"
  })

  connection.query("SELECT * FROM users",
  function(err, results, fields) {
    console.log(results); // собственно данные
});
connection.end();
*/

module.exports = Database