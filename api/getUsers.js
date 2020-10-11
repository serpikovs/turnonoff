const {database} = require("./database")

const getUsers = (req,res) => {
    database.getUsers()
    .then((users)=>res.status(200).json({users}))    
}

module.exports = { getUsers }