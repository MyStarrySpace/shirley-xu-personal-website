// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require("nodemailer");
require('dotenv').config();

type Data = {
  name: string
  email: string
  phonenumber: string
  company: string
  message: string
}

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error: Error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
  contactEmail.sendMail(mail, (error: Error) => {
    if (error) {
      return res.status(400).json({ status: "ERROR" })
    } else {
      return res.status(200).json({ status: "Message Sent" })
    }
  });
}
