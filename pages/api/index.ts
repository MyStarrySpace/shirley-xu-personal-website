// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require("nodemailer");
require('dotenv').config();

type RequestData = {
  name: string,
  email: string,
  phonenumber: string,
  company: string,
  message: string, 
}

type ResponseData = {
  status: string
}

export default async (req:NextApiRequest, res:NextApiResponse<ResponseData>) => {

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    }
  });

  try {
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
  } catch (error) {
    console.log(error)
  }
  

  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const company = req.body.company;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "sternenraum@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phonenumber}</p>
          <p>Company: ${company}</p>
          <p>Message: ${message}</p>`,
  };

  try {
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mail, (err: Error, info: any) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
  } catch (error) {
    console.log("There was an error sending the mail");
  }
  

  res.status(200).json({ status: "OK" });
};