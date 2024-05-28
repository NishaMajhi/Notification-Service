const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, message) => {
    try {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            text: message
        };

        const response = await transporter.sendMail(mailOptions);

        if (response.accepted.length > 0) {
            return true;
        } else {
            console.error("Email rejected:", response.rejected);
            return false;
        }

    } catch (error) {
        console.error("Error while sending email:", error);
        return false;
    }
};

module.exports = sendEmail;
