const express = require("express")
const notificationRouter = require("./src/routes/notificationRoute")
require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.use("/api", notificationRouter)


app.listen(PORT, () => {
    console.log(`⚡ Server is running at http://localhost:${PORT}`)
})