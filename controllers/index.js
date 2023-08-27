require('dotenv').config();
const nodemailer = require('nodemailer');
const mustache = require('mustache');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function templateDir(template) {
    return new Promise((resolve, reject) => {
        fs.readFile(`./templates/${template}.html`, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

module.exports = {
    sendEmail: async (req, res) => {
        try {
            const { to, subject, template, data } = req.body;
            const html = await templateDir(template);
            const output = mustache.render(html, data);
            const mailOptions = {
                from: process.env.SMTP_USER,
                to: to,
                subject: subject,
                html: output,
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return res.status(400).json({
                        status: "error",
                        message: "Email failed to send",
                        data: err.message
                    });
                }
                return res.status(200).json({
                    status: "success",
                    message: "Email successfully sent",
                    data: info
                });
            }
            );

        }
        catch (err) {
            return res.status(400).json({
                status: "error",
                message: "Email failed to send",
                data: err.message
            });
        }
    }
};