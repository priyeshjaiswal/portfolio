import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message, phone } = req.body;

  if (!name || !email || !subject || !message || !phone) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Configure the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Send mail to yourself
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    });
    // Send confirmation mail to the user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Priyesh Jaiswal',
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nBest regards,\nPriyesh Jaiswal`,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
} 