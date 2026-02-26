const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({ name, email, phone, program, message }) => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set");
  }

  await resend.emails.send({
    from: "onboarding@resend.dev", // default allowed sender
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission - ${name || "No Name"}`,
    text: `
Name: ${name || "N/A"}
Email: ${email}
Phone: ${phone}
Program: ${program || "N/A"}
Message: ${message || "N/A"}
    `,
  });
};

module.exports = {
  sendContactEmail,
};