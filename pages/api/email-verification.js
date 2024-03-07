// pages/api/email-verification.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "send.one.com", // Use the SMTP server provided
  port: 465, // Use the SMTP port provided
  secure: true, // Use secure connection
  auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.PASSWORD, // Your email password
  },
});

export default async (req, res) => {
  try {
    const { email } = req.body; // Assuming the request body contains the email
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Send verification email
    const verificationCode = Math.floor(1000 + Math.random() * 9000); // Generate a random verification code
    const mailOptions = {
      from: "contact@b-circles.co", // Your email address
      to: email,
      subject: 'Email Verification',
      text: `Your verification code is: ${verificationCode}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending verification email:', error);
        return res.status(500).json({ error: 'Failed to send verification email' });
      }

      // Return success response with verification code
      res.status(200).json({ message: 'Verification email sent successfully', verificationCode });
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
