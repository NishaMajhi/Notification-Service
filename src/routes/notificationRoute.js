const express = require("express")
const sendNotification = require("../controllers/notificationController")
const notificationRouter = express()

notificationRouter.post("/send-email", sendNotification)

module.exports = notificationRouter