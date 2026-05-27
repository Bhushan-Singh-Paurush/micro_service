import { createTransport } from "nodemailer";

export const sendMail = async (subject, email, body) => {
  const transporter = createTransport({
    host: process.env.HOST,
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    await transporter.sendMail({
      to: email,
      from: "Motion Tech",
      html: body,
      subject: subject,
    });
  } catch (error) {
    throw error;
  }
};
