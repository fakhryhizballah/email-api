require('dotenv').config();
const nodemailer = require('nodemailer');
const mustache = require('mustache');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
    }
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
            const { to, from, subject, template, data } = req.body;
            const html = await templateDir(template);
            const output = mustache.render(html, data);
            const mailOptions = {
                from: '"RSUD dr. Abdul Aziz" <rsudaa@singkawangkota.go.id>',
                to: to,
                subject: subject,
                html: output,
            };
            console.log(req.body);
            transporter.sendMail(mailOptions, (err, info) => {
                console.log(err);
                console.log(info);
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
            });
            // return res.status(200).json({
            //     status: "success",
            //     message: "Email successfully sent",
            //     data: mailOptions
            // });

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