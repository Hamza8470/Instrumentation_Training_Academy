const nodemailer = require('nodemailer');

const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  console.log('Creating transporter with user:', user ? 'SET' : 'NOT SET');
  console.log('Password is:', pass ? 'SET' : 'NOT SET');

  if (!user || !pass) {
    throw new Error('EMAIL_USER or EMAIL_PASS is not set');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
};

const sendContactEmail = async ({ name, email, phone, program, message }) => {
  try {
    console.log('Starting email send...');
    const transporter = createTransporter();
    const to = process.env.EMAIL_TO || process.env.EMAIL_USER;

    console.log('Sending email to:', to);

    const subject = `New Contact Form Submission${name ? ` - ${name}` : ''}`;
    const text = [
      `Name: ${name || 'N/A'}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Program: ${program || 'N/A'}`,
      `Message: ${message || 'N/A'}`,
    ].join('\n');

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Email sending failed:', error.message);
    console.error('Full error:', error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
};
