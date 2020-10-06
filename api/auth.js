const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const database = require('./database')

const signIn = (req, res) => {
    const {name, password } = req.body

    database.getUserByName(name).then((user)=>{
        const isValid = bcrypt.compareSync(password,user.password)

    console.log( password,user.password)
    }
    )
}

module.exports = { signIn}