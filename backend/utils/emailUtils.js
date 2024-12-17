const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = async (to, subject, htmlContent) => {
  try {
    await transporter.sendMail({
      from: `"Lost & Found" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
};
