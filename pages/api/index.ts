const nodemailer = require("nodemailer");

import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

const { firstName, lastName, email, message } = JSON.parse(req.body);

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: "myEmail@gmail.com",
        pass: "password",
    },
    secure: true,
});

await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: Error, success: any) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

const mailData = {
    from: {
        name: `${firstName} ${lastName}`,
        address: "myEmail@gmail.com",
    },
    replyTo: email,
    to: "recipient@gmail.com",
    subject: `form message`,
    text: message,
    html: `${message}`,
};

await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err: Error, info: any) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

res.status(200).json({ status: "OK" });
};