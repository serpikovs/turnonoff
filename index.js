const express = require("express")
const path = require("path")
const {database} = require("./api/database")
const {getLampModels} = require("./api/getLampModels")
const {getUsers} = require("./api/getUsers")
const {addLamp} = require("./api/addLamp")
const {login} = require("./api/login")
const authMiddleware = require("./api/auth")
const {getLampsList} = require("./api/getLampsList")
const {setLampState} = require("./api/setLampState")

const app = express()

app.use(express.json({ extended: true }))
app.use("/", express.static(path.join(__dirname, "client", "build")))
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app
  .route("/getUsers")
  .get((req, res) => {})
  .post(authMiddleware,getUsers)

  app
  .route("/getLampModels")
  .get((req, res) => {})
  .post(authMiddleware,getLampModels)

app
.route("/getLampsList")
.get((req, res) => {})
.post(authMiddleware,getLampsList)

app
  .route("/addLamp")
  .get((req, res) => {})
  .post(authMiddleware,addLamp)

app
  .route("/setLampState")
  .get((req, res) => {})
  .post(authMiddleware,setLampState)

  app
  .route("/login")
  .get((req, res) => {})
  .post(login)  
  
  app
  .route("/auth")
  .get((req, res) => {})
  .post(authMiddleware, (req,res)=>res.status(200).json("ok!"))


app.listen(80)
