/** @format */

import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  const { name, company, email, phone, message } = req.body;

  //validation regex

  const user = process.env.DB_USER;

  const data = {
    name,
    company,
    email,
    phone,
    message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.DB_PASS,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user,
      to: "info@roserell.se",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Namn: ${name}<p>
        <p>Företag: ${company}<p>
        <p>E-postadress: ${email}<p>
        <p>Telefon: ${phone}<p>
        <p>Meddelande: ${message}<p>
        `,
    });
    return res.status(200).json({ message: "succes" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Could not send the email. Your message was not sent.",
    });
  }
}
