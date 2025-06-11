import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using your email service (e.g., Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., 'gmail', 'sendgrid', etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email address (set in .env.local)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password (set in .env.local)
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "shivam24august@gmail.com", // Replace with your recipient email (e.g., your business email)
      subject: `New Message Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\Message: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px; color: #333;">
  <h2 style="color: #ff6600; margin-bottom: 24px;">🎉 New Contact Form Submission</h2>

  <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <tbody>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7; width: 40%;">Full Name</td>
        <td style="padding: 14px 16px;">${name}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7;">Phone Number</td>
        <td style="padding: 14px 16px;">${email}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7;">Email</td>
        <td style="padding: 14px 16px;">${message}</td>
      </tr>
    </tbody>
  </table>

  <p style="margin-top: 24px; color: #888; font-size: 14px;">You received this message via your website contact form.</p>
</div>

      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
