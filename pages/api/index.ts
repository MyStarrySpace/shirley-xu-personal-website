// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  status: string
}

const nodemailer = require("nodemailer");
require('dotenv').config();

export default async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {

const { firstName, lastName, email, message } = JSON.parse(req.body);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  }
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
    transporter.sendMail(mailData, (error: Error, info: any) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
          console.log(info);
          resolve(info);
      }
    });
});

res.status(200).json({ status: "OK" });
};


export const config = {
  api: {
    externalResolver: true,
  },
}