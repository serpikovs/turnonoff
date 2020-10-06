const express = require("express")
const path = require("path")
const database = require("./api/database")
const {signIn} = require("./api/auth")

const app = express()

app.use(express.json({ extended: true }))
app.use("/", express.static(path.join(__dirname, "client", "build")))
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app
  .route("/getUsers")
  .get((req, res) => {})
  .post((req, res) => {})

app
  .route("/getLampModels")
  .get((req, res) => {})
  .post((req, res) => {})

app
  .route("/addLamp")
  .get((req, res) => {})
  .post((req, res) => {})

app
  .route("/onLamp")
  .get((req, res) => {})
  .post((req, res) => {})

app
  .route("/offLamp")
  .get((req, res) => {})
  .post((req, res) => {})

  app
  .route("/auth")
  .get((req, res) => {})
  .post(signIn)


app.listen(80)
