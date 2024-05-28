const sendEmail = require("../services/notificationService")

const sendNotification = async (req, res) => {
    try {
        const { to, subject, message } = req.body

        const response = await sendEmail(to, subject, message)
        if (response === true) {
            return res.status(200).json({ message: "mail send successfully" })
        }
        else {
            return res.status(400).json({ message: "mail can't send successfully" })
        }

    } catch (error) {
        return res.status(400).json({ message: "error while sending email" })
    }
}

module.exports = sendNotification