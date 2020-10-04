const express = require('express')
const path = require('path')
const mysql = require('mysql2')
const database = require('./api/database')

const app = express()

app.use(express.json({ extended: true }))
app.use('/', express.static(path.join(__dirname, 'client', 'build')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const db = new database()
console.log(db.getUsers())


app.listen(80)