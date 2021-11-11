const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, object, message } = req.body;
    try {
        const output = `
        <p>Someone has sent you a message via your portfolio</p>
            <h3>Details</h3>
            <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            </ul>
            <h2>${object}</h2>
            <h3>Message</h3>
            <p>${message}</p>
            `;
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            service: 'hotmail',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAILPASSWORD,
            },
            tls: {
                //ciphers: "SSLv3",
                rejectUnauthorized: false,
            },
        });
        console.log('create transport done');
        let info = await transporter.sendMail({
            from: '"Houssemeddine Salem" <houssem.salem@outlook.com>', // sender address
            to: 'salemhoussemeddine@gmail.com', // list of receivers
            subject: 'Message via your portfolio', // Subject line
            text: 'email', // plain text body
            html: output, // html body
        });
        res.status(200).json({ response: 'Mail sent' });
        console.log('Hello');
    } catch (err) {
        res.status(400).json({ response: 'Mail was not delivered' });
        console.error(err);
    }
});

module.exports = router;
